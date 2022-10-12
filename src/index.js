// import 'javascripts/main'
import 'stylesheets/base.scss'

const home = require('./views/pages/home/home.hbs')

document.addEventListener('DOMContentLoaded', function () {
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

  document.body.innerHTML = home({ offers })
})