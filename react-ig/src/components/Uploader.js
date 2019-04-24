import React, { Component } from 'react';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleDrop(files) {
    const fileList = this.state.files;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }
    this.setState({ files: fileList });
  }

  render() {
    const { files } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Create post</p>
        <div className="form-group">
          <DragAndDrop handleDrop={this.handleDrop}>
            <div
              style={{
                height: 200,
                width: 300,
                border: '1px solid lightgray',
              }}
            >
              {Object.keys(files).map(file => (
                <div key={file.name}>{file.name}</div>
              ))}
            </div>
          </DragAndDrop>
        </div>
        <label htmlFor="text">Example textarea</label>
        <textarea className="form-control" name="text" id="text" rows="3" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default connect()(Uploader);
