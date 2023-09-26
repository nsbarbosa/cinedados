<template>
  <div class="chart-container">
    <div class="chart-column">
      <ColumnChart />
    </div>
    <div class="chart-column">
      <LineChart />
    </div>
    <div class="chart-column">
      <PieChart />
    </div>
    <div class="chart-column">
      <ScatterChart />
    </div>
    <StackedBarChart class="full-width" />
    <BarChart class="full-width" />
  </div>
</template>

<script setup lang="ts">
import LineChart from "@/components/LineChart.vue";
import PieChart from "@/components/PieChart.vue";
import ScatterChart from "@/components/ScatterChart.vue";
import ColumnChart from "@/components/ColumnChart.vue";
import StackedBarChart from "@/components/StackedBarChart.vue";
import BarChart from "@/components/BarChart.vue";
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chart-column {
  flex: 0 0 calc(50% - 10px);
}

.full-width {
  flex: 0 0 calc(100% - 10px);
}
</style>
