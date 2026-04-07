import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, InputGroup, Table, Card, Row, Col, Alert, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus, faEye, faEdit, faTrash, faSearch,
  faFileAlt, faCheckCircle, faClock, faCalendarCheck, faCreditCard,
  faMapMarkerAlt, faBuilding, faUser, faMoneyBillWave,
  faArrowUp, faArrowDown, faFilter, faTimes, faFileContract
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

// Enhanced dummy data for Deed records
const dummyDeedData = [
  {
    id: 1,
    date: "2024-10-01",
    vendor: "Vendor A",
    customerName: "John Doe",
    reference: "Vendor A",
    deed: "Sale Deed",
    tpNo: "TP001",
    office: "Office 1",
    plotNo: "12345",
    nagar: "Nagar 1",
    fieldVisit: "Yes",
    docNo: "DOC001",
    returnDocument: "Yes",
    editFee: 5000,
    stamp: 10000,
    others: 1000,
    totalFee: 16000,
    writingFee: 2000,
    ddCommission: 500,
    status: "Completed"
  },
  {
    id: 2,
    date: "2024-10-05",
    vendor: "Normal Customer",
    customerName: "Jane Smith",
    reference: "Manual Entry",
    deed: "Settlement",
    tpNo: "TP002",
    office: "Office 2",
    plotNo: "67890",
    nagar: "Nagar 2",
    fieldVisit: "No",
    docNo: "DOC002",
    returnDocument: "No",
    editFee: 7500,
    stamp: 15000,
    others: 2000,
    totalFee: 24500,
    writingFee: 3000,
    ddCommission: 750,
    status: "Pending"
  },
  {
    id: 3,
    date: "2024-10-10",
    vendor: "Vendor C",
    customerName: "Bob Johnson",
    reference: "Vendor C",
    deed: "Power",
    tpNo: "TP003",
    office: "Office 1",
    plotNo: "54321",
    nagar: "Nagar 3",
    fieldVisit: "Yes",
    docNo: "DOC003",
    returnDocument: "Yes",
    editFee: 6000,
    stamp: 12000,
    others: 1500,
    totalFee: 19500,
    writingFee: 2500,
    ddCommission: 600,
    status: "Completed"
  },
  {
    id: 4,
    date: "2024-10-15",
    vendor: "Vendor D",
    customerName: "Alice Williams",
    reference: "Manual Entry",
    deed: "Release",
    tpNo: "TP004",
    office: "Office 3",
    plotNo: "98765",
    nagar: "Nagar 4",
    fieldVisit: "No",
    docNo: "DOC004",
    returnDocument: "Yes",
    editFee: 4500,
    stamp: 9000,
    others: 800,
    totalFee: 14300,
    writingFee: 1800,
    ddCommission: 450,
    status: "Pending"
  },
  {
    id: 5,
    date: "2024-10-20",
    vendor: "Vendor A",
    customerName: "Charlie Brown",
    reference: "Vendor A",
    deed: "Rectification",
    tpNo: "TP005",
    office: "Office 2",
    plotNo: "11111",
    nagar: "Nagar 1",
    fieldVisit: "Yes",
    docNo: "DOC005",
    returnDocument: "No",
    editFee: 8000,
    stamp: 16000,
    others: 2500,
    totalFee: 26500,
    writingFee: 4000,
    ddCommission: 800,
    status: "Completed"
  }
];

