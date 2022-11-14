import { series_data } from "./data.js";
import { Serie } from "./series.js";

let series2: HTMLElement = document.getElementById("series")!;
const Temp: HTMLElement = document.getElementById("temporadas")!;
const btnSerieTitulo: HTMLElement = document.getElementById("serie_titulo")!;
const btnSerieDes: HTMLElement = document.getElementById("descripcion")!;
const btnSerieLink: HTMLElement = document.getElementById("link_serie")!;

renderSeriesInTable(series_data);

Temp.innerHTML = `${getAvgTemporadas(series_data)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let element = document.createElement("tr");
    element.innerHTML = `<td>${c.pos}</td>
                           <td>${c.nombre}</td>
                           <td>${c.medioStreaming}</td>
                           <td>${c.temporadas}</td>`;
    series2.appendChild(element);
  });
}

function getAvgTemporadas(series: Serie[]): number {
    let total: number = 0;
    series.forEach((serie) => total = (total + serie.temporadas)/2);
    return total;
  }