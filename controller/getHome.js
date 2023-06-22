const getHome = (req, res) => {
  res.render("index", { title: "home page" });
};

module.exports = getHome;
