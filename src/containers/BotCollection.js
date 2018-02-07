import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    let allBots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} handleSelectBots={this.props.handleSelectBots}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
