document.getElementById("pay-bill-btn").addEventListener("click", function () {

    //1.Get the utility section
  const utilityBills = getValueFromInput("pay-bill-utility");
  if (utilityBills == "Select utility") {
    alert("Please select a utility");
    return;
  }
  // 2.Get the Biller account number and validate
  const billerAccountNumber = getValueFromInput("biller-number");
  // console.log(billerAccountNumber);
  if (billerAccountNumber.length !== 11) {
    alert("Invalid User Account Number");
    return;
  }

  // 2.Get the amount
  const payBillAmount = getValueFromInput("pay-bill-amount");
  // console.log(payBillAmount);

  // 3 validation add 
if (!payBillAmount || Number(payBillAmount) <= 0) {
  alert("Invalid Amount");
  return;
}

  // 4.Get the Current balance

  const CurrentBalance = getBalance();

  //5.Calculate the new balance
  const newBalance = CurrentBalance - Number(payBillAmount);
  // console.log('New balance',newBalance);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  //6.Get the pin and verify
  const payBillPin = getValueFromInput("pay-bill-pin");
  if (payBillPin == "1234") {
    //5.1 if true :: show an alert > set balance
    alert("Pay Bill Successful");

    setBalance(newBalance);

    // 1.History container k dhore niye ashbo
    const history = document.getElementById("history-container");

    //2.New div create korbo
    const newHistory = document.createElement("div");

    // 3.New div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Pay Bill  ${payBillAmount} TAKA Successful to ${billerAccountNumber}, at ${new Date()}

          
        </div>
        `;
    // 4.history container e new div append korbo
    history.append(newHistory);
  } else {
    //5.2 if false :: show an error alert > return
    alert("Invalid pin");
    return;
  }
});
