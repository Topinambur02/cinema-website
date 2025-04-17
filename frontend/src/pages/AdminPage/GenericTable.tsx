import { Button } from 'antd'
import Table from 'antd/es/table'
import styles from './GenericTable.module.scss'
import BackButton from './BackButton'
import { GenericTableProps } from '../../types/props/GenericTableProps'

const GenericTable = <T extends object>({
  dataSource,
  columns,
  onAdd,
  addButtonText = 'Добавить',
  rowKey = 'id',
}: GenericTableProps<T>) => {
  return (
    <div>
      {onAdd && 
        <Button className={styles.addButton} onClick={onAdd} type="primary">
          {addButtonText}
        </Button>
      }

      <BackButton />

      <Table
        bordered
        className={styles.table}
        dataSource={dataSource}
        pagination={false}
        columns={columns}
        rowKey={rowKey}
      />
    </div>
  )
}

export default GenericTable
