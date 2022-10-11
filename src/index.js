// import 'javascripts/main'
import "stylesheets/base.scss";
const template = require("./views/template.hbs");

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = template({header: "page A"});
});