import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blanks">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blanks">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blanks">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blanks">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube} target="_blanks">
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch} target="_blanks">
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
