import {PageTitle} from '../../../../_metronic/layout/core'

const VendorsPages = () => (
  <>
    <div className='card'>
      <div className='card-body'>
        <div className='card-toolbar'></div>

        <table
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable'
          id='kt_table_users'
        >
          <thead>
            <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
              <th className='min-w-120px'>Vendor Code</th>
              <th className='min-w-120px'>Company Name</th>
              <th className='min-w-120px'>Vendor Name</th>
              <th className='min-w-120px'>Vendor Email</th>
              <th className='min-w-120px'>Speciality</th>
              <th className='min-w-120px'>Countries</th>
              <th className='min-w-100px'>Contact</th>
            </tr>
          </thead>
          <tbody className='text-gray-800 fw-bold'>
            <tr>
              <td>MC</td>
              <td>Schlensinger</td>
              <td>Schlensinger</td>
              <td>santosh@divergentinsights.com</td>
              <td>Gen pop</td>
              <td>Albania</td>
              <td>9798989898</td>
              <td className='text-end'>
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                  data-kt-menu='true'
                ></div>
              </td>
            </tr>
            <tr>
              <td>GB</td>
              <td>GO Branded</td>
              <td>GO Branded</td>
              <td>santosh.c@divergentinsights.com</td>
              <td>Gen pop</td>
              <td>United States</td>
              <td>9898989898</td>
              <td className='text-end'>
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                  data-kt-menu='true'
                ></div>
              </td>
            </tr>
            <tr>
              <td>GM</td>
              <td>GMO</td>
              <td>GMO</td>
              <td>santosh.c@divergentinsights.com</td>
              <td>Gen pop</td>
              <td>Japan</td>
              <td>9898989898</td>
              <td className='text-end'>
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                  data-kt-menu='true'
                ></div>
              </td>
            </tr>
            <tr>
              <td>Make Opinion</td>
              <td>Make Opinion</td>
              <td>Make Opinion</td>
              <td>santosh@divergentinsights.com</td>
              <td>Gen pop</td>
              <td>United States</td>
              <td></td>
              <td className='text-end'>
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                  data-kt-menu='true'
                ></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)
const VendorDetails = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Vendors</PageTitle>
      <VendorsPages />
    </>
  )
}

export default VendorDetails
