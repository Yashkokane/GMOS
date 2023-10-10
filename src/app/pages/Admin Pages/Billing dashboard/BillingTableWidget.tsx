/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../../_metronic/helpers'

type Props = {
  className: string
}

const BillingTableWidget: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span
            style={{
              display: 'flex',
            }}
          >
            <span
              style={{
                display: 'flex',
                width: '200px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Buyer List
            </span>
            <span
              className='select2-selection select2-selection--single form-select error'
              role='combobox'
              aria-haspopup='true'
              aria-expanded='false'
              aria-disabled='false'
              aria-labelledby='select2-userId-container'
              aria-controls='select2-userId-container'
            >
              <span
                className='select2-selection__rendered'
                id='select2-userId-container'
                role='textbox'
                aria-readonly='true'
                title='All Users'
              >
                All Users
              </span>
              <span className='select2-selection__arrow' role='presentation'>
                <b role='presentation'></b>
              </span>
            </span>
          </span>
        </h3>
        <div style={{display: 'flex'}}>
          <div className='d-flex flex-wrap align-items-center my-2'>
            <label className='me-2'>Filter by Date:</label>

            <div className='date_filter'>
              <i
                className='fas fa-calendar-alt'
                style={{position: 'absolute', fontSize: '22px', top: '30px', right: '45px'}}
              ></i>
              <input
                type='date'
                className='form-control'
                placeholder='Pick date rage'
                id='kt_daterangepicker_4'
                //onchange="getinvoice()"
                style={{width: '200px'}}
              />
              <input
                className='form-control'
                placeholder='Pick date rage'
                type='hidden'
                name='date_range'
                value='2023-09-10 - 2023-10-09'
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{border: '2px solid black'}}></hr>
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
        <div className='col-sm-12 col-md-6'>
          <div id='billing_invoice_filter' className='dataTables_filter'>
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
                style={{width: '300px'}}
                type='search'
                className='form-control form-control-sm'
                placeholder=''
                aria-controls='billing_invoice'
              />
            </label>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <table
        id='billing_invoice'
        className='table table-row-bordered gy-3 gs-3 border rounded no-footer dataTable'
        role='grid'
        aria-describedby='billing_invoice_info'
        style={{marginLeft: '10px'}}
      >
        <thead>
          <tr className='fw-bolder fs-6 text-gray-800 px-7' role='row'>
            <th
              className='sorting sorting_asc text-center '
              aria-controls='billing_invoice'
              rowSpan={1}
              colSpan={1}
              aria-label='Project ID: activate to sort column descending'
              style={{width: '135.047px'}}
              aria-sort='ascending'
            >
              Project ID
            </th>
            <th
              className='sorting text-center'
              aria-controls='billing_invoice'
              rowSpan={1}
              colSpan={1}
              aria-label='Project Name: activate to sort column ascending'
              style={{width: '183.781px'}}
            >
              Project Name
            </th>
            <th
              className='sorting text-center'
              aria-controls='billing_invoice'
              rowSpan={1}
              colSpan={1}
              aria-label='Achieved vs Target: activate to sort column ascending'
              style={{width: '250.516px'}}
            >
              Achieved vs Target
            </th>
            <th
              className='sorting text-center'
              aria-controls='billing_invoice'
              rowSpan={1}
              colSpan={1}
              aria-label='Country: activate to sort column ascending'
              style={{width: '120.172px'}}
            >
              Country
            </th>
            <th
              className='sorting text-center'
              aria-controls='billing_invoice'
              rowSpan={1}
              colSpan={1}
              aria-label='Total Billed: activate to sort column ascending'
              style={{width: '142.484px'}}
            >
              Total Billed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='odd'>
            <td className='text-center fw-bold text-primary sorting_1'>147</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test99347'
            >
              test99347
            </td>
            <td className='text-center'>500 | 500</td>
            <td className='text-center'>CA</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>500
            </td>
          </tr>
          <tr className='even'>
            <td className='text-center fw-bold text-primary sorting_1'>148</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test91595'
            >
              test91595
            </td>
            <td className='text-center'>800 | 800</td>
            <td className='text-center'>CA</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>800
            </td>
          </tr>
          <tr className='odd'>
            <td className='text-center fw-bold text-primary sorting_1'>149</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test92002'
            >
              test92002
            </td>
            <td className='text-center'>1000 | 1000</td>
            <td className='text-center'>CN</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>1000
            </td>
          </tr>
          <tr className='even'>
            <td className='text-center fw-bold text-primary sorting_1'>150</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test97317'
            >
              test97317
            </td>
            <td className='text-center'>800 | 800</td>
            <td className='text-center'>CA</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>800
            </td>
          </tr>
          <tr className='odd'>
            <td className='text-center fw-bold text-primary sorting_1'>151</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test74372'
            >
              test74372
            </td>
            <td className='text-center'>1200 | 1200</td>
            <td className='text-center'>ID</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>1200
            </td>
          </tr>
          <tr className='even'>
            <td className='text-center fw-bold text-primary sorting_1'>152</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test40714'
            >
              test40714
            </td>
            <td className='text-center'>600 | 600</td>
            <td className='text-center'>CN</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>600
            </td>
          </tr>
          <tr className='odd'>
            <td className='text-center fw-bold text-primary sorting_1'>153</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test90447'
            >
              test90447
            </td>
            <td className='text-center'>700 | 700</td>
            <td className='text-center'>CN</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>700
            </td>
          </tr>
          <tr className='even'>
            <td className='text-center fw-bold text-primary sorting_1'>154</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test36508'
            >
              test36508
            </td>
            <td className='text-center'>500 | 500</td>
            <td className='text-center'>CA</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>500
            </td>
          </tr>
          <tr className='odd'>
            <td className='text-center fw-bold text-primary sorting_1'>155</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test8148'
            >
              test8148
            </td>
            <td className='text-center'>1000 | 1000</td>
            <td className='text-center'>CN</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>1000
            </td>
          </tr>
          <tr className='even'>
            <td className='text-center fw-bold text-primary sorting_1'>156</td>
            <td
              className='text-center wrap_td'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='test53577'
            >
              test53577
            </td>
            <td className='text-center'>800 | 800</td>
            <td className='text-center'>ID</td>
            <td className='text-center'>
              <i className='fas fa-dollar-sign me-1'></i>800
            </td>
          </tr>
        </tbody>
      </table>
      {/* begin::Body */}
      <div className='row' style={{display: 'flex', marginTop: '20px'}}>
        <div className='col-sm-12 col-md-5'>
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
            <ul className='pagination'>
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
  )
}

export {BillingTableWidget}
