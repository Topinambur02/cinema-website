import Menu from '../components/menu/Menu'
import { LayoutProps } from '../types/props/LayoutProps'
import styles from './Layout.module.scss'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
