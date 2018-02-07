import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => {
    if (this.props.bots !== []) {
      return this.props.bots.map(bot => {
        return <BotCard
          bot={bot}
          key={bot.id}
          toggleCurrentBot={this.props.toggleCurrentBot}/>
      })
    }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
