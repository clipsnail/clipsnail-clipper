/*global chrome*/

//Hook up the clipper loading to the button
chrome.browserAction.onClicked.addListener(function callback(tab){
  //TODO: The clipper needs to somehow be unloaded when
  //clicking the button again
  chrome.tabs.executeScript(null, {file: "clipper.js"});
});
