import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = {
      allBots: [],
      yourArmyBots: [],
      viewBot: null
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

  setViewBot = (bot) => {
    this.setState({
      viewBot: bot
    })
  }

  resetViewBot = () => {
    this.setState({
      viewBot: null
    }, console.log('viewBot state is null'))
  }

  render() {
    let viewBotDisplay;
    if (this.state.viewBot){
      viewBotDisplay = <BotSpecs bot={this.state.viewBot} showAllBotsFunction={this.resetViewBot} addBotsFunction={this.addToArmy} />
    } else {
      viewBotDisplay = <BotCollection allBots={this.state.allBots} clickBotFunction={this.setViewBot} />
    }
    return (
      <div>
        <YourBotArmy yourArmyBots={this.state.yourArmyBots} clickBotFunction={this.removeFromArmy}/>
        {viewBotDisplay}
      </div>
    );
  }


}

export default BotsPage;
