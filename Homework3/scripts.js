$(document).ready(function(){
	
	var rows = 5;
	var cols = 5;
    var color1 = "rgb(181, 181, 181)";
	var color2 = "rgb(74, 187, 224)";
	var white = "rgb(255, 255, 255)";
	var clicks = 0;
	var time = 0;
	var timer;
	var level;
	var highestScore;
	var score;
	
	
	function drawTable(){
		$("#t1").empty();
		for (i=0; i<rows; i++) {
			$("#t1").append('<tr>');
		}
		for (i=0; i<cols; i++) {
			$("#t1>tr").append('<td>');
		}
		setListeners();
		
		clicks = 0;
		time = 0;
		level = Math.floor((Math.random() * 3));
		
		$('td').css("backgroundColor", color1);
		
		randomLevel(level);
	}
	
	function randomLevel(seed) {
		
		whites = [];
		switch (seed) {
			case 0: whites = [1, 2, 4, 12, 14, 19, 20];
				break;
			case 1:	whites = [1, 22, 24];
				break;
			case 2: whites = [5, 9, 12, 15, 19];
		}
		$('td').each(function(index) {
			if (whites.length > 0) {
				if (index == whites[0]) {
					$(this).css("backgroundColor", white)
					whites.splice(0,1);
				}
			}
		});
	}
	
	function setListeners() {
		$('td').mouseover(function() {if ($(this).css("backgroundColor") != white) invertColor($(this));});
		$('td').mouseout(function() {if ($(this).css("backgroundColor") != white) invertColor($(this));});
		$('td').click(function() {
			if ($(this).css("backgroundColor") != white) {
				countClicks($(this));
				crossify($(this));
			}
		});
	}
	
	function invertColor(thisObj) {
		if (thisObj.css("backgroundColor") == color1) {
			thisObj.css("backgroundColor", color2);
		} else {
			thisObj.css("backgroundColor", color1);
		}
	}
	
	function countClicks(thisObj) {
		if (thisObj.css("backgroundColor") != "rgb(255, 255, 255)" ) {
			clicks++;
			$('#clicks').html(clicks);
		}
	}
	
	function crossify(thisObj) {
		    col = thisObj.parent().children().index(thisObj);
			row = thisObj.parent().parent().children().index(thisObj.parent());
			$('td').each(function(index, elem) {
				elemCol = index % cols;
				elemRow = Math.floor(index / cols);
				if ($(this).css("backgroundColor") != white) {
					if (Math.abs(elemRow - row) <= 1 && Math.abs(elemCol - col) <= 0) {
						invertColor($(this));
					}
					if (Math.abs(elemRow - row) <= 0 && Math.abs(elemCol - col) <= 1) {
						invertColor($(this));
					}
				}
			});
			invertColor(thisObj);
	}
	
	function checkWin() {
		noGreens = true;
		$('td').each(function() {
			if ($(this).css("backgroundColor") == color1) {
				noGreens = false;
			}
		});
		if (noGreens == true) gotoHighScores();
		return noGreens;
	}
	
	function startTimer() {
		if (!checkWin()) timer = setTimeout(updateTime, 1000);
	}
	
	function updateTime() {
		time++;
		hours = Math.floor(time/3600);
		minutes = Math.floor((time % 3600)/60);
		seconds = Math.floor((time % 3600) % 60);
		timeFormatted = [hours, minutes, seconds];
		for (i=0; i<timeFormatted.length; i++) {
			timeFormatted[i] = timeFormatted[i].toString();
			if (timeFormatted[i].length < 2) timeFormatted[i] = "0" + timeFormatted[i];
		}
		$('#time').html(timeFormatted[0] + ":" + timeFormatted[1] + ":" + timeFormatted[2]);
		startTimer();
	}
	
	function saveHiScore() {
		score = level * 1/time * 1000;
		var localStorage = window.localStorage;
		nick = $('#nick').val();
		var currentBest = localStorage.getItem("best");
		if(currentBest !== undefined && currentBest.score < score && nick !== ""){
			var newBest;
			newBest.nick = nick;
			newBest.score = score;
			newBest.time = $('#time').html();
			newBest.click = clicks;
			newBest.level = level;
			localStorage.setItem("best",newBest);
		}
		
		
	}
	
	function loadHiScore() {
		var localStorage = window.localStorage;
		highestScore = localStorage.getItem("best");
	}
	
	$('#startButton').click( function() {
		
		
			$('#start').hide();
			$('#top').hide();
			drawTable();
			$('#game').show();
			$('#hud').show();
			startTimer();
		
		
	});
	
	$('#returnButton').click( function() {
		$('#start').show();
		$('#topTen').hide();
		$('#hiScoreLegend').hide();
		$('#hiScore').hide();
		$('#return').hide();
		saveHiScore();
	});
	
	function gotoHighScores() {
		clearTimeout(timer);
		loadHiScore();
		$('#game').hide();
		$('#hud').hide();
		$('#top').show();
		$('#nick').innerHTML = highestScore.nick;
		$('#level').innerHTML = highestScore.level;
		$('#finishScore').innerHTML= highestScore.score;
		$('#finishTime').innerHTML = highestScore.time;
		$('#finishClicks').innerHTML = highestScore.clicks;
		$('#hiScore').show();
		$('#return').show();
	}
});