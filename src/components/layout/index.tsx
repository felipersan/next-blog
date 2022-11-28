import { ReactNode } from "react"

interface props {
    children: ReactNode
}

export default function Layout({children}:props){
    return(
        <div>
            <p>Layout</p>
            <main>
                {children}
            </main>
        </div>
    )
}