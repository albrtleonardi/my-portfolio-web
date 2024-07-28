import React from "react";
import {
  ImFacebook,
  ImInstagram,
  ImPinterest,
  ImLinkedin,
} from "react-icons/im";

const Social = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="#" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
