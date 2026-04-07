import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faFileAlt,
  faFolderOpen,
  faUserFriends,
  faChartLine,
  faChartPie,
  faWallet,
  faGauge,
  faUserShield,
  faClipboardList,
  faCalendarAlt,
  faMoneyCheckAlt
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const dashboardSummary = [
  { title: "Vendors", value: 48, subtitle: "Active vendors", icon: faUserFriends, accent: "#f59e0b" },
  { title: "Agreements", value: 34, subtitle: "Open agreements", icon: faFolderOpen, accent: "#0ea5e9" },
  { title: "Deeds", value: 28, subtitle: "Signed deeds", icon: faFileAlt, accent: "#10b981" },
  { title: "EC Records", value: 22, subtitle: "Pending certificates", icon: faMapMarkedAlt, accent: "#8b5cf6" },
  { title: "Payments", value: 17, subtitle: "Due payments", icon: faMoneyCheckAlt, accent: "#ef4444" },
  { title: "Clients", value: 76, subtitle: "Active clients", icon: faUserShield, accent: "#14b8a6" }
];

const monthlyTrend = [118, 132, 145, 160, 173, 168, 180, 192, 206, 220, 234, 248];
const moduleDistribution = [
  { label: "Agreements", value: 35, color: "#0ea5e9" },
  { label: "Deeds", value: 25, color: "#10b981" },
  { label: "EC", value: 18, color: "#8b5cf6" },
  { label: "Nagal", value: 12, color: "#f59e0b" },
  { label: "Payments", value: 10, color: "#ef4444" }
];

const recentActions = [
  { time: "1h ago", action: "New rental agreement created", user: "Alex Sharma" },
  { time: "3h ago", action: "Deed document signed", user: "Priya Singh" },
  { time: "7h ago", action: "Payment pending reminder sent", user: "Finance team" },
  { time: "1d ago", action: "EC record verified", user: "Rohit Kumar" }
];

const pageInsights = [
  { title: "Vendor Management", value: "14%", detail: "growth", icon: faUserFriends },
  { title: "EC Processing", value: "8%", detail: "faster review", icon: faMapMarkedAlt },
  { title: "Agreement Flow", value: "22%", detail: "new contracts", icon: faFolderOpen },
  { title: "Payment Pulse", value: "12%", detail: "collection rate", icon: faMoneyCheckAlt }
];

