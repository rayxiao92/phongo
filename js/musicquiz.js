var playlist = ""
var correct = ""
var ongoing = false
var epsilon = 0.
var point
var geoX
var geoY
var pC
var rew
var false_option =[]
var playerScore = 0
var queryID = ""
var gameScore
var firstGameScore;
var secondGameScore;
var finalGameScore;
var DifficultyIndex
var firstDiffIndexQuery
var secondDiffIndexQuery
var interval;
var playedAgain = 0
var ratio = 0
var correctPercent = 0
var prepage_id = ""
var next_audio = new Audio()
var audio_buffer = new Array()
var realAudio = new Array()
var beep_audio = new Audio("smw_coin.wav")
beep_audio.load()
var wrong_audio = new Audio ("smw_yoshi_spit.wav")
wrong_audio.load()
var a = new Audio()
var track_url;
var track_list;
var d_start;
var d_end;
var d_end_init;
var flip
var unit_d_start 
var unit_d_end 
var freeze = 0
var maxScore = 0
var madeit = 0
var numCorrectGuess = 0
var madeit_mult = 0
var original_color;
var animation_interval;
var myApp = new Framework7({
    pushState: true, 
    swipebackPage: true
});
var profilePicLink = ""
var mySlider2 = myApp.slider('.slider-2', {
  pagination:'.slider-2 .slider-pagination',
  spaceBetween: 20,
  slidesPerView: 2
});
var seedArtist
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
var globalIndex;
var musicTrackFromRelatedArtist
var musicTrackFromMainArtist

var loadNextTrack
var validNum = 0
var startFlag = false
// Some constants initialization
var songarray = ""
var mode = "arcade"
var ithgame = 0
var score = 0
var incorrect_guess = 0
var streak_correct = 0
var singleSongPlayTimeInMs = 10000
var paneltyTimeInMs = 0
var rewardTimeInMs = 0
var animationRateInMs = 300
var totalGameTimeInMs = 60000
var maxSongInList = 8
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
	console.log("login is here")
}

