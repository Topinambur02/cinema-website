import { useContext } from "react"
import { Context } from "../../../App"
import { HallType } from "../../../types/HallType"
import { StoresType } from "../../../types/StoresType"
import ActionButtons from "../ActionButtons"
import HallApi from "../../../http/HallApi"
import GenericTable from "../GenericTable"
import { observer } from "mobx-react-lite"
import { HallTableProps } from "../../../types/props/HallTableProps"

const HallTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedHall,
}: HallTableProps) => {

    const { hallStore } = useContext(Context) as StoresType
    const halls = hallStore.getHalls()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Название", dataIndex: "name", key: "name" },
        { title: "Вместимость", dataIndex: "capacity", key: "capacity" },
        { title: "Цена", dataIndex: "price", key: "price" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: HallType) => (
                <ActionButtons<HallType>
                    record={record}
                    onEdit={(hall) => {
                        setSelectedHall(hall)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (hall) => {
                        await HallApi.delete(hall.id)
                        const updatedHalls = await HallApi.getAll()
                        hallStore.setHalls(updatedHalls)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить зал?"
                />
            ),
        },
    ]

    return (
        <GenericTable 
            dataSource={halls}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить зал"
        />
    )
}

export default observer(HallTable)