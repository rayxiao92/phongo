var playlist = ""
var correct = ""
var interval;
var prepage_id = ""
var next_audio = new Audio()
var beep_audio = new Audio("beep-28.wav")
var a = new Audio()
var track_url;
var track_list;
var d_start;
var d_end;
var d_end_init;
var flip
var unit_d_start 
var unit_d_end 
var maxScore = 0
var madeit = 0
var madeit_mult = 0
var original_color;
var animation_interval;
var myApp = new Framework7({
    pushState: true, 
    swipebackPage: true
});

var mySlider2 = myApp.slider('.slider-2', {
  pagination:'.slider-2 .slider-pagination',
  spaceBetween: 30,
  slidesPerView: 3
});

var next_audio_buffer = ""
var username = ""
var userEmail = ""
var play_index = getRandomInt(0,3)
var next_url = ""
var loaded = 0
var song_you_played_array = new Array();
var gameEndAnimation
var toprec_index = 0
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
var singleSongPlayTimeInMs = 30000
var paneltyTimeInMs = 0
var rewardTimeInMs = 0
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
function login(){
// http://rayxiao92.github.io/phongo/musicquiz#access_token=BQAxugJMVVtL2kKtle4v8RF-39hgRS47_9-BNGTuqcc4wzuOwyX6g_aZm3KPnUYXsDQ2AWQMOWCxOdQ7Ou_CMZK_G_QJBZU90qRTes0Mmeri85X8P9eVOOpW4X0QgQneRbZoE6sIRwN7BCp0xyey8GML-_toxHwFz3n7vi8&token_type=Bearer&expires_in=3600&state=123
	console.log("login is here")
	// window.location.replace('https://accounts.spotify.com/us/authorize?client_id=387eed5965554d30a5050e8a46a36133&redirect_uri=http:%2F%2Frayxiao92.github.com%2Fphongo%2Fmusicquiz&scope=user-read-private%20user-read-email&response_type=token&state=123');
	$.ajax({
   url: 'https://api.spotify.com/v1/users/spotify/playlists/0186RkeoJsHWEQy0ssDAus/tracks',
   headers: {
       'Authorization': 'Bearer ' + 'BQAcGPBrXvnXm9nDH6RXJnkr96NCXnJx9dsIRqL_UGH0vqM3Biv87NNR_6PHuMSSuuqTwHzTd06mw9gLMwkq0ICMEPwBeLsiJQShF5iVU8nGjVRn_RKGwGnq3iS8c3OSOb90P5xY-LcJBfl_ecyC3_6Vi_6jyduzi5BrsiI'
   },
   success: function(response) {
       console.log(response)
   }
});
	// $.getJSON( "https://accounts.spotify.com/us/authorize?client_id=387eed5965554d30a5050e8a46a36133&redirect_uri=http:%2F%2Frayxiao92.github.com%2Fphongo%2Fmusicquiz&scope=user-read-private%20user-read-email&response_type=token&state=123", function( data ) {
	//   // $( ".result" ).html( data );
	//   console.log(data);
	//   alert( "Load was performed." );
	// });
}

