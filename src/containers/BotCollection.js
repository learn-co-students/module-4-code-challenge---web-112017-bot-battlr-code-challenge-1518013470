import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    const renderCards = this.props.bots.map(bot =>
      <BotCard bot={bot} key={bot.id} enlistBot={this.props.enlistBot}/>
    )
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {renderCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
