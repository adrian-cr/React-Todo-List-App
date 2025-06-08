import React, {useEffect, useState} from 'react'

export default function InputField({ onSave, title, onCancel, main, onClick}) {
  const [saved, setSaved] = useState(false);
  const [text, setText] = useState(main? "" : title);
  useEffect(() => {
    setText(main? "" : title)
  }, [saved])

  const handleSave = () => {
    const trimmed = text.trim();
    if (trimmed) {
      onSave(trimmed);
      setSaved(true);
    }
  };
  return (
    <div className={`el-container input-container${main? " main-input" : ""}`}>
      {!main && <button className="task-button cancel-button" onClick={onCancel}>❌</button>}
      <input
        className="el-body input-body"
        id="task-title-field"
        type="text"
        value={text}
        autoFocus
        placeholder={main? "Add new task..." :  ""}
        onClick={main? onClick : null}
        onChange={e => {
            setText(e.target.value);
            setSaved(false);
          }
        }
      ></input>
      <button className="task-button save-button" onClick={e => handleSave()}>
        <img src="./images/check_icon.svg" />
      </button>
    </div>
  )
}
