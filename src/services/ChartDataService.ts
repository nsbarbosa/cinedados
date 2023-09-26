import {
  BarChartData,
  ChartData,
  ColumnChartData,
  DashboardInformation,
  LineChartData,
  PieChartData,
  ScatterChartData,
  StackedBarChartData,
} from "@/types/ChartTypes";
import {
  calculateDashboardInformation,
  calculateAverageRatingOverDecades,
  calculateAveragesByGender,
  calculateMoviesByDecade,
  calculateMoviesByRegionAndDecade,
  calculateRatingAndDuration,
  calculateTotalByTitleType,
} from "@/utils";
import { BehaviorSubject, Observable } from "rxjs";
//import { ChartFilters } from "@/types/ChartTypes";

class ChartDataService {
  private chartDataSubject = new BehaviorSubject<ChartData>([]);

  private dashboardInformationSubject =
    new BehaviorSubject<DashboardInformation>({
      total: 0,
      startPeriod: 0,
      endPeriod: 0,
      tags: [""],
    });

  private barChartDataSubject = new BehaviorSubject<BarChartData>([]);
  private columnChartDataSubject = new BehaviorSubject<ColumnChartData>([]);
  private lineChartDataSubject = new BehaviorSubject<LineChartData>([]);
  private pieChartDataSubject = new BehaviorSubject<PieChartData>([]);
  private scatterChartDataSubject = new BehaviorSubject<ScatterChartData>([]);
  private stackedBarChartDataSubject = new BehaviorSubject<StackedBarChartData>(
    []
  );

  setData(data: ChartData) {
    this.chartDataSubject.next(data);

    const outputDashboardInformation = calculateDashboardInformation(data);
    this.setDashboardInformation(outputDashboardInformation);

    // BarChartData
    const outputBarChartData = calculateAveragesByGender(data);
    this.setBarChartData(outputBarChartData);

    //ColumnChartData
    const outputColumnChartData = calculateMoviesByDecade(data);
    this.setColumnChartData(outputColumnChartData);

    //LineChart
    const outputLineChartData = calculateAverageRatingOverDecades(data);
    this.setLineChartData(outputLineChartData);

    //PieCHart
    const outputPieChartData = calculateTotalByTitleType(data);
    this.setPieChartData(outputPieChartData);

    //scatterChart
    const outputScatterChartData = calculateRatingAndDuration(data);
    this.setScatterChartData(outputScatterChartData);

    //stackedBarChart
    const outputStackedBarChartData = calculateMoviesByRegionAndDecade(data);
    this.setStackedBarChartData(outputStackedBarChartData);
  }

  getData(): Observable<ChartData> {
    return this.chartDataSubject.asObservable();
  }

  setDashboardInformation(data: DashboardInformation) {
    this.dashboardInformationSubject.next(data);
  }

  getDashboardInformation(): Observable<DashboardInformation> {
    return this.dashboardInformationSubject.asObservable();
  }

  setBarChartData(data: BarChartData) {
    this.barChartDataSubject.next(data);
  }

  getBarChartData(): Observable<BarChartData> {
    return this.barChartDataSubject.asObservable();
  }

  setColumnChartData(data: ColumnChartData) {
    this.columnChartDataSubject.next(data);
  }

  getColumnChartData(): Observable<ColumnChartData> {
    return this.columnChartDataSubject.asObservable();
  }

  setLineChartData(data: LineChartData) {
    this.lineChartDataSubject.next(data);
  }

  getLineChartData(): Observable<LineChartData> {
    return this.lineChartDataSubject.asObservable();
  }

  setPieChartData(data: PieChartData) {
    this.pieChartDataSubject.next(data);
  }

  getPieChartData(): Observable<PieChartData> {
    return this.pieChartDataSubject.asObservable();
  }

  setScatterChartData(data: ScatterChartData) {
    this.scatterChartDataSubject.next(data);
  }

  getScatterChartData(): Observable<ScatterChartData> {
    return this.scatterChartDataSubject.asObservable();
  }

  setStackedBarChartData(data: StackedBarChartData) {
    this.stackedBarChartDataSubject.next(data);
  }

  getStackedBarChartData(): Observable<StackedBarChartData> {
    return this.stackedBarChartDataSubject.asObservable();
  }
}

const chartDataService = new ChartDataService();

export default chartDataService;
