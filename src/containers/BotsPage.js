import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotSearch from '../components/BotSearch'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    specBot: null,
    filter: ""
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

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filteredBots() {
    return this.state.bots.filter(b => b.bot_class.includes(this.state.filter))
  }

  render() {
    return (
      <div>
        <YourBotArmy
          army={ this.state.army }
          handleArmyStatus={ this.removeBotFromArmy }
        />
        {this.state.specBot ?
          <BotSpecs
            bot={ this.state.specBot }
            goBack={ this.loadSpecs }
            enlist={ this.addBotToArmy }
            /> :
          <div>
            <BotSearch
              changeFilter={ this.changeFilter }
              filter={ this.state.filter }/>
            <BotCollection
              bots={ this.filteredBots() }
              loadSpecs={ this.loadSpecs }
              />
          </div>
        }
      </div>
    );
  }

}

export default BotsPage;
