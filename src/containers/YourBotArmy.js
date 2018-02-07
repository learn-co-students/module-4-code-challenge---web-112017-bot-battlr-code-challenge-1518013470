import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  displayBots = () => {
    return this.props.army.map(b => {
      return <BotCard key={`army-${b.id}`} bot={ b } handleStatus={ this.props.handleArmyStatus } />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.displayBots() }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
