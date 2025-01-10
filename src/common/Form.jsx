import FormInput from "../common/FormInput"
import { useEffect, useState } from "react"


const Form = ({ headerText, setFormData, formItems, formButtons, formStyle = "flex flex-col  pt-12 gap-5 max-w-[400px] mx-auto" }) => {

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (


        <form onSubmit={(e)=>{e.preventDefault()}} className={formStyle} action="">
            {headerText && <h1 className={headerText.style}>{headerText.title}</h1>}
            {
                formItems.map(item => <FormInput handleInputChange={handleInputChange} name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} inputStyle={item.inputStyle} />)
            }

            {
                formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
            }
        </form>


    )
}

export default Form