# Setting data as late as possible
https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/

important: It's a good practice to make sure that setting data happens as late into code as possible. Once you set data, all
related objects are created, so any configuration settings applied afterwards might not carry over.

legend insert after data