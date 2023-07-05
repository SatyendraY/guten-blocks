import React from 'react';
import ffmpeg from 'ffmpeg.js';

class MP4toPNGConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConverting: false,
      progress: 0,
      outputFiles: [],
    };
  }
  convertVideo = async (inputFile) => {
    this.setState({ isConverting: true });
    const ffmpegInstance = await ffmpeg.createFFmpeg({ log: true });
    await ffmpegInstance.load();
    await ffmpegInstance.write('input.mp4', inputFile);
    await ffmpegInstance.run('-vf', 'scale=640:-1', '-r', '10', 'output-%03d.png');
    const files = await ffmpegInstance.readFiles('.');
    const outputFiles = Object.keys(files).filter((filename) => filename.startsWith('output-'));
    this.setState({ isConverting: false, outputFiles });
  }

  onInputChange = (event) => {
    const inputFile = event.target.files[0];
    if (inputFile) {
      this.convertVideo(inputFile);
    }
  }

  render() {
    const { isConverting, progress, outputFiles } = this.state;

    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.onInputChange} />
        {isConverting && (
          <div>
            Converting...
            <progress value={progress} max={100} />
          </div>
        )}
        {outputFiles.length > 0 && (
          <div>
            Converted files:
            {outputFiles.map((filename) => (
              <img key={filename} src={URL.createObjectURL(files[filename].data)} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MP4toPNGConverter;