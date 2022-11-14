import { series_data } from "./data";
var seriesTbody = document.getElementById("series");
var avgSeas = document.getElementById("avg_seasons");
renderSeriesInTable(series_m);
avgSeas.innerHTML = "".concat(getAvgSeasons(series_data));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.pos, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.medioStreaming, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var total_avg = 0;
    series.forEach(function (serie) { return total_avg = (total_avg + serie.medioStreaming) / 2; });
    return total_avg;
}