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

const SERVICES = [
  {
    icon: "◫",
    title: "시공업 맞춤 홈페이지",
    desc: "업체 소개만 하는 홈페이지가 아니라 실제 상담과 견적 문의로 이어지도록 구성합니다.",
  },
  {
    icon: "⌖",
    title: "지역별 검색 페이지",
    desc: "서울·경기·인천 등 실제 출장 지역을 기준으로 지역별 전용 페이지를 구성합니다.",
  },
  {
    icon: "⌕",
    title: "네이버·구글 SEO",
    desc: "검색엔진이 업체와 서비스, 영업지역을 이해하기 쉽도록 기본 검색 구조를 세팅합니다.",
  },
  {
    icon: "☎",
    title: "문의 즉시 연결",
    desc: "고객이 검색 후 바로 전화 또는 카카오톡 상담으로 넘어갈 수 있도록 동선을 만듭니다.",
  },
];

const INDUSTRIES = [
  "집수리",
  "인테리어",
  "철거",
  "타일",
  "욕실",
  "싱크볼",
  "주방시공",
  "전기·조명",
  "배관",
  "에어컨",
  "벌목",
  "기타 전문시공",
];

const PACKAGE = [
  {
    title: "전문 홈페이지 제작",
    desc: "업체명·전화번호·서비스·시공사례·상담 버튼까지 맞춤 제작",
  },
  {
    title: "핵심 시공 카테고리 3개",
    desc: "업체가 집중적으로 홍보하고 싶은 핵심 서비스 중심 구성",
  },
  {
    title: "지역별 페이지 구축",
    desc: "서울·경기·인천 등 실제 영업 지역에 맞춘 검색 페이지 제작",
  },
  {
    title: "검색엔진 기본 SEO",
    desc: "메타데이터·사이트맵·검색엔진 수집을 고려한 구조 구축",
  },
  {
    title: "집수리모아 등록",
    desc: "전국 집수리 업체 플랫폼 등록을 통한 추가 홍보 채널 확보",
  },
  {
    title: "모바일 상담 연결",
    desc: "전화 및 카카오톡 상담 버튼을 통해 검색 고객을 바로 연결",
  },
];

