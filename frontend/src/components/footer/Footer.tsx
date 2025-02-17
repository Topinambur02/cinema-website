import { JSX } from 'react'
import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.copy}>© 2024-2025 «Cinema website».</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer