import React, { useEffect, useState } from "react";
import RecentItem from "../../components/common/widgets/itemList/recent/RecentItem";
import { getRecent } from "../../store/apis/recent";
import RecentModal from "./RecentModal";
export default function RecentItemList() {
  const [rcData, setRcData] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const [dataId, setDataId] = useState();
  const [modalData, setModalData] = useState();

  useEffect(() => {
    getRecent()
      .then((res) => {
        setRcData(res.content);
        console.log(res, "최근본 데이터 가져옴");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <RecentModal
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        modalData={modalData}
      />
      <div className="recentItem">
        {rcData ? (
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
