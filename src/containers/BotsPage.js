import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    specBot: null
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
        army: [...this.state.army, bot],
        specBot: null
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

  loadSpecs = (bot) => {
    this.setState({
      specBot: bot
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={ this.state.army } handleArmyStatus={ this.removeBotFromArmy }/>
        {!this.state.specBot && <BotCollection bots={ this.state.bots } loadSpecs={ this.loadSpecs }/>}
        {this.state.specBot && <BotSpecs
                                  bot={ this.state.specBot }
                                  goBack={ this.loadSpecs }
                                  enlist={ this.addBotToArmy }
                                  />}
      </div>
    );
  }

}

export default BotsPage;
