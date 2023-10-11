import React from 'react'

const UploadRateinfo = () => {
  return (
    <>
      <form action='https://uatgmos.rapidsay.com/import' method='POST' className='mb-15'>
        <input type='hidden' name='_token' value='Q3tMVPW1pkZ2tdWxxcrVb1O9apz0T2BpxkQmMgeM' />

        <div className='row' style={{marginTop: '20px', marginLeft: '20px'}}>
          <div className='row col-md-3'>
            <div className=''>
              <label className='required fs-6 fw-bold mb-2'>Select Supplier</label>
              <select
                className='form-select form-select-solid select2-hidden-accessible'
                name='supplier'
                data-control='select2'
                data-placeholder='Select an option'
                data-select2-id='select2-data-7-z4uz'
                tabIndex={1}
                aria-hidden='true'
              >
                <option value='' data-select2-id='select2-data-9-66m2'>
                  Select Supplier
                </option>
                <option value='1'>Schlensinger</option>
                <option value='2'>GO Branded</option>
                <option value='3'>GMO</option>
                <option value='4'>Make Opinion</option>
              </select>
              <span
                className='select2 select2-container select2-container--bootstrap5'
                dir='ltr'
                data-select2-id='select2-data-8-660u'
                style={{width: '100%'}}
              >
                <span className='dropdown-wrapper' aria-hidden='true'></span>
              </span>
            </div>
          </div>
          <div className='col-md-2'>
            <label className='required fs-6 fw-bold mb-2'>Rate Card Type</label>
            <select
              className='form-select form-select-solid select2-hidden-accessible'
              name='type'
              data-control='select2'
              data-placeholder='Select an option'
              data-select2-id='select2-data-10-p9om'
              tabIndex={-1}
              aria-hidden='true'
            >
              <option value='' data-select2-id='select2-data-12-455l'>
                Select Any
              </option>
              <option value='1'>Internal</option>
              <option value='2'>Supplier</option>
            </select>
            <span
              className='select2 select2-container select2-container--bootstrap5'
              dir='ltr'
              data-select2-id='select2-data-11-5kh8'
              style={{width: '100%'}}
            >
              <span className='dropdown-wrapper' aria-hidden='true'></span>
            </span>
          </div>
          <div className='col-md-2'>
            <div id='margin' style={{display: 'none'}}>
              <label className='required fs-6 fw-bold mb-2'>Margin %</label>
              <input
                type='text'
                className='form-control form-control-solid form-control-lg space'
                placeholder='Enter Margin'
                name='margin'
              />
            </div>
          </div>
          <div className='col-md-5'>
            <input type='file' name='file' className='form-control' />

            <a
              className='btn btn-info btn-sm'
              href='https://uatgmos.rapidsay.com/downloadFormat'
              style={{marginTop: '20px'}}
            >
              Download Format
            </a>

            <button
              className='btn btn-success btn-sm '
              style={{marginLeft: '20px', marginTop: '20px'}}
            >
              Import Data
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UploadRateinfo
