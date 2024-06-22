import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import WelcomeBanner from '../components/BannerProduct'

const Home = () => {
  return (
    <div>
      <WelcomeBanner/>
      <CategoryList/>

      <HorizontalCardProduct category={"women perfumes"} heading={"women perfumes"}/>
      <HorizontalCardProduct category={"macawiis"} heading={"macawiis"}/>

      <VerticalCardProduct category={"men trousers"} heading={"men trousers"}/>
      <VerticalCardProduct category={"Abaya"} heading={"Abaya"}/>
      <VerticalCardProduct category={"men perfumes"} heading={"men perfumes"}/>
      <VerticalCardProduct category={"women T-shirts"} heading={"women T-shirts"}/>
      <VerticalCardProduct category={"men T-shirts"} heading={"men T-shirts"}/>
      <VerticalCardProduct category={"men shirts"} heading={"men shirts"}/>
      <VerticalCardProduct category={"women trousers"} heading={"women Trousers"}/>
      <VerticalCardProduct category={"women shirts"} heading={"women shirts"}/>
    </div>
  )
}

export default Home