import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderArmy = () => {
    return this.props.army.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleArmy={this.props.removeArmy}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
