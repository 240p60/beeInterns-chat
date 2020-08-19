import React, { useContext } from 'react';
import { Context } from '../../Context';

import './ChatInput.scss';

export default function ChatInput() {
  const {setInputValue, isInputFocusedSet, inputValue} = useContext(Context);

  return (
    <input
      className="input__message"
      value={inputValue}
      onChange={e => {
        setInputValue(e.target.value);
        if (e.target.value !== '')
          isInputFocusedSet(true);
        else
          isInputFocusedSet(false);
      }}
      type="text"
    />
  );
}