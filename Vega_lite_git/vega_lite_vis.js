var vg_1 = "vega_lite_renewable_energy_map.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "vega_lite_renewable_energy_graph.json";
vegaEmbed("#area_chart", vg_2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);