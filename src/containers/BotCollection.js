import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  searchBots = () => {
    return this.props.bots.filter(bot => {
      let botName = bot.name.toLowerCase()
      return botName.includes(this.props.searchTerm.toLowerCase())
    })
  }

  renderBots = () => {
    let botResults = this.props.bots;

    if (this.props.searchTerm !== "") {
       botResults = this.searchBots()
    }

    if (botResults !== []) {

      return botResults.map(bot => {
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
