/*
Program Name: Recipe Display Application
Author: Peter N. Strouss
Date: March 31 2017
Filename: script.js
*/

//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
$(this).css("background-color", "red");
}, function(){
$(this).css("background-color", "gold");
});