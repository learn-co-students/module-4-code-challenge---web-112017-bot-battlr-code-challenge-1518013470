import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    selectedBot: '',
    armyBots: [],
    detailDisplay: false
  }

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => this.setState({bots: data}))
  }

  handleSelectBots = (option) => {
    this.setState(previousState => {
      return {
        selectedBot: option,
        armyBots: [...previousState.armyBots, this.state.selectedBot]
      }
    })
  }

  //Ran out of time to finish showing the BotSpecs
  handleDetailDisplay = (event) => {
    debugger;
    event.preventDefault();
    this.setState(previousState => {
      return {
        detailDisplay: !previousState.detailDisplay
      }
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy  selectedBot={this.state.selectedBot} armyBots={this.state.armyBots}/>
        <BotCollection bots={this.state.bots} handleSelectBots={this.handleSelectBots} detailDisplay={this.state.detailDisplay} handleDetailDisplay={this.handleDetailDisplay}/>
      </div>
    );
  }

}

export default BotsPage;