const PRICING = [
  {
    name: "도메인 등록",
    desc: "전용 도메인 1년 사용",
    price: "30,000원",
  },
  {
    name: "1개월차",
    desc: "홈페이지 제작 + 맞춤 초기 세팅",
    price: "530,000원",
  },
  {
    name: "2개월차",
    desc: "유지관리 + 검색 노출 관리",
    price: "500,000원",
  },
  {
    name: "3개월차",
    desc: "유지관리 + 검색 노출 관리",
    price: "500,000원",
  },
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
            <a href="#service">서비스</a>
            <a href="#portfolio">제작사례</a>
            <a href="#seo">지역 SEO</a>
            <a href="#pricing">가격</a>
          </nav>

          <a href="#contact" className="headerCta">
            상담 신청
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="container heroInner">
          <div className="heroBadge">
            시공업체 전용 홈페이지 · 지역 검색 마케팅
          </div>

          <h1>
            홈페이지를 만드는 이유는
            <br />
            <strong>결국 고객 문의입니다.</strong>
          </h1>

          <p className="heroDescription">
            집수리·인테리어·철거·타일·욕실·전기 등
            <br />
            시공업체를 위한 지역 검색형 홈페이지를 제작합니다.
            <br />
            홈페이지 제작부터 지역 페이지, 검색엔진 세팅,
            상담 연결까지 한 번에 구축합니다.
          </p>

          <div className="heroButtons">
            <a href="#contact" className="primaryButton">
              무료 상담 신청
              <span>→</span>
            </a>

            <a
              href="#portfolio"
              className="secondaryButton"
            >
              실제 제작 사례 보기
            </a>
          </div>

          <div className="heroTrust">
            <div>
              <strong>01</strong>
              <span>시공업 맞춤 제작</span>
            </div>

            <div>
              <strong>02</strong>
              <span>지역별 페이지</span>
            </div>

            <div>
              <strong>03</strong>
              <span>검색엔진 SEO</span>
            </div>

            <div>
              <strong>04</strong>
              <span>상담 즉시 연결</span>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET */}
      <section className="targetSection">
        <div className="container">
          <div className="sectionLabel">
            FOR CONTRACTORS
          </div>

          <div className="sectionHeadingRow">
            <div>
              <h2>
                시공은 잘하는데
                <br />
                고객 확보가 어렵다면
              </h2>
            </div>

            <p>
              광고비만 계속 쓰는 방식이 아니라
              <br />
              우리 업체가 검색될 수 있는 자체 홈페이지 기반을
              만듭니다.
            </p>
          </div>

          <div className="industryList">
            {INDUSTRIES.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section
        id="service"
        className="serviceSection"
      >
        <div className="container">
          <div className="sectionLabel blue">
            WHY BUILDBOOSTWEB
          </div>

          <h2 className="sectionTitle">
            그냥 예쁜 홈페이지가 아니라
            <br />
            <span>고객 문의를 생각한 구조</span>로
            만듭니다.
          </h2>

          <div className="serviceGrid">
            {SERVICES.map((service, index) => (
              <article
                className="serviceCard"
                key={service.title}
              >
                <div className="serviceTop">
                  <div className="serviceIcon">
                    {service.icon}
                  </div>

                  <span>
                    0{index + 1}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="portfolioSection"
      >
        <div className="container">
          <div className="portfolioHeading">
            <div>
              <div className="sectionLabel lightBlue">
                REAL PORTFOLIO
              </div>

              <h2>
                실제 제작·운영 및
                <br />
                검색 노출 사례
              </h2>
            </div>

            <p>
              직접 구축하고 운영한 시공업체 홈페이지와
              <br />
              실제 검색 화면을 확인해보세요.
            </p>
          </div>
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
                    alt={`BuildBoostWeb 실제 제작 및 검색 노출 사례 ${
                      (index % PORTFOLIO_IMAGES.length) + 1
                    }`}
                    style={{
                      objectPosition: item.position,
                      transform: `scale(${item.scale})`,
                    }}
                  />
                </div>

                <div className="portfolioCardBottom">
                  <div>
                    <span className="liveDot" />
                    실제 운영 사례
                  </div>

                  <strong>
                    제작 · 검색 노출
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="portfolioNotice">
            <span>✓</span>
            실제 제작 사이트와 검색결과 화면을 활용한
            포트폴리오입니다. 검색 순위와 노출 위치는 검색
            시점 및 검색엔진 정책에 따라 달라질 수 있습니다.
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="flowSection">
        <div className="container">
          <div className="sectionLabel">
            HOW IT WORKS
          </div>

          <h2 className="sectionTitle">
            고객이 검색한 순간부터
            <br />
            <span>상담까지 이어지게</span>
          </h2>

          <div className="flowGrid">
            <div className="flowCard">
              <div>01</div>
              <h3>지역 검색</h3>
              <p>
                고객이 네이버·구글에서 필요한
                시공업체와 지역을 검색합니다.
              </p>
            </div>

            <div className="flowArrow">
              →
            </div>

            <div className="flowCard">
              <div>02</div>
              <h3>홈페이지 방문</h3>
              <p>
                업체 서비스, 시공 가능 지역,
                실제 작업 내용을 확인합니다.
              </p>
            </div>

            <div className="flowArrow">
              →
            </div>

            <div className="flowCard">
              <div>03</div>
              <h3>상담 문의</h3>
              <p>
                전화 또는 카카오톡을 통해
                바로 시공 상담으로 연결됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section
        id="seo"
        className="seoSection"
      >
        <div className="container seoLayout">
          <div className="seoText">
            <div className="sectionLabel lightBlue">
              LOCAL SEO STRUCTURE
            </div>

            <h2>
              홈페이지 하나에서
              <br />
              <span>
                여러 지역 고객을 만납니다.
              </span>
            </h2>

            <p>
              단순히 메인 홈페이지 하나만 만드는 것이 아니라
              실제 출장 가능한 지역을 기반으로 지역 페이지를
              구성합니다.
            </p>

            <div className="keywordExamples">
              <span>강남구 집수리</span>
              <span>수원 싱크볼 교체</span>
              <span>안양 철거업체</span>
              <span>인천 타일시공</span>
            </div>
          </div>

          <div className="seoNumbers">
            <div>
              <small>서울</small>
              <strong>25</strong>
              <span>개 구</span>
            </div>

            <div>
              <small>경기도</small>
              <strong>14</strong>
              <span>개 주요 지역</span>
            </div>

            <div>
              <small>인천</small>
              <strong>10</strong>
              <span>개 군·구</span>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="packageSection">
        <div className="container">
          <div className="sectionLabel blue">
            PACKAGE DETAILS
          </div>

          <div className="sectionHeadingRow">
            <h2>
              기본 패키지에 포함됩니다.
            </h2>

            <p>
              처음 홈페이지를 만드는 업체도
              <br />
              복잡한 과정 없이 시작할 수 있습니다.
            </p>
          </div>

          <div className="packageGrid">
            {PACKAGE.map((item, index) => (
              <article key={item.title}>
                <div className="packageNumber">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparisonSection">
        <div className="container">
          <div className="sectionLabel lightBlue">
            DIFFERENCE
          </div>

          <h2>
            홈페이지 제작에서 끝나면
            <br />
            <span>
              고객은 저절로 오지 않습니다.
            </span>
          </h2>

          <div className="comparisonGrid">
            <div className="comparisonBasic">
              <div className="comparisonBadge">
                일반 홈페이지
              </div>

              <h3>
                업체 소개 중심
              </h3>

              <ul>
                <li>업체 소개</li>
                <li>시공 사진</li>
                <li>전화번호</li>
                <li>단일 홈페이지</li>
              </ul>
            </div>

            <div className="comparisonBoost">
              <div className="comparisonBadge blueBadge">
                BuildBoostWeb
              </div>

              <h3>
                검색과 문의까지 고려
              </h3>

              <ul>
                <li>시공업 맞춤 홈페이지</li>
                <li>서비스별 전용 페이지</li>
                <li>지역별 검색 페이지</li>
                <li>검색엔진 SEO 구조</li>
                <li>전화·카카오톡 즉시 연결</li>
                <li>집수리모아 추가 노출</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="pricingSection"
      >
        <div className="container">
          <div className="pricingHeading">
            <div>
              <div className="sectionLabel blue">
                PRICING
              </div>

              <h2>
                3개월 기본 패키지
              </h2>
            </div>

            <div className="minimumBadge">
              최소 계약 기간 3개월
            </div>
          </div>

          <div className="pricingLayout">
            <div className="pricingTable">
              {PRICING.map((item) => (
                <div
                  className="pricingRow"
                  key={item.name}
                >
                  <div>
                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.desc}
                    </span>
                  </div>

                  <b>
                    {item.price}
                  </b>
                </div>
              ))}
            </div>

            <div className="totalPriceCard">
              <small>
                3개월 총 예상 비용
              </small>

              <strong>
                1,560,000
                <span>원</span>
              </strong>

              <p>
                도메인 1년 + 홈페이지 제작 +
                <br />
                3개월 유지 및 관리 기준
              </p>

              <a href="#contact">
                상담 신청하기 →
              </a>
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

        <div className="container ctaInner">
          <div className="sectionLabel lightBlue">
            START WITH BUILDBOOSTWEB
          </div>

          <h2>
            시공은 사장님이 하세요.
            <br />
            <span>
              온라인 영업 기반은 저희가 만들겠습니다.
            </span>
          </h2>

          <p>
            업종과 영업 지역만 알려주시면
            <br />
            업체에 맞는 홈페이지 구축 방향부터 상담해드립니다.
          </p>

          <div className="ctaButtons">
            <a
              href="tel:01094134686"
              className="primaryButton"
            >
              ☎ 전화 상담하기
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

          <div className="ctaSmall">
            상담 후 계약 여부를 결정하셔도 됩니다.
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
              집수리·인테리어·시공업체 전용
              <br />
              홈페이지 제작 & 지역 검색 마케팅
            </p>
          </div>

          <div className="footerRight">
            <span>
              www.buildboostweb.com
            </span>

            <span>
              © 2026 BuildBoostWeb
            </span>
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
          카카오톡
        </a>
      </div>
    </main>
  );
}
