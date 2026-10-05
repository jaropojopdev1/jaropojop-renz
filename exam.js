class Bank {

  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  displayAmount() {
    return this.#amount;
  }

  deposit() {
    return "Transaction completed";
  }

}

class PremiumAccount extends Bank {

  displayAccountType() {
    return "Savings Account";
  }

  showBenefits() {
    return "Free withdrawals";
  }

  showStatus() {
    return "Active Account";
  }

}

const account = new PremiumAccount(500);

console.log(account.displayAmount());
console.log(account.deposit());
console.log(account.displayAccountType());
console.log(account.showBenefits());
console.log(account.showStatus());