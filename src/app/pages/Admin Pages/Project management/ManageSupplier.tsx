import { PageTitle } from '../../../../_metronic/layout/core'

const ManageSupplierPage = () => (
  <>
    <div className='card'>
      <div className='card-body'>
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
        <form name='manage_supplier' noValidate>
          <input type='hidden' name='_token' value='Q3tMVPW1pkZ2tdWxxcrVb1O9apz0T2BpxkQmMgeM' />
          <input type='hidden' id='user_type' name='user_type' value='admin' />
          <div className='row my-8'>
            <div className='col-xs-12 col-sm-12 col-md-6'>
              <div className='form-group'>
                <select
                  className='form-select form-select-solid text-left justify-content-start select2-hidden-accessible'
                  data-control='select2'
                  name='user_id'
                  id='user_id'
                  data-select2-id='select2-data-user_id'
                  tabIndex={-1}
                  aria-hidden='true'
                >
                  <option value='' data-select2-id='select2-data-8-qvy3'>
                    Select User
                  </option>

                  <option value='6'>test company</option>
                  <option value='27'>Divergent Insights PTE LTD</option>
                  <option value='34'>Qnous Services Pvt Ltd</option>
                  <option value='35'>RapidSay</option>
                  <option value='38'>test compnay</option>
                  <option value='39'>test kdfjsl</option>
                </select>
                <span
                  className='select2 select2-container select2-container--bootstrap5'
                  dir='ltr'
                  data-select2-id='select2-data-7-apmr'
                  style={{width: '100'}}
                >
                  <span className='dropdown-wrapper' aria-hidden='true'></span>
                </span>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4' style={{padding: '10px 10px 10px 10px'}}>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input schk'
                  type='checkbox'
                  value='1'
                  id='supplier_1'
                  name='suppliers[]'
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  Schlensinger
                </label>
              </div>
            </div>

            <div className='col-md-4' style={{padding: '10px 10px 10px 10px'}}>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input schk'
                  type='checkbox'
                  value='2'
                  id='supplier_2'
                  name='suppliers[]'
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  GO Branded
                </label>
              </div>
            </div>

            <div className='col-md-4' style={{padding: '10px 10px 10px 10px'}}>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input schk'
                  type='checkbox'
                  value='3'
                  id='supplier_3'
                  name='suppliers[]'
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  GMO
                </label>
              </div>
            </div>

            <div className='col-md-4' style={{padding: '10px 10px 10px 10px'}}>
              <div className='form-check form-check-custom form-check-solid'>
                <input
                  className='form-check-input schk'
                  type='checkbox'
                  value='4'
                  id='supplier_4'
                  name='suppliers[]'
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  Make Opinion
                </label>
              </div>
            </div>
          </div>
          <p className='text-danger py-10'>
            Note * : Please check the supplier to block them from the supplier list.{' '}
          </p>

          <div className='d-flex justify-content-center'>
            <button className='btn btn-success mt-4'>Save</button>
          </div>
        </form>
      </div>
    </div>
  </>
)

const ManageSupplier = () => {
  ////const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}> Manage Suppliers</PageTitle>
      <ManageSupplierPage />
    </>
  )
}

export default ManageSupplier
