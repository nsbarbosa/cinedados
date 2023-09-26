import { ChartConfig } from "@/types/ChartTypes";

export const columnChartConfig: ChartConfig = {
  type: "ColumnChart",
  title: "Contagem de Filmes por Década",
  options: {
    hAxis: { title: "Década" },
    vAxis: { title: "Contagem de Filmes" },
    legend: "none",
  },
};

export const stackedBarChartConfig: ChartConfig = {
  type: "BarChart",
  title: "Contagem de Filmes por Região e Década",
  options: {
    hAxis: { title: "Contagem de Filmes" },
    vAxis: { title: "Década" },
    legend: { position: "top" },
    bars: "horizontal",
    isStacked: true,
  },
};

export const lineChartConfig: ChartConfig = {
  type: "LineChart",
  title: "Classificação Média ao Longo do Tempo",
  options: {
    curveType: "function",
    legend: { position: "bottom" },
  },
};

export const pieChartConfig: ChartConfig = {
  type: "PieChart",
  title: "Distribuição de Tipos de Filme",
  options: {},
};

export const scatterChartConfig: ChartConfig = {
  type: "ScatterChart",
  title: "Dispersão: Classificação Média vs. Duração da obra",
  options: {
    hAxis: { title: "Classificação Média" },
    vAxis: { title: "Duração em minutos" },
    legend: "none",
  },
};

export const barChartConfig: ChartConfig = {
  type: "BarChart",
  title: "Classificação Média por Gênero",
  options: {
    hAxis: { title: "Classificação Média" },
    vAxis: { title: "Gênero" },
    legend: { position: "top" },
    isStacked: false,
  },
};
