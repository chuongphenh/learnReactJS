import React from 'react';

const YoutubeItem = (props) => {
    return (
        // tạo 1 component Youtobe Item
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-item__image">
          <img src={props.img} alt="" width={props.width} />
        </div>
        <div className="youtube-item__footer">
          <img src={props.avatar} alt="" className="youtube-item__avatar" />
          <div className="youtube-item__footer-info">
            <h3 className="youtube-item__author">
              {props.author || "Nếu props.author null thì sẽ hiển thị cái này"}
            </h3>
            <p className="youtube-item__title" style={{ color: "red" }}>
              Description
            </p>
          </div>
        </div>
      </div>
    );
};

export default YoutubeItem;