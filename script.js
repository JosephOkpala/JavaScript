var name = prompt('Enter your username please');
var password = prompt('Enter your password');
var firstLetter = name.slice(0, 1);
var capitalize = firstLetter.toUpperCase();
var restOfName = name.slice(1, name.length);
var restOfName = restOfName.toLowerCase();
var allName = capitalize + restOfName;
alert('Your username is : ' + allName + ' and your password is : ' + password);
alert('Thank you for your time');

// ////////////////////////////////////////////////////

var boyName = prompt('What is your name');
var girlName = prompt('what is your name');
var lovePercent = Math.random() * 100;
var lovePercent = Math.floor(lovePercent) + 1;

if (lovePercent > '89') {
  alert('Your love percent is at ' + lovePercent + '%' + ' The love is strong');
}

if (lovePercent < '70' && lovePercent >= '89') {
  alert('Your love percent is at ' + lovePercent + '%' + 'You are in love');
}

if (lovePercent >= '40' && lovePercent <= '69') {
  alert('Your love percent is at ' + lovePercent + '%' + ' It needs work');
}

if (lovePercent >= '0' && lovePercent <= '39') {
  alert(
    'Your love percent is at ' + lovePercent + '%' + ' You are not in love'
  );
}

/////////////////////////////////////////////////////

var allGuests = ['Joseph', 'Dera', 'Melody', 'Akeem'];
var guests = prompt('Enter your name please');
var firstChar = guests.slice(0, 1);
var firstChar = firstChar.toUpperCase();
var restOfName = guests.slice(1, guests.length);
var restOfName = restOfName.toLowerCase();
var guests = firstChar + restOfName;

if (allGuests.includes(guests)) {
  alert('You were invited!');
  alert('Have a wonderful day!');
} else {
  alert('Sorry you were not invited');
}

/////////////////////////////////////////////////////////

var output = [];
var username = ['Joseph', 'Amy', 'Emma', 'Peter'];
output.push(username);
output.pop();
output.shift();

////////////////////////////////////////////////////

var output = [];

function fizzBuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
      output.push('fizzbuzz');
    } else if (count % 3 == 0) {
      output.push('fizz');
    } else if (count % 5 == 0) {
      output.push('buzz');
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
fizzBuzz();

/////////////////////////////////////////////////////////////

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;
  console.log(
    'You have ' + days + ' days,',
    weeks + ' weeks and ' + months + ' months left to live'
  );
}

lifeInWeeks(18);

/////////////////////////////////////////////////

var dogAge = prompt('What is the age of your dog');
var humanAge = (dogAge - 2) * 4 + 21;
alert('Your age is ' + humanAge + ' in human years');

///////////////////////////////////////////////////////////////