function genGame(artistName, ratio) { 
	ratio = 0.2
	track_list = []
	// artistName = "莫文蔚"
	request = $.getJSON('https://itunes.apple.com/search?term='+ artistName +'&entityTrack=music&callback=?', function(data){
		console.log(data.results)

		// Get Appointed Artist's track
		musicTrackFromMainArtist = data.results
		console.log(musicTrackFromMainArtist)
		track_list = track_list.concat(musicTrackFromMainArtist)
		// Get related Artist's name
		// get appointed artist's id from echonest
		request = $.getJSON('http://developer.echonest.com/api/v4/artist/search?api_key=J8CEMYYSDCWPWAAMD&format=json&name=' + artistName +'&results=10', function(data){
			mainArtistId = data.response.artists[0]["id"]
			mainArtistName = data.response["name"]
			request = $.getJSON('http://developer.echonest.com/api/v4/artist/similar?api_key=J8CEMYYSDCWPWAAMD&id=' + mainArtistId + '&format=json&results=10&start=0', function(data) {
				relatedArtists = data.response.artists
				relatedArtists = shuffleArray(relatedArtists)
				for (i = 0; i < ratio * 10; i++){
					request = $.getJSON('https://itunes.apple.com/search?term=' + relatedArtists[i]["name"] +'&entityTrack=music&callback=?', function(data) {
						console.log(data.results)
						track_list = track_list.concat(data.results)
						if (i == ratio * 10){
							console.log(track_list)
							score = 0
							document.getElementById("scoreboard").innerHTML = Math.round(score)
							document.getElementById("gameover_page").style.display = "none"
							document.getElementById("login_page").style.display = "none"
							document.getElementById("game_page").style.display = "block"
							loaddata()
						}
					});
				}
				// musicTrackFromMainArtist = 
				// musicTrackFromRelatedArtist = 
			});


		});
	});
}
function recursiveRecommendListUpdate(artistsArray, htmlText){
	if(artistsArray.length == 0){
		console.log(htmlText)
		document.getElementById("sliderRecommend").innerHTML = htmlText
		return htmlText;
	}
	request = $.getJSON('https://itunes.apple.com/search?term=' + artistsArray[0] + '&entity=musicTrack&callback=?' , function(data){
		var recommendListHTMLTextSingle = '<div class="slider-slide slider-slide-active" style="margin-right: 30px; width: calc((100% - 60px) / 3);"  onclick = "genGame(\''+artistsArray[0]+'\')">'+
                     '<img class= "slider-slide-img" width=60 height=60 src="'+ data.results[0]["artworkUrl60"] + '">'+
                     '<div class="slider-slide-title">'+
                      '<span class= "slider-slide-title-text">' + artistsArray[0] + '</span>'+
                     '</div>'+
                   '</div>'
        htmlText += recommendListHTMLTextSingle
        console.log(artistsArray)
        artistsArray.shift()

        return recursiveRecommendListUpdate(artistsArray, htmlText)
        // recommendListHTMLText += recommendListHTMLTextSingle
        // console.log(recommendListHTMLText)
	});
}
function onload_function(){
	Parse.initialize("VV7IDop8RNDD1WiJzGeeHMD1SZuh4nGlC7tR1Ffn", "EMXyRtQm0WzmmfoHJPAVv0j0sFdNjJ7R3HMCxBDG");
	// request = $.getJSON('https://api.spotify.com/v1/tracks/?ids='+songarray, function(data){
	// 	track_list = shuffleArray(JSON.parse(request.responseText)["tracks"])
	// 	console.log(track_list)
	// 	document.getElementById("mainplay").innerHTML = "Play"
	// 	loaded = 1
	// });
	
	artistsArray = ["王力宏", "周杰伦", "莫文蔚", "john legend", "五月天"]
	recommendListHTMLText = ""
	recommendListHTMLText = recursiveRecommendListUpdate(artistsArray, recommendListHTMLText)

}
function pass_this() {
	console.log("ASDA")
	gameloop()
	clearInterval(interval)
	interval  = setInterval(gameloop, singleSongPlayTimeInMs);
}

function play(input_mode){
	if (loaded == 1){
		beep_audio.play()
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
    	// console.log(friendList)
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
	unit_d_start = new Date()
	unit_d_end = new Date(unit_d_start.getTime() + singleSongPlayTimeInMs)
	// puase previous music stream
	a.pause()
	a = ""
	// reset the button
	for (i_ = 0; i_ < 4; i_++){
		document.getElementById("button"+i_).style.color = "white"
		document.getElementById("button"+i_).style.borderColor = "white"
	}


	// Build new music source
	this_url = next_url
	a = next_audio

	// Animate new choices
	for (j = 0; j < 4 ; j++) {
		document.getElementById("button"+j).innerHTML = ""
		var newSongName = document.createElement('span')
		newSongName.innerHTML = track_list[fake_number[j]]["trackName"]
		newSongName.className = "fadein"
		document.getElementById("button"+j).appendChild(newSongName)
	}

	// "correct" stores the correct answer of hte song name
	correct = track_list[fake_number[play_index]]["trackName"]
	document.getElementById("play-artwork-img").src = track_list[fake_number[play_index]]["artworkUrl100"]
	song_you_played_array.push(track_list[fake_number[play_index]])
	console.log(song_you_played_array)
	// Generate the song and choices for the next episode
	fake_number = getFourIndexFromArray()
	play_index = getRandomInt(0,3)
	next_url = track_list[fake_number[play_index]]["previewUrl"]
	next_audio = new Audio(next_url)
	next_audio.preload = "auto"

	// Play this in the end
	a.play()
}
// function gameloop(){
// 	ithgame ++
// 	incorrect_guess = 0
// 	unit_d_start = new Date()
// 	unit_d_end = new Date(unit_d_start.getTime() + singleSongPlayTimeInMs)
// 	// puase previous music stream
// 	a.pause()
// 	a = ""
// 	// reset the button
// 	for (i_ = 0; i_ < 4; i_++){
// 		document.getElementById("button"+i_).style.color = "white"
// 		document.getElementById("button"+i_).style.borderColor = "white"
// 	}


// 	// Build new music source
// 	this_url = next_url
// 	a = next_audio

// 	// Animate new choices
// 	for (j = 0; j < 4 ; j++) {
// 		document.getElementById("button"+j).innerHTML = ""
// 		var newSongName = document.createElement('span')
// 		newSongName.innerHTML = track_list[fake_number[j]]["name"]
// 		newSongName.className = "fadein"
// 		document.getElementById("button"+j).appendChild(newSongName)
// 	}

// 	// "correct" stores the correct answer of hte song name
// 	correct = track_list[fake_number[play_index]]["name"]
// 	document.getElementById("play-artwork-img").src = track_list[fake_number[play_index]]["album"]["images"][0]["url"]
// 	song_you_played_array.push(track_list[fake_number[play_index]])
// 	console.log(song_you_played_array)
// 	// Generate the song and choices for the next episode
// 	fake_number = getFourIndexFromArray()
// 	play_index = getRandomInt(0,3)
// 	next_url = track_list[fake_number[play_index]]["preview_url"]+".mp3"
// 	next_audio = new Audio(next_url)
// 	next_audio.preload = "auto"

// 	// Play this in the end
// 	a.play()
// }
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
		unit_percent = Math.round((unit_d_end.getTime() - cur_time.getTime())/ singleSongPlayTimeInMs * 100)
		// console.log("unit_percent: "+unit_percent)
		if (percent >= 100) {
			percent = 100
		}
		// console.log(percent)
		percent = percent.toString()
		document.getElementById("scorebar").style.width = percent+"%"
		if (percent < 30){
			document.getElementById("scorebar").style.color = "red"
		} else {
			document.getElementById("scorebar").style.color = "rgba(64,117,4,0.80);"
		}
		document.getElementById("play-artwork-img").setAttribute("style","-webkit-filter:blur(" + unit_percent/10 + "px)")
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
	document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML  = ""
	// for (var i = 0; i < song_you_played_array.length; i++) {
	gameEndAnimation = setInterval(appendNewSongToGameOver, 600)
	
}


