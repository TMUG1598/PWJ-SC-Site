import React from 'react';
import styled from 'styled-components';

const VideoCard = ({ id, description, thumbnail, title, playListId }) => {
  const onCardClick = () => {
    const url = `https://www.youtube.com/watch?v=${id}&list=${playListId}`;
    window.open(url, '_blank');
  };

  return (
    <Card onClick={onCardClick}>
      <ImageContainer>
        <Image src={thumbnail} alt="" />
      </ImageContainer>
      <TextContainer>
        <h5>{title.substr(0, 70)}</h5>
        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
          {description.substr(0, 90) + '...'}
        </p>
      </TextContainer>
    </Card>
  );
};

const Card = styled.div`
  flex-basis: 20%;
  cursor: pointer;
  box-shadow: 0 2px 5px 1px lightgrey;
  border-radius: 1rem;
  margin: 0.5rem;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 10px 2px lightgrey;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
`;

const ImageContainer = styled.div`
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const Image = styled.img`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
`;

export default VideoCard;
