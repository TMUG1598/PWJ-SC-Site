import React, { useState, useEffect } from 'react';
// GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLmcLAMi0ZBwJ5cs92ppNp_-UeDDSXQtSW&key=[YOUR_API_KEY] HTTP/1.1

const JSCVideos = () => {
  const [videos, setVideos] = useState([]);

  const getPlaylistItems = () => {
    const apiKey = 'AIzaSyDUwgBPrArU-r2TMEH0DX5PYTiVHT3oExI';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLmcLAMi0ZBwJ5cs92ppNp_-UeDDSXQtSW&key=${apiKey}`;
    fetch(url).then((data) => console.log(data));
    console.log('getPlayListItems');
  };

  useEffect(() => {
    getPlaylistItems();
  }, []);

  return (
    <div>
      <h1>JS SUCCESS COACH VIDEOS Test</h1>
    </div>
  );
};

export default JSCVideos;
