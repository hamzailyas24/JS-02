
// CHANGING CASE

// 01

// var user1 = prompt("Enter Anything in Small Letters:");
// alert(user1.toUpperCase());

// 02

// var user1 = prompt("Enter Anything:");
// var titlecase = user1[0].toUpperCase() + user1.slice(1).toLowerCase();
// alert(titlecase);


// Strings: measuring length and extracting parts

// 01
// var mobilePhone = prompt("Enter Your Favourite Mobile Phone Model");
// document.write("My Favourite Phone is: ", mobilePhone, "<br>Length of String is: ", mobilePhone.length);

// 02
// var user1 = prompt("Enter Anything in Small Letters:");
// var user2 = user1.slice(-1);
// alert(user2);


// Strings: finding segments

// 01
// var string = "Pakistani";
// document.write("String: ", string, "<br>Index of 'n': ", string.indexOf('n'));

// 02

// var user_name = prompt("Enter Your Username:");
// for (var i = 0; i < user_name.length; i++) {
//     if (user_name[i].charCodeAt() == 33 ||
//         user_name[i].charCodeAt() == 44 ||
//         user_name[i].charCodeAt() == 46 ||
//         user_name[i].charCodeAt() == 64) {
//         alert("Please enter a valid name");
//         break;
//     }
// }

// 03

// var string2 = "The quick brown fox jumps over the lazy dog";
// document.write("There are ", string2.match(/the/gi).length, " Occurrences of word 'the' in given string");


// Strings: finding a character at a location

// var a = "pakistani";

// document.write(a.charAt(3));


// Strings: replacing characters

// 01

// var text = "hyderabad hydera hyderhy hyderubad"

// var  indexnum = text.indexOf('hyder');

// var firsttext = text.slice(0,indexnum)

// var replacingtext = 'islam';

// var third = text.slice(indexnum+5)

// document.write(firsttext+replacingtext+third);

// 02

// var pera = (" Ali and Sami are best friends. They play cricket and football together.")

// var pera1 = pera.replaceAll("and", "&")

// document.write(pera1)


// Rounding numbers

// 01

// var integer = prompt("Enter positive integer");
// document.write("<br><br>Number : ", integer);
// document.write("<br><br>Round off Value : ", Math.round(integer));
// document.write("<br><br>Floor Value : ", Math.floor(integer));
// document.write("<br><br>Ceil Value : ", Math.floor(integer) + 1);

// //02
// var negative_integer = prompt("Enter positive negative_integer");
// document.write("<br><br>Number : ", negative_integer);
// document.write("<br><br>Round off Value : ", Math.round(negative_integer));
// document.write("<br><br>Floor Value : ", Math.floor(negative_integer));
// document.write("<br><br>Ceil Value : ", Math.floor(negative_integer) + 1);


// Generating random numbers

//01

// document.write("<br><br>Random Dice Value : ", Math.floor(Math.random() * 6) + 1);


//02

// let coin_toss = Math.floor(Math.random() * 2 + 1);
// if (coin_toss == 2) { document.write("<br><br>2<br>RAndom coin value : Heads") }
// else { document.write("<br><br>1<br>Random coin value : Tails"); }

// 03

// var secret = prompt('Enter secret Number ?');
// var random = Math.random() * 10 + 1;

// if (secret == random) {
//     alert("Congratulations! Matched");
// }
// else {
//     alert("Try Again!");
// }


// Converting strings to numbers, numbers to strings

// 01

// var number = "472";
// document.write("Value : ", number, " Type : ", typeof (number) + "<br />");
// document.write("Value : ", +number, " Type : ", typeof (+number));

// 02

// var number = 35.36;
// document.write("Number: ", number);
// document.write("Result: ", number.toString().replace(".", ""));

// Controlling the length of decimals 

// 01

// var percentage = 30 / 45 * 100;

// var clvalue = percentage.toFixed(2); 

// document.write(clvalue);