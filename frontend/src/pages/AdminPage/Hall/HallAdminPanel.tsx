import AddHallModal from "./AddHallModal"
import EditHallModal from "./EditHallModal"
import HallTable from "./HallTable"
import { HallAdminPanelProps } from "../../../types/props/HallAdminPanelProps"

const HallAdminPanel = ({ 
    isAddModalOpen, 
    setIsAddModalOpen, 
    isEditModalOpen, 
    setIsEditModalOpen, 
    selectedHall, 
    setSelectedHall
}: HallAdminPanelProps) => {
    return (
        <>
            <HallTable
                setIsAddModalOpen={setIsAddModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                setSelectedHall={setSelectedHall}
            />

            <EditHallModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                selectedHall={selectedHall}
            />

            <AddHallModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
            />
        </>
    )
}

export default HallAdminPanel