var playlist = ""
var correct = ""
var interval;
var prepage_id = ""
var next_audio = new Audio()
var a = new Audio()
var track_url;
var track_list;
var d_start;
var d_end;
var d_end_init;
var flip
var maxScore = 0
var madeit = 0
var madeit_mult = 0
var original_color;
var animation_interval;
var myApp = new Framework7({
    pushState: true, 
    swipebackPage: true
});
var next_audio_buffer = ""
var username = ""
var userEmail = ""
var play_index = getRandomInt(0,3)
var next_url = ""
var loaded = 0
// Export selectors engine
var $$ = Dom7;
var friendList;



// Some constants initialization
var songarray = ""
var mode = "arcade"
var ithgame = 0
var score = 0
var incorrect_guess = 0
var streak_correct = 0
var singleSongPlayTimeInMs = 10000
var paneltyTimeInMs = 6000
var rewardTimeInMs = 3000
var animationRateInMs = 300
var totalGameTimeInMs = 60000
var maxSongInList = 50
var delayMultipleForCorrectEffect = 2
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


/*************************************
**                                  **
**          Universal shit          **
**                                  **
*************************************/

function onload_function(){
	Parse.initialize("VV7IDop8RNDD1WiJzGeeHMD1SZuh4nGlC7tR1Ffn", "EMXyRtQm0WzmmfoHJPAVv0j0sFdNjJ7R3HMCxBDG");
	request = $.getJSON('https://api.spotify.com/v1/tracks/?ids='+songarray, function(data){
		track_list = shuffleArray(JSON.parse(request.responseText)["tracks"])
		console.log(track_list)
		document.getElementById("mainplay").innerHTML = "Play"
		loaded = 1
	});	
}
function pass_this() {
	console.log("ASDA")
	gameloop()
	clearInterval(interval)
	interval  = setInterval(gameloop, singleSongPlayTimeInMs);
}

function play(input_mode){
	if (loaded == 1){
		if (input_mode == 0){
			mode = "arcade"
		} else if(input_mode == 1) {
			mode = "nk"
		}
		score = 0
		document.getElementById("scoreboard").innerHTML = Math.round(score)
		document.getElementById("gameover_page").style.display = "none"
	    document.getElementById("login_page").style.display = "none"
	    document.getElementById("game_page").style.display = "block"
    	loaddata()	
    	console.log(friendList)
	}

}

function select_choice (choice){
	console.log(mode)
	select = document.getElementById("button"+choice).getElementsByTagName("span")[0].innerHTML
	if (select == correct){
		streak_correct ++
		clearInterval(interval)
		gameloop()
		interval  = setInterval(gameloop, singleSongPlayTimeInMs ); 	
		score = score + streak_correct
		madeit = 1
		console.log(streak_correct)
		document.getElementById("scorebar").style.color = "green"
		document.getElementById("scoreboard").style.color = "#4CD964"
		document.getElementById("scoreboard").innerHTML = Math.round(score)
		
		cur_time = new Date()
		var diff_time = totalGameTimeInMs - (d_end.getTime() - cur_time.getTime())
		console.log(diff_time)
		console.log(rewardTimeInMs * streak_correct)
		var timeToAdd = 0
		if (rewardTimeInMs * streak_correct > diff_time) {
			timeToAdd = diff_time
			d_end = new Date (d_end.getTime() + timeToAdd)
		} else {
			timeToAdd = rewardTimeInMs * streak_correct
			d_end = new Date (d_end.getTime() + timeToAdd)
		}
		
		var plusone = document.createElement('span')
		plusone.innerHTML = " +" +streak_correct
		plusone.className = "fadeaway"
		document.getElementById("scoreboard").appendChild(plusone)
	} else {
		streak_correct = 0
		madeit = 1
		incorrect_guess ++
		if (mode == "arcade"){
			document.getElementById("scorebar").style.color = "red"
			document.getElementById("button"+choice).style.borderColor = "red"
			document.getElementById("button"+choice).style.color = "red"
			d_end = new Date(d_end.getTime() - paneltyTimeInMs * incorrect_guess)			
		} else if (mode == "nk"){
			console.log("here")
			gameover()
		}
		document.getElementById("scoreboard").style.color = "red"
		document.getElementById("scoreboard").innerHTML = Math.round(score)
	}

}

