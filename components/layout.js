import Navbar from "./nav"

const Layout = ({title, footer, children}) => {
  return (
    <div>
        <Navbar />
        <h1>{title}</h1>
        <hr />
        {children}
        <hr />
        <p>{footer}</p>
    </div>
  )
}

export default Layout