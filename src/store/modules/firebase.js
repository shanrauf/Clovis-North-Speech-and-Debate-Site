import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import router from '@/router';

const config = {
  apiKey: 'AIzaSyCVF58PkyMkR-PiBRTnDMbW5UEXDKUBUTY',
  authDomain: 'scanin-5b9bf.firebaseapp.com',
  databaseURL: 'https://scanin-5b9bf.firebaseio.com',
  projectId: 'scanin-5b9bf',
  storageBucket: 'scanin-5b9bf.appspot.com',
  messagingSenderId: '685372796493',
  appId: '1:685372796493:web:946dbbb30eff2ee0'
};

firebase.initializeApp(config);

const database = firebase.database();

const state = () => {
  return {
    user: null,
    snackbarEnabled: false,
    snackbarColor: '',
    snackbarMessage: '',
    lastSeenUpdate: null,
    updatesOverlay: false,
    updates: []
  };
};

const getters = {
  checkAuth: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else if (!user) {
          resolve(false);
        } else {
          reject('Error');
        }
      });
    });
  },
  getUpdatesOverlay: state => state.updatesOverlay,
  getLastSeenUpdate: state => state.lastSeenUpdate,
  getUpdates: state => state.updates,
  getUser: state => state.user,
  snackbarColor: state => state.snackbarColor,
  snackbarMessage: state => state.snackbarMessage,
  isSnackbarEnabled: state => state.snackbarEnabled
};

const actions = {
  async createUpdates({ commit }, uid) {
    await database
      .ref('/updates/' + uid)
      .once('value')
      .then(snap => {
        commit('setUpdates', snap.val());
      });
  },
  sendToLogin({ commit }) {
    router.push('login');
    commit({
      type: 'setSnackbar',
      color: 'error',
      message: 'You need to sign in to continue',
      enabled: true
    });
  },
  async googleAuth({ dispatch }) {
    let provider = new firebase.auth.GoogleAuthProvider();
    return await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        return await firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            dispatch('createUser', result.user);
            dispatch('sendToDashboard');
          });
      });
  },
  async createAccount({ dispatch }, formData) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(result => {
        dispatch('createUser', result.user);
        dispatch('sendToDashboard');
      })
      .catch(error => {
        alert(error.message);
      });
  },
  createUser({ commit }, userInfo) {
    let { displayName, email, uid } = userInfo;
    let user = { displayName, email, uid };
    commit('setUser', user);
  },
  sendToDashboard({ commit }) {
    router.push('dashboard');
    commit({
      type: 'setSnackbar',
      color: 'success',
      message: 'Successfully logged in!',
      enabled: true
    });
  },
  async login({ dispatch }, formData) {
    if (formData.rememberAuth) {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password);
        })
        .then(result => {
          dispatch('createUser', result.user);
          dispatch('sendToDashboard');
        })
        .catch(error => {
          alert(error.message);
        });
    } else {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password);
        })
        .then(result => {
          dispatch('createUser', result.user);
          dispatch('sendToDashboard');
        })
        .catch(error => {
          alert(error.message);
        });
    }
  },
  async logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        router.push('login');
        commit({
          type: 'setSnackbar',
          color: 'info',
          message: 'Successfully logged out',
          enabled: true
        });
      })
      .catch(error => {
        alert(error.message);
      });
  },
  async onCreateUpdate({ commit, state }, payload) {
    let now = Date.now();
    await firebase
      .database()
      .ref('updates/' + state.user.uid + '/' + now)
      .set(
        {
          title: payload.title,
          text: payload.text,
          type: payload.updateType
        },
        error => {
          if (error) {
            commit({
              type: 'setSnackbar',
              color: 'error',
              message: 'There was an error...',
              enabled: true
            });
          } else {
            commit({
              type: 'updateLocalUpdates',
              title: payload.title,
              text: payload.text,
              updateType: payload.updateType,
              now: now
            });
            commit({
              type: 'setSnackbar',
              color: 'success',
              message: 'Successfully created an update!',
              enabled: true
            });
          }
        }
      );
  },
  async createLastSeenUpdate({ dispatch, commit, state }, uid) {
    await database
      .ref('lastSeenUpdate/' + uid)
      .once('value')
      .then(snap => {
        let lastSeenUpdate = snap.val();
        let showOverlay =
          parseInt(lastSeenUpdate) <
          parseInt(state.updates[state.updates.length - 1].key);
        if (!lastSeenUpdate || showOverlay) {
          commit('setUpdatesOverlay', true);
          dispatch('updateLastSeenUpdate');
        }
      });
  },
  async updateLastSeenUpdate({ commit, state }) {
    let now = Date.now();
    await firebase
      .database()
      .ref('lastSeenUpdate/' + state.user.uid)
      .set(now, error => {
        if (error) {
          console.error(error);
        } else {
          commit('updateLocalLastSeenUpdate', now);
        }
      });
  }
};

const mutations = {
  setUpdatesOverlay(state, overlayStatus) {
    state.updatesOverlay = overlayStatus;
  },
  updateLocalLastSeenUpdate(state, timestamp) {
    state.user.lastSeenUpdate = timestamp;
  },
  updateLocalUpdates(state, payload) {
    state.updates.push({
      key: payload.now,
      value: {
        title: payload.title,
        text: payload.text,
        type: payload.updateType
      }
    });
  },
  setUpdates(state, updates) {
    if (!updates) {
      state.updates = [];
    } else {
      let updatesArray = Object.keys(updates).map(key => ({
        key: key,
        value: updates[key]
      }));
      state.updates = updatesArray.reverse();
    }
  },
  setUser(state, user) {
    state.user = user;
  },
  disableSnackbar(state) {
    state.snackbarEnabled = false;
  },
  setSnackbar(state, snackbar) {
    state.snackbarColor = snackbar.color;
    state.snackbarMessage = snackbar.message;
    state.snackbarEnabled = snackbar.enabled;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
