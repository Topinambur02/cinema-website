import { Link } from "react-router-dom"
import styles from './CityList.module.scss'
import { JSX, useEffect } from "react"
import { CityListProps } from "../../types/props/CityListProps"

const CityList = ({ visible, setVisible }: CityListProps): JSX.Element => {
    const className = `${styles.dropdown_list} ${visible ? styles.active : ''}`
    const toggleClose = (): void => setVisible(false)
    const stopPropagation = (e: React.MouseEvent): void => e.stopPropagation()
    const cleanUp = (): void => document.removeEventListener('mousedown', handleClickOutside)
    const handleClickOutside = (event: MouseEvent): void => {
        const target = event.target as HTMLElement
        const isClickOutside = visible && !target.closest(`.${styles.dropdown_list}`) && !target.closest(`.${styles.cityLink}`)
        isClickOutside && toggleClose()
    }

    useEffect((): void => {
        document.addEventListener('mousedown', handleClickOutside)
        cleanUp()
    }, [visible])

    return (
        <ul className={className} onClick={toggleClose}>
            <div onClick={stopPropagation}>
                <li><Link to={'#'}>Санкт-Петербург</Link></li>
                <li><Link to={'#'}>Москва</Link></li>
            </div>
        </ul>
    )
}

export default CityList