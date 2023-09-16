const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
const dummy = [
  { name: "dummy1", age: 23, profession: "developer" },
  { name: "dummy2", age: 27, profession: "admin" },
];


// 1. Print Developers
function printDeveloper() {
  for(let i=0; i<data.length; i++){
    if(data[i].profession == "developer"){
      console.log(data[i].name)
    }
  }
}

// 2. Add Data
function addData() {
  let nam1 = prompt("Enter your Name")
  let age1 = prompt("Enter your Age")
  let prof = prompt("Enter your profession")
  data.push({
    name: nam1,
    age: age1,
    profession: prof
  })
}

// 3. Remove Admins
function removeAdmin() {
  for (let i =0; i<data.length; i++){
    if(data[i].profession=="admin"){
      data.splice(i,1)
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  let con_data = data.concat(dummy)
  console.log(con_data)
}

// 5. Average Age
function averageAge() {
  let sum =0;
  for(let i=0; i<=data.length-1; i++){
    sum = sum + data[i].age
  }
  let avg= sum/(data.length)
  console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
  let count=0;
  for(let i =0; i<data.length; i++){
    if(data[i].age>25){
      count++;
    }
  }
  if(count == 1){
    console.log("There is only "+ count +" person whose age is more than 25 years")
  }else if(count> 1){
    console.log("There are "+count+" people more than age 25 years")
  }else{
    console.log(" There are no one whose age is more than 25 years")
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let unqprf = [...new Set(data.map(x => x.profession))]
  console.log(unqprf)
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => a.age - b.age)
  console.log(con_data)
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i =0; i<data.length; i++){
    if(data[i].name == "john"){
      data[i].profession = "manager" 
    }
  }
  console.log(data)
}

// 10. Profession Count
function getTotalProfessions() {
  let req_data = {}
  for (let i =0; i<data.length; i++){
    if((req_data[data[i].profession])== undefined){
      req_data[data[i].profession] = 1
    }else{
      req_data[data[i].profession]+=1
    }
  }
  console.log(req_data)
}
