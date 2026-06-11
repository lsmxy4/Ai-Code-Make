import { useState } from 'react';

const CATEGORY_OPTIONS = ['식비', '교통', '쇼핑', '문화','일급','주급','월급'];
const TYPE_OPTIONS = ['지출', '수입'];

const ExpenseItem = ({ expense, updateExpense, deleteExpense }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedExpense, setEditedExpense] = useState({
        title: expense.title,
        amount: String(expense.amount),
        date: expense.date,
        category: expense.category,
        type: expense.type,
    });

    const handleDelete = () => {
        deleteExpense(expense.id);
    };

    const handleEdit = () => {
        setEditedExpense({
            title: expense.title,
            amount: String(expense.amount),
            date: expense.date,
            category: expense.category,
            type: expense.type,
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setEditedExpense({
            title: expense.title,
            amount: String(expense.amount),
            date: expense.date,
            category: expense.category,
            type: expense.type,
        });
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedExpense((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateExpense(expense.id, {
            ...expense,
            ...editedExpense,
            amount: parseFloat(editedExpense.amount),
        });
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <li className={expense.type === '지출' ? 'expense-item expense editing' : 'expense-item income editing'}>
                <form className="expense-edit-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={editedExpense.title}
                        onChange={handleChange}
                        placeholder="항목명"
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        value={editedExpense.amount}
                        onChange={handleChange}
                        placeholder="금액"
                        min="0"
                        step="100"
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={editedExpense.date}
                        onChange={handleChange}
                        required
                    />
                    <select name="category" value={editedExpense.category} onChange={handleChange}>
                        {CATEGORY_OPTIONS.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select name="type" value={editedExpense.type} onChange={handleChange}>
                        {TYPE_OPTIONS.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <div className="expense-actions">
                        <button type="submit" className="save-button">저장</button>
                        <button type="button" className="cancel-button" onClick={handleCancel}>취소</button>
                    </div>
                </form>
            </li>
        );
    }

    return (
        <li className={expense.type === '지출' ? 'expense-item expense' : 'expense-item income'}>
            <span>{expense.title}</span>
            <span>{expense.amount.toLocaleString()}원</span>
            <span>{expense.date}</span>
            <span>{expense.category}</span>
            <div className="expense-actions">
                <button type="button" className="edit-button" onClick={handleEdit}>수정</button>
                <button type="button" className="delete-button" onClick={handleDelete}>삭제</button>
            </div>
        </li>
    );
};

export default ExpenseItem;