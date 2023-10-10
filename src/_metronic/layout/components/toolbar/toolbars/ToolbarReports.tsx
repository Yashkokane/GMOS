/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import {KTIcon} from '../../../../helpers'

const ToolbarReports = () => {
  const [progress, setProgress] = useState<string>('1')

  useEffect(() => {
    document.body.setAttribute('data-kt-app-toolbar-fixed', 'true')
  }, [])

  return <div className='d-flex align-items-center overflow-auto'></div>
}

export {ToolbarReports}
