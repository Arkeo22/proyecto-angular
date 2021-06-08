export interface User {
    id?: number
    idRol?: number
    nombre?: string
    apellidos?: string
    password?: string
    email?: string
    telefono?: number
    dni?: string
    imgSrc?: string
}
export interface accesoUsuario{
    email: string
    password: string
}