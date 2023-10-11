import React from 'react'
import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'

const AddCategoryPage: FC = () => (
  <>
    <div></div>
  </>
)

const AddCategory = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Add Category'})}</PageTitle>
      <AddCategoryPage />
    </>
  )
}

export default AddCategory
