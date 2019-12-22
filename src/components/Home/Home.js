import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
//import {pageContents /*listData*/} from '../../data/dataStore';
//import Search from '../Search/Search.js';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    lists: PropTypes.array.isRequired,
  };
  render() {

    const {title, subtitle, lists} = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}


export default Home;
