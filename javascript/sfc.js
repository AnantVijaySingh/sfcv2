var terms
var contentBox

window.onload = function() {
	terms = document.getElementById('terms');
	contentBox  = document.getElementById('contentBox');

	terms.onclick = handleTermsClick;
}

function handleTermsClick() {

	var outerDiv = document.createElement("div");
	var innerPara = document.createElement("p");

	outerDiv.setAttribute("id","popupMessageId");
	outerDiv.setAttribute("class","popupMessage");

	// innerPara.innerHTML = "Testing Overlay Module"

	// var client = new XMLHttpRequest();
	// client.open('GET', 'content/TandC.txt');
	// client.onreadystatechange = function() {
 //  		alert(client.responseText);
	// }
	// client.send();

	var termsAndConditionsFile = "content/TandC.txt"

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", termsAndConditionsFile, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                innerPara.innerText = allText 
            }
        }
    }
    rawFile.send(null);

	outerDiv.appendChild(innerPara);
	contentBox.appendChild(outerDiv);
}
