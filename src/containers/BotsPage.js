import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    currentBot: ""
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

  toggleCurrentBot = (bot) => {
    if (this.state.currentBot === "") {
      this.setState({ currentBot: bot })
    } else {
      this.setState({ currentBot: "" })
    }
  }

  renderPage = () => {
    if (this.state.currentBot === "") {
      return <BotCollection
        bots={this.state.bots}
        toggleCurrentBot={this.toggleCurrentBot} />
    } else {
      return <BotSpecs
        bot={this.state.currentBot}
        toggleCurrentBot={this.toggleCurrentBot}
        removeArmy={this.removeArmy}
        army={this.state.army}
        addArmy={this.addArmy}/>
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} toggleCurrentBot={this.toggleCurrentBot}/>
        {this.renderPage()}
      </div>
    );
  }

}

export default BotsPage;
