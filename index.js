// Iteration 1: Names and Input

let hacker1 = "Joli"; //drivers name
let hacker2 = "Artur"; //navigators name
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigatorsr's name is ${hacker2}`);

// Iteration 2: Conditionals

/*2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".*/

if (hacker1.lenght === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
  );
}
let oneNewLineChar = "";
let hackerReverse = hacker1.length - 1;
for (let i = hackerReverse; i >= 0; i--) {
  oneNewLineChar += hacker1[i] + "";
}
console.log(oneNewLineChar);

//Iteration 3: Loops
/* Print the characters of the driver's name, separated by space, and in capital letters, i.e., */
let oneLineChar = "";
for (let i = 0; i < hacker1.length; i++) {
  oneLineChar += hacker1[i].toUpperCase() + "";
}
console.log(oneLineChar);
// Iteration 3: Loops

/*3.3 Depending on the lexicographic order of the strings, print:*/

if (hacker2.localeCompare(hacker1) == true) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.localeCompare(hacker1) == false) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1:
let longText1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida sed arcu vel consectetur. Vestibulum neque erat, vulputate vel posuere vitae, ultrices quis purus. Nam euismod dolor eget nunc volutpat malesuada. Sed eget volutpat leo, at dictum nunc. Ut quis congue leo. Duis blandit rutrum sem, sed placerat ligula elementum in. Sed mollis lobortis mauris, vel ultrices nibh vehicula in. Proin commodo lorem a eros vestibulum, et egestas odio congue. Duis pellentesque viverra urna eu ornare. Donec eu mauris ante";
let longText2="Cras vehicula eget sem in malesuada. Mauris egestas a arcu non semper. Nunc posuere auctor faucibus. Pellentesque consequat lacus vel lorem laoreet faucibus. Mauris sed tellus pharetra, congue enim non, tempor odio. Proin eget lacinia massa. Aliquam eu elementum tellus, nec vulputate sem. Donec pretium, felis id dignissim accumsan, magna metus eleifend ante, ut pretium neque mauris eu magna. Aenean libero metus, semper vel neque eu, bibendum finibus erat. Nulla molestie lacinia mauris vitae posuere. Duis nec odio odio.";
let longText3="Proin nec urna bibendum, molestie sapien sed, mattis lacus. Suspendisse convallis ornare ipsum, id condimentum enim commodo lacinia. Donec convallis et libero quis egestas. Duis posuere volutpat odio, feugiat ultrices massa facilisis ac. Donec nec neque tristique, volutpat metus quis, bibendum nisi. Nulla sodales at sem at rhoncus. Donec convallis dolor nisl, at rutrum velit laoreet at. Donec ut commodo ex. Nunc tempor sagittis nunc nec tristique. Maecenas venenatis sed leo eu imperdiet. Suspendisse augue lacus, blandit nec mollis quis, accumsan sed libero. Aenean vitae hendrerit risus, sit amet commodo lacus. Curabitur vel felis ante.";
const longText=longText1.concat(``,longText2,``,longText3);

function getCount(longText){
 
  return longText.trim().split(/\s+/).length;
}
console.log(longText);
console.log(getCount(longText));

let count = 0;

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  
  if ( twoChars === "et" ) {
    count++;
  }
}
console.log(count);
//Bonus 2:
let phrase="hello";
let oneNewLineChar1="";
let phraseReverse=phrase.length -1;
for (let i=phraseReverse; i>=0; i--){
oneNewLineChar1 += phrase[i] + "";
}
if(oneNewLineChar1.trim().length === phrase.trim().length){
  console.log("This is a Palindrome ");
} else{
  console.log ("This was close, but not the stuff we need");
}
 
