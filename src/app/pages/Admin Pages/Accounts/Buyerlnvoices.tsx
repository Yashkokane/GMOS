import {PageTitle} from '../../../../_metronic/layout/core'

const BuyerInvoicePage = () => (
  <>
    <div className='card'>
      <div className='card-body'>
        <div className='row fv-row mb-7'>
          <div className='col-md-3'>
            <label className='card-label fw-bolder fs-3 mb-1'>Date</label>
            <input
              className='form-control'
              name='date_range'
              placeholder='Pick a date'
              id='date_range'
              autoComplete='off'
            />
          </div>
        </div>
        <div className='loader' id='loader1' style={{display: 'none'}}>
          <div className='loader_box w-100'>
            <div className='card'>
              <div className='card-body text-center d-flex flex-column align-items-center'>
                <div className='loader_circle_box mb-5 d-flex align-items-center justify-content-center'>
                  <i className='fas fa-copy text-primary'></i>
                </div>
                <h3 className='loader_title text-primary text-uppercase mb-5'>Loading</h3>
                <div className='border_bottom w-100 mb-5'></div>
                <span className='text-muted'>Please wait for a while</span>
              </div>
            </div>
          </div>
        </div>

        <div className='table-responsive mt-10'>
          <div id='invoice_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
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
                  className='table table-hover table-rounded table-row-bordered no-footer dataTable'
                  id='invoice'
                  role='grid'
                  aria-describedby='invoice_info'
                  style={{marginRight: '20px', marginLeft: '20px'}}
                >
                  <thead>
                    <tr
                      className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200 '
                      role='row'
                    >
                      <th
                        className='text-muted sorting sorting_desc'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '130px'}}
                        aria-label='Invoice No: activate to sort column ascending'
                        aria-sort='descending'
                      >
                        Invoice No
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '120px'}}
                        aria-label='Project ID: activate to sort column ascending'
                      >
                        Project ID
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '140px'}}
                        aria-label='Completes : activate to sort column ascending'
                      >
                        Completes{' '}
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '165px'}}
                        aria-label='Total Amount: activate to sort column ascending'
                      >
                        Total Amount
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '160px'}}
                        aria-label='Created Date: activate to sort column ascending'
                      >
                        Created Date
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '120px'}}
                        aria-label='Paid Date: activate to sort column ascending'
                      >
                        Paid Date
                      </th>
                      <th
                        className='text-muted sorting'
                        tabIndex={0}
                        aria-controls='invoice'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '85px'}}
                        aria-label='Status: activate to sort column ascending'
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody id='row_invoice'>
                    <tr className='odd'>
                      <td className='sorting_1'>61</td>
                      <td>166</td>
                      <td>600</td>
                      <td>600</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>60</td>
                      <td>165</td>
                      <td>450</td>
                      <td>450</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>59</td>
                      <td>164</td>
                      <td>500</td>
                      <td>500</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>58</td>
                      <td>163</td>
                      <td>700</td>
                      <td>700</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>57</td>
                      <td>162</td>
                      <td>800</td>
                      <td>800</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>56</td>
                      <td>161</td>
                      <td>900</td>
                      <td>900</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>55</td>
                      <td>160</td>
                      <td>1000</td>
                      <td>1000</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>54</td>
                      <td>159</td>
                      <td>800</td>
                      <td>800</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>53</td>
                      <td>158</td>
                      <td>600</td>
                      <td>600</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>52</td>
                      <td>157</td>
                      <td>400</td>
                      <td>400</td>
                      <td>15-09-23</td>
                      <td></td>
                      <td>
                        <span className='badge badge-light-warning'>Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='row' style={{marginTop: '20px'}}>
              <div className='col-sm-12 col-md-5'>
                <div className='dataTables_info' id='invoice_info' role='status' aria-live='polite'>
                  Showing 1 to 10 of 61 entries
                </div>
              </div>
              <div className='col-sm-12 col-md-7'>
                <div className='dataTables_paginate paging_simple_numbers' id='invoice_paginate'>
                  <ul className='pagination'>
                    <li
                      className='paginate_button page-item previous disabled'
                      id='invoice_previous'
                    >
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='0'
                        tabIndex={0}
                        className='page-link'
                      >
                        Previous
                      </a>
                    </li>
                    <li className='paginate_button page-item active'>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='1'
                        tabIndex={0}
                        className='page-link'
                      >
                        1
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='2'
                        tabIndex={0}
                        className='page-link'
                      >
                        2
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='3'
                        tabIndex={0}
                        className='page-link'
                      >
                        3
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='4'
                        tabIndex={0}
                        className='page-link'
                      >
                        4
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='5'
                        tabIndex={0}
                        className='page-link'
                      >
                        5
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='6'
                        tabIndex={0}
                        className='page-link'
                      >
                        6
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='7'
                        tabIndex={0}
                        className='page-link'
                      >
                        7
                      </a>
                    </li>
                    <li className='paginate_button page-item next' id='invoice_next'>
                      <a
                        href='#'
                        aria-controls='invoice'
                        data-dt-idx='8'
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
const Buyerlnvoices = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Buyer Invoice</PageTitle>
      <BuyerInvoicePage />
    </>
  )
}

export default Buyerlnvoices
