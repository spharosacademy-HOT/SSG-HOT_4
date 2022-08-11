import React from 'react';
import { Link } from 'react-router-dom';

function CategoryGroup() {

    return ( 
        <>
            {/* {
                cateDatas && cateDatas.map(item => (
                    <div key={item.id}>
                        <CategoryItem isTrue={isTrue} setIsTrue={setIsTrue} item = {item}/>
                    </div>
                )).slice(0,5)
            }
            {
                cateDatas && cateDatas.map(item => (
                    <CateogoryViewer isTrue={isTrue} item={item}/>
                ))
            } */}
            <div class="clnb_sub_cate" id="mcom_clnb_cate">
                <ul>
                    <li class="clnb_renew_item ">
                        <a href="/" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|패션의류">
                            {/* <span class="thmb ssg_lazy" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e');"></span> */}
                            <img src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e" alt="" />
                            <em>패션의류</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    {/* axios */}
                                    <li class=""><Link to={'/productList'}>상품 전체보기</Link></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201547" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품/수입의류">명품/수입의류</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189224" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|여성브랜드패션">여성브랜드패션</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189308" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|여성트렌드패션">여성트렌드패션</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189392" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|남성패션">남성패션</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189500" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|캐주얼/유니섹스">캐주얼/유니섹스</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189453" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|언더웨어">언더웨어</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000190706" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|테마_선택|디자이너샵">디자이너샵</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품/잡화/<br/>쥬얼리">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917411353521969696196_273.jpg&w=150&h=150&edit=c&t=48614e250da988610b4e7935868e8f1290e7c231')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917411353521969696196_273.jpg&w=150&h=150&edit=c&t=48614e250da988610b4e7935868e8f1290e7c231');"></span> */}
                            <em>명품/잡화/<br/>쥬얼리</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015803.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200799" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가방/지갑">가방/지갑</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200800" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|모자/장갑/ACC">모자/장갑/ACC</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200801" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|슈즈/운동화">슈즈/운동화</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200802" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|시계/쥬얼리">시계/쥬얼리</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200803" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품잡화/아이웨어">명품잡화/아이웨어</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|뷰티">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916174616090674372167_34.jpg&w=150&h=150&edit=c&t=08dd324b76e992bbf3cf69fee132454ef1ae2b2f')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916174616090674372167_34.jpg&w=150&h=150&edit=c&t=08dd324b76e992bbf3cf69fee132454ef1ae2b2f');"></span> */}
                            <em>뷰티</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015805.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193742" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스킨케어">스킨케어</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193746" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|메이크업">메이크업</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193744" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|헤어케어">헤어케어</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193745" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|바디케어">바디케어</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193743" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|향수">향수</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193747" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|미용기기/소품">미용기기/소품</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유아동">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916180739844304103530_576.jpg&w=150&h=150&edit=c&t=24e30ad244143647858f78afb39731d96b5256bc')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916180739844304103530_576.jpg&w=150&h=150&edit=c&t=24e30ad244143647858f78afb39731d96b5256bc');"></span> */}
                            <em>유아동</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015806.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163567" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|기저귀/물티슈/분유/유아식">기저귀/물티슈/분유/유아식</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163568" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|출산/육아용품">출산/육아용품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163569" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유모차/카시트/실내용품">유모차/카시트/실내용품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163570" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|완구/교구">완구/교구</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163571" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|신생아/유아패션">신생아/유아패션</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163572" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|아동/주니어패션">아동/주니어패션</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163573" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유아동신발/잡화">유아동신발/잡화</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠/레저">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916183081222145720314_367.jpg&w=150&h=150&edit=c&t=8791b688cc54899753a9adb2f82dc585c52a8ae0')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916183081222145720314_367.jpg&w=150&h=150&edit=c&t=8791b688cc54899753a9adb2f82dc585c52a8ae0');"></span> */}
                            <em>스포츠/레저</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015807.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205354" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠웨어/용품">스포츠웨어/용품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205355" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|등산/아웃도어">등산/아웃도어</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205356" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|캠핑/낚시용품">캠핑/낚시용품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205357" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|골프웨어/용품/클럽">골프웨어/용품/클럽</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205358" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|자전거/스케이트/롤러">자전거/스케이트/롤러</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205359" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|헬스/요가/격투기">헬스/요가/격투기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205360" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|구기/라켓스포츠">구기/라켓스포츠</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205361" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|수영/수상레저">수영/수상레저</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205362" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스키/보드">스키/보드</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가구/인테리어">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917404751786590472759_591.jpg&w=150&h=150&edit=c&t=3a7d4a334ee9337474b984a6ea9867fd36181d57')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917404751786590472759_591.jpg&w=150&h=150&edit=c&t=3a7d4a334ee9337474b984a6ea9867fd36181d57');"></span> */}
                            <em>가구/인테리어</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015808.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177367" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|침구/커튼/카페트">침구/커튼/카페트</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177368" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|침실/수납가구">침실/수납가구</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177369" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|거실/주방가구">거실/주방가구</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177370" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|서재/학생아동가구">서재/학생아동가구</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177371" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|조명/인테리어소품">조명/인테리어소품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177372" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|DIY/시공">DIY/시공</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|주방/생활/건강">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051315282642621637316163_499.jpg&w=150&h=150&edit=c&t=74b16620d21c0412d55cec8083a145421623a236')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051315282642621637316163_499.jpg&w=150&h=150&edit=c&t=74b16620d21c0412d55cec8083a145421623a236');"></span> */}
                                <em>주방/생활/건강</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015809.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178523" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|주방용품">주방용품</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178524" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|청소/욕실/공구">청소/욕실/공구</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178525" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|생활/건강">생활/건강</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021091312493245557072867707_591.jpg&w=150&h=150&edit=c&t=b1ff290c681d07b086d3b13334f222294befce91')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021091312493245557072867707_591.jpg&w=150&h=150&edit=c&t=b1ff290c681d07b086d3b13334f222294befce91');"></span> */}
                                <em>반려동물</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016143.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185638" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|강아지사료/간식">강아지사료/간식</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185639" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|고양이사료/간식">고양이사료/간식</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185640" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물용품">반려동물용품</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185641" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물서비스">반려동물서비스</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185642" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|소동물/곤충/조류">소동물/곤충/조류</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185643" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|관상어용품">관상어용품</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|식품">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916185554662649910364_729.jpg&w=150&h=150&edit=c&t=437f0d41210a78741f89ba827407c26b2e8798ce')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916185554662649910364_729.jpg&w=150&h=150&edit=c&t=437f0d41210a78741f89ba827407c26b2e8798ce');"></span> */}
                                <em>식품</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015810.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139021" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|과일/채소/쌀">과일/채소/쌀</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139022" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|정육/계란류">정육/계란류</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139023" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|수산물/건해산">수산물/건해산</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139864" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반찬/간편식/조미료">반찬/간편식/조미료</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139025" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유제품/과자/빵/음료/주류">유제품/과자/빵/음료/주류</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139026" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|홍삼/건강식품">홍삼/건강식품</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가전">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916221442699359630445_591.jpg&w=150&h=150&edit=c&t=5c5d93292562b819f3509eb400fbd9d49d86ad6e')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916221442699359630445_591.jpg&w=150&h=150&edit=c&t=5c5d93292562b819f3509eb400fbd9d49d86ad6e');"></span> */}
                                <em>가전</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015812.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209198" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|에어컨/계절가전">에어컨/계절가전</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209200" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|냉장고/주방가전">냉장고/주방가전</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209201" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|세탁기/생활가전">세탁기/생활가전</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209202" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|영상/음향가전">영상/음향가전</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|디지털/렌탈/<br/>컴퓨터/차량용품">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916192109082788875378_90.jpg&w=150&h=150&edit=c&t=b83371edfebf91bca55682016e958688bc59cb78')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916192109082788875378_90.jpg&w=150&h=150&edit=c&t=b83371edfebf91bca55682016e958688bc59cb78');"></span> */}
                                <em>디지털/렌탈/<br/>컴퓨터/차량용품</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015811.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209194" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|컴퓨터/노트북/태블릿">컴퓨터/노트북/태블릿</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209195" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|게임/타이틀">게임/타이틀</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209196" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|PC주변기기/저장장치">PC주변기기/저장장치</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209197" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|카메라/캠코더">카메라/캠코더</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209199" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|내비/블랙박스/차량용품">내비/블랙박스/차량용품</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209203" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|휴대폰/스마트기기">휴대폰/스마트기기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000203402" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|렌탈">렌탈</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                            <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|e쿠폰/서비스/<br/>여행">
                                {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916223916760668536166_464.jpg&w=150&h=150&edit=c&t=82ec94eba3bd7b859529cacae02f3b1287f780b5')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916223916760668536166_464.jpg&w=150&h=150&edit=c&t=82ec94eba3bd7b859529cacae02f3b1287f780b5');"></span> */}
                                <em>e쿠폰/서비스/<br/>여행</em>
                            </a>
                            <div class="clnb_lst_cate">
                                    <div class="clnb_lst">
                                        <ul class="cate_view">
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015813.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211373" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|서비스">서비스</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3000001210" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|여행/호텔/레저">여행/호텔/레저</a></li>
                                            <li class=""><a href="https://m-flight.ssg.com/air/agent/b2c/AIR/MBL/AIRMBLTRP0100100010.k1?KSESID=air:b2c:SELK138UL:SELK138UL::00" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|테마_선택|항공권 가격비교">항공권 가격비교</a></li>
                                            <li class=""><a href="https://m-triip.ssg.com/hotel/main.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|테마_선택|호텔 가격비교">호텔 가격비교</a></li>
                                            <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211386" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|e쿠폰/상품권">e쿠폰/상품권</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </li>
                    <li class="clnb_renew_item ">
                        <a href="javascript:;" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|문구/도서/취미">
                            {/* <span class="thmb ssg_lazy" data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051316532756213053205305_963.jpg&w=150&h=150&edit=c&t=292c99e60f69fb8779ef1e40fe7096612bcb0165')" data-ll-status="loading" style="background-image:url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051316532756213053205305_963.jpg&w=150&h=150&edit=c&t=292c99e60f69fb8779ef1e40fe7096612bcb0165');"></span> */}
                            <em>문구/도서/취미</em>
                        </a>
                        <div class="clnb_lst_cate">
                            <div class="clnb_lst">
                                <ul class="cate_view">
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015814.ssg" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기">상품 전체보기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000210596" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|도서">도서</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211273" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|문구/미술/사무용품">문구/미술/사무용품</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3500000958" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|악기">악기</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000083312" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|음반/DVD">음반/DVD</a></li>
                                    <li class=""><a href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018405" class="clickable" data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|취미/키덜트">취미/키덜트</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default CategoryGroup;