import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.yourBotArmy.map((bot) => {
              return <BotCard handleToggleSpecStatus={this.props.handleToggleSpecStatus} bot={bot} key={bot.id} />
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
