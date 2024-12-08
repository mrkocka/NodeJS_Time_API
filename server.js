const express = require("express");
const moment = require("moment-timezone");
const app = express();

app.get("/time", (req, res) => {
  const currentTime = moment()
    .tz("Europe/Budapest")
    .format("YYYY-MM-DD HH:mm:ss");
  res.json({ timezone: "Europe/Budapest", current_time: currentTime });
});

app.get("/time/london", (req, res) => {
  const currentTime = moment()
    .tz("Europe/London")
    .format("YYYY-MM-DD HH:mm:ss");
  res.json({ timezone: "Europe/London", current_time: currentTime });
});

app.get("/time/newyork", (req, res) => {
  const currentTime = moment()
    .tz("America/New_York")
    .format("YYYY-MM-DD HH:mm:ss");
  res.json({ timezone: "America/New_York", current_time: currentTime });
});




app.get("/time/example", (req, res) => {
  const currentTime = moment()
    .tz("example/example")
    .format("YYYY-MM-DD HH:mm:ss");
  res.json({ timezone: "example/example", current_time: currentTime });
});

//Itt bővítheted az időzónákat

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
