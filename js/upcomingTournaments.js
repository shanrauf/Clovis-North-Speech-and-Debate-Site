/* Declaring variables for usage with the "More Info" Buttons */
var activeButton = 0; // If variable is 0, "More Info" button hasn't been pressed; if 1, some button has been pressed before
/* Storing every row on tournaments page */
var row1 = document.getElementById("tournamentsRow1");
var row2 = document.getElementById("tournamentsRow2");
var row3 = document.getElementById("tournamentsRow3");
var row4 = document.getElementById("tournamentsRow4");
var row5 = document.getElementById("tournamentsRow5");    
/* Storing every card in the remaining row to use below */
var tourney1 = document.getElementById("tourney1");
var tourney2 = document.getElementById("tourney2");
var tourney3 = document.getElementById("tourney3");
var tourney4 = document.getElementById("tourney4");
/* Stores image for tournament to later adjust aspect ratio */
var tournamentImage = document.getElementById("tournamentImage");
/* Stores results for tournaments */
var results = document.getElementById("results");


/* Each function corresponds to a tournament; they denote which "More Info" button is being pressed for tournamentsMoreInfo() */
function tournament1() {
	row2 = document.getElementById("tournamentsRow2");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney2");
	tourney3 = document.getElementById("tourney3");
	tourney4 = document.getElementById("tourney4");
	tourneyExpand = document.getElementById("tourney1"); // Expans card to parent div
	rowClassRemove = document.getElementById("tournamentsRow1"); // Removes "row" class from specific row to change format
	tournamentImage = document.getElementById("tournamentImage1"); // Resizes image
	results = document.getElementById("results1"); // Displays results
	rowLocation = "#tournamentsRow1"; // When minimizing "More Info," redirects user back to the card
}

function tournament2() {
	row2 = document.getElementById("tournamentsRow2");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney1");
	tourney3 = document.getElementById("tourney3");
	tourney4 = document.getElementById("tourney4");
	tourneyExpand = document.getElementById("tourney2");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage2");
	results = document.getElementById("results2");
	rowLocation = "#tournamentsRow1";
}

function tournament3() {
	row2 = document.getElementById("tournamentsRow2");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney1");
	tourney3 = document.getElementById("tourney2");
	tourney4 = document.getElementById("tourney4");
	tourneyExpand = document.getElementById("tourney3");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage3");
	results = document.getElementById("results3");
	rowLocation = "#tournamentsRow1";
}

function tournament4() {
	row2 = document.getElementById("tournamentsRow2");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney1");
	tourney3 = document.getElementById("tourney2");
	tourney4 = document.getElementById("tourney3");
	tourneyExpand = document.getElementById("tourney4");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage4");
	results = document.getElementById("results4");
	rowLocation = "#tournamentsRow1";
}

function tournament5() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney6");
	tourney3 = document.getElementById("tourney7");
	tourney4 = document.getElementById("tourney8");
	tourneyExpand = document.getElementById("tourney5");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage5");
	results = document.getElementById("results5");
	rowLocation = "#tournamentsRow2";
}

function tournament6() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney5");
	tourney3 = document.getElementById("tourney7");
	tourney4 = document.getElementById("tourney8");
	tourneyExpand = document.getElementById("tourney6");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage6");
	results = document.getElementById("results6");
	rowLocation = "#tournamentsRow2";
}

function tournament7() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney5");
	tourney3 = document.getElementById("tourney6");
	tourney4 = document.getElementById("tourney8");
	tourneyExpand = document.getElementById("tourney7");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage7");
	results = document.getElementById("results7");
	rowLocation = "#tournamentsRow2";
}

function tournament8() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow3");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney5");
	tourney3 = document.getElementById("tourney6");
	tourney4 = document.getElementById("tourney7");
	tourneyExpand = document.getElementById("tourney8");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage8");
	results = document.getElementById("results8");
	rowLocation = "#tournamentsRow2";
}

function tournament9() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney10");
	tourney3 = document.getElementById("tourney11");
	tourney4 = document.getElementById("tourney12");
	tourneyExpand = document.getElementById("tourney9");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage9");
	results = document.getElementById("results9");
	rowLocation = "#tournamentsRow3";
}

function tournament10() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney9");
	tourney3 = document.getElementById("tourney11");
	tourney4 = document.getElementById("tourney12");
	tourneyExpand = document.getElementById("tourney10");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage10");
	results = document.getElementById("results10");
	rowLocation = "#tournamentsRow3";
}

function tournament11() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney9");
	tourney3 = document.getElementById("tourney10");
	tourney4 = document.getElementById("tourney12");
	tourneyExpand = document.getElementById("tourney11");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage11");
	results = document.getElementById("results11");
	rowLocation = "#tournamentsRow3";
}

function tournament12() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow4");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney9");
	tourney3 = document.getElementById("tourney10");
	tourney4 = document.getElementById("tourney11");
	tourneyExpand = document.getElementById("tourney12");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage12");
	results = document.getElementById("results12");
	rowLocation = "#tournamentsRow3";
}

