import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const NavDrawer = (props) => {
  return (
    <Router>
      <div>
        <Drawer className="drawer" open={props.open}>
          <Link to="/portfolio"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-hand-spock-o" aria-hidden="true"></i>&nbsp;
            v-lai.github.io</MenuItem></Link>
          <Link to="/portfolio/projects"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-id-card" aria-hidden="true"></i>&nbsp;
            Projects</MenuItem></Link>
          <Link to="/portfolio/about"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;
            About Me</MenuItem></Link>
          <Link to="/portfolio/contact"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-address-card" aria-hidden="true"></i>&nbsp;
            Contact</MenuItem></Link>
        </Drawer>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/about" component={About} />
        <Route path="/portfolio/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default NavDrawer;
