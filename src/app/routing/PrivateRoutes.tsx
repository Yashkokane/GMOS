import {FC, Suspense, lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/Admin Pages/Admin dashboard/DashboardWrapper'
import BillingDashboard from '../pages/Admin Pages/Billing dashboard/BillingDashboard'
import AddUser from '../pages/Admin Pages/User page/AddUser'
import ManageClients from '../pages/Admin Pages/User page/ManageClients'
import ManageRoles from '../pages/Admin Pages/User page/ManageRoles'
import ManageUsers from '../pages/Admin Pages/User page/ManageUsers'
import ManageVendorsDetails from '../pages/Admin Pages/User page/ManageVendorsDetails'
import {ClientDashboardWrapper} from '../pages/Client Pages/Client dashboard/ClientDashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import CreateRoles from '../pages/Admin Pages/User page/CreateRoles'
import ManageCategory from '../pages/Admin Pages/Category Management/ManageCategory'
import VendorDetails from '../pages/Admin Pages/Vendor/VendorDetails'
import RateCard from '../pages/Admin Pages/Rate Card/RateCard'
import Buyerlnvoices from '../pages/Admin Pages/Accounts/Buyerlnvoices'
import SupplierInvoices from '../pages/Admin Pages/Accounts/SupplierInvoices'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/login' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='clientdashboard' element={<ClientDashboardWrapper />} />
        <Route path='BillingDashboard' element={<BillingDashboard />} />
        <Route path='ManageUsers' element={<ManageUsers />} />
        <Route path='ManageVendorsDetails' element={<ManageVendorsDetails />} />
        <Route path='ManageClients' element={<ManageClients />} />
        <Route path='ManageRoles' element={<ManageRoles />} />
        <Route path='AddUsers' element={<AddUser />} />
        <Route path='CreateRoles' element={<CreateRoles />} />
        <Route path='ManageCategory' element={<ManageCategory />} />
        <Route path='VendorDetails' element={<VendorDetails />} />
        <Route path='RateCard' element={<RateCard />} />
        <Route path='BuyerInvoices' element={<Buyerlnvoices />} />
        <Route path='SupplierInvoices' element={<SupplierInvoices />} />
        <Route path='vendordashboard' />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
