import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>PetLodging</h2>
            <div>
                <button>Correas</button>
                <button>Bebederos</button>
                <button>Juguetes</button>
                <button>Rascadores</button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar