import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  const handleBackClick = () => navigate('/')

  return (
    <Space>
      <Button type="primary" onClick={handleBackClick}>
        Назад
      </Button>
    </Space>
  )
}

export default BackButton
