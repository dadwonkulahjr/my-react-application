function TopNavigationBar()
{
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <div className='container'>
            <a className='navbar-brand text-white' href='#Top'>tuseTheProgrammer</a>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#Top">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#Top">Link 1</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#Top" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown List
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#Top">Action</a></li>
                      <li><a className="dropdown-item" href="#Top">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#Top">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
}

