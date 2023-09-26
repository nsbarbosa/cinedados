<template>
  <div class="">
    <!-- Card com informações -->
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Informações do Dashboard</p>
      </header>
      <div class="card-content">
        <div class="content">
          <!-- Quantidade de filmes filtrados -->
          <div class="dashboard-info">
            <span class="icon">
              <i class="material-icons">movie</i>
            </span>
            <p>{{ dashboardData.total }} Filmes</p>
          </div>

          <!-- Período dos dados -->
          <div class="dashboard-info">
            <span class="icon">
              <i class="material-icons">date_range</i>
            </span>
            <p>
              {{ dashboardData.startPeriod }} - {{ dashboardData.endPeriod }}
            </p>
          </div>

          <!-- Tipos de obras em chips -->
          <div class="dashboard-chips">
            <span
              class="chip"
              v-for="(tag, index) in dashboardData.tags"
              :key="index"
            >
              <span class="icon">
                <i class="material-icons">local_movies</i>
              </span>
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chartDataService from "@/services/ChartDataService";
import { DashboardInformation } from "@/types/ChartTypes";
import { onMounted, ref } from "vue";

const dashboardData = ref<DashboardInformation>({
  total: 0,
  startPeriod: 0,
  endPeriod: 0,
  tags: [""],
});

onMounted(() => {
  chartDataService.getDashboardInformation().subscribe((data) => {
    dashboardData.value = data;
  });
});
</script>

<style scoped>
.dashboard-card {
  margin-bottom: 20px;
}

.dashboard-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.dashboard-info .icon {
  margin-right: 10px;
}

.dashboard-chips {
  display: flex;
  flex-wrap: wrap;
}

.dashboard-chips .chip {
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 20px;
}

.dashboard-chips .chip .icon {
  margin-right: 5px;
}
</style>
