import Header from '../../header/header'
import Reviews from "../../Reviews/reviews"
import Footer from "../../footer/footer"
import s from './products.module.css'
const Products = () => {
  return (
    <>
    <Header/>
    <main>
      <h1 className={s.main__title}>Категории</h1>
      <div className={s.container}>
        <div className={s.bar}></div>
      </div>
    </main>
    <Reviews/>
    <Footer/>
    </>
  )
}

export default Products