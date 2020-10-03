import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import News from '../pages/news/News';
import Heading from './Heading';

const navLinkListStyles = {
  listStyle: 'none'
}
const navLinkStyles = {
  textDecoration: 'none',
  fontSize: '1.4em',
  color: 'inherit'
}

export default function Layout() {
  return (
    <Router>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading content='Noroff JS Frameworks MA3' />
        <nav style={{ margin: '20px', alignItems: 'flex-end' }}>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gridColumnGap: '20px'}}>
            <li style={navLinkListStyles}><NavLink to='/' exact style={navLinkStyles}>Home</NavLink></li>
            <li style={navLinkListStyles}><NavLink to='/login' style={navLinkStyles}>Login</NavLink></li>
            <li style={navLinkListStyles}><NavLink to='/news' style={navLinkStyles}>News</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={News} />
      </Switch>
    </Router>
  )
}
