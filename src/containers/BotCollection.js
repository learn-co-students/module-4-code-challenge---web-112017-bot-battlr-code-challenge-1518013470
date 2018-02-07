import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props);

    this.state = {
      filter: '',
      showBots: this.props.allBots
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      showBots: nextProps.allBots
    })
  }

  handleChangeSearchTerm = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let filteredBots = this.state.showBots.filter((bot)=>bot.name.includes(this.state.filter))
    debugger

    this.setState({
      showBots: filteredBots
    })
  }

  render(){
    let botCards = this.state.showBots.map((bot) =>(
      <BotCard bot={bot} clickBotFunction={this.props.clickBotFunction}/>))
  	return (
  	  <div className="ui four column grid">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChangeSearchTerm}></input>
          <input type='submit'></input>
        </form>
    		<div className="row">
          ALL BOTS
    		  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