function tournament13() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney14");
	tourney3 = document.getElementById("tourney15");
	tourney4 = document.getElementById("tourney16");
	tourneyExpand = document.getElementById("tourney13");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage13");
	results = document.getElementById("results13");
	rowLocation = "#tournamentsRow4";
}

function tournament14() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney13");
	tourney3 = document.getElementById("tourney15");
	tourney4 = document.getElementById("tourney16");
	tourneyExpand = document.getElementById("tourney14");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage14");
	results = document.getElementById("results14");
	rowLocation = "#tournamentsRow4";
}

function tournament15() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney13");
	tourney3 = document.getElementById("tourney14");
	tourney4 = document.getElementById("tourney16");
	tourneyExpand = document.getElementById("tourney15");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage15");
	results = document.getElementById("results15");
	rowLocation = "#tournamentsRow4";
}

function tournament16() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow5");
	tourney2 = document.getElementById("tourney13");
	tourney3 = document.getElementById("tourney14");
	tourney4 = document.getElementById("tourney15");
	tourneyExpand = document.getElementById("tourney16");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage16");
	results = document.getElementById("results16");
	rowLocation = "#tournamentsRow4";
}

function tournament17() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow4");
	tourney2 = document.getElementById("tourney18");
	tourney3 = document.getElementById("tourney19");
	tourney4 = document.getElementById("tourney20");
	tourneyExpand = document.getElementById("tourney17");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage17");
	results = document.getElementById("results17");
	rowLocation = "#tournamentsRow5";
}

function tournament18() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow4");
	tourney2 = document.getElementById("tourney17");
	tourney3 = document.getElementById("tourney19");
	tourney4 = document.getElementById("tourney20");
	tourneyExpand = document.getElementById("tourney18");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage18");
	results = document.getElementById("results18");
	rowLocation = "#tournamentsRow5";
}

function tournament19() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow4");
	tourney2 = document.getElementById("tourney17");
	tourney3 = document.getElementById("tourney18");
	tourney4 = document.getElementById("tourney20");
	tourneyExpand = document.getElementById("tourney19");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage19");
	results = document.getElementById("results19");
	rowLocation = "#tournamentsRow5";
}

function tournament20() {
	row2 = document.getElementById("tournamentsRow1");
	row3 = document.getElementById("tournamentsRow2");
	row4 = document.getElementById("tournamentsRow3");
	row5 = document.getElementById("tournamentsRow4");
	tourney2 = document.getElementById("tourney17");
	tourney3 = document.getElementById("tourney18");
	tourney4 = document.getElementById("tourney19");
	tourneyExpand = document.getElementById("tourney20");
	rowClassRemove = document.getElementById("tournamentsRow1");
	tournamentImage = document.getElementById("tournamentImage20");
	results = document.getElementById("results20");
	rowLocation = "#tournamentsRow5";
}

/* Tournaments "More Info" Button */
function tournamentsMoreInfo() { 
    
    if (activeButton === 0) { // If no button is toggled
	    
	    activeButton = 1; // When "More Info" is presed again, the else if statement will now run and reset the page

	    /* Hides All But Four Tournaments (all but one row) */
	    row2.style.display = row3.style.display = row4.style.display = row5.style.display = "none";


	    /* Gets Rid of Other 3 Tourneys in the Row */
	    tourney2.style.display = tourney3.style.display = tourney4.style.display = "none";

	    /* Expands card to parent div */
	    tourneyExpand.classList.remove("col-md-4", "col-sm-6", "portfolio-item", "col-lg-3");
	    rowClassRemove.classList.remove("row");
	    
	    /* Adjusts image size to look better in fullscreen, but still be responsive */
	    tournamentImage.style.width = "30%";
	    tournamentImage.style.height = "auto";
	    tournamentImage.style.display = "block";
	    tournamentImage.style.margin = "0 auto";

	    /* Stretches card across the whole screen */
	    tourneyExpand.style.width = "100%";

	    /* Cool transitions */
	    tournamentImage.style.transition = "all 1s";
	    results.style.transition = "all 1s";
	    /* Display Hidden Data (Results, Extra Info) */
	    results.style.display = "block";
	}

	else if (activeButton === 1) {

		activeButton = 0;

		tourneyExpand.classList.add("col-md-4", "col-sm-6", "portfolio-item", "col-lg-3");
		row1.classList.add("row");

		/* Sets every display (previously turned off) to "block" */
		tourney1.style.display = tourney2.style.display = tourney3.style.display = tourney4.style.display = "block";
		row2.style.display = row3.style.display = row4.style.display = row5.style.display = "flex";
		/* Hides the results that previously were displayed */
		results.style.display = "none";

		tournamentImage.style.height = "30%";
		tournamentImage.style.width = "100%";

		window.location = 'tournaments' + rowLocation;
	}

}