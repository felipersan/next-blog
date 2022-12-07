interface btnProps{
    placeholder:string
    typeBtn: 'text' | 'password' | 'email'
}

export default function Input({placeholder, typeBtn}:btnProps){
    return(
        <input
        autoComplete='off'
        type={typeBtn} 
        placeholder={placeholder}
        className="w-full h-14 bg-transparent border-solid border border-emphasis-primary text-white caret-emphasis-primary	p-2.5 pl-7 focus:outline-none"
        />
    )
}