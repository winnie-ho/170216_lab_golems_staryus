var React = require("react");
var ReactDOM = require("react-dom");


var TTTBox = require("./container/TTTBox");

window.onload = function () {
  ReactDOM.render(
    <TTTBox/>,
    document.getElementById("app")
  );
}
