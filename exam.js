class Account {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends Account {
  showType() {
    return "PesoAccount";
  }
}

const account = new SavingsAccount(1000);
console.log(account.getBalance());
console.log(account.showType());