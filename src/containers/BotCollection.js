import React from "react";
// import BotCard from "../components/BotCard";
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {this.props.allBots.map((bot) => {
            return <BotCard bot={bot} key={bot.id} handleToggleSpecStatus={this.props.handleToggleSpecStatus}/>
          })}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
