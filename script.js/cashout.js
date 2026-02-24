document.getElementById('cashout-btn').addEventListener('click',function(){
    // console.log("withdraw button clicked");

    // 1.Get the agent number and validate 
    const AgentNumberInput = document.getElementById('agent-number');
    const AgentNumber = AgentNumberInput.value;
    // console.log(AgentNumber);
    if(AgentNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }

    // 2.Get the amount,validate and convert into number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);

    // 3.Get the Current balance,validate and convert into number
    const CurrentBalanceInput = document.getElementById('current-balance');
    const CurrentBalance = CurrentBalanceInput. innerText;
    // console.log(CurrentBalance);

    //4.Calculate the new balance
    const newBalance = Number(CurrentBalance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    
    //5.Get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    if(cashoutPin == "1234"){
        //5.1 if true :: show an alert > set balance
        alert("Cashout Successful");
        console.log("New Balance",newBalance); 
        CurrentBalanceInput.innerText = newBalance;
    }else{
        //5.2 if false :: show an error alert > return
        alert("Invalid pin");
        return;
    }
    // console.log(cashoutPin);
});