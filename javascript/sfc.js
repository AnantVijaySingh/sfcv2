var terms
var contentBox
var playMatchButton
var joinTeamButton

window.onload = function() {
	terms = document.getElementById('terms');
	contentBox  = document.getElementById('contentBox');
	playMatchButton = document.getElementById('playMatch');
	joinTeamButton = document.getElementById('joinTeam');

	terms.onclick = handleTermsClick;
	joinTeamButton.onclick = handleJoinTeamButtonClick;
}

function handleJoinTeamButtonClick() {

	var outerDiv = document.createElement("div");
	var call = document.createElement("a");
	var facebook = document.createElement("a");
	var googleForm = document.createElement("a");
	var cancelButton = document.createElement("button");
	var cancelButtonIcon = document.createElement("i");
	var callImg = document.createElement("img");
	var fbImg = document.createElement("img");
	var gFormImg = document.createElement("img");

	function createPopUp () {

		outerDiv.setAttribute("id","joinTeamPopup");
		outerDiv.setAttribute("class","popupMessage mdl-shadow--2dp");
		call.setAttribute("href","tel: +919871790011");
		facebook.setAttribute("href","https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fmessages%2Ft%2Fuser%3A442830629124075");
		facebook.setAttribute("target","_blank");
		googleForm.setAttribute("href","https://goo.gl/forms/tMiItj1J8U0ckzBK2");
		googleForm.setAttribute("target","_blank");
		fbImg.setAttribute("src","images/logos/Messenger_Icon.png")
		fbImg.setAttribute("class","logos");
		gFormImg.setAttribute("src","images/logos/logo_forms_48px.png")
		gFormImg.setAttribute("class","logos");
		callImg.setAttribute("class","logos");
		callImg.setAttribute("src","images/logos/ic_call_black_48dp.png");
		cancelButton.setAttribute("class","mdl-button mdl-js-button");
		cancelButton.setAttribute("id","cancelButton");
		cancelButton.setAttribute("onclick","handleCancelButtonClick(this.parentElement.id)");
		cancelButtonIcon.setAttribute("class","material-icons");


		cancelButtonIcon.innerHTML = "cancel";

		call.appendChild(callImg);
		facebook.appendChild(fbImg);
		googleForm.appendChild(gFormImg);
		outerDiv.appendChild(call);
		outerDiv.appendChild(facebook);
		outerDiv.appendChild(googleForm);
		cancelButton.appendChild(cancelButtonIcon);
		outerDiv.appendChild(cancelButton);
		contentBox.appendChild(outerDiv);
	};

	createPopUp();

	// ----------------- Mamu Review -------------------------------
	// Code to bring the div in focus
	// event to listen to div going out of focus
	// trigger event handleCancelButtonClick which takes div id and deletes it

}

function focusMethod(elementId) {
	console.log(elementId);
	document.getElementById(elementId).focus();
};

// Test function to work within same-orgin security policies
// add focus property
function handleTermsClick() {

	var outerDiv = document.createElement("div");
	var innerPara = document.createElement("p");
	var cancelButton = document.createElement("button");
	var cancelButtonIcon = document.createElement("i");

	outerDiv.setAttribute("id","popupMessageId");
	outerDiv.setAttribute("class","popupMessage mdl-shadow--2dp");
	cancelButton.setAttribute("class","mdl-button mdl-js-button");
	cancelButton.setAttribute("id","cancelButton");
	cancelButton.setAttribute("onclick","handleCancelButtonClick(this.parentElement.id)");
	cancelButtonIcon.setAttribute("class","material-icons");

	cancelButtonIcon.innerHTML = "cancel";
	innerPara.innerHTML = "Testing UI";

	outerDiv.appendChild(innerPara);
	cancelButton.appendChild(cancelButtonIcon);
	outerDiv.appendChild(cancelButton);
	contentBox.appendChild(outerDiv);
}

function handleCancelButtonClick(divElement) {
	console.log(divElement);
	var deleteDiv = document.getElementById(divElement);
	deleteDiv.parentNode.removeChild(deleteDiv);
}

// -------------------------------Actual function---------------------------------
// function handleTermsClick() {

// 	var outerDiv = document.createElement("div");
// 	var innerPara = document.createElement("p");

// 	outerDiv.setAttribute("id","popupMessageId");
// 	outerDiv.setAttribute("class","popupMessage");

// 	var termsAndConditionsFile = "content/TandC.txt"

//     var textFile = new XMLHttpRequest();
//     textFile.open("GET", termsAndConditionsFile, false);
//     textFile.onreadystatechange = function ()
//     {
//         if(textFile.readyState === 4)
//         {
//             if(textFile.status === 200 || textFile.status == 0)
//             {
//                 var allText = textFile.responseText;
//                 innerPara.innerText = allText 
//             }
//         }
//     }
//     textFile.send(null);

// 	outerDiv.appendChild(innerPara);
// 	contentBox.appendChild(outerDiv);
// }
