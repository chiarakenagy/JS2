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

  myDiv.innerHTML = "\n";

  myDiv.innerHTML +="\t\t<h1>Whoa.</h1>\n"

  myDiv.innerHTML += "\t\t<img src='default.png' height=300/>\n";
  if (work.checked){
    myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
    myDiv.innerHtml += "<p>Box was checked. </p>\n";
  }


}
