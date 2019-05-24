const tcgStudents = {
    "2017": ["mercy", "mary", "mark", "cindy", "morale"],
    "2019": ["collen", "maggie","tebogo","njabulo"],
    "2019-june": ["john"],
}
   
const keys = Object.keys(tcgStudents);
for(var i = 0;i < keys.length;i++){
    console.log(keys[i] +" "+ tcgStudents[keys[i]])
}
