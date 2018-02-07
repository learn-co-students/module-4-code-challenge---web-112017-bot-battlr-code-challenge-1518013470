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

  render() {
    return (
      <div>
        this.showHelper()
        <YourBotArmy
          army={this.state.armyBots.length >0 ? this.state.armyBots : []}/>
        {this.state.showingOne ? <BotSpecs bot={this.state.oneBot}/> :
        <BotCollection
          bots={this.state.allBots}
          showHelper={this.showHelper}/>
        }


      </div>
    );
  }

}

export default BotsPage;
