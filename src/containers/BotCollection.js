import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  // constructor(props) {
  //   super(props)
  //   console.log(props)
  // }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          Collection of all bots
          {/*console.log(this.props.allBots.map(bot=> bot.id))*/}
    		  {this.props.allBots.map(bot => <BotCard key={bot.id} bot={bot} handleClickAdd={this.handleClickAdd}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
