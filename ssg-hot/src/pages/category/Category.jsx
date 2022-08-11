import React from "react";
import ThemeRecommend from "./ThemeRecommend";
// import styles from './Category.module.css'
// import './Category.module.css'
import "../../styles/styles.css";
import CategoryGroup from "./CategoryGroup";

function Category() {
  return (
    <div>
      {/* 카테고리 */}
      <div className="category">
        {/* 카테고리 하나하나 */}
        <ul className="category-align">
          <CategoryGroup />
        </ul>
      </div>
      {/* 테마추천 */}
      <div>
        <h3>테마추천</h3>

        <ul className="theme-recommend">
          <li>
            <ThemeRecommend />
          </li>
          <li>
            <ThemeRecommend />
          </li>
          <li>
            <ThemeRecommend />
          </li>
          <li>
            <ThemeRecommend />
          </li>
        </ul>
      </div>
      {/* SSG 서비스 추천 */}
      <div>
        <h3>SSG 서비스 추천</h3>
        <div className="category-ssg-service">
          <ul>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015414495676999174799_796.png&w=150&h=150&edit=c&t=41d0e0fc92b622800080308be058134b661bcf29"
                  alt=""
                />
                <p>해피라운지</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015420343699151226025_107.png&w=150&h=150&edit=c&t=a4f90bfd374c4c1260953082c04ed2d9559c069b"
                  alt=""
                />
                <p>선물하기</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015422256402610888261_65.png&w=150&h=150&edit=c&t=50091b21722893b184dc901fd37e62b496e0e7d0"
                  alt=""
                />
                <p>공식브랜드관</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202206/2022062117425937341839397183_525.png&w=150&h=150&edit=c&t=23310b33bc2774f9da90f014e0e1c475f5a69786"
                  alt=""
                />
                <p>백화점</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202206/2022060914261030107293263729_550.png&w=150&h=150&edit=c&t=fd74f1e722626fe334320460e3d783e9dd7025ee"
                  alt=""
                />
                <p>이벤트</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015425942531544410254_839.png&w=150&h=150&edit=c&t=7ee3f94c2ad8f2d6183d69cfcf579994e36b9c35"
                  alt=""
                />
                <p>기획전</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015430898413736468373_392.png&w=150&h=150&edit=c&t=bbdff5c77f147265c5ef51a43fd8ed2264b3fe50"
                  alt=""
                />
                <p>랭킹</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015431965926494480749_140.png&w=150&h=150&edit=c&t=eb673a6d7d254a7f7a3038c6e2a90ced5708a638"
                  alt=""
                />
                <p>신상품</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202205/2022050209413928999967471107_687.png&w=150&h=150&edit=c&t=b828f4df5f1b533e36d03d1d4753055be0ae17c4"
                  alt=""
                />
                <p>FOR YOU</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202106/2021063015433874539700721080_714.png&w=150&h=150&edit=c&t=bdab871e1dec4644a230903dc3a44f31cecfe2ef"
                  alt=""
                />
                <p>매거진</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="category-footer">
        <div>
          <a href="/">
            <span>고객센터 |</span>
          </a>
          <a href="/">
            <span>제안해봐쓱 |</span>
          </a>
          <a href="/">
            <span>공지사항 |</span>
          </a>
          <a href="/">
            <span>입점상담 |</span>
          </a>
          <a href="/">
            <span>로그아웃</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Category;
