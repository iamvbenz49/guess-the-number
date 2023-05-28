let numberToBeGuessed = Math.round(Math.random()*20);

document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var number = document.getElementById("numberInput").value;
    processNumber(number);

    // Reset the form
    document.getElementById("numberForm").reset();
  });
  
function processNumber(number) {
    var res = document.getElementById("result");
    if(isNaN(number) || number===''){
        res.querySelector("h1").textContent = "Enter a Number";
        return;
    }
    if(number>numberToBeGuessed){
        res.querySelector("h1").textContent = "Too High"
    }
    else if(number<numberToBeGuessed){
        res.querySelector("h1").textContent = "Too Low";
    }
    else{
        res.querySelector("h1").textContent = "‏‏‎ ‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎You Found it!!"
        res.querySelector("h2").textContent = "Refresh to Start Again";
    }
    console.log(res);
}
  