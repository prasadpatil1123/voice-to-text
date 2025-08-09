import React from 'react';
import './CenteredBox.css';

function CenteredBox() {
  return (
    <div className="outer-box">
      <div className="inner-box">

        <div className="button-group">
          <button>Record</button>
          {/* <button>Save to Text</button> */}
          {/* <button>Copy to Clipboard</button> */}
          <button>Upload File</button>
        </div>

        <div className="text-box">Your text will appear here...</div>
        <div className="button-group">
          {/* <button>Record</button> */}
          <button>Save to Text</button>
          <button>Copy to Clipboard</button>
          {/* <button>Upload File</button> */}
        </div>
      </div>
    </div>
  );
}

export default CenteredBox;
