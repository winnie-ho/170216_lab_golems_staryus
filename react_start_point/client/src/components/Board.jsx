var React = require ("react");
var Board = React.createClass({

  render: function(){
    var buttonNodes = this.props.board.map((button, index)=>{
      return(
        <button value = {index+1} key = {index} onClick = {this.props.addToArray}>{button}</button>
        )
    })


    return (
      <div>
      {buttonNodes}
      </div>
      )
  }
})   


module.exports = Board;