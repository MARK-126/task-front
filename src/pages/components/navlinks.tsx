
import Link from "next/link"

const links = [
  { name: 'Pending tasks', href:'#', icon:'Pending' },
  { name: 'Done tasks', href:'#', icon:'Done'  },
  {name: 'In progress tasks', href:'#', icon:'In progress' }
]

 const Navlinks = () => {
  return (
    // mapear cada link 
    <>
      {links.map((link) => {
        return (
          <Link key={link.name}href={link.href}><p>{link.name}</p></Link>);
      })}
    </>
      )
 }
export default Navlinks;