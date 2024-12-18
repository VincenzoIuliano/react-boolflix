import Filter from "./Filters";

export default function Header() {
    return (
      <header>
        <div className="container">
            <div className="navbar">
                <div>
                    Logo
                </div>

                <Filter />
            </div>
        </div>
      </header>  
    )
}