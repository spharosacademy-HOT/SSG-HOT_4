import React from "react";
import ItemButton from "./ItemButton";
import ItemDesc from "./ItemDesc";
import ItemImg from "./ItemImg";
import recentDatas from "../../../../../datas/js/recentDatas";
export default function RecentItem() {
  return (
    <div>
      <ul>
        {recentDatas &&
          recentDatas.map((item) => (
            <li key={item.id} className="recentList">
              <div className="recentDesc">
                <a>
                  <ItemDesc
                    name={item.name}
                    info={item.info}
                    price={item.price}
                  />
                  <ItemImg imgUrl={item.imgUrl} />
                </a>
              </div>
              <ItemButton />
            </li>
          ))}
      </ul>
    </div>
  );
}
