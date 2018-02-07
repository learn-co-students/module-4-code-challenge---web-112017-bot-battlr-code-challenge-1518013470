import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  //ITERATE OVER EACH BOT IN MY ARMY AND DISPLAY USING THE SELECTED BOT BEING PASSED DOWN FROM PROPS, THEN CALL myBotArmy IN RENDER

  //let myBotArmy = this.props.armyBot.map(bot => <BotCard bot={this.props.selectedBot} key={this.props.selectedBot.id}/>)

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">

            <BotCard bot={this.props.selectedBot} key={this.props.selectedBot.id}/>
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
