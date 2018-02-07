import React from "react";
// import BotCard from "../components/BotCard";
import AltBotCard from "../components/AltBotCard"

class BotCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {this.props.allBots.map((bot) => {
            return <AltBotCard bot={bot} key={bot.id} handleBotEnlist={this.props.handleBotEnlist}/>
          })}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
