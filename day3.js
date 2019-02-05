var friends = ['Julio', 'Enrique', 'Salvi', 'Randy'];
var sizes = [30, 34, 36, 38];

for (var i = 0; i < friends.length; i++) {
  document.write(friends[i]);
  document.write("<br/>");
}

var count = 0;
while (count < sizes.length) {
	document.write(sizes[count]);
	document.write("<br/>");
	count++;
}

function sayHello(item) {
	document.write("Hello " + item + "<br/>");
}

sayHello("Santa");

sayHello("Maria");

friends.forEach(sayHello);

function showSize(mySize) {
	document.write(mySize);
	document.write("<br/>");
}

sizes.forEach(showSize);

var parking = new Array();

parking.push("A1");
parking.push("A2");
parking.push("A3");
parking.push("B1");
parking.push("B2");
parking.push("B3");

document.write(parking.pop());
document.write(parking.pop());
document.write(parking.pop());
document.write(parking.pop());
document.write(parking.pop());
document.write(parking.pop());
document.write(parking.pop());

var rainbow = new Array();

rainbow.push("red");
rainbow.push("orange");
rainbow.push("yellow");
rainbow.push("green");
rainbow.push("blue");
rainbow.push("purple");

document.write("<br/>");
document.write(rainbow.shift());
document.write("<br/>");
document.write(rainbow.shift());
document.write("<br/>");
document.write(rainbow.shift());
document.write("<br/>");
document.write(rainbow.shift());
document.write("<br/>");
document.write(parking.pop());
document.write("<br/>");

var a1 = ['a', 'b', 'c'];
var a2 = [1,2,3]

var queue = new Array();


for (var j = 0; j < a1.length; j++) {
	queue.push(a1[j]);
}

for (var m = 0; m < a2.length; m++) {
	queue.push(a2[m]);
}

document.write("Answer for #1:<br/>")
for (var u = 0; u < 6; u++) {
	document.write(queue.shift());
	document.write("<br/>");
}

a1 = ['a', 'b', 'c'];
a2 = [1,2,3];

var result2 = new Array();
for (var b = 0; b < a1.length; b++) {
	result2.push(a1[b]);
	result2.push(a2[b]);
}

document.write("Answer for #2:<br/>")
for (var u = 0; u < 6; u++) {
	document.write(result2.shift());
	document.write("<br/>");
}

var result3 = new Array();

for (var j = 0; j < a1.length; j++) {
	result3.push(a1[j]);
}

for (var m = 0; m < a2.length; m++) {
	result3.push(a2[m]);
}

document.write("Answer for #3:<br/>")
for (var u = 0; u < 6; u++) {
	document.write(result3.pop());
	document.write("<br/>");
}

document.write(a1.join('#'));
document.write("<br/>");


a1 = ['a', 'b', 'c'];
a2 = [1,2,3,4,5,6,7];

var result4 = new Array();

result4 = a1.concat(a2);
document.write("Answer for #4:<br/>")
for (var u = 0; u < 6; u++) {
	document.write(result4[u]);
	document.write("<br/>");
}

/*var result5 = a2.splice(4);
document.write("Answer for #5:<br/>")
for (var u = 0; u < 6; u++) {
	document.write(result5[u]);
	document.write("<br/>");
}
*/


function add10(n) {
	return n+10;
}

a2 = [1,2,3,4,5,6,7];
var result6 = a2.map(add10);
document.write("Answer for #6:<br/>")
for (var u = 0; u < 7; u++) {
	document.write(result6[u]);
	document.write("<br/>");
}


var colors = new Array(4);

colors[0] = ['red', 'yellow','blue','orange'];
colors[1] = ['green', 'brown','purple','black'];

document.write(colors[1][0]);



