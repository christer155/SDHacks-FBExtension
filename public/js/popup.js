// Parse.initialize("Z3nuFrbx6y0SePEppNU6hx0tw3OrnkF7jPT6qgrD", "OKCMZeIYJjH4wf0UYmGZjdCOFqWykIIksNFmtpeg");
console.log("Extension running");


// window.onload = function () { 

	var url = window.location.href;
	console.log(window.location.pathname);

	var urlSplit = url.split('/');
	urlSplit = urlSplit.filter(Boolean);
	var eventId = urlSplit[urlSplit.length-1];
	console.log("event id is " + eventId);
	console.log("location of history is " + window.location.href.indexOf('history'));

	console.log(url);
	if (window.location.href.indexOf('history') > 0) {
		console.log('trying to redirect');
		window.location.href = "https://www.facebook.com/events/" + eventId;
		var profile = $('._s0._2dpc._rw.img').attr('id');
		var profileId = profile.split('_');
		profileId = profileId[profileId.length-1];
		console.log("profile id is " + profileId);
	}

	document.getElementById('event_guest_list').insertAdjacentHTML('afterEnd', 'test test doge test <h2>awoo</h2>');
// }


  //
    // }
  // });
// });
