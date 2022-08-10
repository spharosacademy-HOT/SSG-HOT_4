import React from "react";
import MainMenuData from "../../datas/mainMenu.json";

export default function MainMenuTitle() {
  return (
    <div className="menuTitle">
      {MainMenuData &&
        MainMenuData.map((menu) => <p key={menu.id}>{menu.name}</p>)}
    </div>
  );
}
