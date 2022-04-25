import './e_products.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import avatar1 from "../../img/img-1.png"
import avatar2 from "../../img/img-2.png"
import avatar3 from "../../img/img-3.png"
import avatar4 from "../../img/img-4.png"
import avatar5 from "../../img/img-5.png"

const E_products = () => {
  return (
    <div className='e_products'>
        <div className="product-title">
            <div className="best">Best Selling Products</div>
            <div className="sort">
                <b>Sort by: </b>
                <DropdownButton align="end" title=" Today" id="dropdown-menu-align-end" className='drop'>
                    <Dropdown.Item eventKey="1">Today</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Yesterday</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Last 7 Days</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Last 30 Days</Dropdown.Item>
                    <Dropdown.Item eventKey="4">This Month</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Last Month</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
        <div className="product-title products">
            <table>
                <tr>
                    <td>
                        <div className="d-flex ">
                            <div className="avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                                <h5>
                                    <a href="#">Branded T-Shirts</a>
                                </h5>
                                <span>24 Apr 2021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$29.00</h5>
                        <span>Price</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>62</h5>
                        <span>Orders</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>510</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$1,798</h5>
                        <span>Amount</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex ">
                            <div className="avatar">
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                                <h5>
                                    <a href="#">Bentwood Chair</a>
                                </h5>
                                <span>19 Mar 2021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$85.20</h5>
                        <span>Price</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>35</h5>
                        <span>Orders</span>
                    </td>
                    <td>
                        <h5>
                            <span className='badge badge-soft-danger'>Out of stock</span>
                        </h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$2982</h5>
                        <span>Amount</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex ">
                            <div className="avatar">
                                <img src={avatar3} alt="" />
                            </div>
                            <div>
                                <h5>
                                    <a href="#">Borosil Paper Cup</a>
                                </h5>
                                <span>01 Mar 2021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$14.00</h5>
                        <span>Price</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>80</h5>
                        <span>Orders</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>749</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$1120</h5>
                        <span>Amount</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex ">
                            <div className="avatar">
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h5>
                                    <a href="#">One Seater Sofa</a>
                                </h5>
                                <span>11 Feb 2021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$127.50</h5>
                        <span>Price</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>56</h5>
                        <span>Orders</span>
                    </td>
                    <td>
                        <h5>
                            <span className='badge badge-soft-danger'>Out of stock</span>
                        </h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$7140</h5>
                        <span>Amount</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex ">
                            <div className="avatar">
                                <img src={avatar5} alt="" />
                            </div>
                            <div>
                                <h5>
                                    <a href="#">Stillbird Helmet</a>
                                </h5>
                                <span>17 Jan 2021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$54</h5>
                        <span>Price</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>74</h5>
                        <span>Orders</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>805</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>$3996</h5>
                        <span>Amount</span>
                    </td>
                </tr>
            </table>
            <div className="product-title product">
                <div className="text-muted">
                    Showing  
                    <span className='fw-semibold'> 5 </span>
                     of
                    <span className='fw-semibold'> 25 </span>
                     Results
                </div>
                <ul className="pagination">
                    <li className="page-item disabled">←</li>
                    <li className="page-item">1</li>
                    <li className="page-item active">2</li>
                    <li className="page-item">3</li>
                    <li className="page-item">→</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default E_products