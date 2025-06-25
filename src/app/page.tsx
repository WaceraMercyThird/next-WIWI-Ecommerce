import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage