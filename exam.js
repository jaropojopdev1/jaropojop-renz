class Account {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

}

class SavingsAccount extends Account {

  showType() {
    return "BankAccount";
  }

}

const savings = new SavingsAccount(500);

console.log(savings.getAmount());
console.log(savings.showType());