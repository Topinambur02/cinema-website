import { useContext } from "react"
import { StoresType } from "../../../types/StoresType"
import { Context } from "../../../App"
import { SessionType } from "../../../types/SessionType"
import ActionButtons from "../ActionButtons"
import SessionApi from "../../../http/SessionApi"
import GenericTable from "../GenericTable"
import { observer } from "mobx-react-lite"
import { SessionTableProps } from "../../../types/props/SessionTableProps"

const SessionTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedSession,
}: SessionTableProps) => {

    const { sessionStore } = useContext(Context) as StoresType
    const sessions = sessionStore.getSessions()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Время начала", dataIndex: "startTime", key: "startTime" },
        { title: "Время окончания", dataIndex: "endTime", key: "endTime" },
        { title: "ID фильма", dataIndex: "movieId", key: "movieId" },
        { title: "ID зала", dataIndex: "hallId", key: "hallId" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: SessionType) => (
                <ActionButtons<SessionType>
                    record={record}
                    onEdit={(session) => {
                        setSelectedSession(session)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (session) => {
                        await SessionApi.delete(session.id)
                        const updatedSessions = await SessionApi.getAll()
                        sessionStore.setSessions(updatedSessions)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить сеанс?"
                />
            ),
        },
    ]

    return (
        <GenericTable
            dataSource={sessions}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить сеанс"
        />
    )
}

export default observer(SessionTable)