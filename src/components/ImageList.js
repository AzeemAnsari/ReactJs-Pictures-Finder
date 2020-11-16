import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const imgs = props.images.map((img) => {
    return (
      <div key={img.id} className="col-12 col-md-4">
        <img
          src={img.urls.regular}
          alt={img.description}
          className="img-fluid img-thumbnail rounded"
        />
        <div className="mt-2 mb-3 text-center">
          <a
            href={img.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link btn-sm text-uppercase"
          >
            Download
          </a>
        </div>
      </div>
    );
  });
  return <div className="row mt-4">{imgs}</div>;
};

export default ImageList;
