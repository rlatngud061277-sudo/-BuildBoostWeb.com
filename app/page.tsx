const PORTFOLIO_IMAGES = [
  {
    src: "/IMG_1199.png",
    position: "center 35%",
    scale: 1.22,
  },
  {
    src: "/IMG_1136.png",
    position: "center 36%",
    scale: 1.2,
  },
  {
    src: "/IMG_1135.png",
    position: "center 34%",
    scale: 1.2,
  },
  {
    src: "/IMG_1121.png",
    position: "center 38%",
    scale: 1.22,
  },
  {
    src: "/IMG_1111.png",
    position: "center 35%",
    scale: 1.2,
  },
  {
    src: "/IMG_1110.png",
    position: "center 36%",
    scale: 1.2,
  },
  {
    src: "/IMG_1109.png",
    position: "center 38%",
    scale: 1.22,
  },
  {
    src: "/IMG_1108.png",
    position: "center 36%",
    scale: 1.2,
  },
  {
    src: "/IMG_1107.png",
    position: "center 38%",
    scale: 1.22,
  },
  {
    src: "/IMG_1103.png",
    position: "center 36%",
    scale: 1.2,
  },
  {
    src: "/IMG_1071.png",
    position: "center 37%",
    scale: 1.2,
  },
  {
    src: "/IMG_1070.png",
    position: "center 37%",
    scale: 1.2,
  },
];

const INDUSTRIES = [
  "집수리",
  "인테리어",
  "철거",
  "타일",
  "욕실",
  "싱크볼",
  "전기·조명",
  "배관",
  "에어컨",
  "벌목",
];

const FEATURES = [
  {
    number: "01",
    title: "맞춤 홈페이지",
    desc: "시공업체에 맞는 모바일 홈페이지를 제작합니다.",
  },
  {
    number: "02",
    title: "지역 검색 페이지",
    desc: "실제 출장 지역별 페이지를 만들어 검색 기반을 구축합니다.",
  },
  {
    number: "03",
    title: "네이버 SEO",
    desc: "서치어드바이저·사이트맵·검색 수집 구조까지 세팅합니다.",
  },
  {
    number: "04",
    title: "문의 즉시 연결",
    desc: "전화·카카오톡으로 바로 상담할 수 있게 연결합니다.",
  },
];

const PACKAGE = [
  "업체 맞춤 홈페이지 제작",
  "핵심 시공 카테고리 3개",
  "서울·경기·인천 지역 페이지",
  "네이버 SEO 기본 세팅",
  "네이버 서치어드바이저 등록",
  "집수리모아 업체 등록",
  "전화·카카오톡 상담 연결",
  "사이트 유지 및 관리",
];

