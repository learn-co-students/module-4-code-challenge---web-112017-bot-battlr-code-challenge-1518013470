import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

  render(){
    let allBots;

    if (this.props.detailDisplay === true) {
      allBots = this.props.bots.map(bot => <BotSpecs bot={bot} />)
    } else {
      allBots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} handleSelectBots={this.props.handleSelectBots} handleDetailDisplay={this.props.handleDetailDisplay}/>)
    }
    //allBots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} handleSelectBots={this.props.handleSelectBots}/>)

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
