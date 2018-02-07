import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    armyBots: [],
    showingOne: false,
    oneBot: {}
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(data=>this.setState({allBots: data}))
  }

  componentDidMount() {
    this.fetchBots()
  }

  showHelper =(id)=> {
    let found = this.state.allBots.find(bot => bot.id == id)
    this.setState({showingOne: true, oneBot: found})
    console.log(this.state)
  }

  handleBackClick = () => {
    this.setState({showingOne: false, oneBot: {}})
  }

  armyAdder = (event) => {
    let armyGuy = this.state.allBots.find(bot => bot.id == event.target.id)
    if (!this.state.armyBots.includes(armyGuy)) {
      this.setState({armyBots: [...this.state.armyBots, armyGuy]})
    }
  }

  render() {
    return (
      <div>
        this.showHelper()
        <YourBotArmy
          army={this.state.armyBots.length >0 ? this.state.armyBots : []}/>
        {this.state.showingOne ? <BotSpecs bot={this.state.oneBot}
        handleBackClick={this.handleBackClick}
        armyAdder={this.armyAdder}/> :
        <BotCollection
          bots={this.state.allBots}
          showHelper={this.showHelper}/>
        }
      </div>
    );
  }

}

export default BotsPage;
