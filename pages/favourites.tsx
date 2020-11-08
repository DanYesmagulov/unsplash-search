import Head from 'next/head';

import Navbar from '../components/Navbar';

const Favourites = () => {
  return (
    <>
      <Head>
        <title>Unsplash Photo Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='header shrink'>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <div className='container'>
        <div className='favPage__wrapper'>
          <h6 className='favTitle'>Избранное</h6>
          <div className='gridIcons'>
            <i className='gridIcons__desktop icon-grid4'></i>
            <i className='gridIcons__mobile icon-grid2'></i>
          </div>
        </div>
      </div>
      <style jsx>{`
        .favPage__wrapper {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
};

export default Favourites;
