import CardItems from "../component/CardItems"
import Categories from "../component/Categories"
import Navbar from "../component/Navbar"
import OrderCard from "../component/OrderCard"

const Home = () => {
  return (
    <>
        <Navbar/>
        <Categories/>
        <CardItems/>
        <OrderCard/>
    </>
  )
}

export default Home