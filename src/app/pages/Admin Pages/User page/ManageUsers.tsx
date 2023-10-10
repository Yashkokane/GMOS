import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../../_metronic/layout/core'
import {KTIcon} from '../../../../_metronic/helpers'

const UserManagementPage: FC = () => (
  <>
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'></h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTIcon iconName='plus' className='fs-2' />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4  rounded-start'>No</th>
                <th className='min-w-175px'>Name</th>
                <th className='min-w-300px'>Email</th>
                <th className='min-w-20px'>Role</th>
                <th className='min-w-40px'>Type</th>
                <th className='min-w-100px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{fontSize: '20px', textAlign: 'center'}}>1</td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Admin</span>
                </td>
                <td>
                  <span className='text-dark fw-bold  d-block mb-1 fs-6'>Email@email.com</span>
                </td>
                <td>
                  <span className='badge badge-success text-dark fw-bold  d-block mb-1 fs-6'>
                    Admin
                  </span>
                </td>
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Internal</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='switch' className='fs-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTIcon iconName='pencil' className='fs-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='trash' className='fs-3' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  </>
)

const ManageUsers: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Manage Users'})}</PageTitle>
      <UserManagementPage />
    </>
  )
}

export default ManageUsers
