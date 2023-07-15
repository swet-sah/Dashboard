import React from 'react'
const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder= "Search Here" aria-label="Search"/>
                    </form>
                    <button className='btn btn-success'>See Results</button>
                </div>
            </nav>
        </>
    )
}

export default Nav
