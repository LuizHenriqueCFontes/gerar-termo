import { BuildingComplex, BuildingComplexPlus, CornerUpRight, IdCard, MailOpen, Map, Save } from "lucide-react";
import { Input } from "../../../../shared/components/Input/Input";
import { useCreateEnterprise } from "../hooks/useCreateEnterprise";
import { Button } from "../../../../shared/components/Button/Button";
import { handleCreateEnterprise } from "../action/handleCreateEnterprise";

export default function CreateEnterprise() {

    const { enterpriseData, handleSetEnterpriseData, createEnterprise } = useCreateEnterprise();

    function submitEnterprise(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        handleCreateEnterprise(enterpriseData, createEnterprise);
    }


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

            <form onSubmit={(event) => submitEnterprise(event)}>
                <Input id="legal-name"
                label="Razão Social"
                icon={BuildingComplexPlus}
                placeholder="Digite a razão social da empresa"
                required
                type="text"
                value={enterpriseData.legalName}
                onChange={(value) => handleSetEnterpriseData("legalName", value)}/>

                <Input id="cnpj"
                label="CNPJ"
                icon={IdCard}
                placeholder="Digite o CNPJ da empresa"
                required
                type="text"
                value={enterpriseData.cnpj}
                onChange={(value) => handleSetEnterpriseData("cnpj", value)}/>

                <div>
                    <Input id="cep"
                    label="CEP"
                    icon={MailOpen}
                    placeholder="Digite o CEP"
                    required
                    type="text"
                    value={enterpriseData.cep}
                    onChange={(value) => handleSetEnterpriseData("cep", value)}/>

                    <Input id="city"
                    label="Cidade"
                    icon={BuildingComplex}
                    placeholder="Digite a cidade"
                    required
                    type="text"
                    value={enterpriseData.city}
                    onChange={(value) => handleSetEnterpriseData("city", value)}/>
                </div>

                <Input id="state"
                label="Estado"
                icon={Map}
                placeholder="Informe o estado"
                required
                type="text"
                value={enterpriseData.state}
                onChange={(value) => handleSetEnterpriseData("state", value)}/>

                <div>
                    <Button icon={Save} type="submit" variant="primary">Cadastrar  Empresa</Button>

                    <Button icon={CornerUpRight} variant="secondary">Cancelar</Button>
                </div>
            </form>
        </section>
    );
}