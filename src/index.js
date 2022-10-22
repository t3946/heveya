import 'stylesheets/base.scss'
import 'javascripts/Main'

import Arbitrator from "./views/pages/arbitrator/Arbitrator.hbs";


document.addEventListener('DOMContentLoaded', function () {
  switch (document.location.pathname) {
    case '/':
      break


    case '/arbitrator':
      document.body.innerHTML = Arbitrator()
      break

    default:
      document.location.pathname = '/'
      break
  }
})