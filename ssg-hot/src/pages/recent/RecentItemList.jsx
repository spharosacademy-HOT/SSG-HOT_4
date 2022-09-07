import React, { useEffect, useState } from "react";
import RecentItem from "../../components/common/widgets/itemList/recent/RecentItem";
import { getRecent, getRecentSearch } from "../../store/apis/recent";
import RecentModal from "./RecentModal";
import RecentSearchItem from "./RecentSearchItem";
export default function RecentItemList({ isChecked }) {
  const [rcData, setRcData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [dataId, setDataId] = useState(0);
  const [modalData, setModalData] = useState(null);
  const [rcSearchData, setRcSearchData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getRecent()
        .then((res) => {
          setRcData(res.views);
          // console.log(res, "최근본 데이터 가져옴");
        })
        .catch((err) => {
          console.log(err);
        });
      getRecentSearch().then((res) => {
        // console.log(res.data, "최근검색어 겟");
        setRcSearchData(res.data);
      });
    }
  }, []);

  return (
    <>
      <RecentModal
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        modalData={modalData}
      />

      <div className="recentItem">
        {isChecked && rcSearchData.length > 0 ? (
          <div>
            {rcSearchData.map((data) => (
              <RecentSearchItem
                key={data.searchKeywordId}
                id={data.searchKeywordId}
                keyword={data.searchKeyword}
                setRcSearchData={setRcSearchData}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {rcData.length > 0 ? (
          <div>
            <ul>
              {rcData.map((data) => (
                <RecentItem
                  key={data.id}
                  item={data}
                  isTrue={isTrue}
                  setIsTrue={setIsTrue}
                  dataId={dataId}
                  setDataId={setDataId}
                  setModalData={setModalData}
                  setRcData={setRcData}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="recentNoItem">
            <p>최근 본 쇼핑정보가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
