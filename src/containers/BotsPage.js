import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => this.setState({bots: bots}))
  }

  addOrRemoveFromArmy = (e) => {
    const botId = parseInt(e.currentTarget.id, 10)
    const bot = this.state.army.find(bot => bot.id === botId)
    if (!bot){
      const bot = this.state.bots.find(bot => bot.id === botId)
      this.setState(prevState => {
        return ({
        army: [...prevState.army, bot]
      })
    })
    } else {
      const botIndex = this.state.army.indexOf(bot)
      const newArmy = this.state.army
      newArmy.splice(botIndex, 1)
      this.setState({
        army: newArmy
      })
    }
  }



  render() {
    return (
      <div>
        <YourBotArmy addOrRemoveFromArmy={this.addOrRemoveFromArmy} bots={this.state.army}/>
        <BotCollection addOrRemoveFromArmy={this.addOrRemoveFromArmy} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
