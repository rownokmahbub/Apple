import Link from "next/link"
import {FaStar,FaCodeBranch,FaEye} from 'react-icons/fa'
import { resolve } from "styled-jsx/css"
async function fetchRepos(){
    const response =await fetch('https://api.github.com/users/bradtraversy/repos')
    await new Promise((resolve)=> setTimeout(resolve,1000))
   const repos =await response.json()
   return repos
}
const page = async () => {
    const repos =await fetchRepos()
   
  return (
    <div>
        <p className="text-center text-2xl mt-4 font-bold">Repositories</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  px-10 container py-10 items-center gap-10">
            {repos.map((repo)=>(
                <div key={repo.id} className="bg-slate-800 px-4 py-4 rounded-xl min-h-[250px] flex flex-col justify-center">
                    <Link href={`/code/repos/${repo.name}`}>
                        <p className="text-lg font-semibold">{repo.name}</p>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{repo.description}</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center">
                                <FaStar className="text-lg"/> <div className="text-lg">{repo.stargazers_count} </div> 
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaCodeBranch className="text-lg"/> <div className="text-lg"> {repo.forks_count}</div> 
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaEye className="text-lg"/> <div className="text-lg"> {repo.watchers_count}</div> 
                            </div>
                         
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page