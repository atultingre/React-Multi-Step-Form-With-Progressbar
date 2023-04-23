import { useContext } from "react";
import FormContext from "../contxt/FormContext";

const useFormContext = () =>{
    return useContext(FormContext)
}

export default useFormContext;