import {Dropdown} from 'react-bootstrap'

type Props = {
  className: string
  description: string
  color: string
  img: string
}

const ClientCardWidge20 = ({className, description, color, img}: Props) => (
  <div
    className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
    style={{
      height: '500px',
    }}
  >
    <div className='card-header pt-5' style={{padding: '10px 1.25rem'}}>
      <div className='card-title d-flex flex-column'>
        <span className='fs-2hx  me-2 lh-1 ls-n2'>Overall Achieved</span>
        <div>
          <Dropdown style={{marginTop: '50px'}}>
            <select
              style={{width: '300px'}}
              id='filter'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-solid form-select-sm fw-bolder select2-hidden-accessible'
              //onchange="getTotalCompletes('supplier')"
              data-select2-id='select2-data-filter'
              aria-hidden='true'
            >
              <option value='1'>Today</option>
              <option value='2'>Yesterday</option>
              <option value='3'>Last Week</option>
              <option value='4'>MTD</option>
              <option value='5'>Last Month</option>
              <option value='6'>YTD</option>
            </select>
          </Dropdown>
        </div>
      </div>
    </div>
    {/*div body */}
    <div
      className='card-body d-flex align-items-end pt-0'
      style={{marginTop: '10%', marginBottom: '20%', marginLeft: '10%'}}
    >
      <div
        className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end `}
        style={{
          backgroundColor: 'Lightgreen',
          width: '85%',
        }}
      >
        <div className='card-header pt-5'>
          <div className='card-title d-flex flex-column'>
            <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>69</span>
          </div>
        </div>
        <div className='card-body d-flex align-items-end pt-0'>
          <div className='d-flex align-items-center flex-column mt-3 w-100'>
            <div className='d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2'>
              <span>Total Completes</span>
            </div>

            {/*<div className='h-8px mx-3 w-100 bg-white bg-opacity-50 rounded'>
              <div
                className='bg-white rounded h-8px'
                role='progressbar'
                style={{width: '72%'}}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
      </div>*/}
          </div>
        </div>
      </div>
    </div>
  </div>
)
export {ClientCardWidge20}
