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

  handleBotEnlist = (bot) => {
    console.log('hit')
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
    let currentArmy = this.state.yourBotArmy
    if (this.state.yourBotArmy.includes(bot)) {
      currentArmy = this.state.yourBotArmy.splice(this.state.yourBotArmy.indexOf(bot), 1)
      this.setState({
        yourBotArmy: [...currentArmy]
      })
    }
  }

  render() {
    return (
      <div>
        <BotCollection allBots = {this.state.allBots} handleBotEnlist = {this.handleBotEnlist} />
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} handleBotRemove={this.handleBotRemove}/>
      </div>
    );
  }

}

export default BotsPage;
