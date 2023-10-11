import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PageTitle} from '../../../../_metronic/layout/core'
import {BillingTableWidget} from '../Billing dashboard/BillingTableWidget'
import {BillingWidget} from '../Billing dashboard/BillingWidget'

const BillingPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-12'>
        <div className='card-xl-stretch mb-md-5 mb-xl-10'>
          <BillingWidget
            className='h-md-50 mb-5 mb-xl-10'
            description='Active Projects'
            color='#F1416C'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          />
        </div>
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-12'>
        <BillingTableWidget className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
  </>
)
const BillingDashboard = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Billing Dashboard</PageTitle>
      <BillingPage />
    </>
  )
}

export default BillingDashboard
