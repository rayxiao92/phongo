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
var flip
var original_color;
var animation_interval;
var myApp = new Framework7({
    pushState: true, 
    swipebackPage: true
});
var next_audio_buffer = ""

var play_index = getRandomInt(0,3)
var next_url = ""
var loaded = 0
// Export selectors engine
var $$ = Dom7;

// Some constants initialization
var songarray = ""
var ithgame = 0
var score = 0
var singleSongPlayTimeInMs = 10000
var paneltyTimeInMs = 2000
var animationRateInMs = 300
var totalGameTimeInMs = 60000
var maxSongInList = 50
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

function play(){
	if (loaded == 1){
		score = 0
		document.getElementById("scoreboard").innerHTML = "Score: " + Math.round(score)
		document.getElementById("gameover_page").style.display = "none"
	    document.getElementById("login_page").style.display = "none"
	    document.getElementById("game_page").style.display = "block"
    	loaddata()
	}

}

function select_choice (choice){
	select = document.getElementById("button"+choice).innerHTML
	if (select == correct){
		clearInterval(interval)
		gameloop()
		interval  = setInterval(gameloop, singleSongPlayTimeInMs); 	
		score = score + 1

	} else {
		document.getElementById("scorebar").style.color = "red"
		document.getElementById("button"+choice).style.backgroundColor = "red"
		d_end = new Date(d_end.getTime() - paneltyTimeInMs)
	}

	document.getElementById("scoreboard").innerHTML = "Score: " + Math.round(score)
}

function gameloop(){
	ithgame ++
	if (!a.paused){
		a.pause()
	}
	for (i_ = 0; i_ < 4; i_++){
		document.getElementById("button"+i_).style.backgroundColor = "transparent"
	}
	this_url = next_url
	// a = document.getElementById("audiosupport")
	// a.src = this_url
	a = next_audio
	// console.log(next_audio_buffer)
	// a = Base64Binary.decodeArrayBuffer(next_audio_buffer)
	// a = window.atob(next_audio_buffer)
	console.log(a)
	
	console.log(track_list[fake_number[play_index]]["name"])
	for (j = 0; j < 4 ; j++) {
		document.getElementById("button"+j).innerHTML = track_list[fake_number[j]]["name"]
	}

	// correct st`ores the correct answer of hte song name
	correct = track_list[fake_number[play_index]]["name"]	
	fake_number = getFourIndexFromArray()
	play_index = getRandomInt(0,3)
	next_url = track_list[fake_number[play_index]]["preview_url"]+".mp3"
	next_audio = new Audio(next_url)
	next_audio_buffer = window.btoa(next_audio.toString())
	a.play()
	console.log(next_audio_buffer)
}

function loaddata() {
	console.log(track_list)
	d_start = new Date()
	d_end = new Date(d_start.getTime() + totalGameTimeInMs)
	fake_number = getFourIndexFromArray()
	play_index = getRandomInt(0,3)

	next_url = track_list[fake_number[play_index]]["preview_url"]+".mp3"
	next_audio = new Audio(next_url)
	// console.log(next_audio.toString())
	// next_audio_buffer = window.btoa(next_audio.toString())
	// console.log(next_audio_buffer)	
	gameloop()
	interval  = setInterval(gameloop, singleSongPlayTimeInMs);
	animation_interval = setInterval(animation, animationRateInMs);
	// 	// smallRound = setTimeout(gameover, 15000); 		
	// });
}
function animation(){
	cur_time = new Date()
	if (cur_time.getTime() > d_end.getTime()){
		gameover()
	}
	else{
		percent = Math.round((d_end.getTime() - cur_time.getTime())/ totalGameTimeInMs * 100).toString()
		console.log(percent+"%")
		document.getElementById("scorebar").style.width = percent+"%"
		if (percent < 30 && flip == 0){
			document.getElementById("scorebar").style.color = "red"
			flip = 1
		} else {
			document.getElementById("scorebar").style.color = "white"
			flip = 0	
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
    document.getElementById("scoretitle").innerHTML = "You got " + score
}
/*************************************
**                                  **
**    General Helper functions      **
**                                  **
*************************************/

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

/*************************************
**                                  **
**   Player-only Helper functions   **
**                                  **
*************************************/


/*
Copyright (c) 2011, Daniel Guerrero
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Uses the new array typed in javascript to binary base64 encode/decode
 * at the moment just decodes a binary base64 encoded
 * into either an ArrayBuffer (decodeArrayBuffer)
 * or into an Uint8Array (decode)
 * 
 * References:
 * https://developer.mozilla.org/en/JavaScript_typed_arrays/ArrayBuffer
 * https://developer.mozilla.org/en/JavaScript_typed_arrays/Uint8Array
 */

var Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
	/* will return a  Uint8Array type */
	decodeArrayBuffer: function(input) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		this.decode(input, ab);
		
		return ab;
	},
	
	decode: function(input, arrayBuffer) {
		//get last chars to see if are valid
		var lkey1 = this._keyStr.indexOf(input.charAt(input.length-1));		 
		var lkey2 = this._keyStr.indexOf(input.charAt(input.length-2));		 
	
		var bytes = (input.length/4) * 3;
		if (lkey1 == 64) bytes--; //padding chars, so skip
		if (lkey2 == 64) bytes--; //padding chars, so skip
		
		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;
		
		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);
		
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		
		for (i=0; i<bytes; i+=3) {	
			//get the 3 octects in 4 ascii chars
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));
	
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
	
			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}
	
		return uarray;	
	}
}

function buildSongArrayQuery() {
	request = $.getJSON('http://charts.spotify.com/api/tracks/most_streamed/global/weekly/latest?callback=?', function(data){
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

