var teamMainContent;

window.onload = function () {
	contentDiv = document.getElementById('teamMainContent');
	createPlayerCard();
	parsePlayerJSON();
}

//-------------------Update PlayerJSON url when publishing -------------------
function parsePlayerJSON() {
	var players;
	var url1 = "https://anantvijaysingh.github.io/sfcv2/content/players.json";
	var request = new XMLHttpRequest();
	request.open("GET", url1);
	request.onload = function () {
		if (request.status == 200) {
			console.log(request.responseText);
			players = JSON.parse(request.responseText);

			for (var i = 0; i < players.length; i++) {
				createPlayerCard(players[i]);
			}
		}
	};
	request.send(null);
}


function createPlayerCard(playerObject) {
	var outerDiv = document.createElement('div');
	var photoDiv = document.createElement('div');
	var discriptionDiv = document.createElement('div');
	var playerNameH2 = document.createElement('h2');
	var buttonDiv = document.createElement('div');
	var popupButton = document.createElement('a');

	outerDiv.setAttribute('class','player-card mdl-card');
	photoDiv.setAttribute('class','mdl-card__title mdl-card--expand');
	photoDiv.setAttribute('style','background-image: url(../images/club/anantvijay.jpg)');
	playerNameH2.setAttribute('class','mdl-card__title-text');
	discriptionDiv.setAttribute('class','mdl-card__supporting-text');
	popupButton.setAttribute('class','mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect');
	buttonDiv.setAttribute('class','mdl-card__actions mdl-card--border');

	popupButton.innerHTML = 'Read Bio';
	playerNameH2.innerHTML = playerObject.firstName;
	discriptionDiv.innerHTML = playerObject.position + ' with ' + playerObject.stats.goals + 'Goals and ' + 
								playerObject.stats.assists + ' Assists in ' + playerObject.stats.appearences 
								+ ' appearcnes for the club.';

	buttonDiv.appendChild(popupButton);
	photoDiv.appendChild(playerNameH2);
	outerDiv.appendChild(photoDiv);
	outerDiv.appendChild(discriptionDiv);
	outerDiv.appendChild(buttonDiv);
	contentDiv.appendChild(outerDiv);
}