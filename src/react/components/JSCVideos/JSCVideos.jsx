import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import styled from 'styled-components';
// GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLmcLAMi0ZBwJ5cs92ppNp_-UeDDSXQtSW&key=[YOUR_API_KEY] HTTP/1.1

const JSCVideos = ({ playListId }) => {
  const [videos, setVideos] = useState([]);
  const getPlaylistItems = () => {
    const apiKey = 'AIzaSyDUwgBPrArU-r2TMEH0DX5PYTiVHT3oExI';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const playlistItems = data.items.map((item) => item.snippet);
        setVideos(playlistItems);
      });
    console.log('getPlayListItems');
  };

  useEffect(() => {
    getPlaylistItems();
  }, []);

  return (
    <div id="videos">
      <Heading>Video Gallery</Heading>
      <VideoContainer>
        {videos.map((video) => {
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

export const VideoContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
`;

export default JSCVideos;
