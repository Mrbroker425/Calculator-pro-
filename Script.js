//we collecting whatever the user will enter 
let results = document.getElementById("inputtext");

//Now we need to write the actions for those functions
let Calculator=(number)=>{
    //we need to use eval() to calculate the results
 results.value = results.value+number;

}

function Returns(){
    try {
        results.value = eval(results.value);
    } catch (error) {
        alert("Errors")
    }
}
function clr(){
    results.value = "";
}
function D(){
    results.value = results.value.slice(0,-1);
}
