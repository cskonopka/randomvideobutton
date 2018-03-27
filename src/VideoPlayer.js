import React from 'react';

class VideoPlayer extends React.Component {
   render() {
      return (
         <div>
            <iframe src={this.props.headerProp2} width="640" height="360" frameBorder="0"></iframe>         
         </div>
      );
   }
}


VideoPlayer.defaultProps = {
   headerProp: 0,
   headerProp2: "http://player.vimeo.com/video/229664961?loop=1"
}

export default VideoPlayer;