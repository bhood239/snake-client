// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  //handle ctl+c user input
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === 'p') {
      connection.write("Say: yo");
    }
    if (key === 'o') {
      connection.write("Say: LFG!");
    }
    if (key === 'l') {
      connection.write("Say: imma winna");
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