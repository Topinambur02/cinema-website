import styles from './LoginFormModal.module.scss'
import LoginForm from '../LoginForm/LoginForm'
import { LoginFormModalProps } from '../../types/props/LoginFormModalProps'
import { JSX, MouseEvent } from 'react'

const LoginFormModal = ({ onClose }: LoginFormModalProps): JSX.Element => {
  const handleClose = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal}>
        <h2>Вход в систему</h2>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginFormModal
