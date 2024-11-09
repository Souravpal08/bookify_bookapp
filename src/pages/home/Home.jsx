import React from 'react'
import Banner from './Banner'
import BestSelling from './BestSelling'
import Recommended from './Recommended'
import TrendingNews from './TrendingNews'

function Home() {
  const bestSellingRef = React.useRef(null)

  const handleExploreClick = () => {
    bestSellingRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Banner onExploreClick={handleExploreClick} />
      <BestSelling ref={bestSellingRef} />
      <Recommended />
      <TrendingNews />
    </>
  )
}

export default Home
