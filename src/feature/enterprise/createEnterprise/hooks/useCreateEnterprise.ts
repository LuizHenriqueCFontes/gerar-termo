import { useState } from "react";
import type { CreateEnterpriseRequestDTO } from "../../types/request/CreateEnterpriseRequestDTO";
import { useMutation } from "@tanstack/react-query";
import { enterpriseService } from "../../service/enterpriseService";

export function useCreateEnterprise() {
    const [enterpriseData, setEnterpriseData] = useState<CreateEnterpriseRequestDTO>({legalName: "", cnpj: "", cep: "", city: "", state: ""});

    const handleSetEnterpriseData = (field: keyof CreateEnterpriseRequestDTO, value: string) => (
        setEnterpriseData((prev) => ({
            ...prev,
            [field]: value
        }))
    );

    const createEnterprise = useMutation({
        mutationFn: enterpriseService.createEnterprise
    });

    return  {
        enterpriseData,
        handleSetEnterpriseData,

        createEnterprise: createEnterprise.mutateAsync
    }
}