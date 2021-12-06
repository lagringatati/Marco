import React from "react";
import "./BotAvatar.css";
import botavatar from "../../assets/bot.png";

/*ordeno y muestro el avatar de Marco*/
function BotAvatar() {
  return <img src={botavatar} className="my-avatar" />;
}

export default BotAvatar;
