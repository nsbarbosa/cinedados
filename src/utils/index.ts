import {
  BarChartData,
  ChartData,
  ColumnChartData,
  DashboardInformation,
  LineChartData,
  PieChartData,
  ScatterChartData,
  StackedBarChartData,
} from "@/types/ChartTypes";

export function calculateDashboardInformation(
  data: ChartData
): DashboardInformation {
  let totalMovies = 0;
  let startPeriod = Number.MAX_VALUE;
  let endPeriod = Number.MIN_VALUE;
  const tagsSet = new Set<string>();

  data.forEach((item) => {
    totalMovies++;
    if (item.startYear < startPeriod) {
      startPeriod = item.startYear;
    }
    if (item.startYear > endPeriod) {
      endPeriod = item.startYear;
    }
    if (item.genres) {
      const genres = item.genres.split(",");
      genres.forEach((genre: string) => {
        tagsSet.add(genre);
      });
    }
  });

  const tags = Array.from(tagsSet);

  return {
    total: totalMovies,
    startPeriod,
    endPeriod,
    tags,
  };
}

export function calculateAveragesByGender(data: ChartData): BarChartData {
  const genreAverages: { [genre: string]: { sum: number; count: number } } = {};

  // Passo 2 e 3: Calcular médias por gênero
  data.forEach((movie) => {
    if (movie.genres && movie.averageRating !== null) {
      const genres = movie.genres.split(","); // Se um filme tiver vários gêneros
      const rating = movie.averageRating / genres.length; // Média para cada gênero
      genres.forEach((genre: string) => {
        if (!(genre in genreAverages)) {
          genreAverages[genre] = { sum: rating, count: 1 };
        } else {
          genreAverages[genre].sum += rating;
          genreAverages[genre].count += 1;
        }
      });
    }
  });

  // Passo 4: Criar o array de saída
  const outputData: BarChartData = [["Gênero", "Classificação Média"]];
  for (const genre in genreAverages) {
    const average = Number(
      (genreAverages[genre].sum / genreAverages[genre].count).toFixed(2)
    );
    outputData.push([genre, average]);
  }

  return outputData;
}

export function calculateMoviesByDecade(data: ChartData): ColumnChartData {
  const movieCounts: { [decade: string]: number } = {};

  data.forEach((movie) => {
    const year = movie.startYear;
    const decade = `${Math.floor(year / 10) * 10}-${
      Math.floor(year / 10) * 10 + 9
    }`;

    if (decade in movieCounts) {
      movieCounts[decade]++;
    } else {
      movieCounts[decade] = 1;
    }
  });

  const outputData: ColumnChartData = [["Década", "Total"]];
  for (const decade in movieCounts) {
    outputData.push([decade, movieCounts[decade]]);
  }

  return outputData;
}

export function calculateAverageRatingOverDecades(
  data: ChartData
): LineChartData {
  const ratingsByDecade: { [decade: string]: { sum: number; count: number } } =
    {};

  data.forEach((movie) => {
    const year = movie.startYear;
    const decade = `${Math.floor(year / 10) * 10}-${
      Math.floor(year / 10) * 10 + 9
    }`;
    const rating = movie.averageRating;

    if (!(decade in ratingsByDecade)) {
      ratingsByDecade[decade] = { sum: rating, count: 1 };
    } else {
      ratingsByDecade[decade].sum += rating;
      ratingsByDecade[decade].count += 1;
    }
  });

  const outputData: LineChartData = [["Década", "Classificação Média"]];
  for (const decade in ratingsByDecade) {
    const averageRating =
      ratingsByDecade[decade].sum / ratingsByDecade[decade].count;
    outputData.push([decade, Number(averageRating.toFixed(2))]);
  }

  return outputData;
}

export function calculateTotalByTitleType(data: ChartData): PieChartData {
  const titleTypeCounts: { [titleType: string]: number } = {};

  data.forEach((movie) => {
    const titleType = movie.titleType;
    if (titleType in titleTypeCounts) {
      titleTypeCounts[titleType]++;
    } else {
      titleTypeCounts[titleType] = 1;
    }
  });

  const outputData: PieChartData = [["Tipo de Filme", "Total"]];
  for (const titleType in titleTypeCounts) {
    outputData.push([titleType, titleTypeCounts[titleType]]);
  }

  return outputData;
}

export function calculateRatingAndDuration(data: ChartData): ScatterChartData {
  // array de pares [classificação média, duração]
  const ratingAndDurationPairs: [string, number][] = data.map((movie) => [
    movie.averageRating.toFixed(1),
    Number(movie.runtimeMinutes),
  ]);

  // Ordenar o array de pares com base na classificação média
  ratingAndDurationPairs.sort((a, b) => Number(a[0]) - Number(b[0]));

  //array de saída a partir dos pares ordenados
  const outputData: ScatterChartData = [
    ["Classificação Média", "Duração em minutos"],
    ...ratingAndDurationPairs,
  ];

  return outputData;
}

export function calculateMoviesByRegionAndDecade(
  data: ChartData
): StackedBarChartData {
  const regionDecadeCounts: Map<string, Map<string, number>> = new Map();

  data.forEach((movie) => {
    const startYear = movie.startYear;
    const decade = Math.floor(startYear / 10) * 10;
    const region = movie.region;

    if (!regionDecadeCounts.has(region)) {
      regionDecadeCounts.set(region, new Map());
    }

    const regionMap = regionDecadeCounts.get(region);

    if (regionMap) {
      const currentCount = regionMap.get(decade.toString());
      if (currentCount === undefined) {
        regionMap.set(decade.toString(), 1);
      } else {
        regionMap.set(decade.toString(), currentCount + 1);
      }
    }
  });

  const uniqueRegions = Array.from(regionDecadeCounts.keys()).sort();
  const uniqueDecades = new Set<string>();

  regionDecadeCounts.forEach((decadesMap) => {
    Array.from(decadesMap.keys()).forEach((decade) => {
      uniqueDecades.add(decade);
    });
  });

  const sortedDecades = Array.from(uniqueDecades).sort();

  const outputData: StackedBarChartData = [["Década", ...uniqueRegions]];

  sortedDecades.forEach((decade) => {
    const rowData: (string | number)[] = [decade];

    uniqueRegions.forEach((region) => {
      const regionMap = regionDecadeCounts.get(region);
      if (regionMap) {
        const currentCount = regionMap.get(decade);
        rowData.push(currentCount !== undefined ? currentCount : 0);
      }
    });

    outputData.push(rowData);
  });

  return outputData;
}
