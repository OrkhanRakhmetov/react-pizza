import { Categories, PizzasBlock, SortPopup } from './../components';
import React from 'react'

function Home({ itemss }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            'Все',
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}
          onClickItem={(name) => (name)}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />


      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {itemss.map((obj) => (
          // <PizzasBlock key={id} name={obj.name} url={obj.imageUrl} sizes={obj.sizes}/>

          <PizzasBlock key={obj.id} {...obj} />
        ))}
      </div>

    </div>
  )
}

export default Home;
