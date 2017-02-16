var React = require("react");
var Board = require("../components/Board.jsx")

var TTTBox = React.createClass({
  getInitialState: function(){
    return {array1: [], array2: [], array3:[]};
  },


  render: function(){
    return (
      <div className = "ttt-box">
      <h1>Noughts and Crosses</h1>
      <Board/>
      </div>
      );
  }
});

module.exports = TTTBox;