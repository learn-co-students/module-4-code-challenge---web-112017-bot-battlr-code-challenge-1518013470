import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  // armyAdder =(event) => {
  //   let id = event.target.parentElement.id
  //   return this.props.armyHelper(id)
  // }

  detailShower = (event) => {
    let id = event.target.parentElement.id
    return this.props.showHelper(id)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} detailShower={this.detailShower}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
