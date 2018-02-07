import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  state = {
    bots: [],
    botRoster: []
  }

  componentDidMount = () => {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(URL)
    .then(res => res.json())
    .then(botData => this.setState({
      bots: botData
    }))
  }

  enlistBot = (e) => {
    let exists = false;
    this.state.botRoster.forEach(bot => {
      if (bot.name == e.name) {
        exists = true;
        console.log('this bot is already here');
      }
    })
    if (!exists) {
      console.log('no matching bots, add it!');
      this.setState({
        botRoster: this.state.botRoster.concat([e])
      })
    }
  }

  removeBot = (e) => {
    let newRoster = this.state.botRoster;
    this.state.botRoster.forEach(bot => {
      if (bot.name == e.name) {
        let index = this.state.botRoster.indexOf(bot);
        if (index > -1) {
          newRoster.splice(index, 1);
        }
        this.setState({
          botRoster: newRoster
        })
      }
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botRoster={this.state.botRoster} removeBot={this.removeBot} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
