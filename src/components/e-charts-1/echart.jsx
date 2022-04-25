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
        <div className="chart-top">
          <div className="rev">Revenue</div>
          <div className="num">
            <div className="nums">All</div>
            <div className="nums">1M</div>
            <div className="nums">6M</div>
            <div className="nums">1Y</div>
          </div>
        </div>
        <div className="chart-header">
          <div className="col6">
            <h5>7,585</h5>
            <p>Orders</p>
          </div>
          <div className="col6">
            <h5>$22.89k</h5>
            <p>Earnings</p>
          </div>
          <div className="col6">
            <h5>367</h5>
            <p>Refunds</p>
          </div>
          <div className="col6">
            <h5 className='h5'>18.92%</h5>
            <p>Conversation Ratio</p>
          </div>
        </div>
        <Chart options={this.state.options} series={this.state.series} type="bar" height={320} className="chart"/>
      </div>
    )
  }
}

export default App