import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let botCards = this.props.yourArmyBots.map((bot) =>(
      <BotCard bot={bot} clickBotFunction={this.props.clickBotFunction}/>) )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botCards}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
