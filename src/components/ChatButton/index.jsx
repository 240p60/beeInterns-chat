import React, { useContext } from 'react';
import { Context } from '../../Context';

import "./ChatButton.scss";

export default function ChatButton() {
  const { whenButtonClick, inputValue } = useContext(Context);

  return (
    <button
      type="submit"
      onClick={e => whenButtonClick(e)}
      disabled={!inputValue}
    >
      <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 34.2724L39.9627 17.1455L0 0.0186768V13.3396L28.5448 17.1455L0 20.9515V34.2724Z" fill={inputValue === '' ? "#d2d2d2" : "#F9C35B"}/>
      </svg>
    </button>
  );
}