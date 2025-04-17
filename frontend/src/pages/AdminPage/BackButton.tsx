import { Button, Space } from "antd"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <Space>
            <Button type="primary" onClick={() => navigate('/')}>Назад</Button>
        </Space>
    )
}

export default BackButton