function search_play(){
	console.log(document.getElementById("searchbox_home").value)
	genGame(document.getElementById("searchbox_home").value)
}
// This function generates a game episode using one artist's name
function genGame(artistName) {
	// UI initilization

	document.getElementById("scoreboard").innerHTML = Math.round(score)
	document.getElementById("gameover_page").style.display = "none"
	document.getElementById("login_page").style.display = "none"

	document.getElementById("loading_page").style.display = "block"

	// if genGame is clicked again after last click, 
	// do not load twice
	if (ongoing == true){
		return
	}

	// Variable initialization
	ongoing = true
	seedArtist = artistName
	// track_list stores the music information in this episode
	track_list = []
	streak_correct = 0
	song_you_played_array = []
	realAudio = []
	audio_buffer = []
	globalIndex = 0
	validNum = 0
	startFlag = false

	DifficultyIndex = Parse.Object.extend("DifficultyIndex");


	// Go to the database and find the arm with best reward
	var query = new Parse.Query(DifficultyIndex);
	query.descending("avgReward");
	query.limit(1)
	query.find({
		success: function(results) {
	    	console.log("Successfully retrieved ratio " + results.length + " scores.");
	    	for (var i = 0; i < results.length; i++) { 
	    		firstDiffIndexQuery = results[i];
	    		ratio = firstDiffIndexQuery.get("difficultyIndex")
	    		ratio = 0
	    		if (Math.random() > epsilon) {
			      	// e-greedy part: exploring
			  		// randomly use a new ratio
			  		ratio = 0
			      	ratio = Math.round(Math.random()*10)/10
			      	ratio = 0
			      	console.log(ratio + " explore")
			      	var query = new Parse.Query(DifficultyIndex);
			      	query.equalTo("difficultyIndex", ratio);
			      	query.find({
						success: function(results) {
						  	// results.length should be 1
						    for (var i = 0; i < results.length; i++) { 
						      firstDiffIndexQuery = results[i]
						    }
						    console.log(ratio)
						    pC = firstDiffIndexQuery.get("playedCount")
						    pC += 1
						    rew = firstDiffIndexQuery.get("reward")
						    var aR = rew / pC
						      // increment playCount of this difficulty level in the database
						    firstDiffIndexQuery.save({
								difficultyIndex: ratio,
								playedCount: pC, 
								avgReward: aR
							}, {
								success: function(firstDiffIndexQuery) {
								  	console.log("success_update_diff")
								    // The object was saved successfully.
								},
								error: function(firstDiffIndexQuery, error) {
								    // The save failed.
								    console.log("ehh_diff")
								    // error is a Parse.Error with an error code and message.
								}
							});	 
						},
						error: function(error) {
							console("Error: " + error.code + " " + error.message);
						}
					});
	    		} else {
			      	// e-greedy part: exploiting
			      	console.log(ratio + " not explore")
				    pC = firstDiffIndexQuery.get("playedCount")
				    pC += 1
				    rew = firstDiffIndexQuery.get("reward")
				    var aR = rew / pC
				      // increment playCount of this difficulty level in the database
				    firstDiffIndexQuery.save({
						difficultyIndex: ratio,
						playedCount: pC, 
						avgReward: aR
					}, {
						success: function(firstDiffIndexQuery) {
				  		console.log("success_update_diff")
				   	 // The object was saved successfully.
				  		},
				  		error: function(firstDiffIndexQuery, error) {
				    		// The save failed.
				   		console.log("ehh_diff")
						}
					});	 
	      		}
	    	}
	  	},
		error: function(error) {
	    	console.log("Error: " + error.code + " " + error.message);
		}
	});
	// Load main artist's tracks
	request = $.getJSON('https://itunes.apple.com/search?term='+ artistName +'&entity=musicTrack&callback=?', function(data){
		// Get Appointed Artist's track
		console.log(data)
		musicTrackFromMainArtist = data.results
		musicTrackFromRelatedArtist = []
		// Get related Artist's name
		// get appointed artist's id from echonest
		request = $.getJSON('http://developer.echonest.com/api/v4/artist/search?api_key=J8CEMYYSDCWPWAAMD&format=json&name=' + artistName +'&results=10', function(data){

			mainArtistId = data.response.artists[0]["id"]
			mainArtistName = data.response["name"]
			// get similar artists information
			request = $.getJSON('http://developer.echonest.com/api/v4/artist/similar?api_key=J8CEMYYSDCWPWAAMD&id=' + mainArtistId + '&format=json&results=15&start=0', function(data) {
				relatedArtists = data.response.artists
				relatedArtists = shuffleArray(relatedArtists)
				minRatioList = Math.min(Math.round(ratio * maxSongInList), relatedArtists.length)
				// get the first related artist
				request = $.getJSON('https://itunes.apple.com/search?term=' + relatedArtists[0]["name"] +'&entity=musicTrack&attribute=allArtistTerm&country=hk&callback=?', function(data) {
					musicTrackFromRelatedArtist = musicTrackFromRelatedArtist.concat(data.results)
					// get the second related artist
					request = $.getJSON('https://itunes.apple.com/search?term=' + relatedArtists[1]["name"] +'&entity=musicTrack&attribute=allArtistTerm&country=hk&callback=?', function(data) {
						musicTrackFromRelatedArtist = musicTrackFromRelatedArtist.concat(data.results)
						console.log(musicTrackFromMainArtist)
						console.log(musicTrackFromRelatedArtist)
						// generate playlist
						genGameWithTwoArray(musicTrackFromMainArtist,musicTrackFromRelatedArtist,ratio)
					});
				});
			});
		});
	});
}
function keepTrackOfAudio (audioItem, arrayItem, main, rel) {
	audioItem.oncanplaythrough = function (){
		console.log("good!")
		validNum++
		if (track_list.length < maxSongInList){
			track_list = track_list.concat(arrayItem)
			realAudio = realAudio.concat(audioItem)
			console.log(track_list)			
		} else {
			if (startFlag == false) {
				startFlag = true
				false_option = []
				false_option = false_option.concat(main)
				false_option = false_option.concat(rel)
				score = 0
				document.getElementById("scoreboard").innerHTML = Math.round(score)
				document.getElementById("gameover_page").style.display = "none"
				document.getElementById("login_page").style.display = "none"
				document.getElementById("loading_page").style.display = "none"
				document.getElementById("game_page").style.display = "block"
				loaddata()					
			}

		}

	}	
}
function addValidTrack (main, rel, ratio, i) {
	console.log(globalIndex)
	console.log(track_list)
	console.log(track_list.length)
	console.log(maxSongInList)
	var index;
	var targetArray;
	// Decide whether to add main or related artist
	if (Math.random() > ratio) {
		index = getRandomInt(0, main.length-1)
		targetArray = main
	} 
	else {
		index = getRandomInt(0, rel.length-1)
		targetArray = rel
	}
	console.log(targetArray)
	next_url = targetArray[index]["previewUrl"]
	audio_buffer[globalIndex] = new Audio(next_url)
	
	keepTrackOfAudio(audio_buffer[globalIndex], targetArray[index], main, rel)
	targetArray.splice(index,1)
	globalIndex++
	// }
}
function addValidTrackWrapper (main, rel, ratio, globalIndex) {
	if (validNum < maxSongInList) {
		addValidTrack(main, rel, ratio, globalIndex)
		loadNextTrack = setTimeout(addValidTrackWrapper(main, rel, ratio, globalIndex), 500)
	}
}
// This function generates a playlist by mixing a list of songs from the main artist
// and a list of songs from related artists using the given ratio
function genGameWithTwoArray(main, rel, ratio, i){
	track_list = []
	// load playlist using the ratio given
	globalIndex = 0
	var fullList = false;
	// for (globalIndex = 0; globalIndex < )
	addValidTrackWrapper(main, rel, ratio, globalIndex)
	// while (validNum < maxSongInList) {
	// 	addValidTrackWrapper (main, rel, ratio, globalIndex)
	// }
	console.log("stop")
		

}
function get400pixel(link) {
	var arrayLink =link.split("100x100")
	return arrayLink[0] + "400x400" + arrayLink[1]
}
function recursiveRecommendListUpdate(artistsArray, htmlText){
	if(artistsArray.length == 0){
		console.log(htmlText)
		document.getElementById("sliderRecommend").innerHTML = htmlText
		mySlider2 = myApp.slider('.slider-2', {
			pagination:'.slider-2 .slider-pagination',
			speed: 200,
			spaceBetween: 20,
			slidesPerView: 3
		});
		// $("#sliderRecommend").css('transition: 0ms; -webkit-transition: 0ms; transform: translate3d(0px, 0px, 0px); -webkit-transform: translate3d(0px, 0px, 0px);')
		$('.slider-slide-img').height($('.slider-slide-img').width())
		document.getElementById("loading_page").style.display = "none"
		document.getElementById("login_page").style.display = "block"		
		return htmlText;
	}
	request = $.getJSON('https://itunes.apple.com/search?term=' + artistsArray[0] + '&entity=musicTrack&callback=?' , function(data){
		var recommendListHTMLTextSingle = '<div class="slider-slide " style=" margin-right: 30px; width: calc((100% - 60px) / 3);"  onclick = "genGame(\''+artistsArray[0]+ '\' )">'+
                     '<img class= "slider-slide-img" src="'+ get400pixel(data.results[0]["artworkUrl100"]) + '">'+
                     '<div class="slider-slide-title">'+
                      '<span class= "slider-slide-title-text">' + artistsArray[0] + '</span>'+
                     '</div>'+
                   '</div>'
        htmlText += recommendListHTMLTextSingle
        artistsArray.shift()
        return recursiveRecommendListUpdate(artistsArray, htmlText)
	});
}
function onload_function(){
	if (navigator.geolocation) {
		console.log(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(function (position) {
			geoX = position.coords.latitude 
			geoY = position.coords.longitude
			console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
		}, function(){
			console.log("error")
		})
	} else{
		console.log("lol")
	}
	Parse.initialize("VV7IDop8RNDD1WiJzGeeHMD1SZuh4nGlC7tR1Ffn", "EMXyRtQm0WzmmfoHJPAVv0j0sFdNjJ7R3HMCxBDG");
	artistsArray = ["Wiz Khalifa", "Beyonce", "周杰伦", "OneRepublic", "B.o.b"]
	recommendListHTMLText = ""
	recommendListHTMLText = recursiveRecommendListUpdate(artistsArray, recommendListHTMLText)
}
function pass_this() {
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
	}

}

