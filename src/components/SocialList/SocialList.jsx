import { List, SocialSvg } from "./SocialList.styled";
import sprite from "../../images/sprite.svg";

const SocialList = ({ socialSvgColor }) => {
  return (
    <List>
      <li>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <SocialSvg width={24} height={24} stroke={socialSvgColor}>
            <use xlinkHref={`${sprite}#icon-facebook`}></use>
          </SocialSvg>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <SocialSvg width={24} height={24} stroke={socialSvgColor}>
            <use xlinkHref={`${sprite}#icon-instagram`}></use>
          </SocialSvg>
        </a>
      </li>
    </List>
  );
};

export default SocialList;
