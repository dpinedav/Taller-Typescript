import { series_data } from "./data";
var series2 = document.getElementById("series");
var Seas = document.getElementById("seasons");
renderSeriesInTable(series_data);
Seas.innerHTML = "".concat(getSeasons(series_data));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var element = document.createElement("el");
        element.innerHTML = "<td>".concat(c.pos, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.medioStreaming, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        series2.appendChild(element);
    });
}
function getSeasons(series) {
    var total= 0;
    series.forEach(function (serie) { return total= (total + serie.medioStreaming) / 2; });
    return total;
}