let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
   let peopleName =[];
 for(let person of persons){
   peopleName.push(person.name)
 }
 let peopleName =persons.map((person)=>person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade =persons.map((person)=>person.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex =[];
for(let person of persons){
  peopleSex.push(person.sex)
}
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleNmae.filter((name)=>name.startsWith("j")||name.startsWith("p")));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleNmae.filter((name)=>name.startsWith("A")||name.startsWith("C")).length);
  
// Log all the filtered male ('M') in persons array
console.log(persons.filter((person)=>person.sex="M"));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>person.sex="F"));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person)=>person.sex="F").filter((person)=>person.name.startsWith("C")||person.name.startsWith("J")));
// Log all the even numbers from peopleGrade array
let evenNumber = peopleGrade.filter((num)=> num% 2===0);
console.log(evenNumber);
// Find the first name that starts with 'J' in persons array and log the object
persons.find((person)=>person.name.startsWith("j"));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person)=>person.name.startsWith("j")));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((person)=>person.name.startsWith("j")&&person.grade>10&&person.sex==="F"));
// Filter all the female from persons array and store in femalePersons array
let femalePersons =persons.filter((person)=>person.sex==="F");
// Filter all the male from persons array and store in malePersons array
let malePersons =persons.filter((person)=>person.sex==="M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)=>{
  return acc+cv
},0)
// Find the average grade
let gradeAvg = peopleGrade.reduce((acc,cv)=>{
  return acc+cv
},0)/peopleGrade.length
// Find the average grade of male
let maleGrade=persons.filter((p)=>p.sex ==="M");
maleGrade.reduce((acc,cv)=>{
  return acc+cv.grade;
},0)/maleGrade.length
// Find the average grade of female
let femaleGrade=persons.filter((p)=>p.sex ==="F");
femaleGrade.reduce((acc,cv)=>{
  return acc+cv.grade;
},0)/femaleGrade.length;
// Find the highest grade
[...peopleGrade].sort((a,b)=>a-b).pop();
// Find the highest grade in male
[...maleGrade].sort((a,b)=>a-b).pop();
// Find the highest grade in female
[...femaleGrade].sort((a,b)=>a-b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJorP=persons.filter((person)=>
person.name.startsWith("j")||person.name.startsWith("P")
)
let gradeNameWithJorP=nameWithJorP.map((person)=>
person.grade);
[...gradeNameWithJorP].sort((a,b)=> a-b).pop()
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let peopleGradeSort= peopleGrade.sort((a,b)=> a-b)
console.log(peopleGradeSort);
// Sort the peopleGrade in descending order
let peopleGradeDescending= peopleGrade.sort((a,b)=> b-a)
console.log(peopleGradeDescending);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let descendingMutate=[...peopleGrade].sort((a,b)=> a-b)
console.log(descendingMutate);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].Sort();
