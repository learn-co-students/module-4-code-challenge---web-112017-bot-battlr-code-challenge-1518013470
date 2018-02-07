import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    botArmy: [],
  }

  render() {
    return (
      <div>
        <YourBotArmy addBotToArmy={this.addBotToArmy} botArmy={this.state.botArmy}/>
        <BotCollection addBotToArmy={this.addBotToArmy} allBots={this.state.allBots}/>
        {/* put your components here */}
      </div>
    );
  }

  componentDidMount() {
    this.getBots()
    .then(json => this.setState({allBots: json}))
  }

  getBots = () => {
    const initRequestUrl = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    return fetch( initRequestUrl )
        .then(resp => resp.json())
  }

  addBotToArmy = (bot) => {
    if (!this.state.botArmy.includes(bot))
      {this.setState((prevState, props) => ({botArmy: [...prevState.botArmy, bot]}))}
    else {
      this.setState((prevState, props) => ({botArmy: prevState.botArmy.filter((_, i) => i !== (prevState.botArmy.indexOf(bot)))}))}
  }


}

export default BotsPage;
