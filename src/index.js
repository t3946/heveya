import '@popperjs/core/dist/esm/popper'
import 'bootstrap/dist/js/bootstrap'
import 'stylesheets/base.scss'
import 'javascripts/Main'
import home from './views/pages/home/home.hbs'
import SearchResults from './views/pages/search-results/SearchResults.hbs'
import SearchResultsLines from './views/pages/search-results-lines/SearchResultsLines.hbs'
import Offer from './views/pages/offer/Offer.hbs'
import OfferAuction from './views/pages/offer/OfferAuction.hbs'
import OfferArchive from './views/pages/offer/OfferArchive.hbs'
import Rate from './views/pages/rate/Rate.hbs'
import RatingsMembers from './views/pages/ratings/RatingsMembers.hbs'
import RatingsAU from './views/pages/ratings/RatingsAU.hbs'
import RatingsBiddingInitiators from './views/pages/ratings/RatingsBiddingInitiators.hbs'
import RatingsWebPlatforms from './views/pages/ratings/RatingsWebPlatforms.hbs'
import Map from './views/pages/map/Map.hbs'
import SelectBroker from './views/pages/select-broker/SelectBroker.hbs'
import AnalyzeCompany from './views/pages/analyze-company/AnalyzeCompany.hbs'
import Member from './views/pages/member/Member.hbs'
import Arbitrator from './views/pages/arbitrator/Arbitrator.hbs'
import BiddingInitiator from './views/pages/bidding-initiator/BiddingInitiator.hbs'
import DebtorCompany from './views/pages/debtor-company/DebtorCompany.hbs'
import DebtorPerson from './views/pages/debtor-person/DebtorPerson.hbs'
import Sro from './views/pages/sro/Sro.hbs'
import Etp from './views/pages/etp/Etp.hbs'
import RegistryDebtors from './views/pages/registry-debtors/RegistryDebtors.hbs'
import RegistryArbitrators from './views/pages/registry-arbitrators/RegistryArbitrators.hbs'
import RegistryInitiators from './views/pages/registry-initiators/RegistryInitiators.hbs'
import RegistryWebResources from './views/pages/registry-web-resources/RegistryWebResources.hbs'
import RegistrySro from './views/pages/registry-sro/RegistrySro.hbs'
import RegistryMembers from './views/pages/registry-members/RegistryMembers.hbs'
import BiddingNumbers from './views/pages/bidding-numbers/BiddingNumbers.hbs'
import Competitors from './views/pages/competitors/Competitors.hbs'
import CompetitorsCheck from './views/pages/competitors-check/CompetitorsCheck.hbs'
import Registration from './views/pages/registration/Registration.hbs'
import FormsExample from './views/pages/forms-example/FormsExample.hbs'
import AccountMember from './views/pages/account/member/Member.hbs'
import SelectServices from './views/pages/account/select-services/SelectServices.hbs'
import MyServices from './views/pages/account/my-services/MyServices.hbs'
import MyTasks from './views/pages/account/my-tasks/MyTasks.hbs'
import MyOffers from './views/pages/account/my-offers/MyOffers.hbs'
import Services from './views/pages/account/services/Services.hbs'

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

    case '/offer-auction':
      document.body.innerHTML = OfferAuction()
      break

    case '/offer-archive':
      document.body.innerHTML = OfferArchive()
      break

    case '/rate':
      document.body.innerHTML = Rate()
      break

    case '/rating-members':
      document.body.innerHTML = RatingsMembers()
      break

    case '/rating-au':
      document.body.innerHTML = RatingsAU()
      break

    case '/rating-bidding-initiators':
      document.body.innerHTML = RatingsBiddingInitiators()
      break

    case '/rating-etp':
      document.body.innerHTML = RatingsWebPlatforms()
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

    case '/registry-initiators':
      document.body.innerHTML = RegistryInitiators()
      break

    case '/registry-sro':
      document.body.innerHTML = RegistrySro()
      break

    case '/registry-web-resources':
      document.body.innerHTML = RegistryWebResources()
      break

    case '/registry-members':
      document.body.innerHTML = RegistryMembers()
      break

    case '/bidding-numbers':
      document.body.innerHTML = BiddingNumbers()
      break

    case '/competitors':
      document.body.innerHTML = Competitors()
      break

    case '/competitors-check':
      document.body.innerHTML = CompetitorsCheck()
      break

    case '/registration':
      document.body.innerHTML = Registration()
      break

    case '/forms-example':
      document.body.innerHTML = FormsExample()
      break

    case '/account-member':
      document.body.innerHTML = AccountMember()
      break

    case '/account-select-services':
      document.body.innerHTML = SelectServices()
      break

    case '/account-my-services':
      document.body.innerHTML = MyServices()
      break

    case '/account-my-tasks':
      document.body.innerHTML = MyTasks()
      break

    case '/account-my-offers':
      document.body.innerHTML = MyOffers()
      break

    case '/account-services':
      document.body.innerHTML = Services()
      break

    default:
      document.location.pathname = '/'
      break
  }
})
