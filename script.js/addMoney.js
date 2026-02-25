document.getElementById("add-money-btn").addEventListener("click", function () {
  //1.Get Bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a bank");
    return;
  }

  //2.Get Bank account NUmber
  const bankAccountNumber = getValueFromInput("add-money-number");
  if (bankAccountNumber.length !== 11) {
    alert("Please enter Account Number");
    return;
  }

  //3. Get amount to add
  const addAmount = getValueFromInput("add-money-amount");
  console.log(addAmount);

  if (addAmount <= 0) {
    alert("Invalid amount");
    return;
  }

  // 4. Get current Balance
  const CurrentBalance = getBalance();

  // 4.Calculate total balance

  const totalNewBalance = Number(addAmount) + CurrentBalance;
  setBalance(totalNewBalance);

  // 5. get pin and verify
  const addMoneyPin = getValueFromInput("add-money-pin");
  if (addMoneyPin !== "1234") {
    alert("Invalid Pin Number");
    return;
  } else {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(totalNewBalance);
  }
});
