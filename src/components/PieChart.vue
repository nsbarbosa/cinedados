<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ pieChartConfig.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <GChart
          :type="pieChartConfig.type"
          :data="chartData"
          :options="pieChartConfig.options"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { GChart } from "vue-google-charts";
import { pieChartConfig } from "@/services/ChartConfig";
import { PieChartData } from "@/types/ChartTypes";
import chartDataService from "@/services/ChartDataService";

const chartData = ref<PieChartData>([]);

onMounted(() => {
  chartDataService.getPieChartData().subscribe((data) => {
    chartData.value = data;
  });
});
</script>
