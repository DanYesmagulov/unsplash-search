import { useState, useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ImageBoard from '../components/ImageBoard';

import { hideSearchBarAction } from '../store/actions';
import { IState } from '../store/types';

function Home({ hideSearchBar, hideSearchBarAction }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 170) {
          hideSearchBarAction(false);
        } else {
          hideSearchBarAction(true);
        }
      };
    }
  }, []);
  return (
    <>
      <Head>
        <title>Unsplash Photo Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={hideSearchBar !== true ? 'header shrink' : 'header'}>
        <div className='container'>
          <Navbar />
          {hideSearchBar ? <Search /> : null}
        </div>
      </header>

      <div className='mainPage__imageBoard'>
        <div className='container'>
          <div className='gridIcons'>
            <i className='gridIcons__desktop icon-grid4'></i>
            <i className='gridIcons__mobile icon-grid2'></i>
          </div>
          <ImageBoard />
        </div>
      </div>
      <style jsx>{`
        .mainPage__imageBoard {
          margin-top: 350px;
        }
      `}</style>
    </>
  );
}
const mapStateToProps = (state: IState): { hideSearchBar: boolean } => ({
  hideSearchBar: state.hideSearchBar,
});

export default connect(mapStateToProps, { hideSearchBarAction })(Home);
