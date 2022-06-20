import logo from "../assets/logo-terra.png"

function Navbar(){
    return(
        <header id="header-wrap" className="bg-neutral shadow-lg">
            <div className="container">
                <div className="navbar mb-2 text-neutral-content">
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-center">
                        <img
                            width={20}
                            className='text-center mx-auto'
                            src={logo}
                            alt="UST restitution"
                        />
                        <span className="text-md font-bold ml-2">
                    UST Restitution -  Donation
                </span>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;