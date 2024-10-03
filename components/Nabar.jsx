import Link from "next/link";


export default function Nabar() {
  return (
    <nav>
     <ul>
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="link-container">
            <Link className="link" href={'/'}>Home</Link>
            <Link className="link" href={'/about'}>About</Link>
            <Link className="link" href={'/users'}>Users</Link>
        </div>
     </ul>
    </nav>
  )
}
