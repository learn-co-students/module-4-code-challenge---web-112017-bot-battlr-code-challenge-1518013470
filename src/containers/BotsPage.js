import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    selectedBot: '',
    armyBots: [],
  }

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => this.setState({bots: data}))
  }

  handleSelectBots = (option) => {
    this.setState({
      selectedBot: option
    })
  }

  //HAVE MY SELECTED BOT BUT NEED TO ADD IT INTO MY ARMY ARRAY

  // addToArmy = () => {
  //   this.setState(previousState => {
  //     //armyBots: this.state.armyBots.push(this.state.selectedBot)
  //     return {
  //       armyBots: [...previousState.armyBots, this.state.selectedBot]
  //     }
  //
  //   })
  // }


  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy  selectedBot={this.state.selectedBot}/>
        <BotCollection bots={this.state.bots} handleSelectBots={this.handleSelectBots}/>
      </div>
    );
  }

}

export default BotsPage;
