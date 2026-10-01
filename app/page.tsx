const services = [
  {
    icon: "🖥️",
    title: "맞춤형 홈페이지 제작",
    desc: "업체명, 전화번호, 서비스, 시공사진, 상담 버튼까지 반영한 시공업체 전용 홈페이지를 제작합니다.",
  },
  {
    icon: "📍",
    title: "지역별 SEO 페이지",
    desc: "서울·경기·인천 등 실제 영업 지역에 맞춰 지역별 검색 페이지를 구성합니다.",
  },
  {
    icon: "🔍",
    title: "검색엔진 기본 세팅",
    desc: "네이버·구글 검색을 위한 메타데이터, 사이트맵, 검색엔진 등록 구조를 기본 세팅합니다.",
  },
  {
    icon: "📞",
    title: "문의 즉시 연결",
    desc: "모바일에서 전화·카카오톡 상담으로 바로 이어질 수 있도록 문의 동선을 설계합니다.",
  },
];

const industries = [
  "집수리",
  "인테리어",
  "철거",
  "타일",
  "욕실",
  "싱크볼",
  "전기·조명",
  "벌목",
  "배관",
  "에어컨",
  "주방시공",
  "기타 전문 시공",
];

const packageItems = [
  ["전문 홈페이지 제작", "업체 소개·서비스·시공사례·상담문의 포함"],
  ["시공 카테고리 3개", "집중적으로 홍보할 핵심 시공 분야 3개 구성"],
  ["지역별 페이지 제작", "서울·경기·인천 주요 영업지역 페이지 구축"],
  ["검색엔진 SEO 세팅", "네이버·구글 검색을 위한 기본 SEO 구조 세팅"],
  ["집수리모아 등록", "집수리모아 플랫폼 업체 등록을 통한 추가 노출"],
  ["문의 고객 연결 혜택", "운영 채널로 유입되는 해당 지역 시공 문의 연결"],
];

const pricing = [
  ["도메인 등록", "전용 도메인 등록 / 1년", "30,000원"],
  ["1개월차", "홈페이지 제작 + 초기 세팅", "530,000원"],
  ["2개월차", "유지관리 + 검색 노출 관리", "500,000원"],
  ["3개월차", "유지관리 + 검색 노출 관리", "500,000원"],
];

