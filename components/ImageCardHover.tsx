import React from 'react';
import Link from 'next/link';

interface IProps {
  id: string;
  igUserName: string;
  name: string;
  userPic: string;
  userName: string;
}

const ImageCardHover = (props: IProps) => {
  const { name, id, igUserName, userPic, userName } = props;

  const userIgProfile =
    igUserName !== null ? (
      <a href={`https://instagram.com/${igUserName}`} target='_blank' rel='noopener noreferrer'>
        {`@${igUserName}`}
      </a>
    ) : null;

  const author = (
    <div className='author'>
      <h6>
        {name}
        <div>{userIgProfile}</div>
      </h6>
    </div>
  );
  const userAvatar = (
    <div className='userPic'>
      <img className='userPic__img' src={userPic} alt={name} />
    </div>
  );

  const favouriteBtn = (
    <a href='#' className='icons__item' role='button'>
      <svg
        width='34'
        height='34'
        viewBox='0 0 27 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='icon/action/favorite_24px'>
          <path
            id='icon/action/favorite_24px_2'
            d='M14.5782 22.9207C13.6142 23.796 12.1302 23.796 11.1661 22.9081L11.0266 22.7812C4.36736 16.7562 0.0166355 12.8114 0.181532 7.88984C0.257637 5.7335 1.36117 3.66596 3.14966 2.44827C6.49832 0.165089 10.6334 1.23057 12.8658 3.84354C15.0983 1.23057 19.2334 0.152405 22.582 2.44827C24.3705 3.66596 25.4741 5.7335 25.5502 7.88984C25.7277 12.8114 21.3643 16.7562 14.7051 22.8066L14.5782 22.9207Z'
            fill='white'
          />
        </g>
      </svg>
    </a>
  );

  const maximizeBtn = (
    <Link href='/photo/[id]' as={`/photo/${id}`}>
      <a className='icons__item' role='button'>
        <svg
          width='34'
          height='34'
          viewBox='0 0 37 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z'
            fill='white'
          />
        </svg>
      </a>
    </Link>
  );

  const downloadBtn = (
    <a
      className='icons__item'
      href={`https://unsplash.com/photos/${id}/download?force=true`}
      role='button'>
      {/* <img src="../assets/img/download_24px_rounded.svg" alt="download" /> */}
      <svg
        width='34'
        height='34'
        viewBox='0 0 34 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='icon/file/download_24px'>
          <path
            id='icon/file/download_24px_2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.2499 13.4584H23.5024C24.7633 13.4584 25.3866 14.9884 24.4941 15.8809L17.9916 22.3834C17.4391 22.9359 16.5466 22.9359 15.9941 22.3834L9.49159 15.8809C8.59909 14.9884 9.23659 13.4584 10.4974 13.4584H12.7499V6.37502C12.7499 5.59585 13.3874 4.95835 14.1666 4.95835H19.8333C20.6124 4.95835 21.2499 5.59585 21.2499 6.37502V13.4584ZM8.49992 29.0417C7.72075 29.0417 7.08325 28.4042 7.08325 27.625C7.08325 26.8459 7.72075 26.2084 8.49992 26.2084H25.4999C26.2791 26.2084 26.9166 26.8459 26.9166 27.625C26.9166 28.4042 26.2791 29.0417 25.4999 29.0417H8.49992Z'
            fill='white'
          />
        </g>
      </svg>
    </a>
  );

  return (
    <div className='image__card_text'>
      <div className='userInfo'>
        {userAvatar}
        {author}
        <div className='icons'>
          {favouriteBtn}
          {maximizeBtn}
          {downloadBtn}
        </div>
      </div>
    </div>
  );
};

export default ImageCardHover;
