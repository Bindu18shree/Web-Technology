console.log("This is array operation");

function array(){

    console.log("Array");

    var city = ["bengaluru", "Shivmoga", "Tumkur", "Kerala"];

    console.log(city);

    for(var i = 0; i < city.length; i++){

        console.log(city[i]);
    }

    let addingCity = city.push("Nelmangla")

    console.log(addingCity);

    let removingElement = city.pop();
    console.log(removingElement);
    console.log(city);


    var numbers = [2, 98, 65, 89, 76, 77];
    console.log(numbers);
    var unshift = numbers.unshift(58);
    console.log(unshift);
    console.log(numbers);

    var returnShift = numbers.shift();
    console.log(returnShift);
    console.log(numbers);

}

array();

//Splice and slice

const arrayMethod = () => {

    console.log("This is arrow Function");

    var list = ["pink", "red", "blue", "green", "black"];

    console.log(list);

    //Splice
    var res = list.splice(1, 0, "Purple", "Orange", "Lavender");
    console.log(res);
    console.log(list);

    //slice
    var groupOfElements = list.slice(2, 5);
    console.log(groupOfElements);

};

arrayMethod();

// 3 higherorder function methods(works only in arrays) : map, reduce and filter

//map
const higherOrder = () =>{

    let age = [21, 13, 67, 92, 76];

    return age;
};

const allAges = higherOrder();
console.log(allAges);
const mappedValues = allAges.map((value, key) =>{  // map will take function inside the map

    console.log(value, "      ", key);

    return value+5;
});

console.log(mappedValues);

//filter

const filteringValues = allAges.filter((value) => {

    return value > 13;
});

console.log(filteringValues);

//reduce
const numbers = [2, 6, 32, 12, 54, 21];

const reduce = numbers.reduce((curr, acc) => {

    return curr+acc;
});

console.log(reduce);

// callback function

function laptop(){

    console.log("This is laptop function");

    function internet(){

        console.log("This is keyboard function");
    }

    internet();
}

laptop();


setTimeout(function () {

    console.log("This is setTimeout function");

}, 3000);






