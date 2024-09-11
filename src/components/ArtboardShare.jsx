import React from "react";
import Icon from "./Icons";
import User1 from "../assets/images/user1.png";
import User2 from "../assets/images/user2.png";
import User3 from "../assets/images/user3.png";

function ArtboardShare({ close }) {
  return (
    <>
      <div
        className="artboard-popup-content "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="artboard-popup-share">
          <div className="artboard-popup-share__heading">
            <p>Share</p>
            <Icon icon="artboard-closebtn" onClick={close} />
          </div>
          <div className="artboard-popup-share__subheading">
            <p>Share with your team mates</p>
          </div>
        </div>
        <hr class="dotted-line" />

        <div className="artboard-popup-comments">
          <div className="artboard-popup-comments__email">
            <input type="text" placeholder=" Email, comma separated" />
          </div>
          <div className="artboard-popup-comments__remark">
            <input type="text" placeholder=" Enter your remarks..." />
          </div>
          <div className="artboard-popup-comments__users">
            <p>Recents users from your organisation</p>
            <div className="artboard-popup-comments__users-images">
              <img src={User1} alt="user1" />

              <img src={User2} alt="user2" />
              <img src={User3} alt="user3" />
            </div>
          </div>
        </div>

        <div className="artboard-popup-linkShare">
          <div className="artboard-popup-linkShare__link">
            <div className="link">
              <p>https://www.youtube.com/watch?v=vvkqaQzKZiQ</p>
            </div>

            <Icon icon="copy-icon" className="artboard-copy-icon" />
          </div>

          <div className="artboard-popup-linkShare__share">
            <button>Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtboardShare;
