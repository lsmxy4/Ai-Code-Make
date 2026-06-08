import React from 'react';

const TotalBalance = ({ expenses }) => {
    const income = expenses.filter(exp => exp.type === '수입').reduce((acc, exp) => acc + exp.amount, 0);
    const spending = expenses.filter(exp => exp.type === '지출').reduce((acc, exp) => acc + exp.amount, 0);
    const balance = income - spending;

    return (
        <div className="total-balance">
            <h2>잔액: {balance.toLocaleString()} 원</h2>
            <h3>총 수입: {income.toLocaleString()} 원</h3>
            <h3>총 지출: {spending.toLocaleString()} 원</h3>
        </div>
    );
};

export default TotalBalance;