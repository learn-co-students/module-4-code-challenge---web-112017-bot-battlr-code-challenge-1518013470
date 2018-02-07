import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import Search from '../components/Search'

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    currentBot: "",
    searchTerm: ""
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

  changeSearchTerm = (input) => {
    this.setState({ searchTerm: input })
  }

  renderPage = () => {
    if (this.state.currentBot === "") {
      return <BotCollection
        bots={this.state.bots}
        searchTerm={this.state.searchTerm}
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
        <Search changeSearchTerm={this.changeSearchTerm}/>
        <br />
        {this.renderPage()}
      </div>
    )
  }

}

export default BotsPage;
