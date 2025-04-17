import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useState } from 'react'
import { items } from '../../constants/items'
import { AdminMenuProps } from '../../types/props/AdminMenuProps'

const AdminMenu = ({ selectedKey, handleMenuSelect }: AdminMenuProps) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
        >
            <Menu
                theme='dark'
                items={items}
                selectedKeys={[selectedKey]}
                onSelect={handleMenuSelect}
            />
        </Sider>
    )
}

export default AdminMenu