import React from "react";
import EnlistedBotCard from "../components/EnlistedBotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const renderArmy = this.props.botRoster.map(bot =>
      <EnlistedBotCard bot={bot} key={bot.id} removeBot={this.props.removeBot}/>
    )
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {renderArmy}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
