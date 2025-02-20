import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { JSX } from 'react'

const Menu = (): JSX.Element => {
  return (
    <div className={styles.menu}>
        <ul>
            <li>
                <Link to={'/'}>Фильмы</Link>
            </li>
            <li>
                <Link to={'/'}>Кинотеатры</Link>
            </li>
            <li>
                <Link to={'/about'}>О компании</Link>
            </li>
            <li>
                <Link to={'/contact'}>Контакты</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu