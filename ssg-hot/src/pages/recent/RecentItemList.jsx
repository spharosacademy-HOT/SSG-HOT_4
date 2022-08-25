import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentItem from "../../components/common/widgets/itemList/recent/RecentItem";
import RecentModal from "./RecentModal";
export default function RecentItemList() {
  const [rcData, setRcData] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const [dataId, setDataId] = useState();
  const [modalData, setModalData] = useState();

  useEffect(() => {
    axios
      .get(`https://ssg-hot.herokuapp.com/api/recentlyviewedproduct`)
      .then((Response) => {
        setRcData(Response.data);
        console.log(Response.data);
      })
      .catch((Error) => console.log(Error));
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
