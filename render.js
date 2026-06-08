const Shotstack = require('shotstack-sdk');

const defaultClient = Shotstack.ApiClient.instance;
const DeveloperKey = defaultClient.authentications['DeveloperKey'];
DeveloperKey.apiKey = "Ii71IYyuS2iVgxrZZqbzGq4Z1jGWnYzpwf4f1WBI";
defaultClient.basePath = "https://api.shotstack.io/edit/stage";
const api = new Shotstack.EditApi();

const videoAsset = new Shotstack.VideoAsset();
videoAsset.setSrc('https://filesamples.com/samples/video/mp4/sample_640x360.mp4');

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
    const renderId = data.response.id;
    console.log("영상 제작 요청 성공 ID:", renderId);
    console.log("Shotstack 내 렌더링에서 이 ID로 검색:", renderId);
}, (error) => {
    console.error("에러 발생 확인:", error);
});



