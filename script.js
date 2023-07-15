/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(myfunction);
  function myfunction(element){
    if(element.profession==="developer"){
      console.log(element);
    }
  }
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  arr.forEach(element=>{
   if(element.profession==="developer"){
    console.log(element);
   }
  })
  //Write your code here , just console.log
}

function addData() {
 arr.push({id:4,name:"susan",age:"20",profession:"intern"});
 console.log(arr);
 
  //Write your code here, just console.log
}

function removeAdmin() {
 
  function checkProfession(value){
    return value.profession==="developer";
  }
  console.log(arr.filter(checkProfession));

  //Write your code here, just console.log
}

function concatenateArray() {

  let arr2 = [
    { id: 5, name: "jenny", age: "22", profession: "intern" },
    { id: 6, name: "tom", age: "21", profession: "admin" },
    { id: 7, name: "rock", age: "25", profession: "developer" },
  ];
  console.log(arr.concat(arr2));
  
  //Write your code here, just console.log
}
