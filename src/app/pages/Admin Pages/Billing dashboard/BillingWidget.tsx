import {left} from '@popperjs/core'
import {Dropdown} from 'react-bootstrap'
import './css/BillingWidget.css'

type Props = {
  className: string
  description: string
  color: string
  img: string
}

const BillingWidget = ({className, description, color, img}: Props) => (
  <>
    <div className='row'>
      <div className='col-sm-12 col-md-6 d-flex'>
        <div className='card w-100 card-xl-stretch mb-8 text-white' style={{borderRadius: '25px'}}>
          <div className='card-body' style={{backgroundColor: '#5d2d91', borderRadius: '25px'}}>
            <i className='fas fa-folder fs-1' style={{color: 'white'}}></i>
            <div
              className='row counting_box'
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                marginTop: '20px',
                wordBreak: 'break-word',
              }}
            >
              <div
                className='cb_1 d-flex  flex-column '
                style={{width: '110px', marginLeft: '50px'}}
              >
                <span style={{fontSize: '40px'}}>53</span>
                <span style={{fontSize: '20px'}}>Total Projects</span>
              </div>
              <div style={{borderLeft: '2px solid white', height: '150px', width: '0px'}}></div>
              <div className='cb_2' style={{marginRight: '20px'}}>
                <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
                  <div className='col-sm-6 d-flex flex-column' style={{width: '180px'}}>
                    <span className='fs-5'>Live Projects &nbsp;&nbsp;</span>
                    <strong className='fs-1'>0</strong>
                  </div>
                  <div className='col-sm-6 d-flex flex-column' style={{width: '180px'}}>
                    <span className='fs-5'>Paused Projects</span>
                    <strong className='fs-1'>0</strong>
                  </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <div className='col-sm-6 d-flex flex-column' style={{width: '180px'}}>
                    <span className='fs-5'>Closed Projects</span>
                    <strong className='fs-1'>33</strong>
                  </div>

                  <div className='col-sm-6 d-flex flex-column' style={{width: '180px'}}>
                    <span className='fs-5'>Invoiced Projects</span>
                    <strong className='fs-1'>20</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-sm-12 col-md-6 d-flex' data-select2-id='select2-data-29-n5vd'>
        <div
          className='card w-100 card-xl-stretch mb-8 text-white'
          data-select2-id='select2-data-28-r75e'
        >
          <div
            className='card-body  newUigreen'
            data-select2-id='select2-data-27-pbb2'
            style={{borderRadius: '25px', backgroundColor: '#90c543'}}
          >
            <i className='fas fa-dollar-sign fs-1 doller' style={{color: 'white'}}></i>
            <div
              className='row counting_box'
              data-select2-id='select2-data-26-1xcp'
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                marginTop: '20px',
                wordBreak: 'break-word',
              }}
            >
              <div className='cb_1 d-flex ' style={{width: 'auto'}}>
                <div className='newUi-cont'>
                  <div className='User_dropdown_cont w-100' style={{position: 'relative'}}>
                    <i
                      className='fas fa-user-circle user_cir'
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '14px',
                        zIndex: 99,
                      }}
                    ></i>
                    <select
                      className='min-h-unset select2-hidden-accessible'
                      data-control='select2'
                      data-placeholder='User Name'
                      name='usering'
                      data-hide-search='true'
                      id='usering'
                      //onchange='bill_details()'
                      data-select2-id='select2-data-usering'
                      //tabindex='-1'
                      aria-hidden='true'
                    >
                      <option value='' data-select2-id='select2-data-11-8kkd'>
                        All Users
                      </option>
                      <option value='6' data-select2-id='select2-data-31-3vem'>
                        test company
                      </option>
                      <option value='27' data-select2-id='select2-data-32-ufh6'>
                        Divergent Insights PTE LTD
                      </option>
                      <option value='34' data-select2-id='select2-data-33-pnm7'>
                        Qnous Services Pvt Ltd
                      </option>
                      <option value='35' data-select2-id='select2-data-34-ahxz'>
                        RapidSay
                      </option>
                      <option value='38' data-select2-id='select2-data-35-v8to'>
                        test compnay
                      </option>
                      <option value='39' data-select2-id='select2-data-36-zlpr'>
                        test kdfjsl
                      </option>
                    </select>

                    <i className='fas fa-chevron-down dowing'></i>
                  </div>

                  <div className='date_tanger' style={{display: 'flex'}}>
                    <i className='fas fa-calendar-alt calbox'></i>
                    <input
                      type='text'
                      name='daterange'
                      className='date_tan w-100'
                      id='daterange'
                      //onchange='bill_details()'
                    />
                    <input type='hidden' name='billing_range' value='2023-09-10 - 2023-10-09' />

                    <i
                      className='fas fa-pencil-alt pencilwa'
                      style={{display: 'flex', alignItems: 'center'}}
                    ></i>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderLeft: '2px solid white',
                  height: '150px',
                  width: '0px',
                  marginLeft: '20px',
                }}
              ></div>
              <div className='cb_2'>
                <div
                  className='topBillamt'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',

                    wordBreak: 'break-word',
                  }}
                >
                  <strong style={{fontSize: '30px', alignItems: 'baseline'}}>
                    <i className='fas fa-dollar-sign' style={{fontSize: '30px'}}></i>
                    <b id='total_bill'>16633.40</b>
                  </strong>
                  <span style={{marginLeft: '5%', fontSize: '20px'}}> Revenue Amount</span>
                </div>
                <div className='row'>
                  <div
                    className='col-sm-12 d-flex marbno '
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      fontSize: '15px',
                      marginTop: '10px',
                    }}
                  >
                    <span>Receive amount :</span>
                    <strong className=' lismall'>
                      <i className='fas fa-dollar-sign' style={{fontSize: '20px'}}></i>
                      <b id='paid_bill'>508.50</b>
                    </strong>
                  </div>
                  <div
                    className='col-sm-12 d-flex '
                    style={{display: 'flex', alignItems: 'baseline', fontSize: '15px'}}
                  >
                    <span>Gross Profit Amount :</span>
                    <strong className=' lismall'>
                      <i className='fas fa-dollar-sign' style={{fontSize: '20px'}}>
                        {' '}
                      </i>
                      <b id='revenue_bill'>3337.48</b>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
export {BillingWidget}
