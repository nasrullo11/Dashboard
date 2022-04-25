import './echarts3.scss'
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class ApexChart1 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 380,
            options: {
              chart: {
                width: 200,
                height: '200px'
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

        <div id="chart">
            <div className="chart-top">
              <div className="rev">Store Visits by Source</div>
              <div className="sort">
                <DropdownButton align="end" title="Report" id="dropdown-menu-align-end" className='drop'>
                    <Dropdown.Item eventKey="1">Download Report</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Export</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Import</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" className="chart-3"/>
        </div>
        )
    }
}

export default ApexChart1