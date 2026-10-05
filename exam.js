class Bank {

  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  displayAmount() {
    return this.#amount;
  }

}

class DepositAccount extends Bank {

  displayAccountType() {
    return "BankAccount";
  }

}

class PremiumAccount extends DepositAccount {

  showBenefits() {
    return "Free transactions";
  }

  showStatus() {
    return "Premium Account";
  }

}

const account = new PremiumAccount(500);

console.log(account.displayAmount());
console.log(account.displayAccountType());
console.log(account.showBenefits());
console.log(account.showStatus());