// Dummy vendor data for dropdown
const dummyVendorList = [
  { id: 1, name: "Vendor A" },
  { id: 2, name: "Vendor B" },
  { id: 3, name: "Vendor C" },
  { id: 4, name: "Vendor D" },
  { id: 5, name: "Vendor E" }
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

const Deed = () => {
  const [activeTab, setActiveTab] = useState("deed");
  const [deedData, setDeedData] = useState(dummyDeedData);
  const [filteredData, setFilteredData] = useState(dummyDeedData);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentDeed, setCurrentDeed] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ vendor: "", deed: "", status: "" });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [referenceType, setReferenceType] = useState("vendor");

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    vendor: "",
    customerName: "",
    reference: "",
    deed: "",
    tpNo: "",
    office: "",
    plotNo: "",
    nagar: "",
    fieldVisit: "No",
    docNo: "",
    returnDocument: "No",
    editFee: "",
    stamp: "",
    others: "",
    totalFee: "",
    writingFee: "",
    ddCommission: ""
  });

  // Calculate totals for cards
  const totalDeeds = deedData.length;
  const completedDeeds = deedData.filter(deed => deed.status === "Completed").length;
  const pendingDeeds = deedData.filter(deed => deed.status === "Pending").length;
  const thisMonthDeeds = deedData.filter(deed => new Date(deed.date).getMonth() === new Date().getMonth()).length;

  // Filter and sort data
  useEffect(() => {
    let filtered = deedData.filter(deed =>
      (deed.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
       deed.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       deed.tpNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
       deed.deed.toLowerCase().includes(searchTerm.toLowerCase()) ||
       deed.nagar.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filters.vendor) filtered = filtered.filter(deed => deed.vendor === filters.vendor);
    if (filters.deed) filtered = filtered.filter(deed => deed.deed === filters.deed);
    if (filters.status) filtered = filtered.filter(deed => deed.status === filters.status);

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(filtered);
  }, [deedData, searchTerm, filters, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleAddNew = () => {
    setIsEdit(false);
    setCurrentDeed(null);
    setReferenceType("vendor");
    setFormData({
      date: "",
      vendor: "",
      customerName: "",
      reference: "",
      deed: "",
      tpNo: "",
      office: "",
      plotNo: "",
      nagar: "",
      fieldVisit: "No",
      docNo: "",
      returnDocument: "No",
      editFee: "",
      stamp: "",
      others: "",
      totalFee: "",
      writingFee: "",
      ddCommission: ""
    });
    setShowModal(true);
  };

  const handleEdit = (deed) => {
    setIsEdit(true);
    setCurrentDeed(deed);
    setReferenceType(deed.reference === "Manual Entry" ? "manual" : "vendor");
    setFormData({
      date: deed.date,
      vendor: deed.vendor,
      customerName: deed.customerName,
      reference: deed.reference,
      deed: deed.deed,
      tpNo: deed.tpNo,
      office: deed.office,
      plotNo: deed.plotNo,
      nagar: deed.nagar,
      fieldVisit: deed.fieldVisit,
      docNo: deed.docNo,
      returnDocument: deed.returnDocument,
      editFee: deed.editFee.toString(),
      stamp: deed.stamp.toString(),
      others: deed.others.toString(),
      totalFee: deed.totalFee.toString(),
      writingFee: deed.writingFee.toString(),
      ddCommission: deed.ddCommission.toString()
    });
    setShowModal(true);
  };

  const handleView = (deed) => {
    setCurrentDeed(deed);
    setShowViewModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this deed?")) {
      setDeedData(deedData.filter(deed => deed.id !== id));
    }
  };

  const handleSave = () => {
    const totalFee = (parseFloat(formData.editFee) || 0) + (parseFloat(formData.stamp) || 0) + (parseFloat(formData.others) || 0);
    const newDeed = {
      ...formData,
      id: isEdit ? currentDeed.id : Date.now(),
      totalFee,
      status: "Pending"
    };

    if (isEdit) {
      setDeedData(deedData.map(deed => deed.id === currentDeed.id ? newDeed : deed));
    } else {
      setDeedData([...deedData, newDeed]);
    }
    setShowModal(false);
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setFilters({ vendor: "", deed: "", status: "" });
    setSearchTerm("");
  };

  const getStatusBadge = (status) => {
    const variants = {
      Completed: { bg: "#10b981", icon: faCheckCircle },
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

  const deedTypes = [
    "Sale Deed", "Settlement", "Power", "Release", "Rectification",
    "Participation", "Will", "MOD", "Cancel"
  ];

  return (
    <div className="deed-page">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .deed-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .deed-page::before {
            content: "📜";
            position: fixed;
            font-size: 280px;
            opacity: 0.04;
            bottom: 100px;
            right: -50px;
            z-index: 0;
            transform: rotate(-25deg);
            pointer-events: none;
          }

          .deed-page::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-30%, -30%);
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
            padding: 16px 12px;
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
                      <FontAwesomeIcon icon={faFileContract} className="stat-icon" />
                    </div>
                    <div className="stat-number">{totalDeeds}</div>
                    <div className="stat-label">Total Deeds</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <motion.div variants={itemVariants} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faCheckCircle} className="stat-icon" />
                    </div>
                    <div className="stat-number">{completedDeeds}</div>
                    <div className="stat-label">Completed</div>
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
                    <div className="stat-number">{pendingDeeds}</div>
                    <div className="stat-label">Pending</div>
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
                    <div className="stat-number">{thisMonthDeeds}</div>
                    <div className="stat-label">This Month</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          {/* Deed List Table */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                    Deed Records
                  </h4>
                  <Badge bg="light" text="dark" style={{ fontSize: '0.9rem', padding: '8px 16px', borderRadius: '12px' }}>
                    Showing {filteredData.length} of {deedData.length} deeds
                  </Badge>
                </div>

                {/* Search, Filters, and Add Button */}
                <Row className="align-items-center g-3 mb-4">
                  <Col lg={3} md={6}>
                    <div className="search-container">
                      <FontAwesomeIcon icon={faSearch} className="search-icon" />
                      <Form.Control
                        className="search-bar"
                        placeholder="Search by Vendor, Customer, TP No..."
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
                      {[...new Set(deedData.map(deed => deed.vendor))].map(vendor => (
                        <option key={vendor} value={vendor}>{vendor}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col lg={2} md={6}>
                    <Form.Select
                      className="filter-select"
                      value={filters.deed}
                      onChange={(e) => handleFilterChange("deed", e.target.value)}
                    >
                      <option value="">All Deed Types</option>
                      {deedTypes.map(deedType => (
                        <option key={deedType} value={deedType}>{deedType}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col lg={2} md={6}>
                    <Form.Select
                      className="filter-select"
                      value={filters.status}
                      onChange={(e) => handleFilterChange("status", e.target.value)}
                    >
                      <option value="">All Status</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                    </Form.Select>
                  </Col>
                  <Col lg={3} md={12} className="text-lg-end">
                    <Button className="btn-gold" onClick={handleAddNew}>
                      <FontAwesomeIcon icon={faPlus} className="me-2" /> 
                      Add New Deed
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
                        <th onClick={() => handleSort('customerName')}>Customer</th>
                        <th onClick={() => handleSort('deed')}>Deed Type</th>
                        <th onClick={() => handleSort('tpNo')}>TP No</th>
                        <th onClick={() => handleSort('nagar')}>Nagar</th>
                        <th onClick={() => handleSort('totalFee')}>Total Fee (₹)</th>
                        <th onClick={() => handleSort('status')}>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="popLayout">
                        {filteredData.map((deed, index) => (
                          <motion.tr
                            key={deed.id}
                            variants={tableRowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: index * 0.05 }}
                            layout
                          >
                            <td>{new Date(deed.date).toLocaleDateString('en-GB')}</td>
                            <td>
                              <FontAwesomeIcon icon={faUser} className="me-2 text-muted" size="sm" />
                              {deed.customerName}
                            </td>
                            <td>
                              <Badge bg="light" text="dark" style={{ fontWeight: 500 }}>
                                {deed.deed}
                              </Badge>
                            </td>
                            <td><strong>{deed.tpNo}</strong></td>
                            <td>
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" size="sm" />
                              {deed.nagar}
                            </td>
                            <td>
                              <strong style={{ color: '#059669' }}>
                                <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" size="sm" />
                                ₹{deed.totalFee.toLocaleString()}
                              </strong>
                            </td>
                            <td>{getStatusBadge(deed.status)}</td>
                            <td>
                              <button className="action-btn view" onClick={() => handleView(deed)} title="View">
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className="action-btn edit" onClick={() => handleEdit(deed)} title="Edit">
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button className="action-btn delete" onClick={() => handleDelete(deed.id)} title="Delete">
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
                    <h5 style={{ color: '#64748b', fontWeight: 600 }}>No deeds found</h5>
                    <p style={{ color: '#94a3b8' }}>Try adjusting your search or filters</p>
                  </motion.div>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>

        {/* View Modal */}
        <AnimatePresence>
          {showViewModal && currentDeed && (
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered size="xl">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton className="modal-header">
                  <Modal.Title className="modal-title">
                    <FontAwesomeIcon icon={faFileContract} className="me-3" />
                    Deed Details - {currentDeed.tpNo}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body" style={{ padding: '32px' }}>
                  {/* Status Badge */}
                  <div className="text-center mb-4">
                    {getStatusBadge(currentDeed.status)}
                  </div>

                  {/* Basic Information Card */}
                  <Card className="glass-card mb-4">
                    <Card.Header style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                      padding: '20px 24px'
                    }}>
                      <h5 className="mb-0" style={{ color: '#1e293b', fontWeight: 700 }}>
                        <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                        Basic Information
                      </h5>
                    </Card.Header>
                    <Card.Body style={{ padding: '24px' }}>
                      <Row className="g-4">
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-3">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '12px',
                              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faCalendarCheck} style={{ color: '#0f172a', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date</div>
                              <div style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 600 }}>{new Date(currentDeed.date).toLocaleDateString('en-GB')}</div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-3">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '12px',
                              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faUser} style={{ color: '#0f172a', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer</div>
                              <div style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 600 }}>{currentDeed.customerName}</div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-3">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '12px',
                              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faBuilding} style={{ color: '#0f172a', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Vendor</div>
                              <div style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 600 }}>{currentDeed.vendor}</div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex align-items-center mb-3">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '12px',
                              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faFileContract} style={{ color: '#0f172a', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Deed Type</div>
                              <div style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 600 }}>{currentDeed.deed}</div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* Property Information Card */}
                  <Card className="glass-card mb-4">
                    <Card.Header style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                      padding: '20px 24px'
                    }}>
                      <h5 className="mb-0" style={{ color: '#1e293b', fontWeight: 700 }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                        Property Information
                      </h5>
                    </Card.Header>
                    <Card.Body style={{ padding: '24px' }}>
                      <Row className="g-4">
                        <Col md={4}>
                          <div className="text-center">
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '20px',
                              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: '1.5rem' }} />
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>TP No</div>
                            <div style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700 }}>{currentDeed.tpNo}</div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="text-center">
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '20px',
                              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faBuilding} style={{ color: 'white', fontSize: '1.5rem' }} />
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Office</div>
                            <div style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700 }}>{currentDeed.office}</div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="text-center">
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '20px',
                              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: '1.5rem' }} />
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Nagar</div>
                            <div style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700 }}>{currentDeed.nagar}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col md={12}>
                          <div className="text-center">
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '20px',
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: '1.5rem' }} />
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Plot No</div>
                            <div style={{ fontSize: '1.2rem', color: '#1e293b', fontWeight: 700 }}>{currentDeed.plotNo}</div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* Process Information Card */}
                  <Card className="glass-card mb-4">
                    <Card.Header style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                      padding: '20px 24px'
                    }}>
                      <h5 className="mb-0" style={{ color: '#1e293b', fontWeight: 700 }}>
                        <FontAwesomeIcon icon={faClock} className="me-2" />
                        Process Information
                      </h5>
                    </Card.Header>
                    <Card.Body style={{ padding: '24px' }}>
                      <Row className="g-4">
                        <Col md={6}>
                          <div className="d-flex align-items-center justify-content-center p-3" style={{
                            background: currentDeed.fieldVisit === 'Yes' ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                            borderRadius: '16px',
                            border: `2px solid ${currentDeed.fieldVisit === 'Yes' ? '#16a34a' : '#dc2626'}`
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: currentDeed.fieldVisit === 'Yes' ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' : 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: `0 4px 12px ${currentDeed.fieldVisit === 'Yes' ? 'rgba(22, 163, 74, 0.3)' : 'rgba(220, 38, 38, 0.3)'}`
                            }}>
                              <FontAwesomeIcon icon={currentDeed.fieldVisit === 'Yes' ? faCheckCircle : faTimes} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Field Visit</div>
                              <div style={{ fontSize: '1.3rem', color: currentDeed.fieldVisit === 'Yes' ? '#16a34a' : '#dc2626', fontWeight: 700 }}>{currentDeed.fieldVisit}</div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex align-items-center justify-content-center p-3" style={{
                            background: currentDeed.returnDocument === 'Yes' ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                            borderRadius: '16px',
                            border: `2px solid ${currentDeed.returnDocument === 'Yes' ? '#16a34a' : '#dc2626'}`
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: currentDeed.returnDocument === 'Yes' ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' : 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '16px',
                              boxShadow: `0 4px 12px ${currentDeed.returnDocument === 'Yes' ? 'rgba(22, 163, 74, 0.3)' : 'rgba(220, 38, 38, 0.3)'}`
                            }}>
                              <FontAwesomeIcon icon={currentDeed.returnDocument === 'Yes' ? faCheckCircle : faTimes} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Return Document</div>
                              <div style={{ fontSize: '1.3rem', color: currentDeed.returnDocument === 'Yes' ? '#16a34a' : '#dc2626', fontWeight: 700 }}>{currentDeed.returnDocument}</div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col md={12}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            borderRadius: '16px',
                            border: '2px solid #0ea5e9'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faFileAlt} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Document Number</div>
                            <div style={{ fontSize: '1.3rem', color: '#0ea5e9', fontWeight: 700 }}>{currentDeed.docNo}</div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* Financial Information Card */}
                  <Card className="glass-card mb-4">
                    <Card.Header style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                      padding: '20px 24px'
                    }}>
                      <h5 className="mb-0" style={{ color: '#1e293b', fontWeight: 700 }}>
                        <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                        Financial Details
                      </h5>
                    </Card.Header>
                    <Card.Body style={{ padding: '24px' }}>
                      <Row className="g-4">
                        <Col md={4}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                            borderRadius: '16px',
                            border: '2px solid #f59e0b'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#92400e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Edit Fee</div>
                            <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 700 }}>₹{currentDeed.editFee.toLocaleString()}</div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                            borderRadius: '16px',
                            border: '2px solid #f59e0b'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#92400e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Stamp</div>
                            <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 700 }}>₹{currentDeed.stamp.toLocaleString()}</div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                            borderRadius: '16px',
                            border: '2px solid #f59e0b'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#92400e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Others</div>
                            <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 700 }}>₹{currentDeed.others.toLocaleString()}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-4 g-4">
                        <Col md={6}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                            borderRadius: '16px',
                            border: '2px solid #0ea5e9'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#0c4a6e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Writing Fee</div>
                            <div style={{ fontSize: '1.2rem', color: '#0c4a6e', fontWeight: 700 }}>₹{currentDeed.writingFee.toLocaleString()}</div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="text-center p-3" style={{
                            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                            borderRadius: '16px',
                            border: '2px solid #0ea5e9'
                          }}>
                            <div style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 12px',
                              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                            }}>
                              <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '1.3rem' }} />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#0c4a6e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>DD Commission</div>
                            <div style={{ fontSize: '1.2rem', color: '#0c4a6e', fontWeight: 700 }}>₹{currentDeed.ddCommission.toLocaleString()}</div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* Total Amount Card */}
                  <Card className="glass-card">
                    <Card.Body style={{ padding: '32px', textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                      }}>
                        <FontAwesomeIcon icon={faMoneyBillWave} style={{ color: 'white', fontSize: '2rem' }} />
                      </div>
                      <h3 style={{ color: '#059669', fontWeight: 700, marginBottom: '8px' }}>Total Amount</h3>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: '#059669',
                        textShadow: '0 2px 4px rgba(5, 150, 105, 0.2)'
                      }}>
                        ₹{currentDeed.totalFee.toLocaleString()}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px' }}>
                        (Edit Fee + Stamp + Others)
                      </div>
                    </Card.Body>
                  </Card>
                </Modal.Body>
                <Modal.Footer className="border-0 px-4 pb-4">
                  <Button 
                    className="btn-gold"
                    onClick={() => setShowViewModal(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="me-2" />
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
                    {isEdit ? "✏️ Edit Deed Details" : "➕ Add New Deed"}
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
                          <Form.Label className="form-label-modern">Vendor</Form.Label>
                          <Form.Select
                            className="form-control-modern"
                            value={formData.vendor}
                            onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                          >
                            <option value="">Select Vendor</option>
                            {dummyVendorList.map(vendor => (
                              <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
                            ))}
                            <option value="Normal Customer">Normal Customer</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
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
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Reference</Form.Label>
                          <div className="d-flex gap-2">
                            <Form.Select
                              className="form-control-modern"
                              style={{ flex: 1 }}
                              value={referenceType}
                              onChange={(e) => setReferenceType(e.target.value)}
                            >
                              <option value="vendor">Vendor</option>
                              <option value="manual">Manual Entry</option>
                            </Form.Select>
                            {referenceType === "vendor" ? (
                              <Form.Select
                                className="form-control-modern"
                                style={{ flex: 2 }}
                                value={formData.reference}
                                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                              >
                                <option value="">Select Vendor</option>
                                {dummyVendorList.map(vendor => (
                                  <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
                                ))}
                              </Form.Select>
                            ) : (
                              <Form.Control
                                type="text"
                                className="form-control-modern"
                                style={{ flex: 2 }}
                                placeholder="Enter reference manually"
                                value={formData.reference}
                                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                              />
                            )}
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Deed Type</Form.Label>
                          <Form.Select
                            className="form-control-modern"
                            value={formData.deed}
                            onChange={(e) => setFormData({ ...formData, deed: e.target.value })}
                          >
                            <option value="">Select Deed Type</option>
                            {deedTypes.map(deedType => (
                              <option key={deedType} value={deedType}>{deedType}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">TP No</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter TP number"
                            value={formData.tpNo}
                            onChange={(e) => setFormData({ ...formData, tpNo: e.target.value })}
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
                          <Form.Label className="form-label-modern">Plot No</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter plot number"
                            value={formData.plotNo}
                            onChange={(e) => setFormData({ ...formData, plotNo: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={12}>
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
                    
                    {isEdit && (
                      <>
                        <hr className="my-4" />
                        <h6 className="mb-3" style={{ color: '#475569', fontWeight: 600 }}>Additional Details</h6>
                        
                        <Row className="g-3">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Field Visit</Form.Label>
                              <Form.Select
                                className="form-control-modern"
                                value={formData.fieldVisit}
                                onChange={(e) => setFormData({ ...formData, fieldVisit: e.target.value })}
                              >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Doc No</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control-modern"
                                placeholder="Enter document number"
                                value={formData.docNo}
                                onChange={(e) => setFormData({ ...formData, docNo: e.target.value })}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Row className="g-3 mt-1">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Return Document</Form.Label>
                              <Form.Select
                                className="form-control-modern"
                                value={formData.returnDocument}
                                onChange={(e) => setFormData({ ...formData, returnDocument: e.target.value })}
                              >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Row className="g-3 mt-1">
                          <Col md={4}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Edit Fee (₹)</Form.Label>
                              <Form.Control
                                type="number"
                                className="form-control-modern"
                                placeholder="0.00"
                                value={formData.editFee}
                                onChange={(e) => setFormData({ ...formData, editFee: e.target.value })}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={4}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Stamp (₹)</Form.Label>
                              <Form.Control
                                type="number"
                                className="form-control-modern"
                                placeholder="0.00"
                                value={formData.stamp}
                                onChange={(e) => setFormData({ ...formData, stamp: e.target.value })}
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
                        
                        <Row className="g-3 mt-1">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">Writing Fee (₹)</Form.Label>
                              <Form.Control
                                type="number"
                                className="form-control-modern"
                                placeholder="0.00"
                                value={formData.writingFee}
                                onChange={(e) => setFormData({ ...formData, writingFee: e.target.value })}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label className="form-label-modern">DD Commission (₹)</Form.Label>
                              <Form.Control
                                type="number"
                                className="form-control-modern"
                                placeholder="0.00"
                                value={formData.ddCommission}
                                onChange={(e) => setFormData({ ...formData, ddCommission: e.target.value })}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Row className="mt-4">
                          <Col>
                            <Alert className="total-alert">
                              <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
                              Total Fee: ₹{((parseFloat(formData.editFee) || 0) + (parseFloat(formData.stamp) || 0) + (parseFloat(formData.others) || 0)).toLocaleString()}
                            </Alert>
                          </Col>
                        </Row>
                      </>
                    )}
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
                    {isEdit ? "Update Deed" : "Add Deed"}
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

export default Deed;
