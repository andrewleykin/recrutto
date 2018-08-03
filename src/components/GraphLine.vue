<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['dataset'],
  mounted () {
    var data = this.dataset
    // Переопределение базового рендер метода с реальными данными.
    this.renderChart({
      labels: ['Янв 2018', 'Фев 2018', 'Март 2018', 'Апр 2018', 'Май 2018', 'Июнь 2018', 'Июль 2018', 'Авг 2018', 'Сен 2018', 'Окт 2018', 'Ноя 2018', 'Дек 2018'],
      datasets: data
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            min: 0
          }
        }]
      },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 13,
          fontColor: '#333',
          usePointStyle: true
        }
      },
      layout: {
        padding: 20
      }
    })
  }
}
</script>
