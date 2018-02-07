import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    yourBots: []
  }



  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json()).then(data => {
      this.setState({ allBots: data})
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }

  handleClick = (e) => {
    console.log(e)
  }





  render() {

    return (
      <div>
        <YourBotArmy className="bot-army" onClick={this.state.yourBots}/>
        <BotCollection onClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
