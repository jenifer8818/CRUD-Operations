//CRUD Operations !!
//Create Read Update Delete

//Global variables
var row = null;


function Submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if(dataEntered == false){
    msg.innerHTML = "Please Enter Data!!!"
  }else{
    if(row==null){
      insert(readData);
      msg.innerHTML = "Data Successfullyyy Inserted !!!"
    }else{
      update();
      msg.innerHTML = "Data Successfullyyy Updated !!!"
    }
  }
  document.getElementById("form").reser();
}

//CREATE
//Retrieving data from form
function retrieveData() {
  var name = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var exp = document.getElementById("exp").value;

  var arr=[name,job,exp]; //to return all elements
  if( arr.includes("") ){
    return false;
  }else{
    return arr;
  }
}

//READ
//Data in localStorage
function readingDataFromLocalStorage(dataEntered) {
  //Storing data in local storage
  var n = localStorage.setItem("Name",dataEntered[0]);
  var j = localStorage.setItem("Job",dataEntered[1]);
  var e = localStorage.setItem("Experience",dataEntered[2]);

  //getting values from local to table
  var n1 = localStorage.getItem("Name",n);
  var j1 = localStorage.getItem("Job",j);
  var e1 = localStorage.getItem("Experience",e);

  var arr=[n1,j1,e1];
  return arr;
}

//INSERT
function insert(readData){
  var table = document.getElementById("table");

  var row = table.insertRow(); //inserting row

  // //inserting values in each column
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);

  // cell1.innerHTML = readData[0];
  // cell2.innerHTML = readData[1];
  // cell3.innerHTML = readData[2];


  //we can write it in simple way!!

  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button> <button onclick = remove(this)>Delete</button>`;
}

//EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;//cells is default array
  document.getElementById("job").value = row.cells[1].innerHTML;
  document.getElementById("exp").value = row.cells[2].innerHTML;
}

//UPDATE
function update() {
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("job").value;
  row.cells[2].innerHTML = document.getElementById("exp").value;

  row = null;
}

//DELETE
function remove(td) {
  var ans = confirm("Are you sure want to delete this record");
  if(ans == true){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }

  // deleteRow(row.rowIndex) inbuilt fn to delete entire row    rowIndex-> returns curr row index
  //deleteRow() -> if we didnt snd any index..it will delete from last
  // document.getElementById("table").remove(); // it will remove the whole table
}