 import {FaStar,FaCodeBranch,FaEye} from 'react-icons/fa'
 async function fetchRepo(name){
    const response =await fetch(`https://api.github.com/users/repos/bradtraversy/${name}`)
    const repo =await response.json()
    return repo;
 }
 const Repo = async ({name}) => {
    const repo = await fetchRepo(name)
   return (
     <div>
        <p>{repo.name}</p>
        <p>{repo.description}</p>
       <div className="card">
        <div className="state">
            <FaStar></FaStar>
        </div>
       </div>
     </div>
   )
 }
 
 export default Repo