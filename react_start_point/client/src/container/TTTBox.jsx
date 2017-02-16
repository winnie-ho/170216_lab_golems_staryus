var React = require("react");
var Board = require("../components/Board.jsx")

var TTTBox = React.createClass({
  getInitialState: function(){
    return {board: ["","","","","","","","",""], players: ["http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334", "http://vignette2.wikia.nocookie.net/pokemon/images/d/dd/076Golem_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150106003927"], win: null, winImage: null, golemScore: localStorage.getItem("golem"), staryuScore: localStorage.getItem("staryu")}
  },

  winGame: function(){
    if(this.state.board[0]!== ""){
      if(this.state.board[0]===this.state.board[1] && this.state.board[0] === this.state.board[2]){
        this.setState({win: "The winner is...", winImage: this.state.board[0]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[0]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }else if(this.state.board[0]===this.state.board[3] && this.state.board[0] === this.state.board[6]){
        this.setState({win: "The winner is...", winImage: this.state.board[0]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[0]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)

        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)

        }
        }else if(this.state.board[0]===this.state.board[4] && this.state.board[0] === this.state.board[8]){
          this.setState({win: "The winner is...", winImage: this.state.board[0]})
          if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[0]){
            this.state.staryuScore ++
            localStorage.setItem("staryu", this.state.staryuScore)

          }else{
            this.state.golemScore ++
            localStorage.setItem("golem", this.state.golemScore)

          }
    }
  }

 if(this.state.board[3]!== ""){
      if(this.state.board[3] === this.state.board[4] && this.state.board[3] === this.state.board[5]){
        this.setState({win: "The winner is...", winImage: this.state.board[3]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[3]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }
  }

  if(this.state.board[6]!== ""){
      if (this.state.board[6] === this.state.board[7] && this.state.board[6] === this.state.board[8]){
        this.setState({win: "The winner is...", winImage: this.state.board[6]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[6]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }
  }

  if(this.state.board[1]!== ""){
      if (this.state.board[1] === this.state.board[4] && this.state.board[1] === this.state.board[7]){
        this.setState({win: "The winner is...", winImage: this.state.board[1]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[1]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }
  }

  if(this.state.board[2]!== ""){
      if (this.state.board[2] === this.state.board[5] && this.state.board[2] === this.state.board[8]){
        this.setState({win: "The winner is...", winImage: this.state.board[2]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[2]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }else if(this.state.board[2]===this.state.board[4] && this.state.board[2] === this.state.board[6]){
        this.setState({win: "The winner is...", winImage: this.state.board[2]})
        if("http://vignette1.wikia.nocookie.net/pokemon/images/a/a9/120Staryu_OS_anime.png/revision/latest?cb%5Cx3d20141025050334"===this.state.board[2]){
          this.state.staryuScore ++
          localStorage.setItem("staryu", this.state.staryuScore)
        }else{
          this.state.golemScore ++
          localStorage.setItem("golem", this.state.golemScore)
        }
      }
    }
},


  addToArray: function(event){
    var buttonSelect = event.target.value
    var lookup = {
      1: () => { 
        this.state.board[0] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      2: () => { 
        this.state.board[1] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      3: () => { 
        this.state.board[2] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      4: () =>{
        this.state.board[3] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      5: () => { 
        this.state.board[4] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      6: () => { 
        this.state.board[5] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      7: () => { 
        this.state.board[6] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      8: () => { 
        this.state.board[7] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      },
      9: () => { 
        this.state.board[8] = this.state.players[0]
        this.winGame();
        return(this.state.board)
      }
    }

    var newBoard = lookup[buttonSelect]();

    var players = [...this.state.players]
    players.unshift(players.pop());
    this.setState({players : players, board : newBoard})


  },

  render: function(){
    return (
      <div className = "ttt-box">
      <h1>Golems and Staryus</h1>
      <Board addToArray = {this.addToArray} board = {this.state.board} win ={this.state.win} winImage = {this.state.winImage} golemScore = {this.state.golemScore} staryuScore = {this.state.staryuScore}/>
      </div>
      );
  }
});

module.exports = TTTBox;