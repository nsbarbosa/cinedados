<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ columnChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="columnChartConfig.type"
          :data="chartData"
          :options="columnChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { columnChartConfig } from "@/services/ChartConfig";
import { ColumnChartData } from "@/types/ChartTypes";
import chartDataService from "@/services/ChartDataService";

const chartData = ref<ColumnChartData>([]);

onMounted(() => {
  chartDataService.getColumnChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
