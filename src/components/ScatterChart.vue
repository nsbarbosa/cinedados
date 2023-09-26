<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ scatterChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="scatterChartConfig.type"
          :data="chartData"
          :options="scatterChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { scatterChartConfig } from "@/services/ChartConfig";
import chartDataService from "@/services/ChartDataService";
import { ScatterChartData } from "@/types/ChartTypes";

const chartData = ref<ScatterChartData>([]);

onMounted(() => {
  chartDataService.getScatterChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
