import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { CircleUser, MapPin } from 'lucide-react'
import { JSX, useState } from 'react'
import CityList from '../CityList/CityList'

const Header = (): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false)
    const toggle = (): void => setVisible(!visible)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Link to={'/'}>
                            <img src='/img/logo.png' alt='logo' />
                        </Link>
                    </div>
                    <div className={styles.city}>
                        <Link to={'#'} className={styles.cityLink} onClick={toggle}>
                            <MapPin className={styles.icon} />
                            <p>Москва</p>
                        </Link>
                        <CityList visible={visible} setVisible={setVisible} />
                    </div>
                    <Link to={'/'} className={styles.cart}></Link>
                    <div className={styles.user}>
                        <Link to={'/'}>
                            <div>Личный кабинет</div>
                        </Link>
                        <Link to={'/'} className={styles.userIcon}>
                            <CircleUser className={styles.circleUser}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header