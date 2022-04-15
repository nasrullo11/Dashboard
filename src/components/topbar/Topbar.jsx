import './topbar.scss'
import us from '../../img/us.svg'
import user1 from '../../img/avatar-1.jpg'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="nav-1">
        <div className="hamburger">
          <span class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div className="relative">
          <input type="text" placeholder='Search...'/>
          <span class="iconify" data-icon="ant-design:search-outlined"></span>
        </div>
      </div>
        <div className="nav-2">
          <div className="left">
            <div className="left-items">
              <img src={us} alt="" />
            </div>
            <div className="left-items">
              <span class="iconify" data-icon="bx:category-alt"></span>
            </div>
            <div className="left-items">
              <span class="iconify" data-icon="bx:shopping-bag"></span>
              <span className='num'>5</span>
            </div>
            <div className="left-items">
              <span class="iconify" data-icon="bx:fullscreen"></span>
            </div>
            <div className="left-items">
              <span class="iconify" data-icon="bx:moon"></span>
            </div>
            <div className="left-items">
              <span class="iconify" data-icon="bx:bell"></span>
              <span className='num red'>3</span>
            </div>
            <div className="user">
              <div className="user-1">
                <div className="span">
                  <div className="user-img">
                    <img src={user1} alt="" className='user-img'/>
                  </div>
                  <div className="username">
                    <div className="user-name">Anna Adame</div>
                    <div className="user-position">Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar