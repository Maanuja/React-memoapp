import React, { useState } from 'react';

const AddMemo = ({AddMemoHandler}) => {

    const [memoText, setMemoText] = useState('');

    const characterslimit = 200;

    const handleChange = (e) => {
        if (characterslimit - e.target.value.length >= 0) {
            setMemoText(e.target.value);
        }
    }

    const saveMemo = () => {
        if (memoText.trim().length > 0) {
            AddMemoHandler(memoText);
            setMemoText('');
        }
    }

    return (
        <div className="add-memo">
            <textarea placeholder="Add a memo..." 
                onChange={handleChange} value={memoText}>
            </textarea>
            <div className="add-memo-footer">
                <small>{characterslimit - memoText.length} left</small>
                <button className="add-memo-btn" onClick={saveMemo}>Add Memo</button>
            </div>
        </div>
    );
}
  
export default AddMemo;