import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import { PageTitle } from '../../../../_metronic/layout/core'

const UserManagementPage: FC = () => (
  <>
    <div className={`card`}>
      {/* begin::Header */}
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
            <div className='card-toolbar' style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Link to='/AddUsers'>
                <a href='' className='btn btn-sm btn-light-primary'>
                  <KTIcon iconName='plus' className='fs-2' />
                  New User
                </a>
              </Link>
            </div>
          </div>
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
                        <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                          <polygon points='0 0 24 0 24 24 0 24'></polygon>
                          <path
                            d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                            fill='#000000'
                            fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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
                          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                            <polygon points='0 0 24 0 24 24 0 24'></polygon>
                            <path
                              d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                              fill='#000000'
                              fill-rule='nonzero'
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

const ManageUsers = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Manage Users'})}</PageTitle>
      <UserManagementPage />
    </>
  )
}

export default ManageUsers
