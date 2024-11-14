import { mixed, object, string, ref } from "yup"

let userSchema = object({
  fullname: string().required("El campo nombre es requerido"),
  phone: mixed().required("El campo telefono es requerido"),
  email: string().email("El campo email, debe tener un @"),
  confirmaremail: string()
    .oneOf([ref("email"), null], "Los correos electrónicos no coinciden")
    .required("El campo de confirmación de email es requerido")
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm