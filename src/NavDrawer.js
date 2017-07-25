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
          <Link to="/"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-hand-spock-o" aria-hidden="true"></i>&nbsp;
            v-lai.github.io</MenuItem></Link>
          <Link to="/projects"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-id-card" aria-hidden="true"></i>&nbsp;
            Projects</MenuItem></Link>
          <Link to="/about"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;
            About Me</MenuItem></Link>
          <Link to="/contact"><MenuItem onTouchTap={props.close}>
            <i className="fa fa-address-card" aria-hidden="true"></i>&nbsp;
            Contact</MenuItem></Link>
        </Drawer>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default NavDrawer;
