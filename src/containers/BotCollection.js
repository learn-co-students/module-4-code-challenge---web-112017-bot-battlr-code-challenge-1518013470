import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(b => <BotCard showSpecs={this.props.showSpecs} key={b.id} bot={b}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
