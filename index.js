//? Q 01

// var inputChar = prompt(`enter a single character`);
// // var upperCase=inputChar.toUpperCase();
// // var lowerCase=inputChar.toLocaleLowerCase();

// if (inputChar === inputChar.toUpperCase()) {
//   alert(`uppercase`);
// } else if (inputChar === inputChar.toLowerCase()) {
//   alert(`lowercase`);
//   }else{
//       alert(`number`);
// }

//? Q 02

// var firstNum=parseInt(prompt(`enter an integer value`));
// var secNum=parseInt(prompt(`enter an integer value`));
// console.log(firstNum);
// if (firstNum>secNum ) {
//     document.write(firstNum);
// }else if (secNum>firstNum) {
//     document.write(secNum);
// }else if (firstNum===secNum) {
//     document.write(`${firstNum} = ${secNum}`);
// }else{
//     alert(`NaN  `)
// }

//? Q 03

// var num = prompt(`enter number`);
// // console.log(num)
// var num1 = parseInt(num);
// // console.log(num1);
// if (num == num1) {
//   if (num1>0) {
//     console.log(`positive number`)
//   }else if (num1<0) {
//     console.log(`negative number`)
//   }else{
//     console.log(`number is zero`)
//   }
// }else{
//     alert(`please enter a number(0-9)`)
// }

//? Q 04

// var vowels=prompt(`please enter single alphabat`)
// vowels=vowels.toLowerCase();
// if (vowels.length===1) {
//     if (vowels===`a` || vowels===`e` || vowels===`i` ||vowels===`o` || vowels===`u`) {
//         alert(`it's vowel`)
//     }else{
//         alert(`sorry it's not vowel`)
//     }
// }else{
//     alert(`please enter single character`)
// }

//? Q 05

// var password=`abc123`;
// var checkPassword=prompt(`please enter your password`)
// // console.log(checkPassword)
// if (checkPassword !== ``) {
//     if (checkPassword===password) {
//         alert(`hurray! correct password`)
//     }else{
//         alert(`sorry! incorrect password`)
//     }
    
// }else{
//     alert(`please enter yout password`)
// }

//? Q 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }
// alert(greeting);

//? Q 07

// var time=+prompt(`Please enter time in  24hrs formate like 1900= 7pm (0000-2400)`)
// if (time<= 24) {
//     if (time>=0 &&time<12) {
//         alert(`Good morning`)
//     }else if (time>=12 &&time<17) {
//         alert(`Good afternoon`)
//     }else if (time>=17 && time<21) {
//         alert(`Good evening`)
//     }else if (time>=21 && time<24) {
//         alert(`Good night`)
//     }
// }else{
//     alert(`please enter correct time`)
// }

