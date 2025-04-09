import React from 'react'
import B2BTransactionManagement from './B2BTransactionManagement'
import BusinessNetworkOverview from './BusinessNetworkOverview'
import SupplierVendorCollaboration from './SupplierVendorCollaboration'
import Faq from '@/components/Faq'
import { B2bPortalFaq } from '../Faqdata'

function Body() { 
  return (
    <>
      <B2BTransactionManagement/>
      <BusinessNetworkOverview/>
      <SupplierVendorCollaboration/>
      <Faq faqs={B2bPortalFaq}/>
    </>
  )
}

export default Body
