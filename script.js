var wrapperEle = document.body.querySelector(".wrapper");
var checkEle = document.body.querySelector(".check");


// These are the pormpts asking for user input
var checker = prompt("What is your username?");
var number = Number(prompt("What is your number?"));
var checkNumber = Number(prompt("Is this a number?"))


// these are the conditional statements used to check the prompts values

// isNaN checks to see if the value inside its paratheses is not a number

if(checker=="Username"&&number==5){
   wrapperEle.innerHTML = "perfect";
   }else if (checker == "Username" || checker == "user") {
  wrapperEle.innerHTML = "Is true";
} else if (number >= 5) {
  if (number > 10) {
    wrapperEle.innerHTML = "You ees old";
  } else {
    wrapperEle.innerHTML = "Okay, you may enter";
  }
} else {
  wrapperEle.innerHTML = "Is false";
}

if(!isNaN(checkNumber)){
  checkEle.innerHTML="Is a number"
}else{
  checkEle.innerHTML="Is not a number"
}