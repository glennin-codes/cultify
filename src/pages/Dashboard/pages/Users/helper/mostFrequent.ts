interface DiseaseData {
    diseaseName: string;
    predictedTime: string;
    _id: string;
  }
  
  export function mostFrequentDiseaseName(data: DiseaseData[]): Map<string, string | null> {
    const yearMonthCounts = new Map<string, Map<string, number>>();
  
    for (const item of data) {
      const diseaseName = item.diseaseName;
      const predictedTime = new Date(item.predictedTime);
      const yearMonth = `${predictedTime.getFullYear()}-${String(predictedTime.getMonth() + 1).padStart(2, '0')}`;
  
      if (!yearMonthCounts.has(yearMonth)) {
        yearMonthCounts.set(yearMonth, new Map<string, number>());
      }
  
      const monthCounts = yearMonthCounts.get(yearMonth)!;
      const count = (monthCounts.get(diseaseName) || 0) + 1;
      monthCounts.set(diseaseName, count);
    }
  
    const result = new Map<string, string | null>();
  
    for (const [yearMonth, monthCounts] of yearMonthCounts) {
      let maxCount = 0;
      let mostFrequent: string | null = null;
  
      for (const [diseaseName, count] of monthCounts) {
        if (count > maxCount) {
          maxCount = count;
          mostFrequent = diseaseName;
        }
      }
  
      result.set(yearMonth, mostFrequent);
    }
  
    return result;
  }
  
  // Example usage:
  const data: DiseaseData[] = [
    { diseaseName: 'Tomato Mosaic', predictedTime: '2024-03-11T12:16:35.172Z', _id: '65eef62330ebd5beac4ff434' },
    { diseaseName: 'Early bird', predictedTime: '2024-03-11T12:16:35.172Z', _id: '65eef62330ebd5beac4ff434' },
    { diseaseName: 'Tomato Mosaic', predictedTime: '2024-03-11T12:16:35.172Z', _id: '65eef62330ebd5beac4ff434' },
    { diseaseName: 'Leaf Spot', predictedTime: '2023-05-01T08:22:17.456Z', _id: '65eef62330ebd5beac4ff435' }
  ];
  
  const result = mostFrequentDiseaseName(data);
  
  for (const [yearMonth, mostFrequent] of result) {
    console.log(`Most frequent disease in ${yearMonth}: ${mostFrequent}`);
  }