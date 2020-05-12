import React from 'react';
import ReactDOM from 'react-dom';
import JSCVideos from './components/JSCVideos/JSCVideos';

const App = () => {
  return (
    <div>
      <JSCVideos playListId="PLmcLAMi0ZBwJ5cs92ppNp_-UeDDSXQtSW" />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('react'));
