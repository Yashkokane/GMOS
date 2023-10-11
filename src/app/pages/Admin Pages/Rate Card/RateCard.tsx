import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../../_metronic/layout/core'
import UploadRateinfo from './UploadRateinfo'
import RateCardTable from './RateCardTable'

const RateCardPage = () => (
  <>
    <div className='card'>
      <h4 className='mt-6 ' style={{marginLeft: '25px'}}>
        Supplier wise Upload Global Rate Card
      </h4>
      <UploadRateinfo />
      <hr style={{border: '1px solid', marginLeft: '20px', marginRight: '20px'}}></hr>
      <RateCardTable />
    </div>
  </>
)
const RateCard = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Rate Card'})}</PageTitle>
      <RateCardPage />
    </>
  )
}

export default RateCard
