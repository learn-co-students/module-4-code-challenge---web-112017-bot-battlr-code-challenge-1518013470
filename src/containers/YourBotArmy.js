import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  handleClick = (event) => {
    console.log(event)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.length > 0 ? this.props.army.map(bot => <BotCard key={bot.id} bot={bot} onClick={this.handleClick}/>) : null}
          </div>
        </div>
      </div>
    );
  }

};


export default YourBotArmy;
