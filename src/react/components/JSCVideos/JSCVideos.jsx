import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import styled from 'styled-components';
// GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLmcLAMi0ZBwJ5cs92ppNp_-UeDDSXQtSW&key=[YOUR_API_KEY] HTTP/1.1

const JSCVideos = ({ playListId }) => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');
  const getPlaylistItems = () => {
    const apiKey = 'AIzaSyDUwgBPrArU-r2TMEH0DX5PYTiVHT3oExI';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        const playlistItems = data.items.map((item) => item.snippet);
        setVideos(playlistItems);
      });
    
  };

  useEffect(() => {
    getPlaylistItems();
  }, []);

  const onSearch = () => {
    let query = event.target.value.toLowerCase();
    setQuery(query);
  };

  return (
    <div style={{ padding: '1rem' }} id="videos">
      <Heading>Video Gallery</Heading>
      <StyledInput onChange={onSearch} type="text" placeholder="Search Video" />
      <VideoContainer>
        {videos
          .filter((video) => video.title.toLowerCase().includes(query))
          .map((video) => {
            return (
              <VideoCard
                key={video.resourceId.videoId}
                id={video.resourceId.videoId}
                description={video.description}
                thumbnail={video.thumbnails.high.url}
                title={video.title}
                playListId={playListId}
              />
            );
          })}
      </VideoContainer>
    </div>
  );
};

const Heading = styled.h1`
  text-align: center;
`;

const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid grey;
  outline: none;
  transition: border 0.05s;
  &:focus {
    border: 1px solid #03a1fc;
  }
`;

export const VideoContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
`;

export default JSCVideos;
