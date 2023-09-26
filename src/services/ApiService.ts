import { ChartFilters } from "@/types/ChartTypes";
import axios, { AxiosResponse } from "axios";
import chartDataService from "@/services/ChartDataService";
import { ChartData } from "@/types/ChartTypes";

const apiUrl = "/api/data";

export const fetchData = () => {
  axios.get(apiUrl).then((response: AxiosResponse) => {
    const data: ChartData = response.data;
    chartDataService.setData(data);
  });
};

export const fetchFilterData = (filters: ChartFilters) => {
  axios.get(apiUrl).then((response: AxiosResponse) => {
    const data = response.data;
    const filteredData = data.filter((item: any) => {
      const meetsYearFilter =
        !filters.year ||
        item.startYear.toString().includes(filters.year.toString());
      const meetsDescriptionFilter =
        !filters.description ||
        item.Description.toLowerCase().includes(
          filters.description.toLowerCase()
        );
      const meetsTitleTypeFilter =
        !filters.titleType || item.titleType === filters.titleType;
      const meetsTitleFilter =
        !filters.title ||
        item.title.toLowerCase().includes(filters.title.toLowerCase());

      return (
        meetsYearFilter &&
        meetsDescriptionFilter &&
        meetsTitleTypeFilter &&
        meetsTitleFilter
      );
    });
    chartDataService.setData(filteredData);
  });
};
