const IP = 'localhost';
const PORT = 50541;
const playerName = process.argv.slice(2);

const movementKeys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const messageKeys = {
  p: "Say: yo",
  o: "Say: LFG!",
  l: "Say: imma winna"
}

module.exports = {IP, PORT, playerName, movementKeys, messageKeys};