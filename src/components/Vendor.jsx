import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, InputGroup, Table, Card, Row, Col, Alert, Badge, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus, faEye, faEdit, faTrash, faSearch,
  faUsers, faCheckCircle, faClock, faCalendarCheck, faCreditCard,
  faPhone, faMapMarkerAlt, faBuilding, faUser, faMoneyBillWave,
  faArrowUp, faArrowDown, faFilter, faTimes, faBook, faScroll, faBalanceScale,
  faUserFriends, faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

// Enhanced dummy data for Vendor records
const dummyVendorData = [
  {
    id: 1,
    vendorId: "VEN001",
    name: "Vendor A",
    phone: "9876543210",
    address: "123 Business Park, Suite 100",
    district: "Mumbai",
    status: "Active"
  },
  {
    id: 2,
    vendorId: "VEN002",
    name: "Vendor B",
    phone: "9876543211",
    address: "456 Trade Center, Floor 5",
    district: "Bangalore",
    status: "Active"
  },
  {
    id: 3,
    vendorId: "VEN003",
    name: "Vendor C",
    phone: "9876543212",
    address: "789 Commerce Street, Block 3",
    district: "Pune",
    status: "Inactive"
  },
  {
    id: 4,
    vendorId: "VEN004",
    name: "Vendor D",
    phone: "9876543213",
    address: "321 Enterprise Road, Unit 2",
    district: "Ahmedabad",
    status: "Active"
  },
  {
    id: 5,
    vendorId: "VEN005",
    name: "Vendor E",
    phone: "9876543214",
    address: "654 Market Plaza, Tower 4",
    district: "Delhi",
    status: "Active"
  }
];

