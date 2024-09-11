function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input"
    }
    const profit = income - expenses;
    const tax = profit * 0.20;

    return tax
}
