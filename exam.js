class Account {

  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  displayAmount() {
    return this.#amount;
  }

}

class SavingsAccount extends Account {

  displayAccountType() {
    return "BankAccount";
  }

}

const savings = new SavingsAccount(500);

console.log(savings.displayAmount());

console.log(savings.displayAccountType());