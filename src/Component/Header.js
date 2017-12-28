import React from 'react'
const Header = (props)=>{
    return(
        <div>
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-brand" id="brand"><span className="glyphicon glyphicon-map-marker"/> Sekolah Indonesia</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header