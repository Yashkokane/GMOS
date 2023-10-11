/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { PageTitle } from '../../../../_metronic/layout/core'
import { CardsWidget20, ChartsWidget1, ChartsWidget3 } from '../../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <div className='card-xl-stretch mb-md-5 mb-xl-10'>
          <CardsWidget20
            className='h-md-50 mb-5 mb-xl-10'
            description='Active Projects'
            color='#F1416C'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          />
        </div>
      </div>
      <div className='col-xl-6'>
        <ChartsWidget3 className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-12'>
        <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Admin Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }

