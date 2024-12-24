console.log("This is external javascript file")

//Naming function
function cat(breed){
    console.log("this is cat function")
}
cat();

//Self-invoking function
(function(){
    console.log("This is anonymous function")

}())

//arrow function
var state =()=>{
    console.log("This is arrow function")
}

state();