import { api } from "../../../service/api";
import type { CreateEnterpriseRequestDTO } from "../types/request/CreateEnterpriseRequestDTO";
import type { CreateEnterpriseResponseDTO } from "../types/response/CreateEnterpriseResponseDTO";

const BASE_ENDPOINT = "/enterprise";

export const enterpriseService = {
    createEnterprise: async(request: CreateEnterpriseRequestDTO): Promise<CreateEnterpriseResponseDTO> => {

        const endpoint = `${BASE_ENDPOINT}`;

        const { data } = await api.post<CreateEnterpriseResponseDTO>(endpoint, request);

        return data;
    }


}