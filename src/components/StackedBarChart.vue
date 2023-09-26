<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ stackedBarChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="stackedBarChartConfig.type"
          :data="chartData"
          :options="stackedBarChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { stackedBarChartConfig } from "@/services/ChartConfig";
import chartDataService from "@/services/ChartDataService";
import { StackedBarChartData } from "@/types/ChartTypes";

const chartData = ref<StackedBarChartData>([]);

onMounted(() => {
  chartDataService.getStackedBarChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
