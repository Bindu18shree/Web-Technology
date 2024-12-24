console.log("This is javascrtpt page")

const handleValidation = (event) => {

    const obj1 = {name: "Diya", gender: "Female", weight: 45, age: 23, contactNumber: 98563626263, email: "diya@gmail.com", currentPlace: "Bengalore", maritalStatus: "Single", native: "Gulbarga"};

    const obj2 = {name: "Rohith", gender: "Male", weight: 62, age: 17, contactNumber: 56473727374, email: "Rohith@gmail.com", currentPlace: "Ramanagar", maritalStatus: "Single", native: "Raichur"};
    
    const obj3 = {name: "Rakshith", gender: "Male", weight: 38, age: 21, contactNumber: 7589474838, email: "Rakshith@gmail.com", currentPlace: "Rajajinagar", maritalStatus: "Single", native: "Mangalore"};
   
    const obj4 = {name: "Anusha", gender: "Female", weight: 52, age: 23, contactNumber: 9845321673, email: "anu@gmail.com", currentPlace: "Chitradurga", maritalStatus: "Married", native: "Bangalore"};
    
    const obj5 = {name: "Bhavya", gender: "Female", weight: 49, age: 29, contactNumber: 98462747473, email: "bhavya@gmail.com", currentPlace: "Ramnagar", maritalStatus: "Bidadi", native: "Bangalore"};
    
    

    const multipleObj = [obj1, obj2, obj3, obj4, obj5];

    console.log(multipleObj);

    multipleObj.map((value) => {

        console.log(value.name, value.gender);

    }) ;

    return false;








}