 import styled from 'styled-components'
import Skills from '../../Pages/Skills/Skills';
import Home from "../../Pages/Home/Home";
 import Portfolio from '../../Pages/Portfolio/Portfolio';
import Header from '../../Features/Header/Header';
import Sidebar from '../../Features/Sidebar/Sidebar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Switch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useReducer } from 'react';
import Contact from '../../Pages/ContactMe/Contact';
import Footer from '../../Features/Footer/Footer';
import {ContextProvider} from '../Common/AppContext'

const initalState = {
  theme: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_THEME':
      const newTheme = !state.theme
      return {...state, theme: newTheme}
    default:
      return state.theme
  }
}

function RouterApp() {
  const [themeState, dispatch] = useReducer(reducer, initalState.theme)

  const toggleTheme = () => {
    const action = { type: 'TOGGLE_THEME' }
    dispatch(action)
  }

  const StyledMainApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color:${themeState.theme?"#635c5c":"#fff"}
`
  return (
    <Router>
      <ContextProvider value={{themeState,dispatch}}>
      <StyledMainApp   >
        <Header  />
        <Sidebar />
        <Switch>
          <Route path="/" exact={true} component={Home}>
            <Home />
          </Route>
          <Route path="/portfolio" exact={true} component={Portfolio}>
            <Portfolio />
          </Route>
          <Route path="/skills" exact={true} component={Skills}>
            <Skills />
          </Route>
          <Route path="/contact" exact={true} component={Contact}>
            <Contact />
          </Route>
        </Switch>
        <button style={{color:themeState.theme}}  onClick={toggleTheme}>Toggle Theme</button>
        <Footer />
      </StyledMainApp>
      </ContextProvider>
    </Router>
  );
}

export default RouterApp;