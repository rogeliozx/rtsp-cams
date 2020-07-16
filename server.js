const express = require('express');
const app = express();
const Stream = require('node-rtsp-stream')
const Stram2=require('node-rtsp-stream');
const cors = require('cors');
const { proxy } = require('rtsp-relay')(app);
const expressWs = require('express-ws')(app);
app.use(cors());
const cam=new Stream({
  name: 'name',
  streamUrl: 'rtsp://rogelio:rogelio123@192.168.100.190:554/cam/realmonitor?channel=1&subtype=0',
  wsPort: 4004,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});
const cam2=new Stram2({
  name: 'name',
  streamUrl: 'rtsp://rogelio:rogelio123@192.168.100.190:554/cam/realmonitor?channel=2&subtype=0',
  wsPort: 4003,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});
//rtsp
/* const faceCam = proxy({
  url: `rtsp://rogelio:rogelio123@192.168.100.190:554/cam/realmonitor?channel=1&subtype=0`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});
app.ws('/face', faceCam); */

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});
