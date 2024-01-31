import '../styles/gallery.scss';

const Gallery = () => {

  const imageNames = [];
  for (let i = 0; i < 7; i++) {
    const image = `gallery/gallery_image (${i + 1}).jpg`
    imageNames.push(image)
  }

  const videoName = [];
  for (let i = 0; i < 2; i++) {
    const video = `gallery_video/video (${i + 1}).mp4`
    videoName.push(video)
  }

  return (
    <div className="gallery">

      {
        videoName.map((video, idx) => (
          <video key={idx} controls loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))
      }
      {
        imageNames.map((imageName, index) => (
          <img
            key={index}
            src={imageName}
            alt={`Image ${index + 1}`}
          />
        ))
      }


    </div>
  );
};

export default Gallery;
