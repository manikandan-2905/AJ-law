import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Table, Card, Row, Col, Badge, InputGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye, faSearch, faTimes, faArrowUp, faArrowDown,
  faHistory, faFileAlt, faMoneyCheckAlt, faIndianRupee,
  faClock, faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

const dummyPaymentData = [
  { id: 1, date: "2024-10-01", recordType: "EC", recordNo: "EC001", vendor: "Vendor A", customerName: "John Doe", office: "Office 1", nagar: "Nagar 1", tpNo: "TP001", plotNo: "A1", reference: "REF001", deed: "Sale Deed", docNo: "DOC001", fieldVisit: "Yes", returnDocument: "No", amount: 50000, commission: 5000, others: 1000, total: 56000, status: "Paid" },
  { id: 2, date: "2024-10-05", recordType: "Nagal", recordNo: "NAG001", vendor: "Vendor B", customerName: "Jane Smith", office: "Office 2", nagar: "Nagar 2", tpNo: "TP002", plotNo: "B2", reference: "REF002", deed: "Nagal/Adangal", docNo: "DOC002", fieldVisit: "No", returnDocument: "Yes", amount: 75000, commission: 7500, others: 2000, total: 84500, status: "Pending" },
  { id: 3, date: "2024-10-10", recordType: "Agreement", recordNo: "AGR001", vendor: "Vendor C", customerName: "Bob Johnson", office: "Office 1", nagar: "Nagar 3", tpNo: "TP003", plotNo: "C3", reference: "REF003", deed: "Agreement", docNo: "DOC003", fieldVisit: "Yes", returnDocument: "Yes", amount: 65000, commission: 6500, others: 1500, total: 73000, status: "Paid" },
  { id: 4, date: "2024-10-15", recordType: "Deed", recordNo: "DEED001", vendor: "Vendor D", customerName: "Alice Williams", office: "Office 3", nagar: "Nagar 4", tpNo: "TP004", plotNo: "D4", reference: "REF004", deed: "Release", docNo: "DOC004", fieldVisit: "No", returnDocument: "No", amount: 60000, commission: 6000, others: 1800, total: 67800, status: "Pending" }
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.18 } },
  exit: { opacity: 0, scale: 0.96, y: 20, transition: { duration: 0.12 } }
};

