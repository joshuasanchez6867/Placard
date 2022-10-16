export default function Navbar(){
    return(
        <nav className = "nav">
          <a href="/" className = "site-title">
            Placard
          </a>
          <ul>
            <li>
              <a href="Buy">Buy</a>
            </li>
            <li>
              <a href="Sell">Sell</a>
            </li>
          </ul>

        </nav>
    ) 
}