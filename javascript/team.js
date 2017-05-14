var teamMainContent;

window.onload = function () {
	contentDiv = document.getElementById('teamMainContent');
	parsePlayerJSON();
	createPlayerCard();
}

//-------------------Update PlayerJSON url when publishing -------------------
function parsePlayerJSON() {
	var url = "https://github.com/AnantVijaySingh/sfcv2/blob/master/content/players.json";
	var request = new XMLHttpRequest();
	request.open("GET", URL);
	request.onload = function() {
		if (request.status == 200) {
			console.log(request.responseText);
		}
	};
	request.sedn(null);
}


function createPlayerCard() {
	var outerDiv = document.createElement('div');
	var photoDiv = document.createElement('div');
	var discriptionDiv = document.createElement('div');
	var playerNameH2 = document.createElement('h2');
	var buttonDiv = document.createElement('div');
	var popupButton = document.createElement('a');

	outerDiv.setAttribute('class','player-card mdl-card');
	photoDiv.setAttribute('class','mdl-card__title mdl-card--expand');
	playerNameH2.setAttribute('class','mdl-card__title-text');
	discriptionDiv.setAttribute('class','mdl-card__supporting-text');
	popupButton.setAttribute('class','mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect');
	buttonDiv.setAttribute('class','mdl-card__actions mdl-card--border');

	popupButton.innerHTML = 'Read Bio';
	playerNameH2.innerHTML = 'Anant Vijay';
	discriptionDiv.innerHTML = 'Midfielder with 5 Goals and 27 Assists in 150 appearcnes for the club.';

	buttonDiv.appendChild(popupButton);
	photoDiv.appendChild(playerNameH2);
	outerDiv.appendChild(photoDiv);
	outerDiv.appendChild(discriptionDiv);
	outerDiv.appendChild(buttonDiv);
	contentDiv.appendChild(outerDiv);


}