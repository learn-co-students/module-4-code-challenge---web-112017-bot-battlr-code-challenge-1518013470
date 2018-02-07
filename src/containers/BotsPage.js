import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(json => this.setState({
        bots: json
      }))
  }

  addBotToArmy = (bot) => {
    if (!this.state.army.includes(bot)) {
      this.setState({
        army: [...this.state.army, bot]
      })
    }
  }

  removeBotFromArmy = (bot) => {
    let newArmy = this.state.army
    newArmy.splice(newArmy.indexOf(bot), 1)
    this.setState({
      army: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={ this.state.army } handleArmyStatus={ this.removeBotFromArmy }/>
        <BotCollection bots={ this.state.bots } handleArmyStatus={ this.addBotToArmy }/>
      </div>
    );
  }

}

export default BotsPage;
