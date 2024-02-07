import { StyledHeader } from "./header.styled"
import { MdDarkMode, MdOutlineDarkMode} from "react-icons/md"
import { useContext } from "react"
import { SiteContext } from "./context"

function App() {
  const { darkMode, handleTheme } = useContext(SiteContext);

  return (
    <>
    <StyledHeader>
      <nav>
        <ul>
          <strong>Logo</strong>
        </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <button onClick={handleTheme}>
              {darkMode == "light" ? <MdDarkMode/> : <MdOutlineDarkMode/>}
            </button>
          </li>
        </ul>
      </nav>  
    </StyledHeader>
    </>
  )
}

export default App
