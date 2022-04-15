import './echart.scss'
import Chart from 'react-apexcharts'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
        }
      },
      series: [{
        name: 'series-1',
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57]
      }]
    }
  }
  render() {
    return (
      <div className="e-chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" width={700} height={320} className="chart"/>
      </div>
    )
  }
}

export default App