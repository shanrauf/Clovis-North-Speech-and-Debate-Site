/* Home Page Tournaments Pagination */

function tournamentsPagination1() {
    var page1 = document.getElementById("tournamentsPagination1");
    var page2 = document.getElementById("tournamentsPagination2");
    var page3 = document.getElementById("tournamentsPagination3");
    var page4 = document.getElementById("tournamentsPagination4");
    var page5 = document.getElementById("tournamentsPagination5");

 	page1.style.display = "flex";
 	page2.style.display = "none";
 	page3.style.display = "none";
 	page4.style.display = "none";
 	page5.style.display = "none";   
}
function tournamentsPagination2() {
    var page1 = document.getElementById("tournamentsPagination1");
    var page2 = document.getElementById("tournamentsPagination2");
    var page3 = document.getElementById("tournamentsPagination3");
    var page4 = document.getElementById("tournamentsPagination4");
    var page5 = document.getElementById("tournamentsPagination5");

 	page1.style.display = "none";
 	page2.style.display = "flex";
 	page3.style.display = "none";
 	page4.style.display = "none";
 	page5.style.display = "none";
}

function tournamentsPagination3() {
    var page1 = document.getElementById("tournamentsPagination1");
    var page2 = document.getElementById("tournamentsPagination2");
    var page3 = document.getElementById("tournamentsPagination3");
    var page4 = document.getElementById("tournamentsPagination4");
    var page5 = document.getElementById("tournamentsPagination5");

 	page1.style.display = "none";
 	page2.style.display = "none";
 	page3.style.display = "flex";
 	page4.style.display = "none";
 	page5.style.display = "none";
}

function tournamentsPagination4() {
    var page1 = document.getElementById("tournamentsPagination1");
    var page2 = document.getElementById("tournamentsPagination2");
    var page3 = document.getElementById("tournamentsPagination3");
    var page4 = document.getElementById("tournamentsPagination4");
    var page5 = document.getElementById("tournamentsPagination5");

 	page1.style.display = "none";
 	page2.style.display = "none";
 	page3.style.display = "none";
 	page4.style.display = "flex";
 	page5.style.display = "none";
}

function tournamentsPagination5() {
    var page1 = document.getElementById("tournamentsPagination1");
    var page2 = document.getElementById("tournamentsPagination2");
    var page3 = document.getElementById("tournamentsPagination3");
    var page4 = document.getElementById("tournamentsPagination4");
    var page5 = document.getElementById("tournamentsPagination5");

 	page1.style.display = "none";
 	page2.style.display = "none";
 	page3.style.display = "none";
 	page4.style.display = "none";
 	page5.style.display = "flex";
}

/* Tournaments "More Info" Buttons */

function tournamentsButton1() {
    var row1 = document.getElementById("tournamentsRow1");
    var row2 = document.getElementById("tournamentsRow2");
    var row3 = document.getElementById("tournamentsRow3");
    var row4 = document.getElementById("tournamentsRow4");
    var row5 = document.getElementById("tournamentsRow5");

    var tourney1 = document.getElementById("tourney1");
    var tourney2 = document.getElementById("tourney2");
    var tourney3 = document.getElementById("tourney3");
    var tourney4 = document.getElementById("tourney4");

    /* Hides All But Four Tournaments */
    row2.style.display = "none";
    row3.style.display = "none";
    row4.style.display = "none";
    row5.style.display = "none";
}