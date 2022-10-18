import $ from "jquery";
import datepicker from "js-datepicker";

$(() => {
  $(".inputDate").each((i,e) => {
    datepicker(e, {
      formatter: (input, date, instance) => {
        input.value = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
      },

      startDay: 1,
      customDays: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.',],
      customMonths: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']
    });
  })
});
