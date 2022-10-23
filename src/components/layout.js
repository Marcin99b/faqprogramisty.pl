import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <header>
        <p>Zaczynasz naukę programowania? Jesteś na jednym z początkowych etapów? Tutaj znajdziesz odpowiedzi na najczęściej pojawiające się pytania</p>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, <a target="_blank" rel="noreferrer" href="https://github.com/Marcin99b/faqprogramisty.pl">Faq programisty</a>
        <p>Jeśli znalazłeś jakiś błąd lub masz pomysł co można dodać/poprawić?<br/><a target="_blank" rel="noreferrer" href="https://github.com/Marcin99b/faqprogramisty.pl/issues">Dodaj issue na githubie projektu</a></p>
      </footer>
    </div>
  )
}

export default Layout
