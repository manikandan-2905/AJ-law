import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, InputGroup, Table, Card, Row, Col, Alert, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus, faEye, faEdit, faTrash, faSearch,
  faFileAlt, faCheckCircle, faClock, faCalendarCheck, faCreditCard,
  faMapMarkerAlt, faBuilding, faUser, faMoneyBillWave,
  faArrowUp, faArrowDown, faFilter, faTimes
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

// Enhanced dummy data for EC records
const dummyECData = [
  {
    id: 1,
    date: "2024-10-01",
    ecNo: "EC001",
    vendor: "Vendor A",
    customerName: "John Doe",
    office: "Office 1",
    nagar: "Nagar 1",
    surveyNo: "12345",
    amount: 50000,
    commission: 5000,
    others: 1000,
    total: 56000,
    status: "Paid"
  },
  {
    id: 2,
    date: "2024-10-05",
    ecNo: "EC002",
    vendor: "Vendor B",
    customerName: "Jane Smith",
    office: "Office 2",
    nagar: "Nagar 2",
    surveyNo: "67890",
    amount: 75000,
    commission: 7500,
    others: 2000,
    total: 84500,
    status: "Pending"
  },
  {
    id: 3,
    date: "2024-10-10",
    ecNo: "EC003",
    vendor: "Vendor C",
    customerName: "Bob Johnson",
    office: "Office 1",
    nagar: "Nagar 3",
    surveyNo: "54321",
    amount: 60000,
    commission: 6000,
    others: 1500,
    total: 67500,
    status: "Paid"
  },
  {
    id: 4,
    date: "2024-10-15",
    ecNo: "EC004",
    vendor: "Vendor D",
    customerName: "Alice Williams",
    office: "Office 3",
    nagar: "Nagar 4",
    surveyNo: "98765",
    amount: 45000,
    commission: 4500,
    others: 800,
    total: 50300,
    status: "Pending"
  },
  {
    id: 5,
    date: "2024-10-20",
    ecNo: "EC005",
    vendor: "Vendor A",
    customerName: "Charlie Brown",
    office: "Office 2",
    nagar: "Nagar 1",
    surveyNo: "11111",
    amount: 80000,
    commission: 8000,
    others: 2500,
    total: 90500,
    status: "Paid"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    transition: { duration: 0.2 }
  }
};

