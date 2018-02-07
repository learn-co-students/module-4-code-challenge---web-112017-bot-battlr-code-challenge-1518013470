import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  
  render(){
    let botCards = this.props.allBots.map((bot) =>(
      <BotCard bot={bot}/>) )

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
