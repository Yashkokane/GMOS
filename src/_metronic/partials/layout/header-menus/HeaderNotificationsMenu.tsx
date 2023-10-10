/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {
  defaultAlerts,
  defaultLogs,
  KTIcon,
  toAbsoluteUrl,
  useIllustrationsPath,
} from '../../../helpers'

const HeaderNotificationsMenu: FC = () => (
  <div
    className='menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px'
    data-kt-menu='true'
  >
    <div
      className='d-flex flex-column bgi-no-repeat rounded-top'
      style={{backgroundImage: `url('${toAbsoluteUrl('/media/misc/menu-header-bg.jpg')}')`}}
    >
      <h1 className='text-white text-center fw-bold px-9 mt-10 mb-6'>Quick Links</h1>
    </div>

    <div className='tab-content'>
      <div className='tab-pane fade' id='kt_topbar_notifications_1' role='tabpanel'>
        <div className='scroll-y mh-325px my-5 px-8'>
          {defaultAlerts.map((alert, index) => (
            <div key={`alert${index}`} className='d-flex flex-stack py-4'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-35px me-4'>
                  <span className={clsx('symbol-label', `bg-light-${alert.state}`)}>
                    {' '}
                    <KTIcon iconName={alert.icon} className={`fs-2 text-${alert.state}`} />
                  </span>
                </div>

                <div className='mb-0 me-2'>
                  <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder'>
                    {alert.title}
                  </a>
                  <div className='text-gray-400 fs-7'>{alert.description}</div>
                </div>
              </div>

              <span className='badge badge-light fs-8'>{alert.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='tab-pane fade show active' id='kt_topbar_notifications_2' role='tabpanel'>
        <div className='d-flex flex-row '>
          <div className='card-xl-stretch'>
            <div className='text-center ' style={{marginTop: '20px'}}>
              <a
                href='#'
                className='btn btn-sm btn px-6'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_upgrade_plan'
                style={{height: '170px', width: '185px'}}
              >
                <h1>My Projects</h1>
              </a>
            </div>
          </div>
          <div className='card-xl-stretch'>
            <div className='text-center ' style={{marginTop: '20px'}}>
              <a
                href='#'
                className='btn btn-sm btn px-6'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_upgrade_plan'
                style={{height: '170px', width: '185px'}}
              >
                <h1>My Projects</h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='tab-pane fade' id='kt_topbar_notifications_3' role='tabpanel'>
        <div className='scroll-y mh-325px my-5 px-8'>
          {defaultLogs.map((log, index) => (
            <div key={`log${index}`} className='d-flex flex-stack py-4'>
              <div className='d-flex align-items-center me-2'>
                <span className={clsx('w-70px badge', `badge-light-${log.state}`, 'me-4')}>
                  {log.code}
                </span>

                <a href='#' className='text-black text-hover-primary fw-bold'>
                  {log.message}
                </a>

                <span className='badge badge-light fs-8'>{log.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='py-3 text-center border-top'>
          <Link
            to='/crafted/pages/profile'
            className='btn btn-color-gray-600 btn-active-color-primary'
          >
            View All <KTIcon iconName='arrow-right' className='fs-5' />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export {HeaderNotificationsMenu}