const Ec = () => {
  const [activeTab, setActiveTab] = useState("ec");
  const [ecData, setEcData] = useState(dummyECData);
  const [filteredData, setFilteredData] = useState(dummyECData);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEC, setCurrentEC] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ vendor: "", date: "" });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    ecNo: "",
    vendor: "",
    customerName: "",
    office: "",
    nagar: "",
    surveyNo: "",
    amount: "",
    commission: "",
    others: ""
  });

  // Calculate totals for cards
  const totalEC = ecData.length;
  const pendingEC = ecData.filter(ec => ec.status === "Pending").length;
  const thisMonthEC = ecData.filter(ec => new Date(ec.date).getMonth() === new Date().getMonth()).length;
  const paidEC = ecData.filter(ec => ec.status === "Paid").length;

  // Filter and sort data
  useEffect(() => {
    let filtered = ecData.filter(ec =>
      (ec.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
       ec.nagar.toLowerCase().includes(searchTerm.toLowerCase()) ||
       ec.surveyNo.includes(searchTerm) ||
       ec.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       ec.ecNo.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filters.vendor) filtered = filtered.filter(ec => ec.vendor === filters.vendor);
    if (filters.date) filtered = filtered.filter(ec => ec.date === filters.date);

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(filtered);
  }, [ecData, searchTerm, filters, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleAddNew = () => {
    setIsEdit(false);
    setCurrentEC(null);
    setFormData({
      date: "",
      ecNo: "",
      vendor: "",
      customerName: "",
      office: "",
      nagar: "",
      surveyNo: "",
      amount: "",
      commission: "",
      others: ""
    });
    setShowModal(true);
  };

  const handleEdit = (ec) => {
    setIsEdit(true);
    setCurrentEC(ec);
    setFormData({
      date: ec.date,
      ecNo: ec.ecNo,
      vendor: ec.vendor,
      customerName: ec.customerName,
      office: ec.office,
      nagar: ec.nagar,
      surveyNo: ec.surveyNo,
      amount: ec.amount.toString(),
      commission: ec.commission.toString(),
      others: ec.others.toString()
    });
    setShowModal(true);
  };

  const handleView = (ec) => {
    setCurrentEC(ec);
    setShowViewModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this EC?")) {
      setEcData(ecData.filter(ec => ec.id !== id));
    }
  };

  const handleSave = () => {
    const total = (parseFloat(formData.amount) || 0) + (parseFloat(formData.commission) || 0) + (parseFloat(formData.others) || 0);
    const newEC = {
      ...formData,
      id: isEdit ? currentEC.id : Date.now(),
      total,
      status: "Pending"
    };

    if (isEdit) {
      setEcData(ecData.map(ec => ec.id === currentEC.id ? newEC : ec));
    } else {
      setEcData([...ecData, newEC]);
    }
    setShowModal(false);
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setFilters({ vendor: "", date: "" });
    setSearchTerm("");
  };

  const getStatusBadge = (status) => {
    const variants = {
      Paid: { bg: "#10b981", icon: faCheckCircle },
      Pending: { bg: "#f59e0b", icon: faClock }
    };
    const config = variants[status] || variants.Pending;
    return (
      <Badge style={{
        background: `linear-gradient(135deg, ${config.bg} 0%, ${config.bg}dd 100%)`,
        border: "none",
        padding: "8px 16px",
        borderRadius: "20px",
        fontWeight: "600",
        fontSize: "0.85rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        boxShadow: `0 4px 15px ${config.bg}40`
      }}>
        <FontAwesomeIcon icon={config.icon} size="sm" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="ec-page">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .ec-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .ec-page::before {
            content: "📋";
            position: fixed;
            font-size: 300px;
            opacity: 0.04;
            top: 50%;
            right: -80px;
            z-index: 0;
            transform: rotate(30deg) translateY(-50%);
            pointer-events: none;
          }

          .ec-page::after {
            content: "";
            position: fixed;
            bottom: 0;
            left: 50%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-50%, 50%);
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
            position: relative;
            z-index: 1;
          }
          
          /* Glassmorphism Cards */
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.07),
              0 2px 8px rgba(31, 38, 135, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .glass-card:hover {
            box-shadow: 
              0 20px 60px rgba(31, 38, 135, 0.12),
              0 4px 12px rgba(31, 38, 135, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          /* Neumorphic Stats Cards */
          .stat-card {
            background: #0f172a;
            border-radius: 24px;
            padding: 16px 12px; /* Reduced padding */
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 
              20px 20px 60px rgba(0,0,0,0.5),
              -20px -20px 60px rgba(251,191,36,0.1);
            transition: all 0.4s ease;
            color: white;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          }
          
          .stat-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            box-shadow: 
              8px 8px 16px rgba(0,0,0,0.5),
              -8px -8px 16px rgba(251,191,36,0.2);
            transition: all 0.3s ease;
          }
          
          .stat-card:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 
              12px 12px 24px rgba(0,0,0,0.5),
              -12px -12px 24px rgba(251,191,36,0.2);
          }
          
          .stat-icon {
            font-size: 1.5rem;
            color: #0f172a;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
          }
          
          .stat-label {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          
          /* Modern Search Bar */
          .search-container {
            position: relative;
          }
          
          .search-bar {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 14px 20px 14px 50px;
            color: #334155;
            font-size: 0.95rem;
            font-weight: 500;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: none;
          }
          
          .search-bar:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.15);
          }
          
          .search-bar::placeholder {
            color: #94a3b8;
          }
          
          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          /* Neumorphic Filter Selects */
          .filter-select {
            background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
            border: 2px solid #0f172a;
            border-radius: 16px;
            padding: 12px 16px;
            color: #475569;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: none;
            transition: all 0.3s ease;
          }
          
          .filter-select:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
          }
          
          /* Gold Gradient Button */
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none;
            border-radius: 16px;
            padding: 14px 28px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
            box-shadow: 
              0 4px 15px rgba(217, 119, 6, 0.3),
              0 8px 25px rgba(217, 119, 6, 0.2);
            transition: all 0.3s ease;
          }
          
          .btn-gold::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 25px rgba(217, 119, 6, 0.4),
              0 12px 35px rgba(217, 119, 6, 0.3);
          }
          
          .btn-gold:hover::before {
            left: 100%;
          }
          
          .btn-gold:active {
            transform: translateY(0);
            box-shadow: 
              0 2px 10px rgba(217, 119, 6, 0.3);
          }
          
          /* Modern Table */
          .table-modern {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 
              0 4px 20px rgba(31, 38, 135, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          
          .table-modern thead th {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
            border: none;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 18px 16px;
            position: sticky;
            top: 0;
            z-index: 10;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
          }
          
          .table-modern thead th:hover {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: #fbbf24;
          }
          
          .table-modern tbody tr {
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          }
          
          .table-modern tbody tr:hover {
            background: rgba(251, 191, 36, 0.05);
            transform: scale(1.005);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          
          .table-modern tbody td {
            color: #334155;
            border: none;
            padding: 16px;
            font-weight: 500;
            vertical-align: middle;
            text-align: left;
          }
          
          .table-modern tbody td:last-child {
            text-align: center;
          }
          
          .table-modern thead th:last-child {
            text-align: center;
          }
          
          /* Action Buttons */
          .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            color: #64748b;
            margin: 0 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .action-btn.view:hover {
            color: #3b82f6;
            background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%);
          }
          
          .action-btn.edit:hover {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          .action-btn.delete:hover {
            color: #ef4444;
            background: linear-gradient(145deg, #fef2f2 0%, #fee2e2 100%);
          }
          
          /* Modern Modal */
          .modal-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 24px;
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            overflow: hidden;
          }
          
          .modal-header {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: #1e293b;
            font-size: 1.5rem;
          }
          
          .modal-body {
            padding: 28px;
          }
          
          /* Neumorphic Form Inputs */
          .form-control-modern {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid transparent;
            border-radius: 16px;
            padding: 14px 18px;
            color: #334155;
            font-weight: 500;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
            transition: all 0.3s ease;
          }
          
          .form-control-modern:focus {
            outline: none;
            border-color: #fbbf24;
            box-shadow: 
              0 0 0 4px rgba(251, 191, 36, 0.15),
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          .form-label-modern {
            font-weight: 600;
            color: #475569;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          /* Total Alert */
          .total-alert {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: none;
            border-radius: 16px;
            padding: 20px;
            font-weight: 700;
            color: #92400e;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px #d1d5db,
              -6px -6px 12px #ffffff;
          }
          
          /* Page Title */
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .page-subtitle {
            color: #64748b;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 32px;
          }
          
          /* Filter Toggle Button */
          .filter-toggle {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: none;
            border-radius: 12px;
            padding: 12px 16px;
            color: #64748b;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 
              4px 4px 8px #d1d5db,
              -4px -4px 8px #ffffff;
            transition: all 0.3s ease;
          }
          
          .filter-toggle:hover {
            color: #f59e0b;
            transform: translateY(-1px);
          }
          
          .filter-toggle.active {
            color: #f59e0b;
            background: linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%);
          }
          
          /* Responsive */
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 1.6rem;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          }
        `}</style>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          {/* <motion.div variants={itemVariants}>
            <h1 className="page-title">Land EC Management</h1>
            <p className="page-subtitle">Manage and track all your land encumbrance certificates with elegance</p>
          </motion.div> */}

          {/* Stats Cards */}
          <Row className="mb-4">
            <Col lg={3} md={6} className="mb-3">
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faFileAlt} className="stat-icon" />
                    </div>
                    <div className="stat-number">{totalEC}</div>
                    <div className="stat-label">Total EC Records</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <motion.div variants={itemVariants} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faClock} className="stat-icon" />
                    </div>
                    <div className="stat-number">{pendingEC}</div>
                    <div className="stat-label">Pending EC</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <motion.div variants={itemVariants} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faCalendarCheck} className="stat-icon" />
                    </div>
                    <div className="stat-number">{thisMonthEC}</div>
                    <div className="stat-label">This Month</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <motion.div variants={itemVariants} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faCreditCard} className="stat-icon" />
                    </div>
                    <div className="stat-number">{paidEC}</div>
                    <div className="stat-label">Paid EC</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          {/* EC List Table */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                    EC Records
                  </h4>
                  <Badge bg="light" text="dark" style={{ fontSize: '0.9rem', padding: '8px 16px', borderRadius: '12px' }}>
                    Showing {filteredData.length} of {ecData.length} records
                  </Badge>
                </div>

                {/* Search, Filters, and Add Button */}
                <Row className="align-items-center g-3 mb-4">
                  <Col lg={3} md={6}>
                    <div className="search-container">
                      <FontAwesomeIcon icon={faSearch} className="search-icon" />
                      <Form.Control
                        className="search-bar"
                        placeholder="Search by Vendor, Nagar, Survey No..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col lg={2} md={6}>
                    <Form.Select
                      className="filter-select"
                      value={filters.vendor}
                      onChange={(e) => handleFilterChange("vendor", e.target.value)}
                    >
                      <option value="">All Vendors</option>
                      {[...new Set(ecData.map(ec => ec.vendor))].map(vendor => (
                        <option key={vendor} value={vendor}>{vendor}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col lg={2} md={6}>
                    <Form.Control
                      type="date"
                      className="filter-select"
                      value={filters.date}
                      onChange={(e) => handleFilterChange("date", e.target.value)}
                    />
                  </Col>
                  <Col lg={2} md={6}>
                    <button 
                      className="filter-toggle w-100"
                      onClick={clearFilters}
                    >
                      <FontAwesomeIcon icon={faTimes} className="me-2" />
                      Clear
                    </button>
                  </Col>
                  <Col lg={3} md={12} className="text-lg-end">
                    <Button className="btn-gold" onClick={handleAddNew}>
                      <FontAwesomeIcon icon={faPlus} className="me-2" /> 
                      Add New EC
                    </Button>
                  </Col>
                </Row>
                
                <div className="table-responsive">
                  <Table className="table-modern">
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('date')}>
                          Date {sortConfig.key === 'date' && (
                            <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} size="sm" className="ms-1" />
                          )}
                        </th>
                        <th onClick={() => handleSort('ecNo')}>EC No</th>
                        <th onClick={() => handleSort('vendor')}>Vendor</th>
                        <th onClick={() => handleSort('customerName')}>Customer</th>
                        <th onClick={() => handleSort('office')}>Office</th>
                        <th onClick={() => handleSort('nagar')}>Nagar</th>
                        <th onClick={() => handleSort('surveyNo')}>Survey No</th>
                        <th onClick={() => handleSort('total')}>Total (₹)</th>
                        <th onClick={() => handleSort('status')}>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="popLayout">
                        {filteredData.map((ec, index) => (
                          <motion.tr
                            key={ec.id}
                            variants={tableRowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: index * 0.05 }}
                            layout
                          >
                            <td>{new Date(ec.date).toLocaleDateString('en-GB')}</td>
                            <td><strong>{ec.ecNo}</strong></td>
                            <td>
                              <Badge bg="light" text="dark" style={{ fontWeight: 500 }}>
                                {ec.vendor}
                              </Badge>
                            </td>
                            <td>
                              <FontAwesomeIcon icon={faUser} className="me-2 text-muted" size="sm" />
                              {ec.customerName}
                            </td>
                            <td>
                              <FontAwesomeIcon icon={faBuilding} className="me-2 text-muted" size="sm" />
                              {ec.office}
                            </td>
                            <td>
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" size="sm" />
                              {ec.nagar}
                            </td>
                            <td>{ec.surveyNo}</td>
                            <td>
                              <strong style={{ color: '#059669' }}>
                                <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" size="sm" />
                                ₹{ec.total.toLocaleString()}
                              </strong>
                            </td>
                            <td>{getStatusBadge(ec.status)}</td>
                            <td>
                              <button className="action-btn view" onClick={() => handleView(ec)} title="View">
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className="action-btn edit" onClick={() => handleEdit(ec)} title="Edit">
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button className="action-btn delete" onClick={() => handleDelete(ec.id)} title="Delete">
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </Table>
                </div>
                
                {filteredData.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-5"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
                    <h5 style={{ color: '#64748b', fontWeight: 600 }}>No records found</h5>
                    <p style={{ color: '#94a3b8' }}>Try adjusting your search or filters</p>
                  </motion.div>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>

        {/* View Modal */}
        <AnimatePresence>
          {showViewModal && currentEC && (
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered size="lg">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton className="modal-header">
                  <Modal.Title className="modal-title">
                    👁️ View EC Record
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Date</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={new Date(currentEC.date).toLocaleDateString('en-GB')}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">EC Number</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.ecNo}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Vendor</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.vendor}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Customer Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.customerName}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Office</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.office}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Nagar</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.nagar}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Survey Number</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentEC.surveyNo}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Status</Form.Label>
                        <div className="mt-2">
                          {getStatusBadge(currentEC.status)}
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Amount (₹)</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={`₹${currentEC.amount.toLocaleString()}`}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Commission (₹)</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={`₹${currentEC.commission.toLocaleString()}`}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Others (₹)</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={`₹${currentEC.others.toLocaleString()}`}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="mt-4">
                    <Col>
                      <Alert className="total-alert">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                        Total Amount: ₹{currentEC.total.toLocaleString()}
                      </Alert>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer className="border-0 px-4 pb-4">
                  <Button 
                    className="btn-gold"
                    onClick={() => setShowViewModal(false)}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

        {/* Add/Edit Modal */}
        <AnimatePresence>
          {showModal && (
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton className="modal-header">
                  <Modal.Title className="modal-title">
                    {isEdit ? "✏️ Edit EC Record" : "➕ Add New EC Record"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Date</Form.Label>
                          <Form.Control
                            type="date"
                            className="form-control-modern"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">EC Number</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter EC Number"
                            value={formData.ecNo}
                            onChange={(e) => setFormData({ ...formData, ecNo: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Vendor</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter vendor name"
                            value={formData.vendor}
                            onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Customer Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter customer name"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Office</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter office"
                            value={formData.office}
                            onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Nagar</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter nagar"
                            value={formData.nagar}
                            onChange={(e) => setFormData({ ...formData, nagar: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Survey Number</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter survey number"
                            value={formData.surveyNo}
                            onChange={(e) => setFormData({ ...formData, surveyNo: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Amount (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            className="form-control-modern"
                            placeholder="0.00"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Commission (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            className="form-control-modern"
                            placeholder="0.00"
                            value={formData.commission}
                            onChange={(e) => setFormData({ ...formData, commission: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Others (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            className="form-control-modern"
                            placeholder="0.00"
                            value={formData.others}
                            onChange={(e) => setFormData({ ...formData, others: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="mt-4">
                      <Col>
                        <Alert className="total-alert">
                          <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                          Total Amount: ₹{((parseFloat(formData.amount) || 0) + (parseFloat(formData.commission) || 0) + (parseFloat(formData.others) || 0)).toLocaleString()}
                        </Alert>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="border-0 px-4 pb-4">
                  <Button 
                    variant="light" 
                    onClick={() => setShowModal(false)}
                    style={{
                      borderRadius: '16px',
                      padding: '12px 24px',
                      fontWeight: 600,
                      boxShadow: '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff'
                    }}
                  >
                    Cancel
                  </Button>
                  <Button className="btn-gold" onClick={handleSave}>
                    <FontAwesomeIcon icon={isEdit ? faEdit : faPlus} className="me-2" />
                    {isEdit ? "Update Record" : "Add Record"}
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

export default Ec;