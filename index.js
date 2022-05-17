import { Header } from "./Header.js";


function Footer() {
  return (
    <div className="footer">
  "© 2023 918dcx development. All rights reserved."
  </div>
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
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
