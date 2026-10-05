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

const savings = new DepositAccount(500);

console.log(savings.displayAmount());

console.log(savings.displayAccountType());