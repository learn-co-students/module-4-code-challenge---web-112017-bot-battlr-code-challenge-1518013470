import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: []
  }

  componentDidMount () {
    this.getBots()
  }

  getBots = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`).then(resp=> resp.json()).then(res =>
      this.setState ({
        allBots:[].concat.apply([],res)
      })
    )
  }

  addBotToArmy = (bot) => {
    this.setState({
      yourBots: this.state.yourBots.concat([bot])
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots}/>
        <BotCollection allBots={this.state.allBots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
