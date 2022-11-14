import { series_data } from "./data.js";
var seriesTbody = document.getElementById("series");
var Temp = document.getElementById("temporadas");
var btnSerieTitulo = document.getElementById("serie_titulo");
var btnSerieDes = document.getElementById("descripcion");
var btnSerieLink = document.getElementById("link_serie");
renderSeriesInTable(series_data);
Temp.innerHTML = "".concat(getTemporadas(series_data));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("el");
        trElement.innerHTML = "<td>".concat(c.pos, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.medioStreaming, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTemporadas(series) {
    var total = 0;
    series.forEach(function (serie) { return total= (total + serie.temporadas) / 2; });
    return total_avg;
}
