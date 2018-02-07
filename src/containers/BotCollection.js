import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"

class BotCollection extends React.Component {

  state = {
    allBots: [],
    yourBots: []
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json()).then(data => {
      this.setState({ allBots: data})
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }


  handleClick = (event) => {
    const prevState = this.state.yourBots
    this.setState({
      yourBots: [...prevState, event]
    })

  }

  renderBotCards = () => {
    return this.state.allBots.map(bot => <BotCard key={bot.id} bot={bot} onClick={this.handleClick} />)
  }


  render(){
    let botCards = this.renderBotCards();
  	return (
      <div>
        <YourBotArmy className="bot-army" yourBot={this.state.yourBots}/>

  	  <div className="ui four column grid">
    		<div className="row">


    		  Collection of all bots
          {botCards}

    		</div>
  	  </div>

      </div>
  	);
  }

};

export default BotCollection;
