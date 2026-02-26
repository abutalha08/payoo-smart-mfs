console.log("Machine added");

// Machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// Machine > balance
function getBalance() {
  const CurrentBalanceInput = document.getElementById("current-balance");
  const CurrentBalance = CurrentBalanceInput.innerText;
  return Number(CurrentBalance);
}

// Machine get  a value -> set balance
function setBalance(value) {
  const CurrentBalanceInput = document.getElementById("current-balance");
  CurrentBalanceInput.innerText = value;
}

// Machine take e id -> hide all -> show the only given id section

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashOut");
  console.log(`Add money- ${addMoney}, Cashout- ${cashOut}`);

  // Hide everyone
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

  // id wala element ta k show koro
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
