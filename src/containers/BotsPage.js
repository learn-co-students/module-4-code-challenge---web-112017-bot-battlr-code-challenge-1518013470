import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
    super(props)

    this.state = {
      allBots: [],
      yourBotArmy: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(json => this.setState({
      allBots: json
    }))
  }

  handleBotClick = (bot) => {

    this.state.yourBotArmy.includes(bot) ? this.handleBotRemove(bot) : this.handleBotEnlist(bot)

  }

  handleBotEnlist = (bot) => {

    let currentArmy = this.state.yourBotArmy
    if (!this.state.yourBotArmy.includes(bot)) {
      this.setState({
        yourBotArmy: [...currentArmy, bot]
      })
    }
    else {
      alert("Already enlisted")
    }
  }

  handleBotRemove = (bot) => {
    const currentArmy = this.state.yourBotArmy.slice()
    currentArmy.splice(this.state.yourBotArmy.indexOf(bot), 1)
    if (this.state.yourBotArmy.includes(bot)) {
      this.setState({
        yourBotArmy: currentArmy
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} handleBotClick={this.handleBotClick}/>
        <BotCollection allBots = {this.state.allBots} handleBotClick = {this.handleBotEnlist} />

      </div>
    );
  }

}

export default BotsPage;
