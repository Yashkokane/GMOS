/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import '../sidebar-menu/sidebar.css'
const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/BillingDashboard'
        icon='element-11'
        title='Billing Dashboard'
        fontIcon='bi-app-indicator'
      />

      <SidebarMenuItemWithSub
        to='#'
        title='User Management'
        fontIcon='bi-app-indicator'
        icon='element-11'
      >
        <SidebarMenuItem to='/ManageUsers' title='Manage Users' hasBullet={true} />
        <SidebarMenuItem to='/ManageVendors' title='Manage Vendors' hasBullet={true} />
        <SidebarMenuItem to='/ManageClients' title='Manage Clients' hasBullet={true} />
        <SidebarMenuItem to='/#' title='Manage Roles' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/#'
        title='Project Management'
        fontIcon='bi-archive'
        icon='element-11'
      >
        <SidebarMenuItem to='/#' title='Manage Projects' hasBullet={true}></SidebarMenuItem>
        <SidebarMenuItem to='/#' title='Manage Suppliers' hasBullet={true}></SidebarMenuItem>
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/#'
        title='Category Management'
        fontIcon='bi-app-indicator'
        icon='element-11'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to='/#'
        title='Vendor Management'
        fontIcon='bi-app-indicator'
        icon='element-11'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to='/#'
        title='Manage Rate Card'
        fontIcon='bi-app-indicator'
        icon='element-11'
      ></SidebarMenuItem>
      <SidebarMenuItemWithSub to='/#' title='Account' fontIcon='bi-archive' icon='element-11'>
        <SidebarMenuItem
          to='/#'
          title='View Buyer Invoices'
          fontIcon='bi-app-indicator'
          icon='element-11'
        ></SidebarMenuItem>
        <SidebarMenuItem
          to='/#'
          title='View Supplier Invoices'
          fontIcon='bi-app-indicator'
          icon='element-11'
        ></SidebarMenuItem>
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
