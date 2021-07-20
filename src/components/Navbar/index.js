import React from 'react'

// Terceros
import { StaticImage as Image } from 'gatsby-plugin-image'

// Icons
import { BarsIcon } from '@/components/SVGS'

// Styles
import * as styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navbar_bars}>
        <BarsIcon className={styles.navbar_barsIcon} />
      </button>
      <Image objectFit="contain" src="../../images/logo.svg" />
    </nav>
  )
}

export default Navbar
