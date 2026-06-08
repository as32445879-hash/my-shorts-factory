const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = "Ii71IYF3v62bXyUu96zH84RpMdaK5E1a7N9Ww2qC";
const api = new Shotstack.EditApi();

const videoAsset = new Shotstack.VideoAsset();
videoAsset.setSrc('https://github.com/shotstack/test-media/raw/main/videos/rain.mp4');

const clip = new Shotstack.Clip();
clip.setAsset(videoAsset)
    .setStart(0)
    .setLength(32); // 32초로 변경 완료!

const track = new Shotstack.Track();
track.setClips([clip]);

const timeline = new Shotstack.Timeline();
timeline.setTracks([track]);

const output = new Shotstack.Output();
output.setFormat('mp4')
      .setResolution('hd');

const edit = new Shotstack.Edit();
edit.setTimeline(timeline)
    .setOutput(output);

api.postRender(edit).then((data) => {
    console.log('영상 제작 요청 성공 ID:', data.response.id);
}, (error) => {
    console.error('에러 발생:', error);
});
