// Parse.initialize("Z3nuFrbx6y0SePEppNU6hx0tw3OrnkF7jPT6qgrD", "OKCMZeIYJjH4wf0UYmGZjdCOFqWykIIksNFmtpeg");
console.log("Extension running");


function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0]; // the current open tab

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
    document.getElementById("title").innerHTML = url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

// document.addEventListener('DOMContentLoaded', function() {
//   getCurrentTabUrl(function(url)
//   {

 //  	var fbRgx = /facebook.com\/events/;
 //  	var rgxResults = url.match(fbRgx);

    // if (rgxResults != null) {

        // console.log(url);
        var url = window.location.href;
        var profile = $('._s0._2dpc._rw.img').attr('id');
        var profileId = profile.split('_');
        profileId = profileId[profileId.length-1];
        console.log(profileId);

        var urlSplit = url.split('/');
        urlSplit = urlSplit.filter(Boolean);
        var eventId = urlSplit[urlSplit.length-1];
        console.log(eventId);
  //
    // }
  // });
// });
