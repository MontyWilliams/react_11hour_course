function Header() {
  return (
    <header>
        <nav>
          <img src="./918dcx.png" width="40px" alt="" />
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
