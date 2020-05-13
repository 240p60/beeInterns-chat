import React from 'react';

import './ChatMessage.scss';
import BotAvatar from '../../img/botAvatar.svg';
import UserAvatar from '../../img/userAvatar.svg';
import RainImg from '../../img/rain.svg';
import CloudImg from '../../img/cloud.svg';
import SunImg from '../../img/sun.svg';

export default function ChatMessages({ isInputFocused, messageList }) {

  const list = messageList.map(item => {
    return (
      <div
        key={item.id}
        className="message__item"
      >
        <div className="message__item_avatar">
          <img
            src={item.isUser? UserAvatar : BotAvatar}
            alt="avatar icon"
          />
        </div>
        <div
          className={[
            "message__item_text",
            item.isUser ? 'yellow' : 'white'
            ].join(' ')}
        >
          {item.img ? (
            <img
              src={item.img === "Rain" ? RainImg : item.img === "Clouds" ? CloudImg : SunImg}
              alt="weather"
            />
          ) : ''}
          {item.text}
        </div>
      </div>
    )
  });

  const animationWrite = (
    <div
      className="message__item message__animation"
    >
      <div className="message__item_avatar">
        <img
          src={UserAvatar}
          alt="avatar icon"
        />
      </div>
      <div className="message__item_text message__animation_write yellow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {isInputFocused ? animationWrite : null}
      {list}
    </React.Fragment>
  );
}