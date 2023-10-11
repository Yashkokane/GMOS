import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
const VendorManagementPage: FC = () => (
  <>
    <div className={`card`}>
      <div className='row'>
        <div className='row' style={{display: 'flex', marginTop: '20px'}}>
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
          <div className='col-sm-12 col-md-6'>
            <div id='vendor_filter' className='dataTables_filter'>
              <label style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                Search:
                <input
                  style={{margin: '10px 10px 10px 10px', width: '200px'}}
                  type='search'
                  className='form-control form-control-sm'
                  placeholder=''
                  aria-controls='vendor'
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{marginLeft: '200px', marginTop: '20px', marginRight: '200px'}}>
        <div className='col-sm-12'>
          <table
            className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            id='vendor'
            role='grid'
            aria-describedby='vendor_info'
          >
            <thead>
              <tr
                className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'
                role='row'
              >
                <th
                  className='min-w-120px sorting sorting_asc'
                  aria-controls='vendor'
                  rowSpan={1}
                  colSpan={1}
                  aria-sort='ascending'
                  aria-label='Name: activate to sort column descending'
                  style={{width: '150px'}}
                >
                  Name
                </th>
                <th
                  className='min-w-120px sorting'
                  aria-controls='vendor'
                  rowSpan={1}
                  colSpan={1}
                  aria-label='Email: activate to sort column ascending'
                  style={{width: '380px'}}
                >
                  Email
                </th>
                <th
                  className='min-w-120px sorting'
                  aria-controls='vendor'
                  rowSpan={1}
                  colSpan={1}
                  aria-label='Status: activate to sort column ascending'
                  style={{width: '50px'}}
                >
                  Status
                </th>
                <th
                  className='min-w-120px sorting'
                  aria-controls='vendor'
                  rowSpan={1}
                  colSpan={1}
                  aria-label='Action: activate to sort column ascending'
                  style={{width: '150px'}}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc</td>
                <td>email@gmail.com</td>
                <td>
                  <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='notifications'
                      value=''
                    />
                  </div>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-sm btn-light btn-active-light-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                    style={{backgroundColor: '#5d2d91', color: 'white'}}
                  >
                    Actions
                    <span className='svg-icon svg-icon-5 m-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                        style={{marginLeft: '20px'}}
                      >
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <polygon points='0 0 24 0 24 24 0 24'></polygon>
                          <path
                            d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                            fill='#000000'
                            fillRule='nonzero'
                            transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                  <div
                    className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                    data-kt-menu='true'
                  >
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        View
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='https://uatgmos.rapidsay.com/vendor_details/36/edit'
                        className='menu-link px-3'
                      >
                        Edit
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='#'
                        className='menu-link px-3'
                        data-kt-customer-table-filter='delete_row'
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>abc</td>
                <td>email@gmail.com</td>
                <td>
                  <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='notifications'
                      value=''
                    />
                  </div>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-sm btn-light btn-active-light-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                    style={{backgroundColor: '#5d2d91', color: 'white'}}
                  >
                    Actions
                    <span className='svg-icon svg-icon-5 m-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                        style={{marginLeft: '20px'}}
                      >
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <polygon points='0 0 24 0 24 24 0 24'></polygon>
                          <path
                            d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                            fill='#000000'
                            fillRule='nonzero'
                            transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                  <div
                    className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                    data-kt-menu='true'
                  >
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        View
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='https://uatgmos.rapidsay.com/vendor_details/36/edit'
                        className='menu-link px-3'
                      >
                        Edit
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='#'
                        className='menu-link px-3'
                        data-kt-customer-table-filter='delete_row'
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>abc</td>
                <td>email@gmail.com</td>
                <td>
                  <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='notifications'
                      value=''
                    />
                  </div>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-sm btn-light btn-active-light-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                    style={{backgroundColor: '#5d2d91', color: 'white'}}
                  >
                    Actions
                    <span className='svg-icon svg-icon-5 m-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                        style={{marginLeft: '20px'}}
                      >
                        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <polygon points='0 0 24 0 24 24 0 24'></polygon>
                          <path
                            d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                            fill='#000000'
                            fillRule='nonzero'
                            transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                  <div
                    className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                    data-kt-menu='true'
                  >
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        View
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='https://uatgmos.rapidsay.com/vendor_details/36/edit'
                        className='menu-link px-3'
                      >
                        Edit
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a
                        href='#'
                        className='menu-link px-3'
                        data-kt-customer-table-filter='delete_row'
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
    </div>
  </>
)

const ManageVendorsDetails = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Manage Vendors</PageTitle>
      <VendorManagementPage />
    </>
  )
}

export default ManageVendorsDetails
