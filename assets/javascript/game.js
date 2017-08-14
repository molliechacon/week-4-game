$(document).ready(function() {

// setting up initial variables
	var counter = 0;
	var wins = 0;
	var losses = 0;

// show initial wins/losses/score on DOM
	$("#userScore").text(counter);
	$("#wins").text(wins);
	$("#losses").text(losses);


// assiging a random number to reach b/w 19-120
	var numberToReach = Math.floor((Math.random() * 101) + 19);
	$("#numberToReach").text(numberToReach);

// initially assigining random numbers b/w 1-12 to each crystal
	var red = Math.floor((Math.random()* 12) + 1);
	var blue = Math.floor((Math.random()* 12) + 1);
	var green = Math.floor((Math.random()* 12) + 1);
	var yellow = Math.floor((Math.random()* 12) + 1);

// win function
	function youWon() {
  		wins++; 
  		$("#wins").text(wins);
  		reset();
  		alert("Congratulations! You won!");
	}

// loss function
	function youLose() {
  		losses++; 
  		$("#losses").text(losses);
  		reset();
  		alert("Too bad! You lost!");
	}

// reset function
	function reset() {
      numberToReach = Math.floor((Math.random() * 101) +19);
      $("#numberToReach").text(numberToReach);
      red = Math.floor((Math.random()* 12) + 1)
      blue = Math.floor((Math.random()* 12) + 1)
      green = Math.floor((Math.random()* 12) + 1)
      yellow = Math.floor((Math.random()* 12) + 1)
      counter = 0;
      $("#userScore").text(counter);
    } 

// onclick functions for each crystal
	$("#red").on("click", function() {
		counter = counter + red;
	  	    $("#userScore").text(counter); 
		        if (counter === numberToReach){
		          youWon();
		        }else if (counter > numberToReach){
		          youLose();
		        }   
  	})  

  	$("#blue").on("click", function() {
	    counter = counter + blue;
	    	$("#userScore").text(counter); 
		        if (counter === numberToReach){
		          youWon();
		        }else if (counter > numberToReach){
		          youLose();
		        }   
  	})  

  	$("#green").on("click", function() {
    	counter = counter + green;
		    $("#userScore").text(counter); 
		        if (counter === numberToReach){
		          youWon();
		        }else if (counter > numberToReach){
		          youLose();
		        } 
    })
   	  
  	$("#yellow").on("click", function() {
    	counter = counter + yellow;
		    $("#userScore").text(counter); 
		        if (counter === numberToReach){
		          youWon();
		        }else if (counter > numberToReach){
		          youLose();
		        } 
	})
});