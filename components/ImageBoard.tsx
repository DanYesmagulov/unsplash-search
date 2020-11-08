import React from 'react';
import { connect } from 'react-redux';
import { IImageItem, IState } from '../store/types';
import { getRandomPhotos, requestNextSearchPage } from '../store/actions';

import ImageCard from './ImageCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

interface IProps {
  requestNextSearchPage: () => void;
  searchKey: string;
  getRandomPhotos: () => void;
  imageList: IImageItem[];
  hasError: boolean;
  hasMoreImage: boolean;
  errorMessage: string;
}

interface IMapStateToProps {
  imageList: IImageItem[];
  hasMoreImage: boolean;
  hasError: boolean;
  errorMessage: string;
  searchKey: string;
}

export class ImageBoard extends React.Component<IProps> {
  componentDidMount() {
    this.requestPhotos();
  }

  requestPhotos = () => {
    const { searchKey, requestNextSearchPage, getRandomPhotos } = this.props;

    if (searchKey) {
      requestNextSearchPage();
    } else {
      getRandomPhotos();
    }
  };

  render() {
    const { imageList, hasError, hasMoreImage } = this.props;

    const errorNode = (
      <h2 className='errorNode'>
        Here is an Error, try to reload page, or make another search querry.
      </h2>
    );

    const endMessage = (
      <div className='endMessage' role='alert'>
        <h5>No more images to load, try another search querry</h5>
      </div>
    );

    const images = imageList.map((item) => <ImageCard imageProps={item} key={item.id} />);

    return (
      <>
        <div className='images'>
          <InfiniteScroll
            style={{ overflowY: 'hidden' }}
            dataLength={imageList.length}
            next={this.requestPhotos}
            loader={hasError ? null : <Spinner />}
            hasMore={hasMoreImage}
            endMessage={endMessage}>
            <div>
              {images}
              {hasError ? errorNode : null}
            </div>
          </InfiniteScroll>
        </div>
        <style jsx>{`
          .errorNode {
            margin: 0 auto;
            font-size: 46px;
          }
        `}</style>
      </>
    );
  }
}

const mapStateToProps = (state: IState): IMapStateToProps => ({
  imageList: state.imageList,
  hasMoreImage: state.hasMoreImage,
  hasError: state.hasError,
  errorMessage: state.errorMessage,
  searchKey: state.searchKey,
});

export default connect(mapStateToProps, { getRandomPhotos, requestNextSearchPage })(ImageBoard);