// Enhanced dummy data for Customer records linked to vendors
const dummyCustomerData = [
  {
    id: 1,
    name: "Customer 1",
    phone: "1234567890",
    address: "Address 1, Mumbai",
    vendorId: "VEN001",
    ecRecords: [
      { id: 1, status: "Active", date: "2023-01-01", details: "EC for property ABC" }
    ],
    nagalRecords: [
      { id: 1, status: "Completed", date: "2023-02-01", details: "Nagal record XYZ" }
    ],
    agreementRecords: [
      { id: 1, status: "Signed", date: "2023-03-01", details: "Rental agreement" }
    ],
    deedRecords: [
      { id: 1, status: "Registered", date: "2023-04-01", details: "Deed for land DEF" }
    ],
    paymentHistory: [
      { id: 1, amount: 1000, date: "2023-05-01", status: "Paid", description: "Initial payment" }
    ]
  },
  {
    id: 2,
    name: "Customer 2",
    phone: "1234567891",
    address: "Address 2, Bangalore",
    vendorId: "VEN002",
    ecRecords: [
      { id: 2, status: "Pending", date: "2023-01-15", details: "EC for property GHI" }
    ],
    nagalRecords: [
      { id: 2, status: "In Progress", date: "2023-02-15", details: "Nagal record JKL" }
    ],
    agreementRecords: [
      { id: 2, status: "Draft", date: "2023-03-15", details: "Lease agreement" }
    ],
    deedRecords: [
      { id: 2, status: "Pending", date: "2023-04-15", details: "Deed for land MNO" }
    ],
    paymentHistory: [
      { id: 2, amount: 1500, date: "2023-05-15", status: "Pending", description: "Advance payment" }
    ]
  },
  {
    id: 3,
    name: "Customer 3",
    phone: "1234567892",
    address: "Address 3, Pune",
    vendorId: "VEN003",
    ecRecords: [
      { id: 3, status: "Completed", date: "2023-01-20", details: "EC for property PQR" }
    ],
    nagalRecords: [
      { id: 3, status: "Completed", date: "2023-02-20", details: "Nagal record STU" }
    ],
    agreementRecords: [
      { id: 3, status: "Signed", date: "2023-03-20", details: "Sale agreement" }
    ],
    deedRecords: [
      { id: 3, status: "Registered", date: "2023-04-20", details: "Deed for land VWX" }
    ],
    paymentHistory: [
      { id: 3, amount: 2000, date: "2023-05-20", status: "Paid", description: "Full payment" }
    ]
  },
  {
    id: 4,
    name: "Customer 4",
    phone: "1234567893",
    address: "Address 4, Ahmedabad",
    vendorId: "VEN004",
    ecRecords: [
      { id: 4, status: "Active", date: "2023-01-25", details: "EC for property YZA" }
    ],
    nagalRecords: [
      { id: 4, status: "Completed", date: "2023-02-25", details: "Nagal record BCD" }
    ],
    agreementRecords: [
      { id: 4, status: "Signed", date: "2023-03-25", details: "Partnership agreement" }
    ],
    deedRecords: [
      { id: 4, status: "Registered", date: "2023-04-25", details: "Deed for land EFG" }
    ],
    paymentHistory: [
      { id: 4, amount: 1200, date: "2023-05-25", status: "Paid", description: "Deposit" }
    ]
  },
  {
    id: 5,
    name: "Customer 5",
    phone: "1234567894",
    address: "Address 5, Delhi",
    vendorId: "VEN005",
    ecRecords: [
      { id: 5, status: "Pending", date: "2023-01-30", details: "EC for property HIJ" }
    ],
    nagalRecords: [
      { id: 5, status: "In Progress", date: "2023-02-28", details: "Nagal record KLM" }
    ],
    agreementRecords: [
      { id: 5, status: "Draft", date: "2023-03-30", details: "Service agreement" }
    ],
    deedRecords: [
      { id: 5, status: "Pending", date: "2023-04-30", details: "Deed for land NOP" }
    ],
    paymentHistory: [
      { id: 5, amount: 800, date: "2023-05-30", status: "Pending", description: "Partial payment" }
    ]
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

const Vendor = () => {
  const [activeTab, setActiveTab] = useState("vendor");
  const [localTab, setLocalTab] = useState("vendor");
  const [vendorData, setVendorData] = useState(dummyVendorData);
  const [filteredData, setFilteredData] = useState(dummyVendorData);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentVendor, setCurrentVendor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "" });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    vendorId: "",
    name: "",
    phone: "",
    address: "",
    status: "Active"
  });

  // Calculate totals for cards
  const totalVendors = vendorData.length;
  const activeVendors = vendorData.filter(vendor => vendor.status === "Active").length;
  const inactiveVendors = vendorData.filter(vendor => vendor.status === "Inactive").length;
  const totalCustomers = dummyCustomerData.length;
  const filteredCustomers = selectedVendor ? dummyCustomerData.filter(customer => customer.vendorId === selectedVendor) : [];

  // Filter and sort data
  useEffect(() => {
    let filtered = vendorData.filter(vendor =>
      (vendor.vendorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
       vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       vendor.phone.includes(searchTerm) ||
       vendor.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filters.status) filtered = filtered.filter(vendor => vendor.status === filters.status);

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(filtered);
  }, [vendorData, searchTerm, filters, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleAddNew = () => {
    setIsEdit(false);
    setCurrentVendor(null);
    setFormData({
      vendorId: "",
      name: "",
      phone: "",
      address: "",
      status: "Active"
    });
    setShowModal(true);
  };

  const handleEdit = (vendor) => {
    setIsEdit(true);
    setCurrentVendor(vendor);
    setFormData({
      vendorId: vendor.vendorId,
      name: vendor.name,
      phone: vendor.phone,
      address: vendor.address,
      status: vendor.status
    });
    setShowModal(true);
  };

  const handleView = (vendor) => {
    setCurrentVendor(vendor);
    setShowViewModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      setVendorData(vendorData.filter(vendor => vendor.id !== id));
    }
  };

  const handleSave = () => {
    const newVendor = {
      ...formData,
      id: isEdit ? currentVendor.id : Date.now()
    };

    if (isEdit) {
      setVendorData(vendorData.map(vendor => vendor.id === currentVendor.id ? newVendor : vendor));
    } else {
      setVendorData([...vendorData, newVendor]);
    }
    setShowModal(false);
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setFilters({ status: "" });
    setSearchTerm("");
  };

  const getStatusBadge = (status) => {
    const variants = {
      Active: { bg: "#10b981", icon: faCheckCircle },
      Inactive: { bg: "#f59e0b", icon: faClock }
    };
    const config = variants[status] || variants.Active;
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

  const formatCurrency = (value) => {
    if (typeof value !== 'number') return "₹0";
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  };

  const getCustomerPaymentSummary = (customer) => {
    const collected = customer.paymentHistory?.reduce((sum, payment) => payment.status === 'Paid' ? sum + payment.amount : sum, 0) || 0;
    const balance = customer.paymentHistory?.reduce((sum, payment) => payment.status !== 'Paid' ? sum + payment.amount : sum, 0) || 0;
    return { collected, balance, total: collected + balance };
  };

  const getVendorPaymentTotals = (vendorId) => {
    return dummyCustomerData.reduce((totals, customer) => {
      if (customer.vendorId !== vendorId) return totals;
      const { collected, balance } = getCustomerPaymentSummary(customer);
      totals.collected += collected;
      totals.balance += balance;
      return totals;
    }, { collected: 0, balance: 0 });
  };

  return (
    <div className="vendor-page">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        {/* Floating Background Icons */}
        <div className="floating-icons">
          <FontAwesomeIcon icon={faBalanceScale} className="float-icon icon1" />
          <FontAwesomeIcon icon={faBook} className="float-icon icon2" />
          <FontAwesomeIcon icon={faScroll} className="float-icon icon3" />
          <FontAwesomeIcon icon={faBalanceScale} className="float-icon icon4" />
          <FontAwesomeIcon icon={faBook} className="float-icon icon5" />
          <FontAwesomeIcon icon={faScroll} className="float-icon icon6" />
        </div>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .vendor-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #f0f4f8 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
          }
          
          .main-content {
            margin-left: 280px;
            padding: 40px;
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

          /* Tab Styles */
          .tab-link {
            font-weight: 600;
            color: #64748b;
            border: none;
            background: none;
            padding: 12px 24px;
            border-radius: 12px 12px 0 0;
            transition: all 0.3s ease;
          }
          
          .tab-link.active {
            color: #1e293b;
            background: rgba(251, 191, 36, 0.1);
            border-bottom: 3px solid #fbbf24;
          }
          
          .tab-link:hover {
            color: #1e293b;
            background: rgba(251, 191, 36, 0.05);
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
          
          /* Floating Background Icons */
          .floating-icons {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
          }
          
          .float-icon {
            position: absolute;
            opacity: 0.08;
            color: #fbbf24;
            font-size: 3rem;
          }
          
          .icon1 {
            top: 10%;
            left: 10%;
            animation: float1 20s infinite linear;
          }
          
          .icon2 {
            top: 20%;
            right: 15%;
            animation: float2 25s infinite linear reverse;
          }
          
          .icon3 {
            bottom: 30%;
            left: 20%;
            animation: float3 30s infinite linear;
          }
          
          .icon4 {
            top: 60%;
            right: 10%;
            animation: float1 22s infinite linear reverse;
          }
          
          .icon5 {
            bottom: 20%;
            left: 60%;
            animation: float2 28s infinite linear;
          }
          
          .icon6 {
            top: 40%;
            left: 70%;
            animation: float3 24s infinite linear reverse;
          }
          
          @keyframes float1 {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-20px) rotate(90deg) scale(1.1); }
            50% { transform: translateY(0) rotate(180deg) scale(1); }
            75% { transform: translateY(20px) rotate(270deg) scale(0.9); }
            100% { transform: translateY(0) rotate(360deg) scale(1); }
          }
          
          @keyframes float2 {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            33% { transform: translateX(30px) translateY(-30px) rotate(120deg); }
            66% { transform: translateX(-30px) translateY(30px) rotate(240deg); }
            100% { transform: translateX(0) translateY(0) rotate(360deg); }
          }
          
          @keyframes float3 {
            0% { transform: translateY(0) scale(1) rotate(0deg); }
            50% { transform: translateY(-40px) scale(1.2) rotate(180deg); }
            100% { transform: translateY(0) scale(1) rotate(360deg); }
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
                      <FontAwesomeIcon icon={faUsers} className="stat-icon" />
                    </div>
                    <div className="stat-number">{totalVendors}</div>
                    <div className="stat-label">Total Vendors</div>
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
                    <div className="stat-number">{activeVendors}</div>
                    <div className="stat-label">Active Vendors</div>
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
                    <div className="stat-number">{inactiveVendors}</div>
                    <div className="stat-label">Inactive Vendors</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <motion.div variants={itemVariants} whileHover="hover" initial="rest" animate="rest">
                <motion.div variants={cardHoverVariants}>
                  <Card className="stat-card">
                    <div className="stat-icon-wrapper">
                      <FontAwesomeIcon icon={faUserFriends} className="stat-icon" />
                    </div>
                    <div className="stat-number">{totalCustomers}</div>
                    <div className="stat-label">Total Customers</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          {/* Tabs */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <Card.Body>
                <Nav variant="tabs" activeKey={localTab} onSelect={(k) => setLocalTab(k)} className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="vendor" className="tab-link">Vendor Records</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="customer" className="tab-link">Customer Details</Nav.Link>
                  </Nav.Item>
                </Nav>

                {localTab === "vendor" && (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                        Vendor Records
                      </h4>
                      <Badge bg="light" text="dark" style={{ fontSize: '0.9rem', padding: '8px 16px', borderRadius: '12px' }}>
                        Showing {filteredData.length} of {vendorData.length} vendors
                      </Badge>
                    </div>

                    {/* Search, Filters, and Add Button */}
                    <Row className="align-items-center g-3 mb-4">
                      <Col lg={3} md={6}>
                        <div className="search-container">
                          <FontAwesomeIcon icon={faSearch} className="search-icon" />
                          <Form.Control
                            className="search-bar"
                            placeholder="Search by Name, Phone, Address..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <Form.Select
                          className="filter-select"
                          value={filters.status}
                          onChange={(e) => handleFilterChange("status", e.target.value)}
                        >
                          <option value="">All Status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </Form.Select>
                      </Col>
                      <Col lg={3} md={6}>
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
                          Add New Vendor
                        </Button>
                      </Col>
                    </Row>
                    
                    <div className="table-responsive">
                      <Table className="table-modern">
                        <thead>
                          <tr>
                            <th onClick={() => handleSort('vendorId')}>
                              Vendor ID {sortConfig.key === 'vendorId' && (
                                <FontAwesomeIcon icon={sortConfig.direction === 'asc' ? faArrowUp : faArrowDown} size="sm" className="ms-1" />
                              )}
                            </th>
                            <th onClick={() => handleSort('name')}>Name</th>
                            <th onClick={() => handleSort('phone')}>Phone</th>
                            <th onClick={() => handleSort('address')}>Address</th>
                            <th onClick={() => handleSort('status')}>Status</th>
                            <th>Collected</th>
                            <th>Balance</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <AnimatePresence mode="popLayout">
                            {filteredData.map((vendor, index) => (
                              <motion.tr
                                key={vendor.id}
                                variants={tableRowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ delay: index * 0.05 }}
                                layout
                              >
                                <td><strong>{vendor.vendorId}</strong></td>
                                <td>
                                  <FontAwesomeIcon icon={faUser} className="me-2 text-muted" size="sm" />
                                  {vendor.name}
                                </td>
                                <td>
                                  <FontAwesomeIcon icon={faPhone} className="me-2 text-muted" size="sm" />
                                  {vendor.phone}
                                </td>
                                <td>{vendor.address}</td>
                                <td>{getStatusBadge(vendor.status)}</td>
                                <td>{formatCurrency(getVendorPaymentTotals(vendor.vendorId).collected)}</td>
                                <td>{formatCurrency(getVendorPaymentTotals(vendor.vendorId).balance)}</td>
                                <td>
                                  <button className="action-btn view" onClick={() => handleView(vendor)} title="View">
                                    <FontAwesomeIcon icon={faEye} />
                                  </button>
                                  <button className="action-btn edit" onClick={() => handleEdit(vendor)} title="Edit">
                                    <FontAwesomeIcon icon={faEdit} />
                                  </button>
                                  <button className="action-btn delete" onClick={() => handleDelete(vendor.id)} title="Delete">
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
                        <h5 style={{ color: '#64748b', fontWeight: 600 }}>No vendors found</h5>
                        <p style={{ color: '#94a3b8' }}>Try adjusting your search or filters</p>
                      </motion.div>
                    )}
                  </>
                )}

                {localTab === "customer" && (
                  <>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>
                      Customer Details
                    </h4>
                    <Row className="align-items-center g-3 mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Select Vendor</Form.Label>
                          <Form.Select
                            className="filter-select"
                            value={selectedVendor}
                            onChange={(e) => setSelectedVendor(e.target.value)}
                          >
                            <option value="">Choose a Vendor</option>
                            {vendorData.map(vendor => (
                              <option key={vendor.id} value={vendor.vendorId}>{vendor.name} ({vendor.vendorId})</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    {selectedVendor && (
                      <div>
                        <h5>Customers for {vendorData.find(v => v.vendorId === selectedVendor)?.name}</h5>
                        <Table className="table-modern">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Address</th>
                              <th>Collected</th>
                              <th>Balance</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredCustomers.map(customer => {
                              const customerSummary = getCustomerPaymentSummary(customer);
                              return (
                                <tr key={customer.id}>
                                  <td>{customer.name}</td>
                                  <td>{customer.phone}</td>
                                  <td>{customer.address}</td>
                                  <td>{formatCurrency(customerSummary.collected)}</td>
                                  <td>{formatCurrency(customerSummary.balance)}</td>
                                  <td>
                                    <button className="action-btn view" onClick={() => { setSelectedCustomer(customer); setShowCustomerModal(true); }} title="View Details">
                                      <FontAwesomeIcon icon={faEye} />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                        {filteredCustomers.length === 0 && (
                          <p>No customers found for this vendor.</p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>

        {/* View Modal */}
        <AnimatePresence>
          {showViewModal && currentVendor && (
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered size="lg">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton className="modal-header">
                  <Modal.Title className="modal-title">
                    👁️ View Vendor Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Vendor ID</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentVendor.vendorId}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentVendor.name}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Phone</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={currentVendor.phone}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="form-control-modern"
                          value={currentVendor.address}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mt-1">
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Status</Form.Label>
                        <div className="mt-2">
                          {getStatusBadge(currentVendor.status)}
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="g-3 mt-1">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Collected</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={formatCurrency(getVendorPaymentTotals(currentVendor.vendorId).collected)}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Outstanding Balance</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={formatCurrency(getVendorPaymentTotals(currentVendor.vendorId).balance)}
                          disabled
                        />
                      </Form.Group>
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
                    {isEdit ? "✏️ Edit Vendor Details" : "➕ Add New Vendor"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Vendor ID</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter Vendor ID"
                            value={formData.vendorId}
                            onChange={(e) => setFormData({ ...formData, vendorId: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control-modern"
                            placeholder="Enter vendor name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            className="form-control-modern"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            className="form-control-modern"
                            placeholder="Enter full address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="g-3 mt-1">
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="form-label-modern">Status</Form.Label>
                          <Form.Select
                            className="form-control-modern"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </Form.Select>
                        </Form.Group>
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
                    {isEdit ? "Update Vendor" : "Add Vendor"}
                  </Button>
                </Modal.Footer>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

        {/* Customer Details Modal */}
        <AnimatePresence>
          {showCustomerModal && selectedCustomer && (
            <Modal show={showCustomerModal} onHide={() => setShowCustomerModal(false)} centered size="lg">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal.Header closeButton className="modal-header">
                  <Modal.Title className="modal-title">
                    👁️ Customer Details: {selectedCustomer.name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={selectedCustomer.name}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Phone</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-modern"
                          value={selectedCustomer.phone}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="g-3 mb-4">
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="form-label-modern">Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          className="form-control-modern"
                          value={selectedCustomer.address}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  {/* EC Records */}
                  <h6 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#1e293b' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> EC Records
                  </h6>
                  {selectedCustomer.ecRecords.length > 0 ? (
                    <div className="table-responsive mb-4">
                      <Table striped bordered hover size="sm" className="table-modern">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.ecRecords.map(record => (
                            <tr key={record.id}>
                              <td>{record.id}</td>
                              <td>{record.status}</td>
                              <td>{record.date}</td>
                              <td>{record.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : <p className="text-muted">No EC records.</p>}
                  
                  {/* Nagal Records */}
                  <h6 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#1e293b' }}>
                    <FontAwesomeIcon icon={faBook} className="me-2" /> Nagal Records
                  </h6>
                  {selectedCustomer.nagalRecords.length > 0 ? (
                    <div className="table-responsive mb-4">
                      <Table striped bordered hover size="sm" className="table-modern">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.nagalRecords.map(record => (
                            <tr key={record.id}>
                              <td>{record.id}</td>
                              <td>{record.status}</td>
                              <td>{record.date}</td>
                              <td>{record.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : <p className="text-muted">No Nagal records.</p>}
                  
                  {/* Agreement Records */}
                  <h6 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#1e293b' }}>
                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Agreement Records
                  </h6>
                  {selectedCustomer.agreementRecords.length > 0 ? (
                    <div className="table-responsive mb-4">
                      <Table striped bordered hover size="sm" className="table-modern">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.agreementRecords.map(record => (
                            <tr key={record.id}>
                              <td>{record.id}</td>
                              <td>{record.status}</td>
                              <td>{record.date}</td>
                              <td>{record.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : <p className="text-muted">No Agreement records.</p>}
                  
                  {/* Deed Records */}
                  <h6 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#1e293b' }}>
                    <FontAwesomeIcon icon={faScroll} className="me-2" /> Deed Records
                  </h6>
                  {selectedCustomer.deedRecords.length > 0 ? (
                    <div className="table-responsive mb-4">
                      <Table striped bordered hover size="sm" className="table-modern">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.deedRecords.map(record => (
                            <tr key={record.id}>
                              <td>{record.id}</td>
                              <td>{record.status}</td>
                              <td>{record.date}</td>
                              <td>{record.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : <p className="text-muted">No Deed records.</p>}
                  
                  {/* Payment History */}
                  <h6 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#1e293b' }}>
                    <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" /> Payment History
                  </h6>
                  {selectedCustomer.paymentHistory.length > 0 ? (
                    <div className="table-responsive">
                      <Table striped bordered hover size="sm" className="table-modern">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCustomer.paymentHistory.map(payment => (
                            <tr key={payment.id}>
                              <td>{payment.id}</td>
                              <td>₹{payment.amount}</td>
                              <td>{payment.date}</td>
                              <td>{payment.status}</td>
                              <td>{payment.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  ) : <p className="text-muted">No payment history.</p>}
                </Modal.Body>
                <Modal.Footer className="border-0 px-4 pb-4">
                  <Button 
                    className="btn-gold"
                    onClick={() => setShowCustomerModal(false)}
                  >
                    Close
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

export default Vendor;
