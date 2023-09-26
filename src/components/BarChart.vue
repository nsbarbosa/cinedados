<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ barChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="barChartConfig.type"
          :data="chartData"
          :options="barChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { barChartConfig } from "@/services/ChartConfig";
import chartDataService from "@/services/ChartDataService";
import { BarChartData } from "@/types/ChartTypes";

const chartData = ref<BarChartData>([]);

onMounted(() => {
  chartDataService.getBarChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
