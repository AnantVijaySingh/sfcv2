var terms
var contentBox
var playMatchButton

window.onload = function() {
	terms = document.getElementById('terms');
	contentBox  = document.getElementById('contentBox');
	playMatchButton = document.getELementById('playMatch');

	terms.onclick = handleTermsClick;
}

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
