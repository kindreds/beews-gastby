import React from 'react'
import { StaticImage as Image } from 'gatsby-plugin-image'

// components
import Card from '@/components/Card'

// styles
import * as styles from './queHacemos.module.scss'
import { PlusCircleIcon } from '@/components/SVGS'

const QueHacemos = () => {
  return (
    <section className={styles.queHacemos}>
      <h3>¿Qué hacemos en Beews?</h3>
      <h4>Déscubrelo en estos 4 pasos</h4>

      <div className={styles.queHacemos_grid}>
        <Card color="primary">
          <div className={styles.queHacemos_card}>
            <Image alt="" src="../../images/beews-calendar.svg" />
            <h2>Planeamos</h2>
            <button className="btn">
              <PlusCircleIcon />
            </button>
          </div>
        </Card>
        <Card color="warning">
          <div className={styles.queHacemos_card}>
            <Image alt="" src="../../images/beews-letter.svg" />
            <h2>Entregamos</h2>
            <button className="btn">
              <PlusCircleIcon />
            </button>
          </div>
        </Card>
        <Card color="danger">
          <div className={styles.queHacemos_card}>
            <Image alt="" src="../../images/beews-hart.svg" />
            <h2>Conectamos</h2>
            <button className="btn">
              <PlusCircleIcon />
            </button>
          </div>
        </Card>
        <Card color="info">
          <div className={styles.queHacemos_card}>
            <Image alt="" src="../../images/beews-camera.svg" />
            <h2>Grabamos</h2>
            <button className="btn">
              <PlusCircleIcon />
            </button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default QueHacemos
