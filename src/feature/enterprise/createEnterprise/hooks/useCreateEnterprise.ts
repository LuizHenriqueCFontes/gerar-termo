import { useState } from "react";
import type { CreateEnterpriseRequestDTO } from "../../types/request/CreateEnterpriseRequestDTO";

export function useCreateEnterprise() {
    const [enterpriseData, setEnterpriseData] = useState<CreateEnterpriseRequestDTO>({legalName: "", cnpj: "", cep: "", city: "", state: ""});

    const handleSetEnterpriseData = (field: keyof CreateEnterpriseRequestDTO, value: string) => (
        setEnterpriseData((prev) => ({
            ...prev,
            [field]: value
        }))
    )

    return  {
        enterpriseData,
        handleSetEnterpriseData
    }
}