import { Data } from '../TeamLeaderboardChart'

export interface ChartData {
    labels: any[];
    datasets: any[];
  }

export const getChartData = (data: Data[]): ChartData => {
    const labels = data.map((row) => row.name.split(' '))
    const datasets = [
      {
        minBarLength: 5,
        label: 'Steps',
        data: data.map((col) =>
          col.totalStep ? col.totalStep : col.avg_steps
        ),
        backgroundColor: data.map((col) =>
          col.highlight ? 'rgba(226, 127, 38, 1)' : 'rgba(152, 161, 64, 1)'
        ),
        image: data.map((col) => (col.profile_pic ? col.profile_pic : null))
      }
    ]

    return { labels, datasets };
  };