function gameloop(){
	ithgame ++
	incorrect_guess = 0
	// if (!a.paused){
	a.pause()
	a = ""
	for (i_ = 0; i_ < 4; i_++){
		document.getElementById("button"+i_).style.color = "white"
		document.getElementById("button"+i_).style.borderColor = "white"
	}
	this_url = next_url
	// a = document.getElementById("audiosupport")
	// a.src = this_url
	a = next_audio

	 
	// a = Base64Binary.decodeArrayBuffer(next_audio_buffer)
	// a = window.atob(next_audio_buffer)
	console.log(a)
	
	console.log(track_list[fake_number[play_index]]["name"])
	for (j = 0; j < 4 ; j++) {
		document.getElementById("button"+j).innerHTML = ""
		var newSongName = document.createElement('span')
		newSongName.innerHTML = track_list[fake_number[j]]["name"]
		newSongName.className = "fadein"
		document.getElementById("button"+j).appendChild(newSongName)
	}

	// correct st`ores the correct answer of hte song name
	correct = track_list[fake_number[play_index]]["name"]
	fake_number = getFourIndexFromArray()
	play_index = getRandomInt(0,3)
	next_url = track_list[fake_number[play_index]]["preview_url"]+".mp3"
	next_audio = new Audio(next_url)
	next_audio.preload = "auto"
	// next_audio_buffer = window.btoa(next_audio.toString())
	a.play()
	console.log(next_audio_buffer)
}
function goBackToHome(){
	document.getElementById("game_page").style.display = "none"
    document.getElementById("login_page").style.display = "block"
    document.getElementById("gameover_page").style.display = "none"
}
function loaddata() {
	console.log(track_list)
	d_start = new Date()
	d_end = new Date(d_start.getTime() + totalGameTimeInMs)
	fake_number = getFourIndexFromArray()
	play_index = getRandomInt(0,3)

	next_url = track_list[fake_number[play_index]]["preview_url"]+".mp3"
	next_audio = new Audio(next_url)
	next_audio.preload = "auto"
	gameloop()
	interval  = setInterval(gameloop, singleSongPlayTimeInMs);
	animation_interval = setInterval(animation, animationRateInMs);
}
function animation(){
	cur_time = new Date()
	if (cur_time.getTime() > d_end.getTime()){
		gameover()
	}
	else{
		percent = Math.round((d_end.getTime() - cur_time.getTime())/ totalGameTimeInMs * 100)

		if (percent >= 100) {
			percent = 100
		}
		console.log(percent)
		percent = percent.toString()
		document.getElementById("scorebar").style.width = percent+"%"
		if (percent < 30){
			document.getElementById("scorebar").style.color = "red"
		} else {
			document.getElementById("scorebar").style.color = "white"
		}	
	}
	if (madeit == 1) {
		console.log(madeit_mult)
		if (madeit_mult > delayMultipleForCorrectEffect) {
			document.getElementById("scoreboard").innerHTML = Math.round(score)
			document.getElementById("scoreboard").style.color = "white"
			madeit = 0
			madeit_mult = 0
		} else {
			madeit_mult++
		}
	}

}
function gameover(){
	a.pause()
	console.log("done")
	clearInterval(animation_interval)
	clearInterval(interval)
    document.getElementById("game_page").style.display = "none"
    document.getElementById("gameover_page").style.display = "block"
    
    playerScore = score
    var GameScore = Parse.Object.extend("GameScore");
	var gameScore = new GameScore();
	gameScore.save({
	  score: playerScore,
	  playerName: username,
	  playerEmail: userEmail, 
	  gameMode: mode
	}, {
	  success: function(gameScore) {
	  	console.log("success")
	    // The object was saved successfully.
	  },
	  error: function(gameScore, error) {
	    // The save failed.
	    console.log("ehh")
	    // error is a Parse.Error with an error code and message.
	  }
	});
	// var GameScore = Parse.Object.extend("GameScore");
	var query = new Parse.Query(GameScore);
	query.equalTo("playerEmail", userEmail);
	query.find({
		success: function(results) {
			console.log("Successfully retrieved " + results.length + " scores.");
			// Do something with the returned Parse.Object values
			maxScore = score
			if(results.length > 0){
			    for (var i = 0; i < results.length; i++) {
					object = results[i];
					console.log(object.get('score'))
					if (object.get('score') > maxScore){
						maxScore = object.get('score')
					}
			    }
			}
			document.getElementById("scoretitle").innerHTML = "You got " + score +". Max is " + maxScore	    	
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
}
/*************************************
**                                  **
**    General Helper functions      **
**                                  **
*************************************/

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }



  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
		console.log('Successful login for: ' + response.name);
		username = response.name
		userEmail = response.email
    });
    FB.api('/me/friends', function(friend_response) {
    	friendList = friend_response

    });
  }




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function buildSongArrayQuery() {
	request = $.getJSON('http://charts.spotify.com/api/tracks/most_streamed/global/daily/latest?callback=?', function(data){
		// track_list = shuffleArray(JSON.parse(data)["tracks"])
		// console.log(request)
		console.log(data)
		// var array = JSON.parse(playlist)
		for(i = 0; i < 50; i++){
			track_url = data["tracks"][i]["track_url"]
			track_id = track_url.split("https://play.spotify.com/track/")
			console.log(track_id[1])
			songarray += track_id[1]
			if (i < 49){
				songarray += ','
			}
		}
		console.log(songarray)
		onload_function()	
	});	
}

function getFourIndexFromArray (){
	// generate wrong answers
	var targetArray = new Array()
	var fake_number0 = getRandomInt(0,49);
	targetArray.push(fake_number0)
	var fake_number1 = getRandomInt(0,49);
	while (fake_number0 == fake_number1) {
		fake_number1 = getRandomInt(0,49);
	}
	targetArray.push(fake_number1)
	var fake_number2 = getRandomInt(0,49)
	while (fake_number2 == fake_number1 || fake_number2 == fake_number0) {
		fake_number2 = getRandomInt(0,49);
	}
	targetArray.push(fake_number2)
	var fake_number3 = getRandomInt(0,49)
	while (fake_number3 == fake_number2 || fake_number3 == fake_number1 || fake_number1 == fake_number0) {
		fake_number3 = getRandomInt(0,49)
	}
	targetArray.push(fake_number3)
	return targetArray
}




// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

