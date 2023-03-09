const ExpensesList = () => {
    const expenses = [
        {
            id: 1,
            name: "Water bill",
            amount: 500.00
        },
        {
            id: 2,
            name: "Electricity bill",
            amount: 600.00
        },
        {
            id: 3,
            name: "Shopping",
            amount: 1000.00
        }
    ];
    return (
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Amount</th>
            </tr>
            {
                expenses.map(expense => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                    </tr>
                ))
            }
        </table>
    );
}

export default ExpensesList;