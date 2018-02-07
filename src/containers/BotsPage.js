import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    armyBots: []
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(data=>this.setState({allBots: data}))
  }

  componentDidMount() {
    this.fetchBots()
  }

  armyHelper =(id)=> {
    let found = this.state.allBots.find(bot => bot.id == id)
    if (!this.state.armyBots.includes(found)) {
      this.setState({armyBots: [...this.state.armyBots, found]})
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.armyBots.length >0 ? this.state.armyBots : []}/>
        <BotCollection
          bots={this.state.allBots} armyHelper={this.armyHelper}/>
      </div>
    );
  }

}

export default BotsPage;
