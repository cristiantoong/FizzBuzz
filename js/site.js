//get values form the user. We need to get the fizz and the buzz value
function getValues(e){
  e.preventDefault();
  //get the user values from the page
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;
  
  //parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //check that the numbers are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
    //we call fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    
    //call displayData and write the values to the screeen
    displayData(fbArray)
  } else {
    alert("You must enter an Integer");
  }


}

function fizzBuzz(fizzValue, buzzValue){
  //intitialize the returnArray
  let returnArray = [];

  //Loop from 1 to 100
  for(let i=0; i < 100; i++){
    //We need check the current in three steps
    //1.check to see if divisible by Both (3 and 5)
    //if so push 'FizzBuzz' into an array and not the number

    //Check to see if divisible by fizz value (3)
    //if so push 'Fizz' into an array and not the number

    //Check to see if divisible by buzz value (5)
    //if so push 'Buzz' into an array and not the number

    //Fi none then push the number into the array
    if(i % fizzValue == 0 && i % buzzValue == 0){
      returnArray.push('FizzBuzz');
    } else if(i % fizzValue == 0){
      returnArray.push('Fizz');
    } else if(i % buzzValue == 0){
      returnArray.push('Buzz');
    } else {
      returnArray.push(i);
    }
    
  }

  return returnArray;
}

//loop over the array and create a tablerow for each item.
function displayData(fbArray){

  //get the table body element from the page
  let tableBody = document.getElementById("results");

  //get the template row
  let templateRow = document.getElementById("fbTemplate");

  //clear table first
  tableBody.innerHTML = "";

  for(let i=0; i < fbArray.length; i+=5){

    //make a document fragment
    let tableRow = document.importNode(templateRow.content, true)

    //grab just td's & put into array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i]; 

    rowCols[1].classList.add(fbArray[i+1]);
    rowCols[1].textContent = fbArray[i+1]; 

    rowCols[2].classList.add(fbArray[i+2]);
    rowCols[2].textContent = fbArray[i+2]; 

    rowCols[3].classList.add(fbArray[i+3]);
    rowCols[3].textContent = fbArray[i+3]; 

    rowCols[4].classList.add(fbArray[i+4]);
    rowCols[4].textContent = fbArray[i+4]; 

    //add all the rows to the table
    tableBody.appendChild(tableRow);

  }

  
}
