import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  displayBots = () => {
    return this.props.bots.map(b => {
      return <BotCard key={ b.id } bot={ b } handleStatus={ this.props.loadSpecs }/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.displayBots() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
