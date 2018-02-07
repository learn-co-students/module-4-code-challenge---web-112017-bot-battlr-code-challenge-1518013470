import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => this.setState({ bots: data }))
  }

  removeArmy = (bot) => {
    let newArmy = this.state.army
    let botIndex = newArmy.indexOf(bot)

    newArmy.splice(botIndex, 1)
    this.setState({ army: newArmy })
  }

  addArmy = (bot) => {
    let newArmy = this.state.army

    if (!this.state.army.includes(bot)) {
      this.setState({ army: [...newArmy, bot] })
    }
  }

  render() {
    console.log(this.state.army);
    return (
      <div>
        <YourBotArmy army={this.state.army} removeArmy={this.removeArmy}/>
        <BotCollection bots={this.state.bots} addArmy={this.addArmy} />
      </div>
    );
  }

}

export default BotsPage;