function appendNewSongToGameOver(){

    console.log(document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML)
    // document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML 
    var ul_list = '<li class=" bg-trans "> ' +
                        '<div class="swipeout-content bg-trans item-content" id = "recommend' + toprec_index+'"> ' +
                         '<div class="item-media"><img src=" ' + song_you_played_array[toprec_index]["album"]["images"][0]["url"] +'" width="50"></div> ' +
                         '<div class="item-inner"> ' +
                            '<div class="item-title-row"> ' +
                              '<div class="item-title ">' + song_you_played_array[toprec_index]["name"] + '</div> ' +
                              '<div class="item-after"> ' + "button" +'</div> ' +
                            '</div> ' +
                            // '<div class="item-title-row"> ' +
                            '<div class="item-subtitle ">' + song_you_played_array[toprec_index]["artists"][0]["name"] + '</div> ' +
                              // '<div class="item-after">' + song_you_played_array[toprec_index]["fit"] + "%" + '</div> ' +
                            // '</div> ' +
                            // '<div class="item-text">' + song_you_played_array[toprec_index]["album"]["name"] + '</div> ' +
                          '</div> ' +
                        '</div> ' +
                        // '<div class="swipeout-actions-right bg-trans"> ' +
                        //   '<a href="#"  class="action1 bg-red"></a> ' +
                        //   '<a href="#"  class="swipeout-delete swipeout-overswipe nextdish">Nope! </a>' +
                        // '</div> ' +
                        // '<div class="swipeout-actions-left"> ' +
                        //   '<a href="#"  class="action1 bg-green">hmmm</a> ' +
                        // '</div> ' +
                      '</li> '
    document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML += ul_list  
    toprec_index++
    if (toprec_index >= song_you_played_array.length) {
    	clearInterval(gameEndAnimation)
    }

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
	/* This is the old version */
	// request = $.getJSON('http://charts.spotify.com/api/tracks/most_streamed/global/daily/latest?callback=?', function(data){
	// 	// track_list = shuffleArray(JSON.parse(data)["tracks"])
	// 	// console.log(request)
	// 	console.log(data)
	// 	// var array = JSON.parse(playlist)
	// 	for(i = 0; i < 50; i++){
	// 		track_url = data["tracks"][i]["track_url"]
	// 		track_id = track_url.split("https://play.spotify.com/track/")
	// 		console.log(track_id[1])
	// 		songarray += track_id[1]
	// 		if (i < 49){
	// 			songarray += ','
	// 		}
	// 	}
	// 	console.log(songarray)
	// 	onload_function()	
	// });	
	onload_function()
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

