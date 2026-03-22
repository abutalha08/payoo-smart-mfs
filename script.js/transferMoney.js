document.getElementById("transfer-btn").addEventListener("click", function () {
  // 1.Get the agent number and validate
  const userAccountNumber = getValueFromInput("user-number");
  // console.log(AgentNumber);
  if (userAccountNumber.length !== 11) {
    alert("Invalid User Account Number");
    return;
  }

  // 2.Get the amount
  const transferAmount = getValueFromInput("transfer-amount");
  // console.log(transferAmount);

   // 3 validation add 
if (!transferAmount || Number(transferAmount) <= 0) {
  alert("Invalid Amount");
  return;
}

  // 4.Get the Current balance

  const CurrentBalance = getBalance();

  //5.Calculate the new balance
  const newBalance = CurrentBalance - Number(transferAmount);
  // console.log('New balance',newBalance);
  if (newBalance < 0) {
    alert("Insufficient Amount");
    return;
  }

  //6.Get the pin and verify
  const transferPin = getValueFromInput("transfer-pin");
  if (transferPin == "1234") {
    //6.1 if true :: show an alert > set balance
    alert("Transfer Successful");

    setBalance(newBalance);

    // 1.History container k dhore niye ashbo
    const history = document.getElementById("history-container");

    //2.New div create korbo
    const newHistory = document.createElement("div");

    // 3.New div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Transfer ${transferAmount} TAKA Successful to ${userAccountNumber}, at ${new Date()}

          
        </div>
        `;
    // 4.history container e new div append korbo
    history.append(newHistory);
  } else {
    //6.2 if false :: show an error alert > return
    alert("Invalid pin");
    return;
  }
});