function select_choice (choice){
	if (freeze == 1 ) {
		return
	}	
	console.log(mode)
	select = document.getElementById("button"+choice).getElementsByTagName("span")[0].innerHTML
	correctPercent = (numCorrectGuess+ (select == correct)*1)/ ithgame
	track_list[ithgame-1]["correct"] = (select == correct)
	if (select == correct){
		beep_audio.play()

		for (i = 0; i < 4; i++) {
			if (document.getElementById("button"+i).getElementsByTagName("span")[0].innerHTML == correct ){
				document.getElementById("button"+i).style.color = "green"
				document.getElementById("button"+i).style.borderColor = "green"
				break
			} 
		}
		streak_correct++
		numCorrectGuess++
		freeze = 1
		clearInterval(interval)
		// gameloop()
		// interval  = setInterval(gameloop, singleSongPlayTimeInMs); 
		newScore = 20 - Math.round((cur_time.getTime() - unit_d_start.getTime())/1000)
		score = score + newScore
		madeit = 1
		console.log(streak_correct)
		document.getElementById("scorebar").style.color = "green"
		document.getElementById("scoreboard").style.color = "#4CD964"
		document.getElementById("scoreboard").innerHTML = Math.round(score)
		
		cur_time = new Date()
		
		// console.log(10-Math.round((cur_time.getTime() - unit_d_start.getTime())/1000))


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
		plusone.innerHTML = " +" + newScore
		plusone.className = "fadeaway"
		document.getElementById("scoreboard").appendChild(plusone)
		setTimeout(function(){
			gameloop()
			interval  = setInterval(gameloop, singleSongPlayTimeInMs); 
		}, 2000)
	} else {
		wrong_audio.play()
		streak_correct = 0
		madeit = 1
		incorrect_guess ++
		document.getElementById("scoreboard").style.color = "red"
		document.getElementById("button"+choice).style.color = "red"
		document.getElementById("button"+choice).style.borderColor = "red"
		for (i = 0; i < 4; i++) {
			if (document.getElementById("button"+i).getElementsByTagName("span")[0].innerHTML == correct ){
				document.getElementById("button"+i).style.color = "green"
				document.getElementById("button"+i).style.borderColor = "green"
				break
			} 
		}
		document.getElementById("scoreboard").innerHTML = Math.round(score)
		clearInterval(interval)
		freeze = 1
		setTimeout(function(){
			gameloop()
			interval  = setInterval(gameloop, singleSongPlayTimeInMs); 
		}, 2000)

	}

}
function gameloop(){
	console.log(ratio)
	if(ithgame == maxSongInList){
		gameover()
		return
	}
	freeze = 0
	console.log(ithgame)
	incorrect_guess = 0
	unit_d_start = new Date()
	unit_d_end = new Date(unit_d_start.getTime() + singleSongPlayTimeInMs)
	// puase previous music stream
	if (ithgame > 0) {
		realAudio[ithgame-1].pause()
	}

	// a.pause()
	// a = ""
	// reset the button
	for (i_ = 0; i_ < 4; i_++){
		document.getElementById("button"+i_).style.color = "white"
		document.getElementById("button"+i_).style.borderColor = "white"
	}


	// Build new music source
	// this_url = next_url
	// a = next_audio
	fake_number = getFourIndexFromArray(ithgame)
	// Animate new choices
	console.log(fake_number)

	var cw = $("#play-artwork-img").width();
	// console.log(cw)
	$('#play-artwork-img').height(cw)
	// console.log($("#play-artwork-img").height())
	document.getElementById("play-artwork-img").src = get400pixel(track_list[ithgame]["artworkUrl100"])

	song_you_played_array.push(track_list[ithgame])

	false_option = shuffleArray(false_option)

	// Play this in the end
	index = getRandomInt(0,3)
	console.log(index)
	console.log(false_option.length)
	for (j = 0; j < 4 ; j++) {
		// place correct answer
		document.getElementById("button"+j).innerHTML = ""
		var newSongName = document.createElement('span')
		if (index == j){
			newSongName.innerHTML = track_list[ithgame]["trackName"]
			newSongName.className = "fadein"
			document.getElementById("button"+j).appendChild(newSongName)
		} else {
			newSongName.innerHTML = false_option[0]["trackName"]
			newSongName.className = "fadein"
			document.getElementById("button"+j).appendChild(newSongName)
			false_option.splice(0,1)
		}
	}

	// "correct" stores the correct answer of hte song name
	correct = track_list[ithgame]["trackName"]
	realAudio[ithgame].volume = 0.3
	realAudio[ithgame].play()

	ithgame ++
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
	realAudio[ithgame-1].pause()
	// Update game data as the player returns
    secondGameScore.destroy({
	  success: function(secondGameScore) {
	  	console.log("first is destroyed")
	    // The object was deleted from the Parse Cloud.
	  },
	  error: function(secondGameScore, error) {
	    // The delete failed.
	    console.log("first is notttt destroyed")
	    // error is a Parse.Error with an error code and message.
	  }
	});
	finalGameScore = new GameScore();
	playedAgain = true
    // var point = new Parse.GeoPoint({latitude: geoX, longitude: geoY});
	finalGameScore.save({
		score: playerScore,
		accuracy: correctPercent, 
		playerName: username,
		playerEmail: userEmail, 
		seedArtist: seedArtist,
		difficultyIndex: ratio, 
		trackInfo: track_list,
		playerReturns: playedAgain,
		location: point
	}, {
		success: function(finalGameScore) {
			console.log("success final")
		// The object was saved successfully.
		},
		error: function(finalGameScore, error) {
		// The save failed.
			console.log("ehh")
		// error is a Parse.Error with an error code and message.
		}
	});
    firstDiffIndexQuery.destroy({
		success: function(firstDiffIndexQuery) {
			console.log("firstDiffIndexQuery is destroyed")
			// The object was deleted from the Parse Cloud.
		},
		error: function(firstDiffIndexQuery, error) {
			// The delete failed.
			console.log("firstDiffIndexQuery is notttt destroyed")
			// error is a Parse.Error with an error code and message.
		}
	});
	// Update the action value of the bandit
	rew += 1
	aR = rew / pC
	secondDiffIndexQuery = new DifficultyIndex()
	secondDiffIndexQuery.save({
		difficultyIndex: ratio,
		playedCount: pC,
		reward: rew, 
		avgReward: aR
	}, {
	success: function(secondDiffIndexQuery) {
		console.log("success final secondDiffIndexQuery")
		// The object was saved successfully.
	},
	error: function(secondDiffIndexQuery, error) {
		// The save failed.
		console.log("ehh_update secondDiffIndexQuery")
		// error is a Parse.Error with an error code and message.
	}
	});
	document.getElementById("game_page").style.display = "none"
    document.getElementById("login_page").style.display = "block"
    document.getElementById("gameover_page").style.display = "none"
}
function loaddata() {
	// Insert a row to game data as the game starts
	// record the game with playedAgain = false and no score object by default
	playedAgain = false
    GameScore = Parse.Object.extend("GameScore");

	firstGameScore = new GameScore();
	firstGameScore.save({
		playerName: username,
		playerEmail: userEmail, 
		seedArtist: seedArtist,
		difficultyIndex: ratio, 
		trackInfo: track_list,
		playerReturns: playedAgain,
		location: point
	}, {
	success: function(firstGameScore) {
		console.log("success_first")
		// The object was saved successfully.
	},
	error: function(firstGameScore, error) {
		// The save failed.
		console.log("ehh_1")
		// error is a Parse.Error with an error code and message.
	}
	});
	
	console.log(track_list)
	ithgame= 0
	numCorrectGuess = 0
	d_start = new Date()
	d_end = new Date(d_start.getTime() + totalGameTimeInMs)

	// Loading track urls

	clearInterval(interval)
	gameloop()
	interval  = setInterval(gameloop, singleSongPlayTimeInMs);
	animation_interval = setInterval(animation, animationRateInMs);
}
function animation(){
	cur_time = new Date()
	if (ithgame > maxSongInList) {
		gameover()
	}
	else{
		percent = Math.round((d_end.getTime() - cur_time.getTime())/ totalGameTimeInMs * 100)
		unit_percent = Math.round((unit_d_end.getTime() - cur_time.getTime())/ singleSongPlayTimeInMs * 100)
		if (percent >= 100) {
			percent = 100
		}
		percent = percent.toString()
		document.getElementById("scorebar").style.width = unit_percent+"%"
		if (percent < 30){
			document.getElementById("scorebar").style.color = "red"
		} else {
			document.getElementById("scorebar").style.color = "rgba(64,117,4,0.80);"
		}
		// document.getElementById("play-artwork-img").setAttribute("style","-webkit-filter:blur(" + unit_percent/10 + "px)")
		$('#play-artwork-img').height($("#play-artwork-img").width())
	}
	if (madeit == 1) {
		// console.log(madeit_mult)
		if (madeit_mult > delayMultipleForCorrectEffect) {
			document.getElementById("scoreboard").innerHTML = Math.round(score)
			madeit = 0
			madeit_mult = 0
		} else {
			madeit_mult++
		}
	}
}
function gameover(){
	correctPercent = numCorrectGuess / maxSongInList

	console.log("done")
	ongoing = false
	clearInterval(animation_interval)
	clearInterval(interval)
    document.getElementById("game_page").style.display = "none"
    document.getElementById("gameover_page").style.display = "block"
    
    // destroy the previous game data and generate a new one
    // since the player finishes the game
    playerScore = score
    firstGameScore.destroy({
	  success: function(firstGameScore) {
	  	console.log("first is destroyed")
	    // The object was deleted from the Parse Cloud.
	  },
	  error: function(firstGameScore, error) {
	    // The delete failed.
	    console.log("first is notttt destroyed")
	    // error is a Parse.Error with an error code and message.
	  }
	});
	secondGameScore = new GameScore();
	secondGameScore.save({
		score: playerScore,
		accuracy: correctPercent, 
		playerName: username,
		playerEmail: userEmail, 
		seedArtist: seedArtist,
		difficultyIndex: ratio, 
		trackInfo: track_list,
		playerReturns: playedAgain,
		location: point
	}, {
	  success: function(secondGameScore) {
	  	console.log("success_go")
	    // The object was saved successfully.
	  },
	  error: function(secondGameScore, error) {
	    // The save failed.
	    console.log("ehh_go")
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
					// console.log(object.get('score'))
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
	toprec_index = 0
	while (toprec_index < maxSongInList){
		appendNewSongToGameOver()
		toprec_index++
	}
}


function appendNewSongToGameOver(){

    // console.log(document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML)
    // document.getElementById("GameOverSongList").getElementsByTagName("ul")[0].innerHTML 
    var ul_list = '<li class=" bg-trans "> ' +
                        '<div class="swipeout-content bg-trans item-content" id = "recommend' + toprec_index+'"> ' +
                         '<div class="item-media"><img src=" ' + song_you_played_array[toprec_index]["artworkUrl100"] +'" width="50"></div> ' +
                         '<div class="item-inner"> ' +
                            '<div class="item-title-row"> ' +
                              '<div class="item-title color-white">' + song_you_played_array[toprec_index]["trackName"] + '</div> ' +
                              '<div class="item-after"> ' + "button" +'</div> ' +
                            '</div> ' +
                            // '<div class="item-title-row"> ' +
                            '<div class="item-subtitle color-grey">' + song_you_played_array[toprec_index]["artistName"] + '</div> ' +
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
    // toprec_index++
    // if (toprec_index >= song_you_played_array.length) {
    // 	clearInterval(gameEndAnimation)
    // }

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
          // window.location = "http://rayxiao92.github.io/phongo/musicquiz.html";
      
    FB.api('/me', function(response) {
		console.log('Successful login for: ' + response.name);
		username = response.name
		userEmail = response.email
		profilePicLink = "http://graph.facebook.com/"+ response.id +"/picture?type=large"
		document.getElementById("profilePicture").src = profilePicLink
		console.log(response)
		document.getElementById("quizPrompt").innerHTML = "Quizzes We Pick For You" + " "+ response.name
      console.log("hahahhaha")
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

function getFourIndexFromArray (toInclude){
	// generate wrong answers
	var targetArray = new Array()
	indexArray = []
	for (i = 0; i< maxSongInList; i++) {
		indexArray.push(i)
	}
	for (i = 0; i< maxSongInList; i++) {
		if (indexArray[i] == toInclude) {
			indexArray.splice(i,1)
		}
	}
	indexArray = shuffleArray(indexArray)
	for (i = 0; i < maxSongInList-4; i++){
		indexArray.shift()
	}
	indexArray.push(toInclude)
 
	return shuffleArray(indexArray)
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

