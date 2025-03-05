import Header from '../../header/header'
import s from './products.module.css'
const Products = () => {
  return (
    <>
    <Header/>2
    <main>
      <h1 className={s.main__title}>Категории</h1>
      <div className={s.container}>
        <div className={s.bar}></div>
      </div>
    </main>
    </>
  )
}

export default Products