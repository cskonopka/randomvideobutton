import React from 'react';
import './App.css'
import testJSON from './cskonopka-vault.json'
import { Button, Grid, Image, Header } from 'semantic-ui-react'
import VideoPlayer from './VideoPlayer';
import logo2 from './csk-logo-transparent.png'

var styleButton = {
    'width': '640px',
    'backgroundColor': 'plum',
    'borderColor': 'plum',
    'color': 'black'
};

var vimeoStyle = {
    'width': '50%'
};

var stringitDefault = "http://player.vimeo.com/video/229664961?loop=1";

export default class RandomVid extends React.Component {
        constructor(props) {
            super(props);
            this.state = { name: '', name2: stringitDefault };
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event) {

            var jsonLength = testJSON.length;
            console.log(jsonLength);

            var newRandom = (Math.random() * jsonLength);
            var rounder = Math.round(newRandom);

            var stringit = "http://www.vimeo.com/" + testJSON[rounder]['Video ID'] + "";
            var stringit2 = "http://player.vimeo.com/video/" + testJSON[rounder]['Video ID'] + "?loop=1";

            this.setState({ name: stringit, name2: stringit2 });
        }

  render() {
    return (
      <div>
          <div className="heads">
              <Grid container columns={1}>
                  <Grid.Column>
                      <Image src={logo2} href='http://github.com/cskonopka/randomvideobutton' size='medium' centered/>
                  </Grid.Column>
              </Grid>
              <Grid container columns={1}>
                  <Grid.Column>
                      <Header size='huge'>RANDOM VIDEO BUTTON</Header>
                  </Grid.Column>
              </Grid>
              <Grid container columns={1}>
                  <Grid.Column>
                    <Button style={styleButton} onClick={ this.handleChange }>click for new video</Button>
                  </Grid.Column>
              </Grid>
              <Grid container columns={1}>
                  <Grid.Column>
                    <VideoPlayer style={vimeoStyle} headerProp2 = {this.state.name2}/>
                  </Grid.Column>
              </Grid>
          </div>
      </div>
    );
  }
}