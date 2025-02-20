import { Link } from "react-router-dom"
import Menu from "../../components/menu/Menu"
import styles from './ContactPage.module.scss'

const ContactPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Menu />
                <div className={styles.content}>
                    <h1>Контакты</h1>
                    <div className={styles.contactBlock}>
                        <p className={styles.tel}>8 (***) ***-**-**</p>
                        <div className={styles.row}>
                            <div className={styles.blocks}>
                                <div className={styles.item}>
                                    <div className={styles.title}>Колл-центр</div>
                                    <br />
                                    <b>часы работы 10.00 - 23.00</b>
                                    <br />
                                    <Link to={'mailto:online@cinema.ru'}>online@cinema.ru</Link>
                                </div>
                            </div>
                            <div className={styles.blocks}>
                                <div className={styles.item}>
                                    <div className={styles.title}>Сотрудничество <br /> и реклама</div>
                                    <Link to={'mailto:pr@cinema.ru'}>pr@cinema.ru</Link>
                                </div>
                            </div>
                            <div className={styles.blocks}>
                                <div className={styles.item}>
                                    <div className={styles.title}>Предложения по <br /> открытию кинотеатров</div>
                                    <Link to={'mailto:rent@cinema.ru'}>rent@cinema.ru</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage