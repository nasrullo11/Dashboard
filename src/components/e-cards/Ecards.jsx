import './ecards.scss'

const Ecards = () => {
  return (
    <div className='ecards'>
        <div className="card-content">
            <div className="dates">
                <div className="page-titles">
                    <div className="texts">
                        <h4>Good Morning, Anna!</h4>
                        <p>Here's what's happening with your store today.</p>
                    </div>
                    <div className="date">
                        <div className="input-group">
                            <input type="text" class="form-control border-0 dash-filter-picker shadow flatpickr-input active" data-provider="flatpickr" data-range-date="true" data-date-format="d M, Y" value={"01 Jan 2022 to 31 Jan 2022"} readonly="readonly"/>
                            <div className="input-g-text">
                                <span class="iconify" data-icon="ri:calendar-2-line"></span>
                            </div>
                        </div>
                        <button className='button-add'>
                            <span class="iconify" data-icon="ri:add-circle-line" style={{marginRight: "4px"}}></span>
                            Add Product
                        </button>
                        <button className='button-tr'>
                            <span class="iconify" data-icon="ri:pulse-line"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <p>TOTAL EARNINGS</p>
                            <div className="position">
                                <span class="iconify" data-icon="ri:arrow-right-up-line"></span>
                                 +16.24 %
                            </div>
                        </div>
                        <div className="cardbody">
                            <div>
                                <h4>$559.25k</h4>
                                <a href="#">View net earnings</a>
                            </div>
                            <div className="card-icon">
                                <span class="iconify" data-icon="bx:dollar-circle"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <p>ORDERS</p>
                            <div className="position pos-2">
                                <span class="iconify" data-icon="ri:arrow-right-down-line"></span>
                                -3.57 %
                            </div>
                        </div>
                        <div className="cardbody">
                            <div>
                                <h4>36,894</h4>
                                <a href="#">View net earnings</a>
                            </div>
                            <div className="card-icon blue">
                            <span class="iconify" data-icon="bx:shopping-bag"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <p>CUSTOMERS</p>
                            <div className="position">
                                <span class="iconify" data-icon="ri:arrow-right-up-line"></span>
                                +29.08 %
                            </div>
                        </div>
                        <div className="cardbody">
                            <div>
                                <h4>183.35M</h4>
                                <a href="#">See details</a>
                            </div>
                            <div className="card-icon brow">
                                <span class="iconify" data-icon="bx:dollar-circle"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <p>MY BALANCE</p>
                            <div className="position grayc">
                            +0.00 %
                            </div>
                        </div>
                        <div className="cardbody">
                            <div>
                                <h4>$165.89k</h4>
                                <a href="#">Withdraw money</a>
                            </div>
                            <div className="card-icon gray">
                                <span class="iconify" data-icon="bx:wallet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecards