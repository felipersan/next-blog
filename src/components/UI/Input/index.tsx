import { InputHTMLAttributes } from "react"

interface btnProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string
    typeBtn: 'text' | 'password' | 'email'

}

export default function Input({placeholder, typeBtn, ...rest}:btnProps){
    return(
        <input
        {...rest}
        autoComplete='off'
        type={typeBtn} 
        placeholder={placeholder}
        className="w-full h-14 bg-transparent border-solid border border-emphasis-primary text-white caret-emphasis-primary	p-2.5 pl-7 focus:outline-none z-10"
        />
    )
}