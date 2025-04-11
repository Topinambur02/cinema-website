import styles from './LoginFormModal.module.scss'
import LoginForm from '../loginForm/LoginForm'

interface LoginFormModalProps {
    onClose: () => void
}

const LoginFormModal = ({ onClose }: LoginFormModalProps) => {
    return (
        <div
            className={styles.modalOverlay}
            onClick={e => {
                if (e.target === e.currentTarget) {
                    onClose()
                }
            }}
        >
            <div className={styles.modal}>
                <h2>Вход в систему</h2>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginFormModal