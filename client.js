const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully conected to game server")
  })

    conn.write("Name: BEH");

    // setTimeout(() => {conn.write("Move: up")}, 1000);
    // setTimeout(() => {conn.write("Move: right")}, 2000);
    // setTimeout(() => {conn.write("Move: down")}, 3000);
    // setTimeout(() => {conn.write("Move: left")}, 4000);

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};