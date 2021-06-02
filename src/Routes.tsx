import { GlobalStyles } from 'styles/globals'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from 'components/Main'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={Main} />
    </Router>
  )
}

export default App
