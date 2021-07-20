import React from 'react'

// Components
import { IconButton } from '@/components/Buttons'

// styles
import * as styles from './commonSection.module.scss'

const CommonSection = ({ children, title, content, buttonContent, theme }) => {
  return (
    <section className={styles[theme]}>
      <div className={styles.commonSection}>
        <div className={styles.commonSection_content}>
          <h2>{title}</h2>
          <p>{content}</p>

          <IconButton color="primary">{buttonContent}</IconButton>
        </div>

        <div className={styles.commonSection_img}>{children}</div>
      </div>
    </section>
  )
}

export default CommonSection
