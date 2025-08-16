import { ChevronLeft } from 'lucide-react'
import styles from './BackButton.module.scss'
import { useNavigate } from 'react-router-dom'
import { JSX } from 'react'

const BackButton = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <div className={styles.pageContent}>
      <ChevronLeft className={styles.backIcon} />
      <button className={styles.back} onClick={handleClick}>
        Назад
      </button>
    </div>
  )
}

export default BackButton
