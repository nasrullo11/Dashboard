import './e_sellers.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import avatar1 from "../../img/img-1 (1).png"
import avatar2 from "../../img/img-2 (1).png"
import avatar3 from "../../img/img-3 (1).png"
import avatar4 from "../../img/img-8.png"
import avatar5 from "../../img/img-5 (1).png"

const E_sellers = () => {
  return (
    <div className='e_products'>
        <div className="product-title">
            <div className="best">Top Sellers</div>
            <div className="sort">
                <DropdownButton align="end" title="Report" id="dropdown-menu-align-end" className='drop'>
                    <Dropdown.Item eventKey="1">Download Report</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Export</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Import</Dropdown.Item>
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
                                    <a href="#">iTest Factory</a>
                                </h5>
                                <span>Oliver Tyler</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span>Bags and Wallets</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>8547</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <span>$541200</span>
                    </td>
                    <td>
                        <h5>32%
                        <span class="iconify" data-icon="ri:bar-chart-2-fill"></span>
                        </h5>
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
                                    <a href="#">Digitech Galaxy</a>
                                </h5>
                                <span>John Roberts</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span>Watches</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>895</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <span>$75030</span>
                    </td>
                    <td>
                        <h5>79%
                        <span class="iconify" data-icon="ri:bar-chart-2-fill"></span>
                        </h5>
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
                                    <a href="#">Nesta Technologies</a>
                                </h5>
                                <span>Harley Fuller</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span>Bike Accessories</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>3470</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <span>$45600</span>
                    </td>
                    <td>
                        <h5>90%
                        <span class="iconify" data-icon="ri:bar-chart-2-fill"></span>
                        </h5>
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
                                    <a href="#">Zoetic Fashion</a>
                                </h5>
                                <span>James Bowen</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span>Clothes</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>5488</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <span>$29456</span>
                    </td>
                    <td>
                        <h5>40%
                        <span class="iconify" data-icon="ri:bar-chart-2-fill"></span>
                        </h5>
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
                                    <a href="#">Meta4Systems</a>
                                </h5>
                                <span>Zoe Dennis</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span>Furniture</span>
                    </td>
                    <td>
                        <h5 style={{fontWeight: "normal"}}>4100</h5>
                        <span>Stock</span>
                    </td>
                    <td>
                        <span>$11260</span>
                    </td>
                    <td>
                        <h5>57%
                        <span class="iconify" data-icon="ri:bar-chart-2-fill"></span>
                        </h5>
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

export default E_sellers