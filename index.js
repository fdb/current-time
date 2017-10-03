exports.currentTime = function currentTime(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ status: "OK", time: Date.now() });
};
