var username = "kiran"; //string
var age = 30; //integer
var iLikedSession = false; //boolean
var students = ["Ravi", "smith", "sushnathis"]; //array
var user = {}; //<object width="u=" height="" data=""></object>
user.firstName = "Paturi";
user.lastname = "Kiran";
user.friends = ["Ravi", "John", "dev"];
var getFullName1 = function() { //function declaration.
    return "kiran" + "paturi";
};
//another way of declaring functions.
function getFullName2() {
    return "Kiran" + "Paturi";
}

//function calls
var fullName1 = getFullName1();
var fullName2 = getFullName2();
console.log(fullName1);
console.log(fullName2);