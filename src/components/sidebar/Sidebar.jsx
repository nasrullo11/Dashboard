import './sidebar.scss'
import logo from '../../img/logo-light.png'
import { Icon } from '@iconify/react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="venzo">
        <a href="/" className='logo'>
          <img src={logo} alt="" /> 
        </a>
      </div>
      <div className="scrollbar">
        <div className="menu">
          <ul>
            <li className='menu-title'>
              <span className='t-name'>Menu</span>
            </li>
            <li className='nav-item'>
              <a href="#" style={{color: "white"}} className='active'>
                <div className='nav-items'>
                  <Icon icon="ri:dashboard-2-line" className='icon-dash'/>
                  Dashboards
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                <span class="iconify-inline icon-dash" data-icon="ri:apps-2-line"></span>
                  Apps
              </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify-inline icon-dash" data-icon="ant-design:layout-outlined"></span>
                  Layouts
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='menu-title'>
              <span className='t-name'>Pages</span>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify-inline icon-dash" data-icon="ic:outline-account-circle"></span>
                  Authentication
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify-inline icon-dash" data-icon="ri:pages-line"></span>
                  Pages
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">    
                  <span class="iconify-inline   icon-dash" data-icon="ic:outline-rocket"></span>
                  Landing
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>

            <li className='menu-title'>
              <span className='t-name'>components</span>
            </li>
            <li className='nav-item active'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify dash-icon iconify-inline" data-icon="ri:pencil-ruler-2-line"></span>
                  Base UI
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:stack-line"></span>
                    Advace UI
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:honour-line"></span>
                    Widgets
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:layout-grid-line"></span>
                    Tables
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">    
                  <span class="iconify iconify-inline" data-icon="ri:pie-chart-line"></span>
                    Charts
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:compasses-2-line"></span>
                    Icons
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:map-pin-line"></span>
                    Maps
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#">
                <div className="nav-items">
                  <span class="iconify iconify-inline" data-icon="ri:share-line"></span>
                    Multi Level
                </div>
                <span class="iconify" data-icon="akar-icons:chevron-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar