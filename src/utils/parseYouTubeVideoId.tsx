const parseYouTubeVideoId = (youtubeLink: string) => {
  // youtube 링크에서 비디오 ID를 추출하는 함수
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([^\s&]+)/;

  const match = youtubeLink.match(regex);
  if (match && match[1].length === 11) {
    return console.log(match[1]);
  } else {
    console.log('Invalid YouTube Link');
  }
};

export default parseYouTubeVideoId;