export default function Home() {
  return (
    <main>
      {/* 상단 */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          className="container"
          style={{
            minHeight: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <a
            href="#top"
            style={{
              fontSize: 23,
              fontWeight: 950,
              letterSpacing: "-0.04em",
            }}
          >
            BuildBoost
            <span style={{ color: "#2563eb" }}>Web</span>
          </a>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            <a href="#service">서비스</a>
            <a href="#portfolio">제작사례</a>
            <a href="#pricing">가격</a>
            <a href="#contact">상담문의</a>
          </nav>
        </div>
      </header>

      {/* 히어로 */}
      <section
        id="top"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(37,99,235,.2), transparent 30%), linear-gradient(135deg,#08111f 0%,#101c31 55%,#0b1323 100%)",
          color: "#fff",
          padding: "110px 0 100px",
        }}
      >
        <div className="container">
          <span
            className="badge"
            style={{
              background: "rgba(59,130,246,.14)",
              color: "#60a5fa",
              border: "1px solid rgba(96,165,250,.18)",
            }}
          >
            시공업체 전용 홈페이지 & 지역 검색 마케팅
          </span>

          <h1
            style={{
              maxWidth: 850,
              margin: "24px 0 0",
              fontSize: "clamp(42px,7vw,78px)",
              lineHeight: 1.06,
              letterSpacing: "-0.055em",
              fontWeight: 950,
            }}
          >
            시공은 사장님이,
            <br />
            <span style={{ color: "#4da3ff" }}>
              지역 고객 확보는
              <br />
              BuildBoostWeb이 돕습니다.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "28px 0 0",
              fontSize: 18,
              lineHeight: 1.8,
              color: "#cbd5e1",
            }}
          >
            집수리·인테리어·철거·타일·욕실·전기 등 전문 시공업체를 위한
            홈페이지 제작 서비스입니다. 단순한 회사소개 페이지를 넘어 지역별
            검색 페이지와 문의 연결 구조까지 함께 구축합니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 34,
            }}
          >
            <a className="btn btn-primary" href="#contact">
              무료 상담 신청
            </a>

            <a
              className="btn"
              href="#portfolio"
              style={{
                border: "1px solid rgba(255,255,255,.2)",
                color: "#fff",
                background: "rgba(255,255,255,.06)",
              }}
            >
              실제 제작 사례 보기
            </a>
          </div>

          <div
            style={{
              marginTop: 68,
              paddingTop: 26,
              borderTop: "1px solid rgba(255,255,255,.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 34px",
              color: "#cbd5e1",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            <span>✓ 전문 홈페이지 제작</span>
            <span>✓ 지역별 SEO 페이지</span>
            <span>✓ 네이버·구글 기본 세팅</span>
            <span>✓ 모바일 상담 연결</span>
          </div>
        </div>
      </section>

      {/* 타깃 업종 */}
      <section className="section section-light">
        <div className="container">
          <div className="eyebrow">For Contractors</div>

          <h2 className="section-title">
            집수리·인테리어·시공업체에
            <br />
            맞춰 제작합니다.
          </h2>

          <p className="section-desc">
            일반 회사 홈페이지가 아니라 현장 시공업의 영업 방식에 맞게 서비스를
            구성합니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 34,
            }}
          >
            {industries.map((item) => (
              <span
                key={item}
                style={{
                  padding: "13px 17px",
                  borderRadius: 12,
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section id="service" className="section section-gray">
        <div className="container">
          <div className="eyebrow">Why BuildBoostWeb</div>

          <h2 className="section-title">
            그냥 홈페이지만
            <br />
            만드는 것이 아닙니다.
          </h2>

          <p className="section-desc">
            검색하는 고객이 사이트를 발견하고, 서비스를 확인하고, 바로 문의할 수
            있도록 시공업체에 필요한 흐름을 한 번에 구성합니다.
          </p>

          <div className="card-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background: "#eff6ff",
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                >
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 지역 SEO */}
      <section className="section section-light">
        <div className="container">
          <div className="eyebrow">Local SEO Structure</div>

          <h2 className="section-title">
            업체 홈페이지 하나에서
            <br />
            여러 지역을 공략합니다.
          </h2>

          <p className="section-desc">
            업체가 실제 출장하는 지역에 맞춰 지역별 페이지를 구성할 수 있습니다.
            업종과 지역을 결합해 고객이 검색할 만한 페이지를 체계적으로
            구축합니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: 18,
              marginTop: 42,
            }}
          >
            {[
              ["서울", "25개 구", "서울 주요 지역 타깃 페이지"],
              ["경기도", "주요 14개 지역", "실제 영업지역 중심 페이지"],
              ["인천", "10개 군·구", "인천 전 지역 검색 페이지"],
            ].map(([name, number, desc]) => (
              <article
                key={name}
                className="card"
                style={{ textAlign: "center", padding: "38px 24px" }}
              >
                <div
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  {name}
                </div>

                <div
                  style={{
                    marginTop: 8,
                    color: "#2563eb",
                    fontSize: 38,
                    fontWeight: 950,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {number}
                </div>

                <p style={{ marginTop: 12 }}>{desc}</p>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              padding: 22,
              borderRadius: 18,
              background: "#eff6ff",
              color: "#1d4ed8",
              fontWeight: 800,
              lineHeight: 1.7,
            }}
          >
            예시 : 강남구 집수리 · 수원 싱크볼 교체 · 안양 철거업체 · 인천
            타일시공 등
          </div>
        </div>
      </section>

      {/* 패키지 */}
      <section className="section section-gray">
        <div className="container">
          <div className="eyebrow">Package Details</div>

          <h2 className="section-title">기본 패키지에 포함되는 서비스</h2>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>항목</th>
                  <th>제공 내용</th>
                </tr>
              </thead>

              <tbody>
                {packageItems.map(([title, content]) => (
                  <tr key={title}>
                    <td
                      style={{
                        fontWeight: 900,
                        color: "#111827",
                      }}
                    >
                      {title}
                    </td>
                    <td>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 포트폴리오 */}
      <section id="portfolio" className="section section-dark">
        <div className="container">
          <div className="eyebrow">Portfolio Showcase</div>

          <h2 className="section-title">
            실제 구축한 시공업체
            <br />
            홈페이지 사례
          </h2>

          <p className="section-desc">
            실제 시공업체를 기준으로 업종별 홈페이지와 지역 검색 페이지 구조를
            제작·운영하고 있습니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: 20,
              marginTop: 42,
            }}
          >
            <article
              style={{
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 24,
                background: "#151f32",
                padding: 30,
              }}
            >
              <span
                style={{
                  color: "#fb923c",
                  fontWeight: 900,
                  fontSize: 13,
                }}
              >
                DEMOLITION
              </span>

              <h3
                style={{
                  margin: "12px 0",
                  fontSize: 28,
                  letterSpacing: "-0.03em",
                }}
              >
                DH 종합철거
              </h3>

              <p style={{ color: "#94a3b8", lineHeight: 1.75 }}>
                철거 서비스 소개부터 서울·경기·인천 등 지역별 페이지,
                전화상담 연결까지 구축한 철거업체 홈페이지 사례입니다.
              </p>
            </article>

            <article
              style={{
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 24,
                background: "#151f32",
                padding: 30,
              }}
            >
              <span
                style={{
                  color: "#60a5fa",
                  fontWeight: 900,
                  fontSize: 13,
                }}
              >
                HOME REPAIR
              </span>

              <h3
                style={{
                  margin: "12px 0",
                  fontSize: 28,
                  letterSpacing: "-0.03em",
                }}
              >
                고쳐줘 홈닥터
              </h3>

              <p style={{ color: "#94a3b8", lineHeight: 1.75 }}>
                싱크볼·쿡탑·상판 타공 등 시공별 전용 페이지와 지역별 SEO
                페이지를 구축한 집수리 홈페이지 사례입니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 검색 노출 */}
      <section className="section section-light">
        <div className="container">
          <div className="eyebrow">Search Exposure</div>

          <h2 className="section-title">
            실제 검색 노출을 고려한
            <br />
            구조로 제작합니다.
          </h2>

          <p className="section-desc">
            네이버와 구글이 사이트의 서비스와 지역 정보를 이해하기 쉽도록 기본
            SEO 구조를 구성합니다. 검색 순위는 검색엔진 정책과 경쟁상황에 따라
            달라질 수 있습니다.
          </p>

          <div className="card-grid">
            {[
              ["01", "서비스별 페이지", "시공 분야별 독립 페이지 구성"],
              ["02", "지역별 페이지", "출장 가능 지역별 검색 페이지 구성"],
              ["03", "사이트맵", "검색엔진이 페이지를 찾기 쉽게 구성"],
              ["04", "문의 연결", "검색 고객을 전화·상담으로 연결"],
            ].map(([num, title, desc]) => (
              <article className="card" key={num}>
                <div
                  style={{
                    color: "#2563eb",
                    fontSize: 13,
                    fontWeight: 950,
                  }}
                >
                  {num}
                </div>
                <h3 style={{ marginTop: 14 }}>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 가격 */}
      <section id="pricing" className="section section-gray">
        <div className="container">
          <div className="eyebrow">Pricing Plan</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 18,
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <h2 className="section-title">3개월 기본 패키지</h2>
            <span className="badge">최소 계약기간 3개월</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.35fr .8fr",
              gap: 22,
              marginTop: 42,
              alignItems: "stretch",
            }}
          >
            <div className="table-wrap" style={{ marginTop: 0 }}>
              <table>
                <thead>
                  <tr>
                    <th>기간 / 구분</th>
                    <th>내용</th>
                    <th style={{ textAlign: "right" }}>비용</th>
                  </tr>
                </thead>

                <tbody>
                  {pricing.map(([term, content, price]) => (
                    <tr key={term}>
                      <td
                        style={{
                          fontWeight: 900,
                          color: "#111827",
                        }}
                      >
                        {term}
                      </td>
                      <td>{content}</td>
                      <td
                        style={{
                          textAlign: "right",
                          fontWeight: 900,
                          color: "#111827",
                        }}
                      >
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                background: "#0f172a",
                borderRadius: 22,
                color: "#fff",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: 14,
                }}
              >
                3개월 총 예상 비용
              </div>

              <div
                style={{
                  color: "#38bdf8",
                  marginTop: 10,
                  fontSize: "clamp(36px,5vw,54px)",
                  letterSpacing: "-0.05em",
                  fontWeight: 950,
                }}
              >
                1,560,000원
              </div>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.65,
                  marginBottom: 0,
                }}
              >
                도메인 1년 + 초기 홈페이지 제작 + 3개월 운영관리 기준
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="section"
        style={{
          background:
            "linear-gradient(135deg,#0b1220 0%,#101b30 55%,#0d1728 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 850 }}>
            <div
              style={{
                color: "#60a5fa",
                fontWeight: 900,
                fontSize: 14,
              }}
            >
              BUILDBOOSTWEB
            </div>

            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "clamp(36px,6vw,64px)",
                lineHeight: 1.12,
                letterSpacing: "-0.05em",
              }}
            >
              지역 검색 노출과
              <br />
              <span style={{ color: "#4da3ff" }}>문의 연결 중심의</span>
              <br />
              시공업체 홈페이지
            </h2>

            <p
              style={{
                marginTop: 22,
                maxWidth: 720,
                color: "#cbd5e1",
                fontSize: 17,
                lineHeight: 1.8,
              }}
            >
              홈페이지가 필요하거나 현재 사이트를 시공업에 맞는 구조로 바꾸고
              싶다면 상담을 신청해 주세요.
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <a
                className="btn btn-primary"
                href="tel:01094134686"
              >
                전화 상담하기
              </a>

              <a
                className="btn"
                href="https://open.kakao.com/o/sDHKtQJi"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#fee500",
                  color: "#111827",
                }}
              >
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer
        style={{
          background: "#070d18",
          color: "#94a3b8",
          padding: "38px 0",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          <div>
            <strong
              style={{
                color: "#fff",
                fontSize: 18,
              }}
            >
              BuildBoostWeb
            </strong>
            <div>시공업체 전용 홈페이지 제작 & 지역 검색 마케팅</div>
          </div>

          <div>© 2026 BuildBoostWeb. All rights reserved.</div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 820px) {
          header nav {
            display: none !important;
          }

          #portfolio > div > div:last-child {
            grid-template-columns: 1fr !important;
          }

          #pricing > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          section .container > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
