'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
const Logo =() =>{
    const router =useRouter()
    return(
        <Image width='100' height='100' className='hidden md:block cursor-pointer' src='/images/logo.png' alt='logo'/>
    )
}
export default Logo
