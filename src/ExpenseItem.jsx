import React from 'react';

const ExpenseItem = ({ expense, updateExpense, deleteExpense }) => {
    const handleDelete = () => {
        deleteExpense(expense.id);
    };

    return (
        <li className={expense.type === '지출' ? 'expense-item expense' : 'expense-item income'}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <span>{expense.date}</span>
            <span>{expense.category}</span>
            <button onClick={handleDelete}>삭제</button>
        </li>
    );
};

export default ExpenseItem;