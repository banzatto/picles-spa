import { FormEvent } from "react";
import { Button, ButtonVariant } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from "./Shelter.module.css"


export function Shelter() {

    function submit(event) {
        event.preventDefault()
        console.log()
    }

    return <Panel>
        <form className={styles.container} onSubmit={submit}>
            <Input label="Nome" />
            <Input label="WhatsApp" />
            <Input label="Phone" />
            <Input label="Email" />
            <Button type="submit" variant={ButtonVariant.Default} >Salvar dados</Button> 
        </form>
    </Panel>
}