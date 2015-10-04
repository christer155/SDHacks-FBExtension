// Parse.initialize("Z3nuFrbx6y0SePEppNU6hx0tw3OrnkF7jPT6qgrD", "OKCMZeIYJjH4wf0UYmGZjdCOFqWykIIksNFmtpeg");
console.log("Extension running");


// window.onload = function () { 

var url = window.location.href;
var pathname=(window.location.pathname);

var urlSplit = pathname.split('/');
urlSplit = urlSplit.filter(Boolean);
var eventId = urlSplit[urlSplit.length-1];
console.log("event id is " + eventId);
console.log("location of history is " + window.location.href.indexOf('history'));

if (window.location.href.indexOf('history') > 0) {		
	console.log('in location if');
	setTimeout(function() {
		console.log('in prof id');
		var profile = $('._s0._2dpc._rw.img').attr('id');
		if (profile == undefined ) {
			console.log(profile);
			console.log(window.location.href);
			console.log(window.location);

		}
		else {
			var profileId = profile.split('_');
			profileId = profileId[profileId.length-1];
			console.log("profile id is " + profileId);
		}
	}, 1000);
}
else {
	var profile = $('._s0._2dpc._rw.img').attr('id');
	var profileId = profile.split('_');
	profileId = profileId[profileId.length-1];
	console.log("profile id is " + profileId);
}

function Person(name, photo, fbURL, likes) {
	this.name = name;
	this.photo = photo;
	this.fbURL = fbURL;
	this.likes = likes;
}

function addPeople() {
	var textLikes = {
		likes: [
		{ "name": "cats", "url": "google.com" },
		{ "name": "dogs", "url": "facebook.com" }
		]
	};
	// var obj = JSON.parse(textLikes);
	console.log(textLikes);
	var Christina = new Person("Christina", 'http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif', 'https://www.facebook.com/christina.zhu', textLikes);

	console.log(Christina);

	document.getElementById('event_guest_list').insertAdjacentHTML('afterEnd', '<div class="_4-u3 pam" style="background:white;"><a href="' + Christina.fbURL + '"><img src="' + Christina.photo + '"></a></div><br>');

}
addPeople();


// }


//
// }
// });
// });
