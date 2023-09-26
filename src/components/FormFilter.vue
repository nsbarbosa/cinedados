<template>
  <!-- Sidebar Content -->
  <aside class="menu full-height">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="icon-text">
            <span class="icon">
              <i class="material-icons mr-2">tune</i>
            </span>
            Filtros
          </span>
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <form>
            <div class="field">
              <label class="label has-text-weight-light">Título</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Título"
                  v-model="filters.title"
                />
                <span class="icon is-left">
                  <i class="material-icons">search</i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-light">Descrição</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Descrição"
                  v-model="filters.description"
                ></textarea>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-light">Década</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="filters.year">
                    <option value="1990">90's</option>
                    <option value="2000">00's</option>
                    <option value="2010">10's</option>
                    <option value="2020">20's</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-light">Tipo de Título</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="filters.titleType">
                    <option
                      v-for="(type, index) in titleTypeOptions"
                      :key="index"
                      :value="type"
                    >
                      {{ type }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field mt-6">
              <div class="control">
                <button
                  class="button is-primary is-fullwidth"
                  @click.prevent="submitFilter"
                >
                  Filtrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { fetchFilterData } from "@/services/ApiService";
import chartDataService from "@/services/ChartDataService";
import { ChartFilters } from "@/types/ChartTypes";
import { ref } from "vue";

const filters = ref<ChartFilters>({
  year: 0,
  description: "", //textarea
  titleType: "", //select
  title: "",
});

const titleTypeOptions = ref([
  "movie",
  "tvMiniSeries",
  "tvSeries",
  "tvMovie",
  "tvEpisode",
  "short",
  "tvSpecial",
  "videoGame",
  "video",
  "tvShort",
]);

function submitFilter() {
  fetchFilterData(filters.value);
}
</script>

<style scoped>
.full-height > .card {
  height: 100vh;
}
</style>
