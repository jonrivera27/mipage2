import Link from 'next/link'

function Navigation(){ 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">MypageWeb</Link>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent"
            ria-expanded="false" 
            aria-label="Toggle navigation" 
            >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>       
    );
}

export default Navigation;
