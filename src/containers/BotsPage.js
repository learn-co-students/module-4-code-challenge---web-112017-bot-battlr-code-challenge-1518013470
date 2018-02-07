import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";



class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    specs: false
  }

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => this.setState({bots: bots}))
  }

  addToArmy = (bot) => {
      this.setState(prevState => {
        return ({
        army: [...prevState.army, bot],
        specs: false
      })
    })
  }

  removeFromArmy = (bot) => {
    const botIndex = this.state.army.indexOf(bot)
    const newArmy = this.state.army
    newArmy.splice(botIndex, 1)
    this.setState({
      army: newArmy,
      specs: false
    })
  }

  specsOrCollection = () => {
    if (this.state.specs){
      const inArmy = !!this.state.army.find(bot => bot.id === this.state.specs.id)
      return (
        <BotSpecs
          inArmy={inArmy}
          showCollection={this.showCollection}
          addToArmy={this.addToArmy}
          removeFromArmy={this.removeFromArmy}
          bot={this.state.specs}
        />)
    } else {
      return (<BotCollection showSpecs={this.showSpecs} bots={this.state.bots}/>)
    }
  }

  showSpecs = (e) => {
    const bot = this.state.bots.find(bot => bot.id === parseInt(e.currentTarget.id, 10))
    this.setState({
      specs: bot
    })
  }

  showCollection = (e) => {
    this.setState({
      specs: false
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy showSpecs={this.showSpecs} bots={this.state.army}/>
        {this.specsOrCollection()}
      </div>
    );
  }

}

export default BotsPage;
