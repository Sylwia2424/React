import styles from './Header.scss';
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
import Search from '../Search/SearchContainer';


class Header extends React.Component {

  render() {
    return(
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='cat' />
            </Link>
            <Search/>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );

  }
}

export default Header;