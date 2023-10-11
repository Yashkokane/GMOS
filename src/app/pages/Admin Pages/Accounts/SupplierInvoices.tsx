import {PageTitle} from '../../../../_metronic/layout/core'

const SupplierInvoicePage = () => (
  <>
    <div className='card'>
      <div className='card-body' data-select2-id='select2-data-10-5igu'>
        <div className='row'>
          <div className='col-xs-4 col-sm-4 col-md-4'>
            <div className='form-group'>
              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>Vendor Name </label>
              <select
                name='vendor_name'
                id='vendor_name'
                className='form-select filter select2-hidden-accessible'
                data-placeholder='Select Vendor Name'
                data-control='select2'
                data-select2-id='select2-data-vendor_name'
                tabIndex={-1}
                aria-hidden='true'
              >
                <option value='0' data-select2-id='select2-data-8-hs57'>
                  Select Vendor Name
                </option>
                <option value='1' data-select2-id='select2-data-12-e1ds'>
                  {' '}
                  Schlensinger
                </option>
              </select>
              <span
                className='select2 select2-container select2-container--bootstrap5 select2-container--below select2-container--focus'
                dir='ltr'
                data-select2-id='select2-data-7-oxtv'
                style={{width: '100%'}}
              >
                <span className='dropdown-wrapper' aria-hidden='true'></span>
              </span>
            </div>
          </div>
        </div>
        <div className='table-responsive mt-10'>
          <div id='survey_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <div className='dataTables_length' id='kt_table_users_length'>
                  <label style={{display: 'flex', alignItems: 'center'}}>
                    Show{' '}
                    <select
                      name='kt_table_users_length'
                      aria-controls='kt_table_users'
                      className='custom-select custom-select-sm form-control form-control-sm'
                      style={{marginLeft: '10px', marginRight: '10px', width: '50px'}}
                    >
                      <option value='10'>10</option>
                      <option value='25'>25</option>
                      <option value='50'>50</option>
                      <option value='100'>100</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div id='kt_table_users_filter' className='dataTables_filter'>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      marginRight: '20px',
                    }}
                  >
                    Search:
                    <input
                      type='search'
                      className='form-control form-control-sm'
                      placeholder=''
                      aria-controls='kt_table_users'
                      style={{width: '400px', marginLeft: '10px'}}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <table
                  className='table table-hover table-rounded table-row-bordered dataTable no-footer'
                  id='survey'
                  role='grid'
                  aria-describedby='survey_info'
                >
                  <thead className=''>
                    <tr
                      className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200 '
                      role='row'
                    >
                      <th
                        className='text-muted sorting sorting_desc'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '31px'}}
                        aria-sort='descending'
                        aria-label='ID: activate to sort column ascending'
                      >
                        ID
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '272px'}}
                        aria-label='Supplier Invoice Number: activate to sort column ascending'
                      >
                        Supplier Invoice Number
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '113px'}}
                        aria-label='Project ID: activate to sort column ascending'
                      >
                        Project ID
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '156px'}}
                        aria-label='Project Name: activate to sort column ascending'
                      >
                        Project Name
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '145px'}}
                        aria-label='Client Name: activate to sort column ascending'
                      >
                        Client Name
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '82px'}}
                        aria-label='Status: activate to sort column ascending'
                      >
                        Status
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='survey'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '121px'}}
                        aria-label='Download : activate to sort column ascending'
                      >
                        Download{' '}
                      </th>
                    </tr>
                  </thead>
                  <tbody id='sample'>
                    <tr className='odd'>
                      <td valign='top' colSpan={7} className='dataTables_empty'>
                        No data available in table
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-md-5'>
                <div className='dataTables_info' id='survey_info' role='status' aria-live='polite'>
                  Showing 0 to 0 of 0 entries
                </div>
              </div>
              <div className='col-sm-12 col-md-7'>
                <div className='dataTables_paginate paging_simple_numbers' id='survey_paginate'>
                  <ul className='pagination'>
                    <li
                      className='paginate_button page-item previous disabled'
                      id='survey_previous'
                    >
                      <a
                        href='#'
                        aria-controls='survey'
                        data-dt-idx='0'
                        tabIndex={0}
                        className='page-link'
                      >
                        Previous
                      </a>
                    </li>
                    <li className='paginate_button page-item next disabled' id='survey_next'>
                      <a
                        href='#'
                        aria-controls='survey'
                        data-dt-idx='1'
                        tabIndex={0}
                        className='page-link'
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

const SupplierInvoices = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Supplier Invoices</PageTitle>
      <SupplierInvoicePage />
    </>
  )
}

export default SupplierInvoices
