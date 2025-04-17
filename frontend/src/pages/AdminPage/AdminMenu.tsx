import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { JSX, useState } from 'react'
import { items } from '../../constants/items'
import { AdminMenuProps } from '../../types/props/AdminMenuProps'

const AdminMenu = ({ selectedKey, handleMenuSelect }: AdminMenuProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (value: boolean) => setCollapsed(value)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        theme="dark"
        items={items}
        selectedKeys={[selectedKey]}
        onSelect={handleMenuSelect}
      />
    </Sider>
  )
}

export default AdminMenu
