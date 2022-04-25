import './ecommerce.scss'
import Ecards from '../../components/e-cards/Ecards'
import Content from '../../components/e-content/Content'
import App from '../../components/e-charts-1/echart'
import Echart2 from '../../components/e-charts-2/Echart2'
import E_products from '../../components/e-products/E_products'
import E_sellers from '../../components/e-sellers/E_sellers'
import ApexCharts1 from '../../components/e-charts-3/Echart3'
import Echarts4 from '../../components/e-charts-4/Echarts4'

const Ecommerce = () => {
  return (
    <div className='ecommerce'>
      <Content />
      <div className="e-page">
        <div className="page-title">
          <Ecards />
          <div className="e-charts">
            <App className="e-chart-1"/>
            <Echart2 className="e-chart-2"/>
          </div>
          <div className="e-charts">
            <E_products />
            <E_sellers />
          </div>
          <div className="e-charts">
            <ApexCharts1 />
            <Echarts4 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce