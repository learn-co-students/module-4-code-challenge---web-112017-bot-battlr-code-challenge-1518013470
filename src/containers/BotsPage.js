import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
    super(props)

    this.state = {
      allBots: [],
      yourBotArmy: [],
      specVisible: false,
      currentBotSpec: ""
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(json => this.setState({
      allBots: json
    }))
  }


  handleBotEnlist = (bot) => {

    let currentArmy = this.state.yourBotArmy
    if (!this.state.yourBotArmy.includes(bot)) {
      this.setState({
        yourBotArmy: [...currentArmy, bot]
      })
    }
    else {
      alert("Already enlisted")
    }
    this.handleToggleSpecStatus()
  }

  handleBotRemove = (bot) => {
    const currentArmy = this.state.yourBotArmy.slice()
    currentArmy.splice(this.state.yourBotArmy.indexOf(bot), 1)
    if (this.state.yourBotArmy.includes(bot)) {
      this.setState({
        yourBotArmy: currentArmy
      })
    }
  }

  handleToggleSpecStatus = (bot) => {
    const selectedBot = bot
    const specVis = !this.state.specVisible
    this.setState({
      specVisible: specVis,
      currentBotSpec: selectedBot
    })
  }

  renderTernary = () => {
    return this.state.specVisible ? this.handleRenderSpec() : this.handleRenderCollection()
  }

  handleRenderSpec = () => {

    return (
      <div>
          <BotSpecs bot = {this.state.currentBotSpec} handleBotEnlist = {this.handleBotEnlist} handleToggleSpecStatus={this.handleToggleSpecStatus} />
      </div>
    )
  }

  handleRenderCollection = () => {
    return (

      <div>
        <BotCollection allBots = {this.state.allBots} handleToggleSpecStatus = {this.handleToggleSpecStatus} />
      </div>
  )
  }




  render() {
    return(
      <div>
        <div>
          <YourBotArmy yourBotArmy={this.state.yourBotArmy} handleToggleSpecStatus = {this.handleToggleSpecStatus} />
        </div>
        {this.renderTernary()}

      </div>

    )

  }

}

export default BotsPage;
