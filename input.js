const {movementKeys, messageKeys} = require("./constants");
// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  //handle ctl+c user input
  if (key === '\u0003') {
    process.exit();
  }
  //handle movements and messages
  if (movementKeys[key]) {
    connection.write(movementKeys[key]);
  }
  if (messageKeys[key]) {
    connection.write(messageKeys[key]);
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};