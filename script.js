const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
  
  data.forEach((person) => {
    if( person.profession == "developer" ){
      console.log(person);
    }
  });
}

  
  // 2. Add Data
  function addData() {
    // const data1 =[];
    const name = prompt("enter your name");
    const age = prompt("enter your age");
    const profession =prompt("enter your profession");
    const newperson ={ name: name, age: parseInt(age), profession: profession };
    
    data.push(newperson)
    console.log(data)

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const withoutAdmin = data.filter((person) => person.profession.toLowerCase() !== "admin");
    console.log(withoutAdmin)
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const additionalData = [
      { name: "alice", age: 26, profession: "designer" },
      { name: "bob", age: 29, profession: "manager" },
    ];
    const  concData= data.concat(additionalData);
    console.log(concData);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / data.length;
    console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    data.forEach((person) => {
      if( person.age > 25 ){
        console.log(person);
      }
      
    });
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = data.map((person) => person.profession);
    const uniqueProfessions = Array.from(new Set(professions));
    console.log( uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedData = data.slice().sort((a, b) => a.age - b.age);
    console.log(sortedData);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((person) => {
      if(person.name.toLowerCase() == "jhon")
      {
        person.profession = "manager";
        
      }
      console.log(person)
    }) 
    console.log(data)
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    
  const professionCount = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;
    return count;
  }, {});
  console.log( professionCount);
  }