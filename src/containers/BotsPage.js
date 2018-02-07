import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    botArmy: [],
    botToRender: undefined,
  }

  render() {
    if (this.state.botToRender === undefined)
    { return (
      <div>
        <YourBotArmy botOnClick={this.removeBotFromArmy} botArmy={this.state.botArmy}/>
        <BotCollection botOnClick={this.renderBotSpecs} allBots={this.state.allBots}/>
        {/* put your components here */}
      </div>
    )} else {
      return (<div>
        <YourBotArmy botOnClick={this.removeBotFromArmy} botArmy={this.state.botArmy}/>
        <BotSpecs bot={this.state.botToRender} addBotToArmy={this.addBotToArmy} showCollection={this.showCollection}/>
        {/* put your components here */}
      </div>)
    }
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

  renderBotSpecs = (bot) => {
    this.setState({botToRender: bot})
  }

  showCollection = () => {
    this.setState({botToRender: undefined})
  }

  addBotToArmy = (bot) => {
    if (!this.state.botArmy.includes(bot))
      {this.setState((prevState, props) => ({botArmy: [...prevState.botArmy, bot]}))}
  }

  removeBotFromArmy = (bot) => {
      this.setState((prevState, props) => ({botArmy: prevState.botArmy.filter((_, i) => i !== (prevState.botArmy.indexOf(bot)))}))
  }


}

export default BotsPage;
