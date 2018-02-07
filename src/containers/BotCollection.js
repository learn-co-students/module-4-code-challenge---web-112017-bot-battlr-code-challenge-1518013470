import React from "react";
import BotCard from "../components/BotCard";
import BotFilter from "../components/BotFilter";


class BotCollection extends React.Component {
  //your code here

  state = {
    filter: "all"
  }

  setFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  applicableBots = () => {
    if (this.state.filter === "all"){
      return this.props.bots
    } else {
      return this.props.bots.filter(bot => bot.bot_class === this.state.filter)
    }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
        <BotFilter setFilter={this.setFilter}/>
    		<div className="row">
    		  {this.applicableBots().map(b => <BotCard showSpecs={this.props.showSpecs} key={b.id} bot={b}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
