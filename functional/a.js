//setInterval(()=>console.log("wow"),500);

var str = "game.load.image('chall300','images/chall300x300.png')";
var vv = "CjdoghO";
var res = str.replace("images/", "images/"+vv+"/");
console.log(res);


/*var regexp = /\[[mM]edia\ id\=\"\d+\"\]/g;
var mystring = '<img src="[media id=5]" />';
var newstring = mystring.replace(regexp, "http://someurl/?somevar=$1");
console.log(newstring);

//var mystring = '<img src="[media id=5]" />';
var mystring ="game.load.image('chall300','images/chall300x300.png')";
//var re = /\[media id="?(\d+)"?\]/gi;
var re = /\[media id="?(\d+)"?\]/gi;
var v = mystring.replace(re, "http://someurl/?somevar=$1");
console.log(v);

/*
let heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}

// Every half second, set heightRequirement to a random number between 0 and 200.
setInterval(() => heightRequirement = Math.floor(Math.random() * 201), 500);

const mySonsHeight = 47;

// Every half second, check if my son can ride.
// Sometimes it will be true and sometimes it will be false.
setInterval(() => console.log(canRide(mySonsHeight)), 500);



/*
// For Each
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
names.forEach(function(name) {
    console.log(name);
});










*/