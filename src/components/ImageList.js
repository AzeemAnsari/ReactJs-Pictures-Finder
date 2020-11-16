import React from 'react';
import { Download } from 'react-bootstrap-icons';
import { DownloadBtn } from './Styles';

const ImageList = ({ urls, alt_description, links }) => {
  return (
    <div className="row">
      <div className="col-md-12 px-1 position-relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src={urls.regular}
            alt={alt_description}
            className="img-fluid img-thumbnail rounded"
          />
        </div>
        <DownloadBtn
          href={links.download}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-light"
          title="Download"
        >
          <Download />
        </DownloadBtn>
      </div>
    </div>
  );
};

export default ImageList;
