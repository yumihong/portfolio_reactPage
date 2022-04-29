import React, { useState } from 'react';
import styles from './common.module.css';
import myPhoto from './myPhoto.jpg';
import "./font.css";
import 'antd/dist/antd.css';
import { CalendarOutlined, BankOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

const Portfolio = () => {
    return (
        <>
            <div className={styles.section1}>
                <img className={styles.myPhoto} src={myPhoto} />
                <div className={styles.intro}>
                    <h1>안녕하세요. <br/>밝고 꼼꼼한 성격을 가진<br />프론트엔드 개발자 홍유미입니다. <br /></h1>
                </div>
            </div>

            <div className={styles.section2}>
                <div>
                    <h1>기본정보</h1>
                    <hr/>
                </div>
                <div>
                    <ul>
                        <li>
                            <CalendarOutlined className={styles.fs30}/>
                            <p>생년월일 : 96년 01월 11일</p>
                        </li>
                        <li>
                            <BankOutlined className={styles.fs30}/>
                            <p>학력 : 건양대학교(의료IT공학과) 졸업</p>
                        </li>
                        <li>
                            <PhoneOutlined className={styles.fs30}/>
                            <p>연락처 : 010-2173-1864</p>
                        </li>
                        <li>
                            <MailOutlined className={styles.fs30}/>
                            <p>이메일 : ghddid13@naver.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.section3}>
                <div>
                    <h1>경력</h1>
                    <hr />
                </div>
                <div className={styles.cardWrapper}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}> {/*gutter={}은 16+8n의 정수 24를 갖고있는 row의 수를 바꿀수 있음 */}
                            <Col span={12}> {/*span={}은 24분할중 얼마나 차지할지*/}
                                <Card title="위지언" bordered={false}>
                                    2017.12.26 ~ 2019.01.24 (사원)
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="에스큐아이소프트" bordered={false}>
                                    2019.05.02 ~ 2022.02.28 (선임)
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className={styles.section4}>
                <div>
                    <h1>프로젝트</h1>
                    <hr />
                </div>
                <div className={styles.projectWrap}>
                    <div>
                        <h2>[ 저에너지건축물 통합지원시스템 개발] </h2>
                        <ul>
                            <li>에너지 자가진단 퍼블리싱 및 기능개발</li>
                            <li>컨텐츠 페이지 개발</li>
                            <li>연계시스템인 계측기반 상세 에너지정보 시스템 퍼블리싱</li>
                        </ul><br/>
                        <h3>기간 : 2019.05.08 ~ 2020.06.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                    <div>
                        <h2>[ 공공건축물 에너지 소비량 분석 시스템 ]</h2>
                        <ul>
                            <li>알림마당(게시판 형태), 건축물등록, 에너지관리 메뉴 퍼블리싱 및 기능개발</li>
                            <li>컨텐츠 페이지 개발</li>
                        </ul><br/>
                        <h3>기간 : 2020.05.07 ~ 2020.07.10</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                    <div>
                        <h2>[ 2020년녹색건축인증통합관리시스템개발 ]</h2>
                        <ul>
                            <li>
                                녹색건축물 인증절차 페이지( 운영기관, 인증기관, 신청자 ) 퍼블리싱 및 기능개발 <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신청자 - 신청서 작성<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;운영기관 - 신청서 접수 및 검토<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인증기관 - 심의 절차 진행 및 결과 등록<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;운영기관 - 심의 완료된 해당 건축물 관리 / 회원 관리
                            </li>
                            <li>참여마당(게시판 형태) 퍼블리싱 및 기능개발</li>
                            <li>컨텐츠 페이지 개발</li>
                            <li>고객 문의사항 대응 및 유지보수</li>
                        </ul><br/>
                        <h3>기간 : 2020.03.02 ~ 2020.11.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                    <div>
                        <h2>[ 녹색건축물 인증시스템 고도화 ]</h2>
                        <ul>
                            <li>
                                관리자 전용 메뉴 퍼블리싱 및 기능개발<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 녹색건축물 회원관리(일반사용자, 10개의 인증기관에 속한 심사전문인력 관리)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 인증건축물 현황관리<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 질의응답 게시판
                            </li>
                            <li>녹색건축자료실(게시판 형태) 퍼블리싱 및 기능개발</li>
                            <li>고객 문의사항 대응 및 유지보수</li>
                        </ul><br/>
                        <h3>기간 : 2021.03.01 ~ 2021.11.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;