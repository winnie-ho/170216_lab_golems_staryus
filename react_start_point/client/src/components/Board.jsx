var React = require ("react");
var Board = React.createClass({

  render: function(){
    var buttonNodes = this.props.board.map((button, index)=>{
      return(
        <div>
        <button value = {index+1} key = {index} onClick = {this.props.addToArray}>{button}</button>
        </div>
        )
    })


    return (
      <div>
      <h1>{this.props.win}</h1>
      <div className = "grid">
      {buttonNodes}
      </div>
      </div>
      )
  }
})   


module.exports = Board;