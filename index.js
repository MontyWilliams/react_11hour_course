function Header() {
  return (
    <header>
        <nav className="nav-divs">
          <img className="logo"  src="./918dcx.png" alt="" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function Footer() {
  return (
    <footer>
  "© 2023 918dcx development. All rights reserved."
  </footer>
  )
}

function Main() {
  return (
    <div>
   <h1>Why Im learning react? <br /> why the $$ <br /> Foolio</h1>
  </div>
  )
}
function Page() {
    return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
