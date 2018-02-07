import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  displayBots = () => {
    let filterBots = this.props.bots.filter(b => b.bot_class.includes(this.props.filter))
    return filterBots.map(b => <BotCard key={ b.id } bot={ b } handleStatus={ this.props.loadSpecs }/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.props.bots.length && this.displayBots() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

// { this.props.bots.map(b => (<BotCard key={ b.id } bot={ b } handleStatus={ this.props.loadSpecs }/>)) }
