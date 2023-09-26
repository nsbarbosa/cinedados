import {
  GoogleChartOptions,
  GoogleChartWrapperChartType,
} from "vue-google-charts/dist/types";

type ChartConfig = {
  type: GoogleChartWrapperChartType;
  title: string;
  options: GoogleChartOptions;
};

type ChartFilters = {
  year: number;
  description: string;
  titleType: string;
  title: string;
};

type DashboardInformation = {
  total: number;
  startPeriod: number;
  endPeriod: number;
  tags: string[];
};

type ChartData = any[];

type BarChartData = Array<Array<string | number>>;
type ColumnChartData = Array<[string, string | number]>;
type LineChartData = Array<Array<string | number>>;
type PieChartData = [string, string | number][];
type ScatterChartData = Array<[string, string | number]>;
type StackedBarChartData = Array<Array<string | number>>;

export {
  ChartConfig,
  ChartFilters,
  ChartData,
  DashboardInformation,
  BarChartData,
  ColumnChartData,
  LineChartData,
  PieChartData,
  ScatterChartData,
  StackedBarChartData,
};
