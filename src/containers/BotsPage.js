import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = {
      allBots: [],
      yourArmyBots: []
    }
  }

  componentDidMount(){
    this.getBotData()
    .then(json => this.setState({
      allBots: json
    }, () => console.log(json)))
  }

  getBotData = () => {
    return fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
  }

  addToArmy = (bot) => {
      if (!this.state.yourArmyBots.find((item) => item===bot)){
        this.setState({
          yourArmyBots: [...this.state.yourArmyBots, bot]
        })
      } else {
        alert("This bot has already been added")
      }
  }

  removeFromArmy = (bot) => {
    let currentBots = this.state.yourArmyBots
    let index = currentBots.indexOf(bot)
    currentBots.splice(index,1)
    this.setState({
      yourArmyBots: currentBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourArmyBots={this.state.yourArmyBots} clickBotFunction={this.removeFromArmy}/>
        <BotCollection allBots={this.state.allBots} clickBotFunction={this.addToArmy} />
      </div>
    );
  }


}

export default BotsPage;
