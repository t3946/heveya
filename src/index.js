import 'stylesheets/base.scss';
import 'javascripts/main';

const home = require('./views/pages/home/home.hbs')
const SearchResults = require('./views/pages/search-results/SearchResults.hbs')
const SearchResultsLines = require('./views/pages/search-results-lines/SearchResultsLines.hbs')
const offers = [
  {
    title: 'Легковые автомобили',
    inKirov: '5000',
    image: '/images/home/offers/1.png',
  },
  {
    title: 'Коммерческий транспорт',
    inKirov: '5000',
    image: '/images/home/offers/2.png',
  },
  {
    title: 'Спецтехника',
    inKirov: '5000',
    image: '/images/home/offers/3.png',
  },
  {
    title: 'Жилая недвижимость',
    inKirov: '5000',
    image: '/images/home/offers/4.png',
  },
  {
    title: 'Коммерческая недвижимость',
    inKirov: '5000',
    image: '/images/home/offers/5.png',
  },
  {
    title: 'Земельные участки',
    inKirov: '5000',
    image: '/images/home/offers/6.png',
  },
  {
    title: 'Станки и оборудование',
    inKirov: '5000',
    image: '/images/home/offers/7.png',
  },
]

document.addEventListener('DOMContentLoaded', function () {
  switch (document.location.pathname) {
    case "/":
      break;
    case "/home":
      document.body.innerHTML = home({ offers })
      break;

    case "/search-results":
      document.body.innerHTML = SearchResults()
      break;

    case "/search-results-lines":
      document.body.innerHTML = SearchResultsLines()
      break;

    default:
      document.location.pathname = "/";
      break;
  }
})