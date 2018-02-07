import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = (props) => {
  //your bot army code here...

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {props.bots.map(b => <BotCard showSpecs={props.showSpecs} key={b.id} bot={b}/>)}
          </div>
        </div>
      </div>
    );

};

export default YourBotArmy;
