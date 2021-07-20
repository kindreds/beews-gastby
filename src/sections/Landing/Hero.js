import React from 'react'

//  Terceros
import Slider from 'react-slidy'

// components
import { IconButton } from '@/components/Buttons'

// styles
import * as styles from './hero.module.scss'

const SliderItem = () => (
  <div className={styles.hero_item}>
    <h1>Más que un regalo, una forma de unir a las personas</h1>
    <h3 className="mb-4">
      Con Beews ahora hodrás ver esa sonrisa en el momento de la sorpresa y en
      nuestro market place encontrarás muchos regalos hechos con mucho amor y
      detalle.
    </h3>

    <IconButton color="danger">Viaja por nuestro mundo</IconButton>
  </div>
)

const Hero = () => {
  return (
    <main className={styles.hero}>
      <Slider>
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </main>
  )
}

export default Hero
