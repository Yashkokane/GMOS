import React from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../_metronic/helpers'

const CreateRolesPage: FC = () => (
  <>
    <div className='row'>
      <div className='col-lg-12 margin-tb'>
        <div className='pull-left'>
          <Link to='/ManageRoles'>
            <a href='' className='btn btn-sm btn-light-primary'>
              <KTIcon iconName='back' className='fas fa-arrow-left' />
              Back to Roles
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className='card-body'>
      <div
        className='col-xs-12 col-sm-12 col-md-12'
        style={{textAlign: 'left', paddingLeft: '10px'}}
      >
        <div className='form-group'>
          <strong>Name:</strong>
          <input placeholder='Name' className='form-control txt' name='name' type='text' />
        </div>
      </div>

      <div id='kt_customers_table_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
        <div className='table-responsive'>
          <table
            className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            id='kt_customers_table'
            role='grid'
          >
            <thead>
              <tr>
                <th className='text-left' style={{paddingLeft: '10px'}}>
                  Module
                </th>
                <th className='text-left' style={{paddingLeft: '10px'}}>
                  Sub Module
                </th>
                <th className='text-left'>View</th>
                <th className='text-left'>Create</th>
                <th className='text-left'>Edit</th>
                <th className='text-left'>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Dashboard
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Dashboard
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_1'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_1'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_1'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_1'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Billing Dashboard
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Billing Dashboard
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_2'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_2'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_2'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_2'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={5}>
                  User Management
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage User
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_3'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_3'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_3'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_3'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Vendor Details
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_4'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_4'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_4'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_4'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Client Details
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_5'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_5'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_5'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_5'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Role
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_6'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_6'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_6'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_6'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={3}>
                  Survey Management
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Survey
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_7'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_7'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_7'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_7'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Suppliers
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_21'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_21'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_21'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_21'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Comission Management
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Commission
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_8'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_8'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_8'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_8'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Survey Category
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Category
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_9'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_9'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_9'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_9'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Vendor
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Vendor
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_10'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_10'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_10'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_10'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Qualification
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Qualification Master
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_11'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_11'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_11'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_11'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Rate Card
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Manage Rate Card
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_12'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_12'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_12'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_12'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={3}>
                  Account
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  View Buyer Invoice
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_13'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_13'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_13'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_13'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  View Supplier Invoice
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_14'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_14'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_14'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_14'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>

              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}} rowSpan={2}>
                  Supplier Modules
                </td>
              </tr>
              <tr style={{borderBottom: '1px solid #dbdbdb'}}>
                <td className='text-left' style={{paddingLeft: '10px'}}>
                  Upload Invoice
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='view_permission_15'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='create_permission_15'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='edit_permission_15'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>

                <td className='text-left'>
                  <input
                    className='name form-check-input'
                    name='delete_permission_15'
                    type='checkbox'
                    value='1'
                  />
                  <span className='form-check-label'></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-12'>
        <button
          style={{marginLeft: '500px', backgroundColor: '#5d2d91'}}
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </div>
    </div>
  </>
)
const CreateRoles = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Create Roles'})}</PageTitle>
      <CreateRolesPage />
    </>
  )
}

export default CreateRoles
