let usedCoupons = [];

document.getElementById("bonus-btn").addEventListener("click", function () {
  // common function use
  const coupon = getValueFromInput("coupon-input");
  document.getElementById("coupon-input").value = "";

  // empty check
  if (!coupon) {
    alert("Please enter a coupon code");
    return;
  }

  // already used check
  if (usedCoupons.includes(coupon)) {
    alert("Coupon already used");
    return;
  }

  let bonus = 0;

  // coupon logic
  if (coupon === "WELCOME100") {
    bonus = 100;
  }else {
    alert("Invalid Coupon");
    return;
  }

  // mark used
  usedCoupons.push(coupon);

  // common balance function use
  const currentBalance = getBalance();
  const newBalance = currentBalance + bonus;
  setBalance(newBalance);

  alert(`Bonus ${bonus} Taka Added`);

  // history add
  const history = document.getElementById("history-container");
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Bonus ${bonus} TAKA added using (${coupon}) at ${new Date()}
    </div>
  `;

  history.append(div);
});