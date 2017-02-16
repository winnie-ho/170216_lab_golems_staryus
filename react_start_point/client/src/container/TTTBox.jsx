var React = require("react");
var Board = require("../components/Board.jsx")

var TTTBox = React.createClass({
  getInitialState: function(){
    return {board: ["","","","","","","","",""], players: ["x", "o"]}
  },

  addToArray: function(event){
    var buttonSelect = event.target.value
    var lookup = {
      1: () => { 
        this.state.board[0] = this.state.players[0]
        return(this.state.board)
      },
      2:  () => { 
        this.state.board[1] = this.state.players[0]
        return(this.state.board)
      },
      3:  () => { 
        this.state.board[2] = this.state.players[0]
        return(this.state.board)
      },
      4:  () =>{
        this.state.board[3] = this.state.players[0]
        return(this.state.board)
      },
      5: () => { 
        this.state.board[4] = this.state.players[0]
        return(this.state.board)
      },
      6: () => { 
        this.state.board[5] = this.state.players[0]
        return(this.state.board)
      },
      7:  () => { 
        this.state.board[6] = this.state.players[0]
        return(this.state.board)
      },
      8:  () => { 
        this.state.board[7] = this.state.players[0]
        return(this.state.board)
      },
      9:  () => { 
        this.state.board[8] = this.state.players[0]
        return(this.state.board)
      }
    }

    var newBoard = lookup[buttonSelect]();

    var players = [...this.state.players]
    players.unshift(players.pop());
    this.setState({players : players, board : newBoard})

    console.log(this.state.players);

  },

  render: function(){
    return (
      <div className = "ttt-box">
      <h1>Noughts and Crosses</h1>
      <Board addToArray = {this.addToArray} board = {this.state.board} />
      </div>
      );
  }
});

module.exports = TTTBox;