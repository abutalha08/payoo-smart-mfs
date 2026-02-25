console.log("Machine added");

// Machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  // console.log(id, value);
  return value;
}


// Machine > balance 
function getBalance(){
    const CurrentBalanceInput = document.getElementById('current-balance');
    const CurrentBalance = CurrentBalanceInput.innerText ;
    return Number(CurrentBalance);

}

// Machine get  a value -> set balance 
function setBalance(value){
    const CurrentBalanceInput = document.getElementById('current-balance');
    CurrentBalanceInput.innerText = value; 

}