import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.props.bots.map(b => (<BotCard key={ b.id } bot={ b } handleArmyStatus={ this.props.handleArmyStatus }/>)) }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
