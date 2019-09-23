import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import router from '@/router';

const config = {
  apiKey: 'AIzaSyDavKw-jazZEEi60qsesBGLn0eUkSICYAM',
  authDomain: 'clovisnorthforensics-aaeaa.firebaseapp.com',
  databaseURL: 'https://clovisnorthforensics-aaeaa.firebaseio.com',
  projectId: 'clovisnorthforensics-aaeaa',
  storageBucket: 'clovisnorthforensics-aaeaa.appspot.com',
  messagingSenderId: '169091814102',
  appId: '1:169091814102:web:25ce29b64ed9b247d5af77'
};

firebase.initializeApp(config);

const database = firebase.database();
const storageRef = firebase.storage().ref();

const state = () => {
  return {
    user: null,
    snackbarEnabled: false,
    snackbarColor: '',
    snackbarMessage: '',
    lastSeenUpdate: null,
    updatesOverlay: false,
    tournaments: [],
    updates: [],
    images: []
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
  checkItems: state => items => !!state[items],
  getUpdatesOverlay: state => state.updatesOverlay,
  getItems: state => itemsToGet => state[itemsToGet],
  getLastSeenUpdate: state => state.lastSeenUpdate,
  getUpdates: state => state.updates,
  getUser: state => state.user,
  snackbarColor: state => state.snackbarColor,
  snackbarMessage: state => state.snackbarMessage,
  isSnackbarEnabled: state => state.snackbarEnabled
};

const actions = {
  async createUpdates({ commit }) {
    await database
      .ref('/updates')
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
    router.push('admin');
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
  async onCreateUpdate({ commit }, payload) {
    let now = Date.now();
    await database.ref('updates/' + now).set(
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
  async createTournaments({ commit }) {
    await database
      .ref('tournaments/')
      .once('value')
      .then(snap => {
        commit('setTournaments', snap.val());
      });
  },
  async updateLastSeenUpdate({ commit, state }) {
    let now = Date.now();
    await database.ref('lastSeenUpdate/' + state.user.uid).set(now, error => {
      if (error) {
        console.error(error);
      } else {
        commit('updateLocalLastSeenUpdate', now);
      }
    });
  },
  async onUpdateTournament({ commit }, payload) {
    await database.ref('tournaments/' + payload.timestamp).set(
      {
        name: payload.name,
        description: payload.description,
        location: payload.location
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
          if (payload.mode == 'create') {
            commit('addLocalTournament', payload);
          } else if (payload.mode == 'edit') {
            commit('deleteLocalTournament', payload.oldTimestamp);
            commit('addLocalTournament', payload);
          }
          commit({
            type: 'setSnackbar',
            color: 'success',
            message: `Successfully ${payload.mode}ed a tournament!`,
            enabled: true
          });
        }
      }
    );
  },
  async onDeleteTournament({ commit }, item) {
    let ref = database.ref('tournaments/' + item.key);
    await ref
      .remove()
      .then(() => {
        commit('deleteLocalTournament', item.key);
        commit({
          type: 'setSnackbar',
          color: 'success',
          message: 'Successfully deleted ' + item.value.name,
          enabled: true
        });
      })
      .catch(error => {
        console.log(error);
        commit({
          type: 'setSnackbar',
          color: 'error',
          message: 'There was an error...',
          enabled: true
        });
      });
  },
  async uploadImage({ commit }, payload) {
    let metadata = {
      contentType: 'image/jpeg',
      name: `${payload.location}.jpg`
    };
    await storageRef
      .child(`images/${payload.location}.jpg`)
      .put(payload.imageFile, metadata)
      .then(() => {
        commit({
          type: 'setSnackbar',
          color: 'success',
          message: `Successfully uploaded ${payload.imageFile.name}. It might take awhile to see your changes.`,
          enabled: true
        });
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
  setUpdates(state, updates) {
    let updatesArray = Object.keys(updates).map(key => ({
      key: key,
      value: updates[key]
    }));
    state.updates = updatesArray;
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
  addLocalTournament(state, payload) {
    state.tournaments.push({
      key: payload.timestamp,
      value: {
        name: payload.name,
        location: payload.location,
        description: payload.description
      }
    });
  },
  deleteLocalTournament(state, timestamp) {
    let idx = state.tournaments.findIndex(tournament => {
      tournament.key == timestamp;
    });
    state.tournaments.splice(idx, idx + 1);
  },
  setTournaments(state, tournaments) {
    if (!tournaments) {
      state.tournaments = [];
    } else {
      let tournamentsArray = Object.keys(tournaments).map(key => ({
        key: key,
        value: tournaments[key]
      }));
      state.tournaments = tournamentsArray.reverse();
    }
  },
  setImages(state, images) {
    state.images = images;
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
