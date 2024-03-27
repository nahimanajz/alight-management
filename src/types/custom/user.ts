import * as yup from "yup"

export const UserSchema= yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required()
})
export const UserLoginSchema= yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
})


export type User = yup.InferType<typeof UserSchema>;
export type UserLogin = yup.InferType<typeof UserLoginSchema>;

