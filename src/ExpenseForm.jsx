import { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('식비');
    const [type, setType] = useState('지출');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { id: Date.now(), title, amount: parseFloat(amount), date, category, type };
        addExpense(newExpense);
        setTitle('');
        setAmount('');
        setDate('');
        setCategory('식비');
        setType('지출');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="항목명" required />
            <input type="number" min="0" step="100" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="금액" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="식비">식비</option>
                <option value="교통">교통</option>
                <option value="쇼핑">쇼핑</option>
                <option value="문화">문화</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="지출">지출</option>
                <option value="수입">수입</option>
            </select>
            <button type="submit">추가</button>
        </form>
    );
};

export default ExpenseForm;