// This code hides tiles depending on which button is pressed. Couldn't find a great way to do it without jQuery so as of now just setting width to 0 and collapsing visibilty. Would ideally like to actually fade out elements.

document.getElementById("allbutton").onclick = function() {clickall()};

function clickall() {
  var y = document.getElementsByClassName("all");
var i;
for (i = 0; i < y.length; i++) {
    y[i].style.visibility="visible";
    y[i].style.width="auto";
}
}

document.getElementById("personalbutton").onclick = function() {clickPersonal()};

function clickPersonal() {
  var x = document.getElementsByClassName("professional");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.visibility="hidden";
    x[i].style.width=0;
}
var z = document.getElementsByClassName("personal");
i = 0;
for (i = 0; i < z.length; i++) {
    z[i].style.visibility="visible";
    z[i].style.width="auto";
}
}

document.getElementById("professionalbutton").onclick = function() {clickProfessional()};

function clickProfessional() {
  var z = document.getElementsByClassName("personal");
var i;
for (i = 0; i < z.length; i++) {
    z[i].style.visibility="hidden";
    z[i].style.width=0;
}
var x = document.getElementsByClassName("professional");
i=0;
for (i = 0; i < x.length; i++) {
    x[i].style.visibility="visible";
    x[i].style.width="auto";
}
}



//Seems that these fades could be done with pure CSS but using this as an opportunity to practice javascript. May want the tile to enlarge and dislay aditional information on mouseover in the future.

// For some reason the pszzp element is not consistently switching to a gif.

document.getElementById("EOT").onmouseover = function() {mouseOverEOT()};
document.getElementById("EOT").onmouseout = function() {mouseOutEOT()};

function mouseOverEOT() {
  document.getElementById("EOT").src="https://s3.amazonaws.com/portfoliowebsite/EOT/EOT+Cutting.gif";
}

function mouseOutEOT() {
  document.getElementById("EOT").src="https://s3.amazonaws.com/portfoliowebsite/EOT/EOT+Cutting+Still.jpg";
}


document.getElementById("moku").onmouseover = function() {mouseOvermoku()};
document.getElementById("moku").onmouseout = function() {mouseOutmoku()};

function mouseOvermoku() {
  document.getElementById("moku").src="https://s3.amazonaws.com/portfoliowebsite/Moku/Moku+132.gif";
}

function mouseOutmoku() {
  document.getElementById("moku").src="https://s3.amazonaws.com/portfoliowebsite/Moku/Moku+Full+Static.JPG";
}	

document.getElementById("nelson").onmouseover = function() {mouseOvernelson()};
document.getElementById("nelson").onmouseout = function() {mouseOutnelson()};

function mouseOvernelson() {
  document.getElementById("nelson").src="https://s3.amazonaws.com/portfoliowebsite/Nelson+Bench/Nelson+Machining.gif";
}

function mouseOutnelson() {
  document.getElementById("nelson").src="https://s3.amazonaws.com/portfoliowebsite/Nelson+Bench/Nelson+Machining+Static.jpg";
}	

document.getElementById("pszzp").onmouseover = function() {mouseOverpszzp()};
document.getElementById("pszzp").onmouseout = function() {mouseOutpszzp()};

function mouseOverpszzp() {
  document.getElementById("psszp").src="https://s3.amazonaws.com/portfoliowebsite/PSZZP/PSZZP+FZZP.gif";
}

function mouseOutpszzp() {
  document.getElementById("pszzp").src="https://s3.amazonaws.com/portfoliowebsite/PSZZP/PSZZP+FZZP+Static.jpg";
}