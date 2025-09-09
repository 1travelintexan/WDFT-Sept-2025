// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(anEntry) {
    this.entries.push(anEntry);
  }
  getCurrentBalance() {
    console.log(this.entries);
    let total = 0;
    for (let i = 0; i < this.entries.length; i++) {
      const currentEntry = this.entries[i];
      if (currentEntry.type === "income") {
        total += currentEntry.amount;
      } else {
        total -= currentEntry.amount;
      }
    }
    return total;
  }
  getFormattedEntries() {
    const formattedArray = [];
    this.entries.forEach((entry) => {
      const formattedString = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
      formattedArray.push(formattedString);
    });
    console.log(formattedArray);
    return formattedArray;
  }
}
