
const NavBar=({setCategories})=>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <div className="navbar-brand"><span className="badge bg-light text-dark fs-4">News</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">        
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('technology')}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('business')}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('health')}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('science')}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('entertainment')}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCategories('sports')}>Sports</div>
        </li>        
      </ul>
    </div>
  </div>
</nav>
    )
}



export default NavBar



































