import './echarts4.scss'
import user1 from '../../img/avatar-1.jpg'
import user2 from '../../img/avatar-2.jpg'
import user3 from '../../img/avatar-3.jpg'
import user4 from '../../img/avatar-4.jpg'
import user5 from '../../img/avatar-6.jpg'

const Echarts4 = () => {
  return (
    <div className='echarts4'>
      <div className="chart-top">
          <div className="rev">Recent Orders</div>
          <div className="nums">
            <span class="iconify" data-icon="ri:file-list-3-line"></span>Generate Report
          </div>
        </div>
        <div className="table">
          <table>
            <thead className='text-muted table-light'>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Product</th>
                <th scope="col">Amount</th>
                <th scope="col">Vendor</th>
                <th scope="col">Status</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#" className='fw-medium link-primary'>#VZ2112</a>
                </td>
                <td>
                  <div className="d-flex align-items-center user">
                    <img src={user1} alt="" />
                    <div className="user-name flex-grow-1">Alex Smith</div>
                  </div>
                </td>
                <td>
                  Clothes
                </td>
                <td>
                  <div className="text-success">$109.00</div>
                </td>
                <td>
                  Zoetic Fashion
                </td>
                <td>
                  <span className="badge badge-soft-success">Paid</span>
                </td>
                <td>
                <h5 class="fs-14 fw-medium mb-0">5.0<span class="text-muted fs-11 ms-1">(61 votes)</span></h5>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" className='fw-medium link-primary'>#VZ2111</a>
                </td>
                <td>
                  <div className="d-flex align-items-center user">
                    <img src={user2} alt="" />
                    <div className="user-name flex-grow-1">Jansh Brown</div>
                  </div>
                </td>
                <td>
                Kitchen Storage	
                </td>
                <td>
                  <div className="text-success">$149.00</div>
                </td>
                <td>
                Micro Design	
                </td>
                <td>
                  <span className="badge badge-soft-warning">Pending</span>
                </td>
                <td>
                <h5 class="fs-14 fw-medium mb-0">4.5<span class="text-muted fs-11 ms-1">(61 votes)</span></h5>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" className='fw-medium link-primary'>#VZ2109</a>
                </td>
                <td>
                  <div className="d-flex align-items-center user">
                    <img src={user3} alt="" />
                    <div className="user-name flex-grow-1">Ayaan Bowen</div>
                  </div>
                </td>
                <td>
                Bike Accessories	
                </td>
                <td>
                  <div className="text-success">$215.00	</div>
                </td>
                <td>
                Nesta Technologies	
                </td>
                <td>
                  <span className="badge badge-soft-success">Paid</span>
                </td>
                <td>
                <h5 class="fs-14 fw-medium mb-0">4.9<span class="text-muted fs-11 ms-1">(89 votes)</span></h5>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" className='fw-medium link-primary'>#VZ2108</a>
                </td>
                <td>
                  <div className="d-flex align-items-center user">
                    <img src={user4} alt="" />
                    <div className="user-name flex-grow-1">Prezy Mark</div>
                  </div>
                </td>
                <td>
                Furniture		
                </td>
                <td>
                  <div className="text-success">$199.00	</div>
                </td>
                <td>
                Syntyce Solutions		
                </td>
                <td>
                  <span className="badge badge-soft-danger">Unpaid</span>
                </td>
                <td>
                <h5 class="fs-14 fw-medium mb-0">4.3<span class="text-muted fs-11 ms-1">(47 votes)</span></h5>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" className='fw-medium link-primary'>#VZ2107</a>
                </td>
                <td>
                  <div className="d-flex align-items-center user">
                    <img src={user5} alt="" />
                    <div className="user-name flex-grow-1">Vihan Hudda</div>
                  </div>
                </td>
                <td>
                Bags and Wallets	
                </td>
                <td>
                  <div className="text-success">$330.00	</div>
                </td>
                <td>
                iTest Factory	
                </td>
                <td>
                  <span className="badge badge-soft-success">Paid</span>
                </td>
                <td>
                <h5 class="fs-14 fw-medium mb-0">4.7<span class="text-muted fs-11 ms-1">(61 votes)</span></h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Echarts4