const Dashboard = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "ec":
        return <LandEC />;
      case "nagal":
        return <NagalAdangal />;
      case "patta":
        return <PattaRecords />;
      case "clients":
        return <Clients />;
      case "history":
        return <CaseHistory />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="main-content dashboard-shell">
      <style>{`
        .dashboard-shell {
          margin-left: 280px;
          padding: 30px;
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
          color: #0f172a;
          position: relative;
          overflow: hidden;
        }

        /* Decorative Background Elements */
        .dashboard-shell::before {
          content: "⚖";
          position: fixed;
          font-size: 320px;
          opacity: 0.04;
          bottom: -80px;
          left: 50px;
          color: #0f172a;
          z-index: 0;
          transform: rotate(-20deg);
          pointer-events: none;
        }

        .dashboard-shell::after {
          content: "";
          position: fixed;
          bottom: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
        }

        .dashboard-hero {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .dashboard-heading {
          font-size: clamp(2rem, 2.6vw, 3rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .dashboard-subtitle {
          font-size: 1rem;
          color: #475569;
          max-width: 680px;
          line-height: 1.7;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          background: rgba(255,255,255,0.8);
          border-radius: 999px;
          border: 1px solid rgba(148,163,184,0.2);
          box-shadow: 0 14px 50px rgba(15,23,42,0.08);
          font-weight: 600;
          color: #0f172a;
        }

        .metric-card,
        .chart-card,
        .overview-card,
        .insight-card,
        .activity-card {
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 24px;
          box-shadow: 0 18px 40px rgba(15,23,42,0.06);
        }

        .metric-card {
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 12px 24px rgba(15,23,42,0.12);
        }

        .metric-value {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
        }

        .metric-label {
          color: #475569;
          font-size: 0.95rem;
          margin-top: 10px;
        }

        .chart-card {
          overflow: hidden;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 24px;
          border-bottom: 1px solid rgba(148,163,184,0.15);
        }

        .chart-header h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .chart-header small {
          color: #64748b;
        }

        .line-chart {
          padding: 28px 24px 24px;
        }

        .line-chart svg {
          width: 100%;
          height: 280px;
        }

        .chart-legend {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 0 24px 20px;
        }

        .chart-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(15,23,42,0.04);
          color: #475569;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .progress-bar-group {
          display: grid;
          gap: 16px;
          padding: 24px;
        }

        .progress-item {
          display: grid;
          gap: 8px;
        }

        .progress-item strong {
          display: flex;
          justify-content: space-between;
          color: #0f172a;
          font-size: 0.95rem;
        }

        .bar-track {
          width: 100%;
          height: 10px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 999px;
        }

        .insight-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .insight-card {
          padding: 24px;
        }

        .insight-card h5 {
          margin: 0 0 16px;
          font-size: 1rem;
          color: #0f172a;
          font-weight: 700;
        }

        .insight-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.8;
        }

        .activity-card {
          padding: 24px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(148,163,184,0.12);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-content {
          min-width: 0;
        }

        .activity-title {
          font-weight: 700;
          margin-bottom: 6px;
        }

        .activity-time {
          color: #64748b;
          font-size: 0.9rem;
        }

        .activity-user {
          color: #0f172a;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .overview-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        @media (max-width: 1199px) {
          .dashboard-hero {
            flex-direction: column;
          }

          .insight-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .dashboard-shell {
            padding: 20px 16px;
          }
        }

        .dashboard-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

const generateSvgPath = (data, width = 760, height = 280) => {
  const padding = 30;
  const max = Math.max(...data) + 20;
  const min = Math.min(...data) - 10;
  return data
    .map((value, index) => {
      const x = padding + (index / (data.length - 1)) * (width - padding * 2);
      const normalized = (value - min) / (max - min);
      const y = height - padding - normalized * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");
};

const DashboardOverview = () => {
  const linePoints = generateSvgPath(monthlyTrend);
  const areaPoints = `${linePoints} ${760 - 30},${280 - 30} 30,${280 - 30}`;

  return (
    <Container fluid>
      <div className="dashboard-hero">
        <div>
          <h1 className="dashboard-heading">Admin Dashboard</h1>
          <p className="dashboard-subtitle">
            Monitor all law firm workflows from one place. Track vendor activity, agreement progress, deed workflow, record health, and payment performance with clear charts and instant insights.
          </p>
          <div className="hero-pill">
            <FontAwesomeIcon icon={faGauge} />
            Live operational pulse — updated hourly
          </div>
        </div>
        <Card className="overview-card" style={{ minWidth: 300, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div>
              <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>Monthly revenue</p>
              <h3 style={{ margin: '12px 0 0', fontSize: '2.2rem', color: '#0f172a' }}>₹ 2.4M</h3>
            </div>
            <div style={{ display: 'grid', placeItems: 'center', width: 56, height: 56, borderRadius: 18, background: '#eff6ff' }}>
              <FontAwesomeIcon icon={faWallet} style={{ color: '#0ea5e9', fontSize: '1.4rem' }} />
            </div>
          </div>
          <div className="overview-badges">
            <Badge bg="success" text="light">+11.6% vs last month</Badge>
            <Badge bg="warning" text="dark">32 pending actions</Badge>
          </div>
        </Card>
      </div>

      <Row className="g-4 mb-4">
        {dashboardSummary.map((metric) => (
          <Col xl={4} lg={6} key={metric.title}>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
              <Card className="metric-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18 }}>
                  <div>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', fontWeight: 600 }}>{metric.subtitle}</p>
                    <h2 className="metric-value">{metric.value}</h2>
                  </div>
                  <div className="metric-icon" style={{ background: metric.accent }}>
                    <FontAwesomeIcon icon={metric.icon} />
                  </div>
                </div>
                <p className="metric-label">{metric.title} across the firm</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Row className="g-4 mb-4">
        <Col xl={8}>
          <Card className="chart-card">
            <div className="chart-header">
              <div>
                <h4>Monthly record momentum</h4>
                <small>Shows the trend of new records and case activity this year.</small>
              </div>
              <div className="chart-pill">
                <FontAwesomeIcon icon={faChartLine} /> Monthly gain
              </div>
            </div>
            <div className="line-chart">
              <svg viewBox="0 0 760 280" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(14,165,233,0.25)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="760" height="280" fill="transparent" />
                <polygon points={areaPoints} fill="url(#areaGrad)" />
                <polyline
                  points={linePoints}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {monthlyTrend.map((value, index) => {
                  const width = 760;
                  const height = 280;
                  const padding = 30;
                  const max = Math.max(...monthlyTrend) + 20;
                  const min = Math.min(...monthlyTrend) - 10;
                  const x = padding + (index / (monthlyTrend.length - 1)) * (width - padding * 2);
                  const normalized = (value - min) / (max - min);
                  const y = height - padding - normalized * (height - padding * 2);
                  return (
                    <g key={index}>
                      <circle cx={x} cy={y} r="6" fill="#fff" stroke="#0ea5e9" strokeWidth="3" />
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="chart-legend">
              <span className="chart-pill"><FontAwesomeIcon icon={faCalendarAlt} /> 12 months</span>
              <span className="chart-pill"><FontAwesomeIcon icon={faClipboardList} /> Case load growth</span>
            </div>
          </Card>
        </Col>

        <Col xl={4}>
          <Card className="chart-card">
            <div className="chart-header">
              <div>
                <h4>Record distribution</h4>
                <small>How your workload is split across firm modules.</small>
              </div>
              <div className="chart-pill">
                <FontAwesomeIcon icon={faChartPie} /> Module mix
              </div>
            </div>
            <div className="progress-bar-group">
              {moduleDistribution.map((item) => (
                <div className="progress-item" key={item.label}>
                  <strong>
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </strong>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${item.value}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col xl={5}>
          <Card className="insight-card">
            <h5>Operational insights</h5>
            <p>
              The dashboard blends classic law firm reporting with modern visual cues so admin can act quickly. Filter by module, compare monthly trends, and keep important workflows visible at a glance.
            </p>
            <div className="overview-badges">
              <Badge bg="primary">Trusted metrics</Badge>
              <Badge bg="info" text="dark">Live update</Badge>
              <Badge bg="secondary">Admin-ready</Badge>
            </div>
          </Card>
        </Col>
        <Col xl={7}>
          <Card className="activity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <h4 style={{ margin: 0 }}>Recent activity feed</h4>
                <small style={{ color: '#64748b' }}>Latest firm actions and status updates.</small>
              </div>
              <Button variant="outline-primary" size="sm">View all</Button>
            </div>
            {recentActions.map((item) => (
              <div className="activity-item" key={item.time + item.action}>
                <div className="activity-content">
                  <div className="activity-title">{item.action}</div>
                  <div className="activity-time">{item.time}</div>
                </div>
                <div className="activity-user">{item.user}</div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      <div className="insight-grid" style={{ marginTop: 32 }}>
        {pageInsights.map((insight) => (
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} key={insight.title}>
            <Card className="insight-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <h5>{insight.title}</h5>
                  <p style={{ margin: 0, color: '#64748b' }}>Key admin performance indicator.</p>
                </div>
                <div style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 16, background: '#eef2ff', color: '#4338ca' }}>
                  <FontAwesomeIcon icon={insight.icon} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <h2 style={{ margin: 0, color: '#0f172a' }}>{insight.value}</h2>
                <Badge bg="light" text="dark" style={{ fontWeight: 700, borderRadius: 9999 }}>{insight.detail}</Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

const summaryPlaceholder = (title, description, buttonLabel) => (
  <Container fluid>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>{title}</h2>
        <p style={{ maxWidth: 760, color: '#475569', lineHeight: 1.8 }}>{description}</p>
      </div>
      <Button variant="outline-primary">{buttonLabel}</Button>
    </div>
    <Row className="g-4 mt-4">
      <Col xl={4} md={6}>
        <Card className="metric-card">
          <p style={{ margin: 0, color: '#64748b', fontWeight: 700 }}>Open workflows</p>
          <h3 style={{ marginTop: 16, fontSize: '2.3rem' }}>28</h3>
          <p style={{ margin: '14px 0 0', color: '#475569' }}>Tasks that need administrative action.</p>
        </Card>
      </Col>
      <Col xl={4} md={6}>
        <Card className="metric-card">
          <p style={{ margin: 0, color: '#64748b', fontWeight: 700 }}>Average turnaround</p>
          <h3 style={{ marginTop: 16, fontSize: '2.3rem' }}>4.2 days</h3>
          <p style={{ margin: '14px 0 0', color: '#475569' }}>Speed of completion across records.</p>
        </Card>
      </Col>
      <Col xl={4} md={12}>
        <Card className="metric-card">
          <p style={{ margin: 0, color: '#64748b', fontWeight: 700 }}>Team utilization</p>
          <h3 style={{ marginTop: 16, fontSize: '2.3rem' }}>82%</h3>
          <p style={{ margin: '14px 0 0', color: '#475569' }}>Capacity used by the legal operations team.</p>
        </Card>
      </Col>
    </Row>
  </Container>
);

const LandEC = () => summaryPlaceholder(
  "Encumbrance Certificate Control",
  "See how EC processing is progressing and identify priority documents that need verification.",
  "Manage EC"
);

const NagalAdangal = () => summaryPlaceholder(
  "Nagal / Adangal Tracker",
  "Track Adangal and Nagal paperwork with clear status indicators and fast upload controls.",
  "Upload Record"
);

const PattaRecords = () => summaryPlaceholder(
  "Patta / Agreement Hub",
  "Centralize patta and agreement records for audit-ready reporting and quick admin review.",
  "New Patta Entry"
);

const Clients = () => summaryPlaceholder(
  "Client Relationship Insights",
  "Monitor new client intake, active matters, and billing-ready accounts from one dashboard.",
  "Add Client"
);

const CaseHistory = () => summaryPlaceholder(
  "Case History Overview",
  "Review recent case milestones and keep a clean timeline of closed and ongoing matters.",
  "View History"
);

export default Dashboard;
