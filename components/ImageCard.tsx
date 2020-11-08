import ImageCardHover from './ImageCardHover';
import { IImageItem } from '../store/types';

const ImageCard = (props: { imageProps: IImageItem }) => {
  const {
    imageProps: { alt, urlSmall, userName, id, igUserName, name, userPic },
  } = props;

  return (
    <div className='image__card'>
      <img className='image__card_image' id='image' src={urlSmall} alt={alt} />
      <ImageCardHover
        name={name}
        igUserName={igUserName}
        id={id}
        userPic={userPic}
        userName={userName}
      />
    </div>
  );
};

export default ImageCard;
