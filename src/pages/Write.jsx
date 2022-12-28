import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input type="file" id="file" name="" style={{display: "none"}}/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="catList">
            <input type="radio" id="art" value="art" name="cat" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="catList">
            <input type="radio" id="science" value="science" name="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="catList">
            <input type="radio" id="technology" value="technology" name="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="catList">
            <input type="radio" id="cinema" value="cinema" name="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="catList">
            <input type="radio" id="design" value="design" name="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="catList">
            <input type="radio" id="food" value="food" name="food" />
            <label htmlFor="food">Food</label>
          </div>
         

        </div>
      </div>
    </div>
  )
}

export default Write
