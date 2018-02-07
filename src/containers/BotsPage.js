import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    selectedBots: [1,2,3]
  }

  fetchBots() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(jsonData =>this.setState({allBots: jsonData}))
  }

  componentDidMount() {
    this.fetchBots()
  }

  handleClickAdd = (e) => {
    //console.log(e) //cant get prevState, this, state etc bc passing e
    prevState = this.state.selectedBots
    if !(prevState.includes(e.target.value))
    this.setState({
      selectedBots: [...prevState, e.target.value]
    })
  }

  handleClickRemove = (e) => {
    //console.log(e) //cant get prevState, this, state etc bc passing e
    prevState = this.state.selectedBots
    this.setState({
      selectedBots: [...prevState].pop(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots} handleClickRemove={this.handleClickRemove}/>
        <BotCollection allBots={this.state.allBots} handleClickAdd={this.handleClickAdd} selectedBots={this.state.selectedBots}/>
      </div>
    );
  }

}

export default BotsPage;
