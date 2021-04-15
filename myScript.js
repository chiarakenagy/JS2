myDiv = document.getElementById("myDiv");
console.log(myDiv);

work = document.getElementById("work");
console.log(work);

spiritYes = document.getElementById("spiritYes");
console.log(spiritYes);

console.log(document.getElementById("spiritNo"));


function myClick () {
  console.log("test function")

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  console.log(fname, lname);

  myJSON = {
    'fname': fname,
    'lname': lname,
    'work' : work.checked,
    'spiritYes' : spiritYes.checked,
  }

  console.log(myJSON)

  myDiv.innerHTML = "\n";

  myDiv.innerHTML +="\t\t<h1>Whoa.</h1>\n"

  myDiv.innerHTML += "\t\t<img src='default.png' height=300/>\n";
  if (myJSON['work']){

    myDiv.innerHTML += "\t\t<p>" + myJSON['fname'] + " " + myJSON['lname'] + "</p>\n";
    myDiv.innerHtml += "<p>Box was checked. </p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p>Box not checked.</p>\n";
  }
  if (myJSON['spirit']) {
    myDiv.innerHTML +="\t\t<p>Feeling the Spirit of Radio.</p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p>Not Feeling the Spirit of Radio.</p>\n";
  }
}

function boxClick(){
  console.log(work.checked);
}

function myMouseOver(id){
  document.getElementById(id).style.backgroundColor = "blue"
  console.log("yo")
}

function myMouseOut(id){
  document.getElementById(id).style.backgroundColor = "red"
}
