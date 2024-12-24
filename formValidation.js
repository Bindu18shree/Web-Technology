console.log("This page is working");

const handleValidation = (event) => {

   // console.log(event);

   //const userValue = event.target.email.value;

   // const userName = event.target.email.name;

   // console.log(userValue + "    " + userName);
   //  return false;

   //const ref = {name: "Laptop", os: "windows 10", mouse: "wireless"};
   //const ref1 = {name: "Mobile", os: "Android", mouse:"none"};

   //const multipleRef = [ref, ref1];

   //console.log(multipleRef);

   // multipleRef.map((value) => {

   // console.log(value.name);
   // });


   const userName = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const contactNumber = document.getElementById("number").value;

   if (!userName.trim() != "" || !email.trim() != "" || !contactNumber.trim() != "") {

      alert("Field is blank");
   }

   if (userName.length > 3) {

      console.log("Valid Username");

      document.getElementById("UserNameError").innerHTML = "";
   } else {

      document.getElementById("UserNameError").innerHTML = "<span style = 'color : red'>This is invalid username</span>"

      console.log("Invalid username");
   }

   if (email.includes("@gmail.com") || email.includes(".in")) {

      console.log("Valid email");
   }

   else {

      console.log("Invalid email");
   }

   if (contactNumber.length == 10) {

      console.log("Valid contact number");

      document.getElementById("contactNumberError").innerHTML = "";
   }

   else {

      console.log("invalid contact number");

      document.getElementById("contactNumberError").innerHTML = "<span style = 'color : red'>This is invalid contact number</span>";
   }

   if(userName.length > 3 && contactNumber.length == 10){

      let formData = {

         userName: userName, 
         email: email,
         contactNumber: contactNumber
      };

      console.log(formData);

      let convertingStringData = JSON.stringify(formData)

      console.log(convertingStringData);

      localStorage.setItem("userDetails", convertingStringData);

      return true;
   }

   else{

      return false;
   }
};