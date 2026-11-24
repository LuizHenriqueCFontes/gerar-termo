import { BuildingComplex, BuildingComplexPlus, CornerUpRight, IdCard, MailOpen, Map, MapPinHouse, Save } from "lucide-react";
import { Input } from "../../../../shared/components/Input/Input";
import { useCreateEnterprise } from "../hooks/useCreateEnterprise";
import { Button } from "../../../../shared/components/Button/Button";
import { handleCreateEnterprise } from "../action/handleCreateEnterprise";
import styles from "./CreateEnterprise.module.css";

export default function CreateEnterprise() {

    const { enterpriseData, handleSetEnterpriseData, createEnterprise } = useCreateEnterprise();

    function submitEnterprise(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        handleCreateEnterprise(enterpriseData, createEnterprise);
    }


    return(
        <section className={styles.container}>
            <title>Cadastrar Empresa</title>

            <div className={styles.titleContainer}>
                <div className={styles.iconContainer}>
                    <BuildingComplexPlus className={styles.icon}/>
                </div>

                <div>
                    <h1 className={styles.title}>Cadastro de Empresa</h1>

                    <p className={styles.description}>Preencha os dados abaixo para cadastrar uma nova empresa.</p>
                </div>
            </div>

            <hr className={styles.divider}/>

            <form onSubmit={(event) => submitEnterprise(event)} className={styles.form}>
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

                <Input id="address"
                label="Endereço"
                icon={MapPinHouse}
                placeholder="Digite o endereço da empresa"
                required
                type="text"
                value={enterpriseData.address}
                onChange={(value) => handleSetEnterpriseData("address", value)}/>

                <div className={styles.inputsContainer}>
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

                <div className={styles.btnContainer}>
                    <Button className={styles.btn} icon={Save} type="submit" variant="primary">Cadastrar  Empresa</Button>

                    <Button className={styles.btn} icon={CornerUpRight} variant="secondary">Cancelar</Button>
                </div>
            </form>
        </section>
    );
}