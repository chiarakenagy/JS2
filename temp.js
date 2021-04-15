// get info from html inputs and save as variables
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var radioF = document.getElementById("female");
var radioM = document.getElementById("male");
var date = document.getElementById('date');
var username = document.getElementById('username');
var password = document.getElementById('password');
console.log(fname.value)
console.log(lname.value)
console.log(radioF.checked)
console.log(radioM.checked)
console.log(date.value)
console.log(username.value)
console.log(password.value)

if(radioF.checked){
  gender = "Female"
}
else{
  gender = "Male"
}

// put gathered data in JSON dictionary
myJSON = {
  'fname': fname.value,
  'lname': lname.value,
  'radioF': radioF.checked,
  'radioM': radioM.checked,
  'date': date.value,
  'username': username.value,
  'password': password.value,
}

console.log(myJSON)

function myClick(){
  body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor="red";
  myDiv = document.getElementById("myDiv");
  myDiv.style.color="green";

  myDiv.innerHTML="<p style='font-size:28pt'> Here is your previous data: </p>"
  // remove header from title page
  header = document.getElementById("header");
  header.innerHTML=" ";

  console.log(fname.value)
  console.log(lname.value)
  console.log(radioF.checked)
  console.log(radioM.checked)
  console.log(date.value)
  console.log(username.value)
  console.log(password.value)

  myJSON = {
    'fname': fname.value,
    'lname': lname.value,
    'radioF': radioF.checked,
    'radioM': radioM.checked,
    'date': date.value,
    'username': username.value,
    'password': password.value,
  }

  console.log(myJSON)
  maleCount = 0
  femaleCount = 0

// add old data from storage into a list
  if(localStorage.length == 0) {
    oldJSONs = [];
  }
  else{
    oldJSONs = localStorage.getItem("JSON");
    oldJSONs = JSON.parse(oldJSONs);
  }
  // search through data to determine past genders entered
  for(oldJSON of oldJSONs) {
    console.log(oldJSON)
    myStr = "<p style= 'font-size:24pt;"
    if (oldJSON.radioF) {
      myStr += "color:pink'>";
        }
    else if (oldJSON.radioM) {
      myStr += "color:blue'>";
        }
    else {
      myStr += "color:black'>";
    }

    myStr += oldJSON.fname + " " + oldJSON.lname + "</p>"
    myDiv.innerHTML += myStr
  }


  console.log(localStorage)
  oldJSONs.push(myJSON);
  localStorage.setItem("JSON", JSON.stringify(oldJSONs));
  console.log(localStorage)

}

function myClickTwo(){

  console.log(fname.value)
  console.log(lname.value)
  console.log(radioF.checked)
  console.log(radioM.checked)
  console.log(date.value)
  console.log(username.value)
  console.log(password.value)

  myJSON = {
    'fname': fname.value,
    'lname': lname.value,
    'radioF': radioF.checked,
    'radioM': radioM.checked,
    'date': date.value,
    'username': username.value,
    'password': password.value,
  }

  if(radioF.checked){
    gender = "Female"
  }
  else{
    gender = "Male"
  }


  console.log(myJSON)
  body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor="green";
  myDiv = document.getElementById("myDiv");
  myDiv.style.color="red";
  header = document.getElementById("header");
  header.innerHTML=" ";

// show selected piece of data from the JSON
  myDiv.innerHTML= "<p style='font-size:24pt'> Welcome " + myJSON['fname'] + ' ' + myJSON['lname'] +" </p>"
  myDiv.innerHTML+= "<p style='font-size:18pt'> Here is your data! </p>"
  myDiv.innerHTML += "<p style='font-size:16pt'> Todays date is: " +myJSON['date'] + '!' + " </p>"
  myDiv.innerHtml += "<p style='font-size:16pt'> You are: " + gender + "</p>"


  console.log(myDiv)
}
