import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  armyAdder =(event) => {
    let id = event.target.parentElement.id
    return this.props.armyHelper(id )
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} armyAdder={this.armyAdder}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
