import { useState } from "react";

export const useForm = (inititalForm = {}) => {
    const [stateForm, setStateForm] = useState(inititalForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setStateForm({
            ...stateForm,
            [name]: value
        })
    }

    const onResetForm = () => {
        setStateForm(inititalForm)
    }

    return {
        ...stateForm,
        onInputChange,
        onResetForm
    }

}