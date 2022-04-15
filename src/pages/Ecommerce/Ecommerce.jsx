import Ecards from '../../components/e-cards/Ecards'
import Content from '../../components/e-content/Content'
// import echart from '../../components/e-charts-1/echart'
import './ecommerce.scss'
import ApexChart from '../../components/e-charts-1/echart'

const Ecommerce = () => {
  return (
    <div className='ecommerce'>
      <Content />
      <div className="page-title">
        <Ecards />
        <div className="e-charts">
          <ApexChart />
        </div>
      </div>
    </div>
  )
}

export default Ecommerce