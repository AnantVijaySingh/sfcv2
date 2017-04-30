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

	var termsAndConditionsFile = "content/TandC.txt"

    var textFile = new XMLHttpRequest();
    textFile.open("GET", termsAndConditionsFile, false);
    textFile.onreadystatechange = function ()
    {
        if(textFile.readyState === 4)
        {
            if(textFile.status === 200 || textFile.status == 0)
            {
                var allText = textFile.responseText;
                innerPara.innerText = allText 
            }
        }
    }
    textFile.send(null);

	outerDiv.appendChild(innerPara);
	contentBox.appendChild(outerDiv);
}
