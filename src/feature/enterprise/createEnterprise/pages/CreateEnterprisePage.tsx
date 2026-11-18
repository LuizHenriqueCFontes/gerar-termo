import { BuildingComplexPlus } from "lucide-react";
import { Input } from "../../../../shared/components/Input/Input";
import { useCreateEnterprise } from "../hooks/useCreateEnterprise";

export default function CreateEnterprise() {

    const { enterpriseData, handleSetEnterpriseData } = useCreateEnterprise();


    return(
        <section>
            <title>Cadastrar Empresa</title>

            <div>
                <div>
                    <BuildingComplexPlus />
                </div>

                <h1>Cadastro de Empresa</h1>
                <p>Preencha os dados abaixo para cadastrar uma nova empresa.</p>
            </div>

            <hr />

            <form>

                <Input id="legal-name"
                label="Razão Social"
                icon={BuildingComplexPlus}
                placeholder="Digite a razão social da empresa"
                required
                value={enterpriseData.legalName}
                onChange={(value) => handleSetEnterpriseData("legalName", value)}/>
            </form>
        </section>
    );
}