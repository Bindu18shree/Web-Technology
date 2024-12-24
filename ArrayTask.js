console.log("This is external Javascript file");

//Naming function
function array(){

    console.log("This is named function");

    var place = ["Rajajinagar", "Basweshvarnagar", "Jaynagar", "Malleshwaram", "ChurchStreet"];

    console.log(place);

    for(var i=0; i<place.length; i++){

        console.log(place[i]);
    }

    //Push(Adds the elements to the last index)
    let addingPlace = place.push("Commercial Street");

    console.log(addingPlace);

    console.log(place);

    //pop(deletes the pushed elements)
    let deletingPlace = place.pop();

    console.log(deletingPlace);

    console.log(place);

}

array(); //(invking a named function)

//Arrow function
const arrayNumbers = () => {

    console.log("This is arrow function");

    var numbers = [24, 56, 89, 90, 43];

    console.log(numbers);

    //unshift(Adds the elements to the starting index)
    var unshiftMethod = numbers.unshift(22, 18);

    console.log(unshiftMethod);

    console.log(numbers);


    //shift(Deletes the unshifted elements)
    var shiftMethod = numbers.shift();

    console.log(shiftMethod);

    console.log(numbers);
}

arrayNumbers();

//Self invoking function

(function () {

    console.log("This is self invoking function");

    var months = ["January", "Febraury", "March", "April", "May"];

    console.log(months);

    //Splice(index in which it should be added, numbers of elements to be deleted, element to be added)
     var spliceMethod = months.splice(0, 0, "August");

     console.log(spliceMethod);

     console.log(months);

     //slice(It displays group of elements from the starting index to index)

     var sliceMethod = months.slice(1, 4);

     console.log(sliceMethod);

     console.log(months);


}())

//1
//Differences btw var , let and const

// var : allows duplicate variables; declaration is allowed without initialization

var colors;
console.log(colors);

var colors = "Blue";
console.log(colors);

var colors = "Yellow";
console.log(colors);

//let : do not allow duplicate variables; declaration is allowed without initialization

let name;
console.log(name);

let names = "Bindu";
console.log(names);

//const : duplicate variables are not allowed;  declaration is not allowed, it has to be initialized

const pincode = 562109;

console.log(pincode);

//arrow function

const keywords = () => {

    var colors = "Red";
    console.log(colors);

    var colors = "Green";
    console.log(colors);

    var colors;
    console.log(colors);

    let names = "Shree";
    console.log(names);

    let name;
    console.log(name);

    const pincode = "560073";
    console.log(pincode);

    

}

keywords();

//2
//Differences btw var , let and const

// var : allows duplicate variables; declaration is allowed without initialization

var colors;
console.log(colors);

var colors = "Blue";
console.log(colors);

var colors = "Yellow";
console.log(colors);

//let : do not allow duplicate variables; declaration is allowed without initialization

let lastName;
console.log(lastName);

let initial = "P";
console.log(initial);

//const : duplicate variables are not allowed;  declaration is not allowed, it has to be initialized

const numbers = 562109;

console.log(numbers);

//arrow function

const secondExample = () => {

    var colors = "Red";
    console.log(colors);

    var colors = "Green";
    console.log(colors);

    var colors;
    console.log(colors);

    let lastName = "Shree";
    console.log(lastName);

    let initial;
    console.log(initial);

    const pincode = 560073;
    console.log(numbers);
}

secondExample();


//3
//Differences btw var , let and const

// var : allows duplicate variables; declaration is allowed without initialization

var colors;
console.log(colors);

var colors = "Blue";
console.log(colors);

var colors = "Yellow";
console.log(colors);

//let : do not allow duplicate variables; declaration is allowed without initialization

let contactNumber;
console.log(contactNumber);

let phoneNumber = 2345859040;
console.log(phoneNumber);

//const : duplicate variables are not allowed;  declaration is not allowed, it has to be initialized

const contNumbers = 475869489329;

console.log(contNumbers);

//arrow function

const thirdExample = () => {

    var colors = "Red";
    console.log(colors);

    var colors = "Green";
    console.log(colors);

    var colors;
    console.log(colors);

    let phoneNumber = 987654323;
    console.log(phoneNumber);

    let contactNumber;
    console.log(contactNumber);

    const contNumbers = 786557867757;
    console.log(contNumbers);
}

thirdExample();



