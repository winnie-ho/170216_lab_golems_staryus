var React = require ("react");
var Board = React.createClass({

  render: function(){
    var buttonNodes = this.props.board.map((button, index)=>{
      return(
        <div>
        <input type = "image" src = {button} value = {index+1} key = {index} onClick = {this.props.addToArray}/>
        </div>
        )
    })


    return (
      <div className = "page">
      <div className = "golem">
        Golem Score: {localStorage.getItem("golem")}
      </div>
      <div className = "grid">
      {buttonNodes}
      <h1>{this.props.win}</h1>
      <img src = {this.props.winImage}/>
      </div>
      <div className = "staryu">
        Staryu Score: {localStorage.getItem("staryu")}
      </div>
      </div>
      )
  }
})   


module.exports = Board;