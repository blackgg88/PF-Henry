import React from "react";


const Detail: React.FC<{}> = () => {
  return (
    <div className="detail-contain">
      <div className="info-pincipal-detail">
        <div className="land-images">
          <div className="secondary-images"></div>
          <div className="secondary-images"></div>
          <div className="secondary-images"></div>
          <div className="secondary-images"></div>
        </div>
        <div className="imagen-principal-detail">
          <div className="principal-image"></div>
        </div>
        <div className="principal-details">
          <div className="character-details"> principal details</div>
          <div className="transaction-details">transaction-details</div>
        </div>
      </div>
      <div className="section-description">
        <div className="detail-detail"></div>
      </div>
      <div className="comments-section">
        <div className="comments-box">
        <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="50" data-numposts="5"></div>
        comments
        </div>
        <div className="other-box">other-box</div>
      </div>
    </div>
  );
};

export default Detail;