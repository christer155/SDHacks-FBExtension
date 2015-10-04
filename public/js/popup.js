// Parse.initialize("Z3nuFrbx6y0SePEppNU6hx0tw3OrnkF7jPT6qgrD", "OKCMZeIYJjH4wf0UYmGZjdCOFqWykIIksNFmtpeg");
console.log("Extension running");

window.addEventListener("load", function() 
{


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
/*
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
	var Dima = new Person('Dima', 'https://i.imgur.com/0yqToOd.png', 'https://facebook.com/ezhikme', textLikes);
	console.log(Christina);

	var userList = [];
	userList.push(Christina, Dima);

	document.getElementById('event_guest_list').insertAdjacentHTML('afterEnd', '\t<div ng-app id=\"SDH-ext-similar\" data-referrer=\"event_guest_list\">\r\n\t   <div class=\"_4-u2 mbm _4-u8\">\r\n\t   \t<div class=\"_4-u3 phm\"><div class=\"uiHeader uiHeaderTopBorder mbm pbs uiSideHeader uiSideHeader\"><div class=\"clearfix uiHeaderTop\"><div class=\"rfloat _ohf\"><h6 class=\"accessible_elem\">Attendees with similar interests<\/h6><\/div><div><h6 class=\"uiHeaderTitle\" aria-hidden=\"true\">Attendees with similar interests<\/h6><\/div><\/div><\/div><\/div>\r\n\t      \r\n\t      <div class=\"_4-u3 pam\">\r\n\t         <div class=\"_43qm _474_ _43qf\">\r\n\t            <ul class=\"uiList _4cg3 _509- _4ki\" style=\"min-width: 260px;\">\r\n\t               <li class=\"_308m\" ng-repeat=\"x in userList\">\r\n\t               <a data-hover=\"tooltip\" href=\"{{ x.fbURL }}\" id=\"u_0_10\" aria-label=\"{{ x.name }}\"><img class=\"_s0 _rw img\" src=\"{{ x.photo }}\" alt=\"\"><\/a>\r\n\t               <\/li>\r\n\t            <\/ul>\r\n\t         <\/div>\r\n\t   <\/div>\r\n\t<\/div>');

}
addPeople(); */
	var textLikes = {
		likes: [
		{ "name": "cats", "url": "google.com" },
		{ "name": "dogs", "url": "facebook.com" }
		]
	};

	//test array of users
	var userList = 
	{
		"users": 
		[
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},
			{ "name": "Christina", "photo": "http://forums.androidcentral.com/avatars/vb_ac/avatar2066999_1.gif", "fbURL": "https://www.facebook.com/christina.zhu", "likes": textLikes},
			{ "name": "Dima", "photo": "https://pbs.twimg.com/profile_images/378800000510956509/49d82e8f1341fb1e33fe2867cbbf4ae2_400x400.png", "fbURL": "https://facebook.com/ezhikme", "likes": textLikes},

		]
	}

//insertData is the div that is getting inserted in the page
var insertData = '<div id="SDH-ext-similar" data-referrer="event_guest_list">'
			   + '	   <div class="_4-u2 mbm _4-u8">'
			   + '	   	<div class="_4-u3 phm">'
			   + '	   	<div class="uiHeader uiHeaderTopBorder mbm pbs uiSideHeader uiSideHeader">'
			   + '	   	<div class="clearfix uiHeaderTop"><div class="rfloat _ohf">'
			   + '	   	<h6 class="accessible_elem">Attendees with similar interests</h6>'
			   + '	   	</div>'
			   + '	   	<div>'
			   + '	   	<h6 class="uiHeaderTitle" aria-hidden="true">Attendees with similar interests</h6>'
			   + '	   	</div>'
			   + '	   	</div>'
			   + '	   	</div>'
			   + '	   	</div>'
			   + '	    <div class="_4-u3 pam">'
			   + '	         <div class="_43qm _474_ _43qf">'
			   + '	            <ul class="uiList _4cg3 _509- _4ki" style="min-width: 260px;">';

for (var i = 0; i < userList.users.length && i < 10; i++) //for elements in array... but no more than 10
{
	insertData += '<li class="_308m">' + '<a data-hover="tooltip" href="';
	insertData += userList.users[i].fbURL;
	insertData += '" id="u_0_10" aria-label="';
	insertData +=  userList.users[i].name + '">';
	insertData +=  '<img class="_s0 _rw img" src="';
	insertData +=  userList.users[i].photo;
	insertData +=  '" alt=""></a>';
	insertData +=  '</li>';
}

//finish array
insertData += '	            </ul>'
			+ '	         </div>'
			+ '	   </div>'
			+ '	</div>';

//add array to page
document.getElementById('event_guest_list').insertAdjacentHTML('afterEnd', insertData);

/*document.getElementById('event_guest_list').insertAdjacentHTML('afterEnd', '<div id="SDH-ext-similar" data-referrer="event_guest_list">'
+ '	   <div class="_4-u2 mbm _4-u8">'
+ '	   	<div class="_4-u3 phm">'
+ '	   	<div class="uiHeader uiHeaderTopBorder mbm pbs uiSideHeader uiSideHeader">'
+ '	   	<div class="clearfix uiHeaderTop"><div class="rfloat _ohf">'
+ '	   	<h6 class="accessible_elem">Attendees with similar interests</h6>'
+ '	   	</div>'
+ '	   	<div>'
+ '	   	<h6 class="uiHeaderTitle" aria-hidden="true">Attendees with similar interests</h6>'
+ '	   	</div>'
+ '	   	</div>'
+ '	   	</div>'
+ '	   	</div>'
+ '	    <div class="_4-u3 pam">'
+ '	         <div class="_43qm _474_ _43qf">'
+ '	            <ul class="uiList _4cg3 _509- _4ki" style="min-width: 260px;">'
+ '	               <li class="_308m" ng-repeat="users in userList">'
+ '	               <a data-hover="tooltip" href="{{ users.fbURL }}" id="u_0_10" aria-label="{{ users.name }}"><img class="_s0 _rw img" src="{{ users.photo }}" alt=""></a>'
+ '	               </li>'
+ '	            </ul>'
+ '	         </div>'
+ '	   </div>'
+ '	</div>');


  var app = angular.module('SDH-ext', []);

  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');

  angular.bootstrap(html, ['SDH-ext'], []);*/

});

// }


//
// }
// });
// });
