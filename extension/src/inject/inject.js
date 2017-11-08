console.log("Hello. This message was sent from scripts/inject.js");
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
document.getElementById("all_commit_comments").setAttribute("class", "penis");
    // var input = document.getElementById("all_commit_comments").getElementsByClassName("form-actions");

    // input[0].setAttribute("class", "penis");
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "Delay Comment";

    // input[0].appendChild(button);
    var element = document.evaluate( '//*[@id="all_commit_comments"]/div[3]/form/div[2]/div[2]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
    if (element != null) {
      element.appendChild(button);
    }

    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL('src/functions/comment.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);



	}
	}, 10);
});