const handleValidation = (event) => {

    const userName = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const contactNumber = document.getElementById("number").value;
   const password = document.getElementById("password").value;
   const password2 = document.getElementById("reEnterPassword").value;
 
   if (!userName.trim() != "" || !email.trim() != "" || !contactNumber.trim() != "") {
 
      alert("Field is blank");
   }
 
   if (userName.length > 3) {
 
      console.log("Valid Username");
   } else {
 
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
   }
 
   else {
 
      console.log("invalid contact number");
   }
 
   if(password.length>5){
 
    console.log("Valid password");
   } 
 
   else {
 
    console.log("Invalid password");
   }
 
   if(password2 == password){
 
    console.log("Valid password");
   }
 
   else {
 
    console.log("Password doesn't match");
   }
 
 
   return false;
 };