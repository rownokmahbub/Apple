import Image from 'next/image'
import Link from 'next/link'
import Hero from './home/Hero'
import Hero2 from "./home/Hero2";
import Iwatch from "./home/Iwatch";
import Accessories from "./home/Accessories";
import MacbookAir from "./home/MacbookAir";
import Carousal from "./home/Carousal";
import Article from "./home/Article";
export default function Home() {
  return (
  
  <>
    <MacbookAir/>
    <Hero/>
    <Hero2/>
    <Iwatch/>
    <Accessories/>
    {/* <Carousal/> */}
    <Article/>
  </>
  )
}
