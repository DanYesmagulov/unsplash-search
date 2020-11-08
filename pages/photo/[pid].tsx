import Head from 'next/head';

import Navbar from '../../components/Navbar';
import ImageBoard from '../../components/ImageBoard';
import { NextPageContext } from 'next';
import UnsplashService from '../../service/unsplash';

import { ISinglePhotoData } from '../../service/unsplash';

const API = new UnsplashService();

const likePhoto = async (id) => {
  const res = await API.likePhotoById(id);
  console.log(res);
};

function Photo(res) {
  const {
    id,
    alt,
    regUrl,
    igUserName,
    likedByUser,
    name,
    rawUrl,
    tags,
    userName,
    userPic,
  }: ISinglePhotoData = res.res;
  console.log(tags);
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
      <div className='photoPage__wrapper'>
        <div className='photo'>
          <div className='container'>
            <div className='photo__top'></div>
            <div className='photo__header'>
              <div className='photo__header_info'>
                <img src={userPic} alt={userName} />
                <p>
                  {name}
                  {igUserName !== null ? (
                    <a href={`https://instagram.com/${igUserName}`} target='_blank'>
                      {`@${igUserName}`}
                    </a>
                  ) : null}
                </p>
              </div>
              <div className='photo__header_buttons'>
                <div>
                  <button className='favButton' onClick={likePhoto}>
                    <img src='/favorite_24px.png' alt='favourite' />
                  </button>
                </div>
                <div className='downloadButton'>
                  <a href={`https://unsplash.com/photos/${id}/download?force=true`} role='button'>
                    <img src='/download_24px.png' alt='download' />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='photo__img'>
              <img src={regUrl} alt={alt} />
              <div className='maximizeButton'>
                <a href={`${rawUrl}`} target='_blank'>
                  <img src='/stroke-image.png' alt='' />
                </a>
              </div>
            </div>
            <div className='photo__tags'>
              <h6>Похожие тэги</h6>
              <ul className='photo__tags_item'>
                {tags &&
                  tags.map((tag: any, id: number) => {
                    return <li key={id}>{tag.title}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='samePhotos'>
            <h6>Похожие фотографии</h6>
            <a href='#'>show more</a>
          </div>
          <ImageBoard />
        </div>
      </div>
      <style jsx>{`
        .photo {
          z-index: -1;
          display: block;
          background: linear-gradient(0deg, rgba(40, 36, 22, 0.5), rgba(40, 36, 22, 0.5)),
            url(${regUrl});
          background-color: #cccccc;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .photoPage__wrapper {
          margin-top: 60px;
          background-color: #e5e5e5;
        }
      `}</style>
    </>
  );
}

Photo.getInitialProps = async ({ query }: NextPageContext) => {
  const res = await API.getPhotoById(query.pid);
  return { res };
};

export default Photo;
