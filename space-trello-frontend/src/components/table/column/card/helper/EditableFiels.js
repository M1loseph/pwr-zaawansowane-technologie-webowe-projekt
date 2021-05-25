import React, { useRef, useState } from "react";

const confirm = "Enter";

const EditableField = ({ className = "", value, setValue }) => {
  const [disabledEdit, setDisabledEdit] = useState(true);
  const inputRef = useRef(null);
  return (
    <input
      type="text"
      className={`trello-editable-field ${className}`}
      value={value}
      readOnly={disabledEdit}
      onClick={() => setDisabledEdit(false)}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => setDisabledEdit(true)}
      ref={inputRef}
      onKeyPress={(e) => {
        const { key } = e;
        if (key === confirm) {
          setDisabledEdit(true);
          if (inputRef !== null) {
            inputRef.current.blur();
          }
        }
      }}
    />
  );
};

export default EditableField;