const Payment = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const [paymentData] = useState(dummyPaymentData);
  const [filteredData, setFilteredData] = useState(dummyPaymentData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ recordType: "", status: "", vendor: "", date: "" });
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentPayment, setCurrentPayment] = useState(null);

  useEffect(() => {
    let data = [...paymentData];

    const q = searchTerm.trim().toLowerCase();
    if (q) {
      data = data.filter(item =>
        item.recordNo.toLowerCase().includes(q) ||
        item.customerName.toLowerCase().includes(q) ||
        item.vendor.toLowerCase().includes(q) ||
        item.reference.toLowerCase().includes(q) ||
        item.nagar.toLowerCase().includes(q)
      );
    }

    if (filters.recordType) data = data.filter(item => item.recordType === filters.recordType);
    if (filters.status) data = data.filter(item => item.status === filters.status);
    if (filters.vendor) data = data.filter(item => item.vendor === filters.vendor);
    if (filters.date) data = data.filter(item => item.date === filters.date);

    if (sortConfig.key) {
      data.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (sortConfig.key === "date") {
          return sortConfig.direction === "asc" ?
            new Date(valueA) - new Date(valueB) :
            new Date(valueB) - new Date(valueA);
        }

        if (typeof valueA === "number" && typeof valueB === "number") {
          return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
        }

        return sortConfig.direction === "asc" ?
          String(valueA).localeCompare(String(valueB)) :
          String(valueB).localeCompare(String(valueA));
      });
    }

    setFilteredData(data);
  }, [paymentData, searchTerm, filters, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const handleView = (item) => {
    setCurrentPayment(item);
    setShowViewModal(true);
  };

  const getBadge = (status) => {
    if (status === "Paid") return <Badge bg="success">Paid</Badge>;
    if (status === "Pending") return <Badge bg="warning">Pending</Badge>;
    return <Badge bg="secondary">{status}</Badge>;
  };

  const totalCount = filteredData.length;
  const pendingCount = filteredData.filter(item => item.status === "Pending").length;
  const totalPaid = filteredData.filter(item => item.status === "Paid").reduce((sum, item) => sum + item.total, 0);
  const totalPending = filteredData.filter(item => item.status === "Pending").reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content payment-shell">
        <style>{`
          .payment-shell {
            margin-left: 280px;
            padding: 30px;
            min-height: 100vh;
            background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
            color: #0f172a;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .payment-shell::before {
            content: "₹";
            position: fixed;
            font-size: 280px;
            opacity: 0.04;
            top: -60px;
            right: 40px;
            color: #10b981;
            z-index: 0;
            transform: rotate(15deg);
            pointer-events: none;
            font-weight: 800;
          }

          .payment-shell::after {
            content: "";
            position: fixed;
            top: 50%;
            left: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .payment-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 32px;
            position: relative;
            z-index: 1;
          }

          .payment-heading {
            font-size: clamp(2rem, 2.6vw, 3rem);
            font-weight: 800;
            line-height: 1.05;
            letter-spacing: -0.03em;
            margin-bottom: 12px;
          }

          .payment-subtitle {
            font-size: 1rem;
            color: #475569;
            max-width: 680px;
            line-height: 1.7;
          }

          .stat-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            padding: 24px;
            min-height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            color: white;
            box-shadow: 0 12px 24px rgba(15,23,42,0.12);
            flex-shrink: 0;
          }

          .stat-label {
            color: #64748b;
            font-size: 0.95rem;
            font-weight: 600;
          }

          .stat-value {
            font-size: 2rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
          }

          .filter-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            padding: 24px;
          }

          .filter-label {
            font-weight: 700;
            color: #0f172a;
            font-size: 0.95rem;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #475569;
          }

          .filter-input, .filter-select {
            border: 1px solid rgba(148,163,184,0.3);
            border-radius: 12px;
            padding: 10px 14px;
            font-size: 0.95rem;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255,255,255,0.5);
          }

          .filter-input:focus, .filter-select:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
            background: white;
            transform: translateY(-2px);
          }

          .filter-input::placeholder {
            color: #94a3b8;
          }

          .table-card {
            background: rgba(255,255,255,0.92);
            border: none;
            border-radius: 24px;
            box-shadow: 0 18px 40px rgba(15,23,42,0.06);
            overflow: hidden;
          }

          .table-card table {
            margin-bottom: 0;
          }

          .table-card thead {
            background: linear-gradient(135deg, rgba(15,23,42,0.04) 0%, rgba(14,165,233,0.02) 100%);
            border-bottom: 2px solid rgba(148,163,184,0.15);
          }

          .table-card th {
            padding: 18px 16px;
            font-weight: 800;
            color: #0f172a;
            font-size: 0.95rem;
            letter-spacing: -0.01em;
            border: none;
            text-transform: uppercase;
            font-size: 0.85rem;
            color: #475569;
            position: relative;
          }

          .table-card td {
            padding: 16px;
            vertical-align: middle;
            border-color: rgba(148,163,184,0.08);
            font-weight: 500;
          }

          .table-card tbody tr {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(148,163,184,0.08);
          }

          .table-card tbody tr:hover {
            background: linear-gradient(90deg, rgba(14,165,233,0.04) 0%, rgba(16,185,129,0.04) 100%);
            transform: scale(1.01);
            box-shadow: inset 0 4px 12px rgba(14,165,233,0.06);
          }

          .table-card tbody tr:last-child {
            border-bottom: none;
          }

          .sort-icon {
            margin-left: 6px;
            opacity: 0.6;
            font-size: 0.85rem;
            transition: all 0.2s ease;
          }

          .table-card th:hover {
            color: #0ea5e9;
          }

          .table-card th:hover .sort-icon {
            opacity: 1;
            transform: scale(1.2);
          }

          .view-modal .modal-content {
            background: rgba(255,255,255,0.96);
            border: 1px solid rgba(148,163,184,0.2);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(15,23,42,0.15);
          }

          .view-modal .modal-header {
            border-bottom: 1px solid rgba(148,163,184,0.15);
            padding: 24px;
          }

          .view-modal .modal-title {
            font-weight: 700;
            color: #0f172a;
            font-size: 1.25rem;
            letter-spacing: -0.02em;
          }

          .view-modal .modal-body {
            padding: 24px;
          }

          .detail-section {
            margin-bottom: 24px;
            padding: 16px;
            background: rgba(15,23,42,0.04);
            border-radius: 16px;
            border-left: 4px solid #0ea5e9;
          }

          .detail-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .detail-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            font-weight: 700;
            color: #0f172a;
            font-size: 0.95rem;
          }

          .detail-value {
            color: #475569;
            font-size: 0.95rem;
          }

          .amount-badge {
            padding: 8px 12px;
            border-radius: 12px;
            font-weight: 700;
            display: inline-block;
          }

          .no-records {
            text-align: center;
            padding: 48px 24px;
            color: #64748b;
          }

          .no-records-icon {
            font-size: 3rem;
            margin-bottom: 16px;
            opacity: 0.4;
          }

          @media (max-width: 1199px) {
            .payment-header {
              flex-direction: column;
            }

            .detail-row {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 767px) {
            .payment-shell {
              padding: 16px;
              margin-left: 0;
            }

            .stat-card {
              min-height: auto;
            }
          }

          .payment-content {
            position: relative;
            z-index: 1;
          }
        `}</style>

        <div className="payment-content">
          <Container fluid>
          {/* <div className="payment-header">
            <div>
              <h1 className="payment-heading">Payment History</h1>
              <p className="payment-subtitle">
                Track all payments across vendors, agreements, deeds, and records. Monitor payment status, amounts, and transaction history with detailed filtering and insights.
              </p>
            </div>
          </div> */}

          {/* Summary Statistics */}
          <Row className="g-4 mb-4">
            <Col xl={3} lg={6} md={6}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="stat-icon" style={{ background: '#0ea5e9' }}>
                      <FontAwesomeIcon icon={faFileAlt} />
                    </div>
                    <p className="stat-label" style={{ margin: 0 }}>Total Records</p>
                  </div>
                  <h2 className="stat-value">{totalCount}</h2>
                </Card>
              </motion.div>
            </Col>
            <Col xl={3} lg={6} md={6}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="stat-icon" style={{ background: '#f59e0b' }}>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <p className="stat-label" style={{ margin: 0 }}>Pending Payments</p>
                  </div>
                  <h2 className="stat-value">{pendingCount}</h2>
                </Card>
              </motion.div>
            </Col>
            <Col xl={3} lg={6} md={6}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="stat-icon" style={{ background: '#10b981' }}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <p className="stat-label" style={{ margin: 0 }}>Paid Amount</p>
                  </div>
                  <h2 className="stat-value">₹{(totalPaid / 100000).toFixed(1)}L</h2>
                </Card>
              </motion.div>
            </Col>
            <Col xl={3} lg={6} md={6}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="stat-icon" style={{ background: '#ef4444' }}>
                      <FontAwesomeIcon icon={faMoneyCheckAlt} />
                    </div>
                    <p className="stat-label" style={{ margin: 0 }}>Pending Amount</p>
                  </div>
                  <h2 className="stat-value">₹{(totalPending / 100000).toFixed(1)}L</h2>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Filters */}
          <Card className="filter-card mb-4">
            <Row className="g-3">
              <Col lg={3}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                  <label className="filter-label">
                    <FontAwesomeIcon icon={faSearch} className="me-2" style={{ color: '#0ea5e9' }} />
                    Search Records
                  </label>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Form.Control
                      className="filter-input"
                      placeholder="Customer/Vendor/Ref..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={2}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label className="filter-label">Record Type</label>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Form.Select
                      className="filter-select"
                      value={filters.recordType}
                      onChange={e => setFilters(prev => ({ ...prev, recordType: e.target.value }))}
                    >
                      <option value="">All Types</option>
                      <option value="EC">EC</option>
                      <option value="Nagal">Nagal</option>
                      <option value="Agreement">Agreement</option>
                      <option value="Deed">Deed</option>
                    </Form.Select>
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={2}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <label className="filter-label">Payment Status</label>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Form.Select
                      className="filter-select"
                      value={filters.status}
                      onChange={e => setFilters(prev => ({ ...prev, status: e.target.value }))}
                    >
                      <option value="">All Status</option>
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                    </Form.Select>
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={2}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label className="filter-label">Vendor</label>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Form.Select
                      className="filter-select"
                      value={filters.vendor}
                      onChange={e => setFilters(prev => ({ ...prev, vendor: e.target.value }))}
                    >
                      <option value="">All Vendors</option>
                      {[...new Set(paymentData.map(item => item.vendor))].map(vendor => (
                        <option key={vendor} value={vendor}>{vendor}</option>
                      ))}
                    </Form.Select>
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={2}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <label className="filter-label">Date</label>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Form.Control
                      type="date"
                      className="filter-input"
                      value={filters.date}
                      onChange={e => setFilters(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={1} className="d-flex align-items-end">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '100%' }}
                >
                  <Button
                    variant="outline-secondary"
                    className="w-100"
                    style={{
                      fontWeight: 700,
                      borderColor: '#cbd5e1',
                      color: '#475569',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px'
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = '#64748b';
                      e.target.style.color = '#0f172a';
                      e.target.style.background = 'rgba(15,23,42,0.05)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.color = '#475569';
                      e.target.style.background = 'transparent';
                    }}
                    onClick={() => {
                      setFilters({ recordType: "", status: "", vendor: "", date: "" });
                      setSearchTerm("");
                    }}
                  >
                    Reset
                  </Button>
                </motion.div>
              </Col>
            </Row>
          </Card>

          {/* Payment Table */}
          <Card className="table-card">
            <Card.Body style={{ padding: 0 }}>
              {filteredData.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="no-records"
                >
                  <div className="no-records-icon">
                    <FontAwesomeIcon icon={faHistory} />
                  </div>
                  <h5>No records found</h5>
                  <p>Try adjusting your filters or search criteria</p>
                </motion.div>
              ) : (
                <Table responsive hover className="mb-0">
                  <thead>
                    <tr>
                      <th
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => handleSort('date')}
                      >
                        Date {sortConfig.key === 'date' && (
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="sort-icon"
                          >
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} />
                          </motion.span>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => handleSort('recordType')}
                      >
                        Type {sortConfig.key === 'recordType' && (
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="sort-icon"
                          >
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} />
                          </motion.span>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => handleSort('recordNo')}
                      >
                        Record {sortConfig.key === 'recordNo' && (
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="sort-icon"
                          >
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} />
                          </motion.span>
                        )}
                      </th>
                      <th>Customer</th>
                      <th>Vendor</th>
                      <th
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => handleSort('total')}
                      >
                        Amount {sortConfig.key === 'total' && (
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="sort-icon"
                          >
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} />
                          </motion.span>
                        )}
                      </th>
                      <th
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                        onClick={() => handleSort('status')}
                      >
                        Status {sortConfig.key === 'status' && (
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="sort-icon"
                          >
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} />
                          </motion.span>
                        )}
                      </th>
                      <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, idx) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <td>
                          <motion.span whileHover={{ color: '#0ea5e9' }}>
                            {new Date(item.date).toLocaleDateString('en-GB')}
                          </motion.span>
                        </td>
                        <td>
                          <motion.div whileHover={{ scale: 1.08 }}>
                            <Badge bg="light" text="dark" style={{ fontWeight: 700, borderRadius: '8px' }}>
                              {item.recordType}
                            </Badge>
                          </motion.div>
                        </td>
                        <td style={{ fontWeight: 700, color: '#0f172a' }}>{item.recordNo}</td>
                        <td>{item.customerName}</td>
                        <td style={{ color: '#475569' }}>{item.vendor}</td>
                        <td style={{ fontWeight: 800, color: '#10b981', fontSize: '0.98rem' }}>₹{item.total.toLocaleString()}</td>
                        <td>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            {item.status === "Paid" ? (
                              <Badge bg="success" style={{ fontWeight: 700, borderRadius: '8px' }}>✓ Paid</Badge>
                            ) : (
                              <Badge bg="warning" text="dark" style={{ fontWeight: 700, borderRadius: '8px' }}>⧗ Pending</Badge>
                            )}
                          </motion.div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="sm"
                              variant="outline-primary"
                              onClick={() => handleView(item)}
                              style={{
                                borderRadius: '10px',
                                padding: '6px 12px',
                                fontWeight: 700,
                                border: '2px solid #0ea5e9',
                                color: '#0ea5e9',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={e => {
                                e.target.style.background = '#0ea5e9';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={e => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#0ea5e9';
                              }}
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </Button>
                          </motion.div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Container>
        </div>

        {/* View Details Modal */}
        <AnimatePresence>
          {showViewModal && currentPayment && (
            <Modal show onHide={() => setShowViewModal(false)} centered className="view-modal" size="lg">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    <FontAwesomeIcon icon={faFileAlt} className="me-3" style={{ color: '#0ea5e9' }} />
                    Payment Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* Header Info */}
                  <div className="detail-section" style={{ borderLeftColor: '#0ea5e9' }}>
                    <div className="detail-row">
                      <div className="detail-item">
                        <span className="detail-label">Date</span>
                        <span className="detail-value">{new Date(currentPayment.date).toLocaleDateString('en-GB')}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Record Type</span>
                        <span className="detail-value" style={{ fontWeight: 600 }}>{currentPayment.recordType}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Record No</span>
                        <span className="detail-value" style={{ fontWeight: 600 }}>{currentPayment.recordNo}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Status</span>
                        <div>
                          {currentPayment.status === "Paid" ? (
                            <Badge bg="success">Paid</Badge>
                          ) : (
                            <Badge bg="warning" text="dark">Pending</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer & Vendor Info */}
                  <div className="detail-section" style={{ borderLeftColor: '#10b981' }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 16, color: '#0f172a' }}>Customer & Vendor Details</h6>
                    <div className="detail-row">
                      <div className="detail-item">
                        <span className="detail-label">Customer Name</span>
                        <span className="detail-value">{currentPayment.customerName}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Vendor</span>
                        <span className="detail-value">{currentPayment.vendor}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Office</span>
                        <span className="detail-value">{currentPayment.office}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Nagar</span>
                        <span className="detail-value">{currentPayment.nagar}</span>
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="detail-section" style={{ borderLeftColor: '#f59e0b' }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 16, color: '#0f172a' }}>Property Details</h6>
                    <div className="detail-row">
                      <div className="detail-item">
                        <span className="detail-label">TP No</span>
                        <span className="detail-value">{currentPayment.tpNo}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Plot No</span>
                        <span className="detail-value">{currentPayment.plotNo}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Reference</span>
                        <span className="detail-value">{currentPayment.reference}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Deed Type</span>
                        <span className="detail-value">{currentPayment.deed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Document & Field Details */}
                  <div className="detail-section" style={{ borderLeftColor: '#8b5cf6' }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 16, color: '#0f172a' }}>Document & Field Information</h6>
                    <div className="detail-row">
                      <div className="detail-item">
                        <span className="detail-label">Document No</span>
                        <span className="detail-value">{currentPayment.docNo}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Field Visit</span>
                        <Badge bg={currentPayment.fieldVisit === "Yes" ? "success" : "secondary"}>
                          {currentPayment.fieldVisit}
                        </Badge>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Return Document</span>
                        <Badge bg={currentPayment.returnDocument === "Yes" ? "success" : "secondary"}>
                          {currentPayment.returnDocument}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Payment Breakdown */}
                  <div className="detail-section" style={{ borderLeftColor: '#ef4444' }}>
                    <h6 style={{ fontWeight: 700, marginBottom: 16, color: '#0f172a' }}>Payment Breakdown</h6>
                    <div className="detail-row">
                      <div className="detail-item">
                        <span className="detail-label">Base Amount</span>
                        <span className="detail-value" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                          ₹{currentPayment.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Commission</span>
                        <span className="detail-value" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#10b981' }}>
                          + ₹{currentPayment.commission.toLocaleString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Others</span>
                        <span className="detail-value" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0ea5e9' }}>
                          + ₹{currentPayment.others.toLocaleString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Total Amount</span>
                        <span className="amount-badge" style={{ background: '#fef3c7', color: '#d97706', fontSize: '1.15rem' }}>
                          ₹{currentPayment.total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: '1px solid rgba(148,163,184,0.15)', padding: '16px 24px' }}>
                  <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                    <FontAwesomeIcon icon={faTimes} className="me-2" /> Close
                  </Button>
                </Modal.Footer>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Payment;
