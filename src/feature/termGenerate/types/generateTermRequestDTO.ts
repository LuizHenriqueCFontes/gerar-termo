import type { EmployeRequestDTO } from "./employeRequestDTO"
import type { EquipmentRequestDTO } from "./EquipmentRequestDTO"

export type GenerateTermRequestDTO = {
    idEnterprise: String,
    employe: EmployeRequestDTO,
    equipment: EquipmentRequestDTO
}