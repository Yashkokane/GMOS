import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
const AddUsers: FC = () => (
  <>
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title  flex-column'></h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div
        className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
        id='kt_modal_create_app_stepper'
        data-kt-stepper='true'
      >
        <div className='flex-row-fluid py-lg-5 px-lg-15'>
          <form
            method='POST'
            action='https://uatgmos.rapidsay.com/users'
            accept-charset='UTF-8'
            name='user_form'
            id='form-id'
          >
            <input name='_token' type='hidden' value='FKq4hoXVOf1QvYL9hDDKO4orO7IOG3qiehWm6YNg' />
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-12'>
                <div className='form-group'>
                  <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                    <span className='required'> Name</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      style={{color: '#8fc73e !important'}}
                      title=''
                      data-bs-original-title='Specify your unique  name'
                      aria-label='Specify your unique  name'
                    ></i>
                  </label>
                  <input
                    placeholder='Name'
                    className='form-control space'
                    name='name'
                    type='text'
                  />
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12' style={{marginTop: '20px'}}>
                <div className='form-group'>
                  <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                    <span className='required'> Email</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      style={{color: '#8fc73e !important'}}
                      title=''
                      data-bs-original-title='Specify your unique  Email'
                      aria-label='Specify your unique  Email'
                    ></i>
                  </label>
                  <input
                    placeholder='Email'
                    className='form-control space'
                    autoComplete='new-email'
                    id='email'
                    name='email'
                    type='text'
                  />
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12' style={{marginTop: '20px'}}>
                <div className='form-group'>
                  <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                    <span className='required'> Password</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      style={{color: '#8fc73e !important'}}
                      title=''
                      data-bs-original-title='Specify your unique  Password'
                      aria-label='Specify your unique  Password'
                    ></i>
                  </label>
                  <input
                    placeholder='Password'
                    className='form-control space'
                    autoComplete='new-password'
                    name='password'
                    type='password'
                    value=''
                  />
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12' style={{marginTop: '20px'}}>
                <div className='form-group'>
                  <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                    <span className='required'> Confirm Password</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      style={{color: "#8fc73e !important'"}}
                      title=''
                      data-bs-original-title='Specify your unique  Confirm Password'
                      aria-label='Specify your unique  Confirm Password'
                    ></i>
                  </label>
                  <input
                    placeholder='Confirm Password'
                    className='form-control space'
                    name='confirm_password'
                    type='password'
                    value=''
                  />
                  <span id='message'></span>
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12' style={{marginTop: '20px'}}>
                <div className='form-group'>
                  <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                    <span className='required'> Role</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      style={{color: '#8fc73e !important'}}
                      title=''
                      data-bs-original-title='Specify your unique  Role'
                      aria-label='Specify your unique  Role'
                    ></i>
                  </label>
                  <select className='form-control' name='roles'>
                    <option value='account'>account</option>
                    <option value='account manager'>account manager</option>
                    <option value='admin'>admin</option>
                    <option value='client'>client</option>
                    <option value='supplier'>supplier</option>
                  </select>
                </div>
              </div>
              <div
                className='col-xs-12 col-sm-12 col-md-12 text-center'
                style={{marginTop: '20px'}}
              >
                <button
                  type='submit'
                  className='btn btn-primary'
                  style={{backgroundColor: '#5d2d91'}}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* begin::Body */}
    </div>
  </>
)

const AddUser: FC = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Add Users</PageTitle>
      <AddUsers />
    </>
  )
}

export default AddUser
