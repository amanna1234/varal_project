import React from 'react'
import CompanilesList from '../components/companies list/CompanilesList'
import Footer from '../components/footer/Footer'
import Getstarted from '../components/getstarted/Getstarted'
import Navbar from '../components/Navbar/Navbar'
import Pricing from '../components/pricing/Pricing'
import Searchbar from '../components/searchbar/Searchbar'
import Services_offered from '../components/services offered/Services_offered'
import Services from '../components/services/Services'

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <Getstarted/>
    <Services/>
    <CompanilesList/>
    <Services_offered/>
    <Pricing/>
    <Footer/>
    </>
    
  )
}
