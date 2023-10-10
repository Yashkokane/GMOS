import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../../_metronic/layout/core'
import {KTIcon} from '../../../../_metronic/helpers'
import {Link, Route} from 'react-router-dom'
import AddUser from './AddUser'

const UserManagementPage: FC = () => (
  <>
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title  flex-column'></h3>
        <div className='row' style={{display: 'flex'}}>
          <div className='col-sm-12 col-md-6'>
            <div className='dataTables_length' id='billing_invoice_length'>
              <label style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                Show{' '}
                <select
                  style={{margin: '10px 10px 10px 10px', width: '50px'}}
                  name='billing_invoice_length'
                  aria-controls='billing_invoice'
                  className='custom-select custom-select-sm form-control form-control-sm'
                >
                  <option value='10'>10</option>
                  <option value='25'>25</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </select>{' '}
                entries
              </label>
            </div>
          </div>
        </div>
        <div className='card-toolbar'>
          <Link to='/AddUsers'>
            <a href='' className='btn btn-sm btn-light-primary'>
              <KTIcon iconName='plus' className='fs-2' />
              New User
            </a>
          </Link>
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
      <div className='row' style={{display: 'flex', marginTop: '20px'}}>
        <div
          className='col-sm-12 col-md-5'
          style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}
        >
          <div
            className='dataTables_info'
            id='billing_invoice_info'
            role='status'
            aria-live='polite'
            style={{marginLeft: '20px'}}
          >
            Showing 1 to 10 of 61 entries
          </div>
        </div>
        <div className='col-sm-12 col-md-7' style={{marginBottom: '20px'}}>
          <div className='dataTables_paginate paging_simple_numbers' id='billing_invoice_paginate'>
            <ul
              className='pagination'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                marginRight: '20px',
                marginTop: '20px',
              }}
            >
              <li
                className='paginate_button page-item previous disabled'
                id='billing_invoice_previous'
              >
                <a href='#' aria-controls='billing_invoice' data-dt-idx='0' className='page-link'>
                  Previous
                </a>
              </li>
              <li className='paginate_button page-item active'>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='1' className='page-link'>
                  1
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='2' className='page-link'>
                  2
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='3' className='page-link'>
                  3
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='4' className='page-link'>
                  4
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='5' className='page-link'>
                  5
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='6' className='page-link'>
                  6
                </a>
              </li>
              <li className='paginate_button page-item '>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='7' className='page-link'>
                  7
                </a>
              </li>
              <li className='paginate_button page-item next' id='billing_invoice_next'>
                <a href='#' aria-controls='billing_invoice' data-dt-idx='8' className='page-link'>
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
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
