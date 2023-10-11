/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PageTitle} from '../../../../_metronic/layout/core'
import {ClientChartsWidget3} from '../Charts/ClientChartsWidget3'
import {ClientCardWidge20} from './ClientCardWidge20'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <div className='card-xl-stretch mb-md-5 mb-xl-10'>
          <ClientCardWidge20
            className='h-md-50 mb-5 mb-xl-10'
            description='clientCard'
            color='#F1416C'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          />
        </div>
      </div>
      <div className='col-xl-6'>
        <ClientChartsWidget3 className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
  </>
)

const ClientDashboardWrapper: FC = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Client Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export {ClientDashboardWrapper}
