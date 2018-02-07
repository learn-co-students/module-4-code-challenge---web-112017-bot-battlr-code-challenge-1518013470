import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = {
      allBots: []
    }
  }

  componentDidMount(){
    this.getBotData()
    .then(json => this.setState({
      allBots: json
    }, () => console.log(json)))
  }

  getBotData = () => {
    return fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
  }

  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection allBots={this.state.allBots} />
      </div>
    );
  }



}

export default BotsPage;
