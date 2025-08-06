import Styles from "./Styles.module.css";
import { HeartIcon, SearchIcon } from "../../Icons/HeadersIcon";
import { headerList } from "../../data/Index";
import MainLogo from "../../Icons/MainLogo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.inner_container}>
        <Link to={"/"}>
          <MainLogo />
        </Link>
        <ul className={Styles.middle_container}>
          {headerList.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className={Styles.search_container}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </li>
        </ul>
        <div className={Styles.icon_box_container}>
          {[...Array(3)].map((_, index) => (
            <span key={index} className={Styles.icon_box}>
              <HeartIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