export default function Home() {
  const sliderImages = [
    ...PORTFOLIO_IMAGES,
    ...PORTFOLIO_IMAGES,
  ];

  return (
    <main>
      {/* HEADER */}
      <header className="siteHeader">
        <div className="container headerInner">
          <a href="#top" className="logo">
            BuildBoost<span>Web</span>
          </a>

          <nav className="desktopNav">
            <a href="#portfolio">실제사례</a>
            <a href="#service">서비스</a>
            <a href="#pricing">가격</a>
          </nav>

          <a href="#contact" className="headerCta">
            무료 상담
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="container heroGrid">
          <div className="heroContent">
            <div className="heroBadge">
              시공업체 전용 홈페이지 · 네이버 지역 검색 마케팅
            </div>

            <h1>
              홈페이지 하나로
              <br />
              <strong>지역 고객 문의까지.</strong>
            </h1>

            <p className="heroDescription">
              집수리·인테리어·철거·타일 등 시공업체를 위한 홈페이지를
              제작하고, 지역별 검색 페이지와 네이버 SEO까지 함께
              세팅합니다.
            </p>

            <div className="heroButtons">
              <a
                href="tel:01094134686"
                className="primaryButton"
              >
                전화 무료상담
              </a>

              <a
                href="https://open.kakao.com/o/sDHKtQJi"
                target="_blank"
                rel="noreferrer"
                className="kakaoButton"
              >
                카카오톡 상담
              </a>
            </div>

            <div className="heroQuickInfo">
              <div>
                <small>첫 달 시작 비용</small>
                <strong>560,000원</strong>
              </div>

              <div>
                <small>2개월차부터</small>
                <strong>월 500,000원</strong>
              </div>

              <div>
                <small>지역 검색</small>
                <strong>수도권 49개 지역</strong>
              </div>
            </div>
          </div>

          {/* REAL CASE */}
          <div className="heroProof">
            <div className="proofTop">
              <div>
                <span className="proofLive">
                  <i />
                  실제 제작·검색 사례
                </span>

                <h2>
                  말보다
                  <br />
                  실제 결과를 보여드립니다.
                </h2>
              </div>

              <span className="proofBadge">
                REAL CASE
              </span>
            </div>

            <div className="proofImages">
              <div className="proofImage proofImageMain">
                <img
                  src="/IMG_1199.png"
                  alt="실제 홈페이지 제작 사례"
                />
              </div>

              <div className="proofSide">
                <div className="proofImage">
                  <img
                    src="/IMG_1136.png"
                    alt="네이버 검색 노출 사례"
                  />
                </div>

                <div className="proofImage">
                  <img
                    src="/IMG_1135.png"
                    alt="지역 검색 노출 사례"
                  />
                </div>
              </div>
            </div>

            <div className="proofBottom">
              <span>✓ 실제 운영 홈페이지</span>
              <span>✓ 실제 네이버 검색 화면</span>
            </div>
          </div>
        </div>

        <div className="container heroIndustry">
          {INDUSTRIES.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* QUICK SERVICE */}
      <section
        id="service"
        className="quickSection"
      >
        <div className="container">
          <div className="quickHeading">
            <div>
              <span className="sectionLabel">
                WHY BUILDBOOSTWEB
              </span>

              <h2>
                예쁜 홈페이지보다
                <br />
                <strong>
                  검색되고 문의되는 구조.
                </strong>
              </h2>
            </div>

            <p>
              홈페이지 제작부터 네이버 검색 구조와
              <br />
              문의 연결까지 한 번에 구성합니다.
            </p>
          </div>

          <div className="featureGrid">
            {FEATURES.map((item) => (
              <article key={item.number}>
                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="seoBar">
            <div>
              <small>서울</small>
              <strong>25개 구</strong>
            </div>

            <div>
              <small>경기도</small>
              <strong>14개 주요 지역</strong>
            </div>

            <div>
              <small>인천</small>
              <strong>10개 군·구</strong>
            </div>

            <div className="seoExample">
              <small>
                검색 페이지 예시
              </small>

              <strong>
                강남구 집수리 · 수원 싱크볼 · 안양 철거
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="portfolioSection"
      >
        <div className="container portfolioHeading">
          <div>
            <span className="sectionLabel sectionLabelBlue">
              ACTUAL RESULTS
            </span>

            <h2>
              실제 제작 및
              <br />
              네이버 검색 노출 사례
            </h2>
          </div>

          <p>
            직접 제작·운영한 홈페이지와
            <br />
            네이버 검색 화면을 확인해보세요.
          </p>
        </div>

        <div className="sliderViewport">
          <div className="autoSlider">
            {sliderImages.map((item, index) => (
              <article
                className="portfolioSlide"
                key={`${item.src}-${index}`}
              >
                <div className="portfolioImageFrame">
                  <img
                    src={item.src}
                    alt={`BuildBoostWeb 실제 사례 ${
                      (index % PORTFOLIO_IMAGES.length) + 1
                    }`}
                    style={{
                      objectPosition: item.position,
                      transform: `scale(${item.scale})`,
                    }}
                  />
                </div>

                <div className="portfolioCardBottom">
                  <span className="liveDot" />
                  실제 제작 · 네이버 검색 사례
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container">
          <p className="portfolioNotice">
            실제 사이트 및 네이버 검색결과 화면입니다.
            검색 순위와 노출 위치는 검색 시점과 네이버 정책에 따라
            달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* PRICE */}
      <section
        id="pricing"
        className="packagePriceSection"
      >
        <div className="container">
          <div className="priceIntro">
            <div>
              <span className="sectionLabel">
                PRICE
              </span>

              <h2>
                첫 달은
                <strong> 56만원,</strong>
                <br />
                이후부터 월 50만원.
              </h2>
            </div>

            <p>
              처음 시작할 때 필요한 홈페이지 제작과
              <br />
              도메인 등록 비용이 첫 달에 포함됩니다.
            </p>
          </div>

          <div className="packagePriceGrid">
            {/* FIRST MONTH */}
            <div className="firstMonthCard">
              <div className="firstMonthHeader">
                <div>
                  <span className="priceEyebrow">
                    FIRST PAYMENT
                  </span>

                  <h3>
                    첫 결제 비용
                  </h3>
                </div>

                <span className="firstMonthBadge">
                  첫 달만
                </span>
              </div>

              <div className="firstMonthPrice">
                560,000
                <small>원</small>
              </div>

              <p className="firstMonthDescription">
                홈페이지 제작 및 초기 세팅 +
                전용 도메인 1년 등록 비용
              </p>

              <div className="firstMonthBreakdown">
                <div>
                  <span>
                    홈페이지 제작·초기 세팅
                  </span>
                  <strong>
                    530,000원
                  </strong>
                </div>

                <div>
                  <span>
                    전용 도메인 등록 1년
                  </span>
                  <strong>
                    30,000원
                  </strong>
                </div>
              </div>

              <div className="firstMonthTotal">
                <span>
                  첫 결제 합계
                </span>

                <strong>
                  560,000원
                </strong>
              </div>
            </div>

            {/* MONTHLY */}
            <div className="monthlyCard">
              <span className="monthlyEyebrow">
                FROM MONTH 2
              </span>

              <h3>
                2개월차부터
              </h3>

              <div className="monthlyPrice">
                월 500,000
                <small>원</small>
              </div>

              <p>
                홈페이지를 계속 운영하면서
                네이버 검색 관리와 사이트 유지관리를 진행합니다.
              </p>

              <div className="monthlyFeatures">
                <span>
                  ✓ 사이트 유지관리
                </span>

                <span>
                  ✓ 네이버 검색 노출 관리
                </span>

                <span>
                  ✓ 지역 페이지 관리
                </span>

                <span>
                  ✓ 상담 연결 유지
                </span>
              </div>

              <a
                href="#contact"
                className="priceButton"
              >
                무료 상담 신청 →
              </a>
            </div>
          </div>

          {/* PACKAGE INCLUDED */}
          <div className="includedBox">
            <div className="includedTitle">
              <div>
                <span className="sectionLabel">
                  INCLUDED
                </span>

                <h3>
                  이용 요금에 포함되는 항목
                </h3>
              </div>

              <span>
                최소 이용기간 3개월
              </span>
            </div>

            <div className="packageItems">
              {PACKAGE.map((item) => (
                <div key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="pricingNotice">
              <strong>
                결제 예시
              </strong>

              <span>
                1개월차 560,000원
              </span>

              <span>
                2개월차 500,000원
              </span>

              <span>
                3개월차 500,000원
              </span>

              <span className="totalReference">
                3개월 이용 시 총 1,560,000원
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="ctaSection"
      >
        <div className="ctaGlow" />

        <div className="container ctaGrid">
          <div>
            <span className="sectionLabel sectionLabelBlue">
              START NOW
            </span>

            <h2>
              시공은 사장님이,
              <br />
              <strong>
                온라인 영업은 BuildBoostWeb.
              </strong>
            </h2>

            <p>
              업종과 출장 지역만 알려주세요.
              업체에 맞는 홈페이지 구축 방향부터 상담해드립니다.
            </p>
          </div>

          <div className="ctaContact">
            <a
              href="tel:01094134686"
              className="ctaCall"
            >
              <span>
                전화 상담
              </span>

              <strong>
                010-9413-4686
              </strong>
            </a>

            <a
              href="https://open.kakao.com/o/sDHKtQJi"
              target="_blank"
              rel="noreferrer"
              className="ctaKakao"
            >
              <span>
                카카오톡
              </span>

              <strong>
                채팅 상담하기 →
              </strong>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div className="footerLogo">
              BuildBoost<span>Web</span>
            </div>

            <p>
              시공업체 전용 홈페이지 제작 &
              네이버 지역 검색 마케팅
            </p>
          </div>

          <div>
            www.buildboostweb.com
            <br />
            © 2026 BuildBoostWeb
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED */}
      <div className="mobileFixedBar">
        <a
          href="tel:01094134686"
          className="mobileCall"
        >
          전화 상담
        </a>

        <a
          href="https://open.kakao.com/o/sDHKtQJi"
          target="_blank"
          rel="noreferrer"
          className="mobileKakao"
        >
          카카오톡 상담
        </a>
      </div>
    </main>
  );
}
