import { useEffect, useState } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import TotalBalance from './TotalBalance';
import './css/App.css';

const getSavedExpenses = () => {
    try {
        return JSON.parse(localStorage.getItem('expenses')) || [];
    } catch {
        return [];
    }
};

const App = () => {
    const [expenses, setExpenses] = useState(getSavedExpenses);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses((prev) => [...prev, expense]);
    };

    const updateExpense = (id, updatedExpense) => {
        setExpenses((prev) => prev.map(exp => (exp.id === id ? updatedExpense : exp)));
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter(exp => exp.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <TotalBalance expenses={expenses} />
            <div className="form-and-list">
                <ExpenseForm addExpense={addExpense} />
                <ExpenseList expenses={expenses} updateExpense={updateExpense} deleteExpense={deleteExpense} />
            </div>
        </div>
    );
};

export default App;
