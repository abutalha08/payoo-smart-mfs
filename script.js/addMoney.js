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
  if (addMoneyPin == "1234") {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(totalNewBalance);

    // 1.History container k dhore niye ashbo
    const history = document.getElementById("history-container");

    //2.New div create korbo
    const newHistory = document.createElement("div");

    // 3.New div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Add Money Success from ${bankAccount}, Account No. ${bankAccountNumber} at ${new Date()}

          
        </div>
        `;
    // 4.history container e new div append korbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
