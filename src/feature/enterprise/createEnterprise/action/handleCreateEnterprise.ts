import { executeWithToast } from "../../../../utils/toast";
import type { CreateEnterpriseRequestDTO } from "../../types/request/CreateEnterpriseRequestDTO";
import type { CreateEnterpriseResponseDTO } from "../../types/response/CreateEnterpriseResponseDTO";

export async function handleCreateEnterprise(request: CreateEnterpriseRequestDTO, createEnterprise: (request: CreateEnterpriseRequestDTO) => Promise<CreateEnterpriseResponseDTO>): Promise<void> {
    await executeWithToast<CreateEnterpriseResponseDTO>(() => createEnterprise(request), "Cadastrando empresa...", "Empresa cadastrada com sucesso!");
}