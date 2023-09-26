<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ lineChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="lineChartConfig.type"
          :data="chartData"
          :options="lineChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { lineChartConfig } from "@/services/ChartConfig";
import { LineChartData } from "@/types/ChartTypes";
import chartDataService from "@/services/ChartDataService";

const chartData = ref<LineChartData>([]);

onMounted(() => {
  chartDataService.getLineChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
