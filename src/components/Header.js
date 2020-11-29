import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Sidemenu from "./Sidemenu";
import Clicksearch from "./Clicksearch";

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="searchbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
        <div className="search__input">
          <SearchIcon />
          <input placeholder="ค้นหาบน Facebook:" onClick={toggleSearch} />
        </div>
        <>
        {search ? (<Clicksearch/>) : (null) }
        </>
        
      </div>

      <div className="icon__navi">
        <div className="h__home">
          <HomeIcon />
          <span className="homespan">หน้าหลัก</span>
        </div>

        <div className="h__watch">
          <span className="watchspan">watch</span>
          <OndemandVideoOutlinedIcon />
        </div>

        <div className="h__market">
          <span className="marketspan">marketplace</span>
          <LocalGroceryStoreOutlinedIcon />
        </div>

        <div className="h__group">
          <span className="groupspan">กลุ่ม</span>
          <PeopleAltOutlinedIcon />
        </div>

        <div className="h__game">
          <span className="gamespan">การเล่นเกม</span>
          <SportsEsportsOutlinedIcon />
        </div>
      </div>

      <div className="user__setting">
        <div className="username">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h4>Eunbi</h4>
        </div>
        <div className="plus">
          <AiOutlinePlus />
          <span className="plusspan">สร้าง</span>
        </div>
        <div className="mess">
          <RiMessengerFill />
          <span className="messspanee">Messenger</span>
        </div>
        <div className="noti">
          <NotificationsIcon />
          <span className="notispan">การแจ้งเตือน</span>
        </div>
        <div onClick={toggle} className="dropdown">
          <ArrowDropDownOutlinedIcon />

          {open ? (
            <div className="ssmenu">
              <Sidemenu />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
