import 'stylesheets/base.scss'
import 'javascripts/Main'
import home from './views/pages/home/home.hbs'
import SearchResults from './views/pages/search-results/SearchResults.hbs'
import SearchResultsLines from './views/pages/search-results-lines/SearchResultsLines.hbs'
import Offer from './views/pages/offer/Offer.hbs'
import Rate from './views/pages/rate/Rate.hbs'
import Ratings from './views/pages/ratings/Ratings.hbs'
import Map from './views/pages/map/Map.hbs'
import SelectBroker from './views/pages/select-broker/SelectBroker.hbs'
import AnalyzeCompany from './views/pages/analyze-company/AnalyzeCompany.hbs'
import Member from "./views/pages/member/Member.hbs";
import Arbitrator from "./views/pages/arbitrator/Arbitrator.hbs";
import BiddingInitiator from "./views/pages/bidding-initiator/BiddingInitiator.hbs";
import DebtorCompany from "./views/pages/debtor-company/DebtorCompany.hbs";
import DebtorPerson from "./views/pages/debtor-person/DebtorPerson.hbs";
import Sro from "./views/pages/sro/Sro.hbs";
import Etp from "./views/pages/etp/Etp.hbs";
import RegistryDebtors from "./views/pages/registry-debtors/RegistryDebtors.hbs";
import RegistryArbitrators from "./views/pages/registry-arbitrators/RegistryArbitrators.hbs";

document.addEventListener('DOMContentLoaded', function () {
  switch (document.location.pathname) {
    case '/':
      break

    case '/home':
      document.body.innerHTML = home()
      break

    case '/search-results':
      document.body.innerHTML = SearchResults()
      break

    case '/search-results-lines':
      document.body.innerHTML = SearchResultsLines()
      break

    case '/offer':
      document.body.innerHTML = Offer()
      break

    case '/rate':
      document.body.innerHTML = Rate()
      break

    case '/ratings':
      document.body.innerHTML = Ratings()
      break

    case '/map':
      document.body.innerHTML = Map()
      break

    case '/select-broker':
      document.body.innerHTML = SelectBroker()
      break

    case '/analyze-company':
      document.body.innerHTML = AnalyzeCompany()
      break

    case '/member':
      document.body.innerHTML = Member()
      break

    case '/arbitrator':
      document.body.innerHTML = Arbitrator()
      break

    case '/bidding-initiator':
      document.body.innerHTML = BiddingInitiator()
      break

    case '/debtor-company':
      document.body.innerHTML = DebtorCompany()
      break

    case '/debtor-person':
      document.body.innerHTML = DebtorPerson()
      break

    case '/sro':
      document.body.innerHTML = Sro()
      break

    case '/etp':
      document.body.innerHTML = Etp()
      break

    case '/registry-debtors':
      document.body.innerHTML = RegistryDebtors()
      break

    case '/registry-arbitrators':
      document.body.innerHTML = RegistryArbitrators()
      break

    default:
      document.location.pathname = '/'
      break
  }
})