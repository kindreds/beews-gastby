import React from 'react'

// styles
import * as styles from './cardPricing.module.scss'

const CardPricing = () => {
  return (
    <article className={styles.card_pricing}>
      <h1>Beews Xperience</h1>

      <p>
        &bull; Planificamos contigo la sorpresa, dónde, cuando y cómo se hará
      </p>
      <p>&bull; Coordinamos el recojo y entrega de tu regalo personalizado</p>
      <p>
        &bull; Te conectamos a través de una videoconferencia con tu ser querido
        para que puedas disfrutar en vivo toda la sorpresa.
      </p>

      <div className={styles.card_pricingBox}>
        <h3>US$ 40.00</h3>
      </div>

      <p>*El servicio no incluye el regalo a elegir</p>
    </article>
  )
}

export default CardPricing
