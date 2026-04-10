import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Card, Row, Col, Badge, Nav, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus, faSearch, faTimes, faBalanceScale, faBook, faScroll,
  faPhone, faMapMarkerAlt, faUser, faMoneyBillWave, faCheckCircle, faClock,
  faIdCard, faFileAlt, faEye, faEdit, faTrash, faHandHoldingUsd, faUsers,
  faBuilding, faSave, faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

// Enhanced dummy data for Vendor records
const dummyVendorData = [
  { id: 1, vendorId: "VEN001", name: "Vendor A", phone: "9876543210", address: "123 Business Park, Suite 100", district: "Mumbai", status: "Active" },
  { id: 2, vendorId: "VEN002", name: "Vendor B", phone: "9876543211", address: "456 Trade Center, Floor 5", district: "Bangalore", status: "Active" },
  { id: 3, vendorId: "VEN003", name: "Vendor C", phone: "9876543212", address: "789 Commerce Street, Block 3", district: "Pune", status: "Inactive" },
  { id: 4, vendorId: "VEN004", name: "Vendor D", phone: "9876543213", address: "321 Enterprise Road, Unit 2", district: "Ahmedabad", status: "Active" },
  { id: 5, vendorId: "VEN005", name: "Vendor E", phone: "9876543214", address: "654 Market Plaza, Tower 4", district: "Delhi", status: "Active" }
];

// Refactored dummy data: Document tracking with specific dates, times, costs and payments
const dummyCustomerData = [
  {
    id: 1, name: "Customer 1", phone: "1234567890", address: "Address 1, Mumbai", vendorId: "VEN001",
    ecRecords: [{ id: 1, status: "Active", date: "2023-01-01", time: "10:30 AM", details: "EC for property ABC", cost: 1500, paid: 1000 }],
    nagalRecords: [{ id: 1, status: "Completed", date: "2023-02-01", time: "11:00 AM", details: "Nagal record XYZ", cost: 800, paid: 800 }],
    agreementRecords: [{ id: 1, status: "Signed", date: "2023-03-01", time: "02:15 PM", details: "Rental agreement", cost: 3000, paid: 1500 }],
    deedRecords: [{ id: 1, status: "Registered", date: "2023-04-01", time: "04:45 PM", details: "Deed for land DEF", cost: 5000, paid: 5000 }],
  },
  {
    id: 2, name: "Customer 2", phone: "1234567891", address: "Address 2, Bangalore", vendorId: "VEN002",
    ecRecords: [{ id: 2, status: "Pending", date: "2023-01-15", time: "09:00 AM", details: "EC for property GHI", cost: 1200, paid: 0 }],
    nagalRecords: [{ id: 2, status: "In Progress", date: "2023-02-15", time: "12:00 PM", details: "Nagal record JKL", cost: 900, paid: 400 }],
    agreementRecords: [{ id: 2, status: "Draft", date: "2023-03-15", time: "01:30 PM", details: "Lease agreement", cost: 2500, paid: 1000 }],
    deedRecords: [],
  },
  {
    id: 3, name: "Customer 3", phone: "1234567892", address: "Address 3, Pune", vendorId: "VEN003",
    ecRecords: [],
    nagalRecords: [],
    agreementRecords: [],
    deedRecords: [{ id: 3, status: "Registered", date: "2023-04-20", time: "11:20 AM", details: "Deed for land VWX", cost: 8000, paid: 8000 }],
  },
  {
    id: 4, name: "Customer 4", phone: "1234567893", address: "Address 4, Ahmedabad", vendorId: "Others",
    ecRecords: [{ id: 4, status: "Active", date: "2023-01-25", time: "10:10 AM", details: "EC for property YZA", cost: 2000, paid: 500 }],
    nagalRecords: [{ id: 4, status: "Completed", date: "2023-02-25", time: "03:40 PM", details: "Nagal record BCD", cost: 600, paid: 600 }],
    agreementRecords: [],
    deedRecords: [],
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }
};

const Vendor = () => {
  const [activeTab, setActiveTab] = useState("vendor");
  const [localTab, setLocalTab] = useState("vendor"); // "vendor" or "customer"
  
  const [vendorData, setVendorData] = useState(dummyVendorData);
  const [customerData, setCustomerData] = useState(dummyCustomerData);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "" });

  // Modal Visibility States
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [currentVendor, setCurrentVendor] = useState(null);
  
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [viewingCustomerFromVendor, setViewingCustomerFromVendor] = useState(false);

  // Form States Functionality
  const [showAddVendorForm, setShowAddVendorForm] = useState(false);
  const [newVendorData, setNewVendorData] = useState({ vendorId: "", name: "", phone: "", address: "", status: "Active" });
  const [isEditingVendor, setIsEditingVendor] = useState(false);

  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [newCustomerData, setNewCustomerData] = useState({ name: "", phone: "", address: "", vendorId: "" });
  const [isEditingCustomer, setIsEditingCustomer] = useState(false);

  // Computed Methods
  const getCustomerPaymentSummary = (customer) => {
    let collected = 0;
    let cost = 0;
    const categories = ['ecRecords', 'nagalRecords', 'agreementRecords', 'deedRecords'];
    categories.forEach(cat => {
      if (customer[cat]) {
        customer[cat].forEach(record => {
          cost += Number(record.cost || 0);
          collected += Number(record.paid || 0);
        });
      }
    });
    return { collected, balance: cost - collected, cost };
  };

  const getVendorPaymentTotals = (vId) => {
    return customerData.reduce((totals, customer) => {
      if (customer.vendorId !== vId) return totals;
      const { collected, balance } = getCustomerPaymentSummary(customer);
      totals.collected += collected;
      totals.balance += balance;
      return totals;
    }, { collected: 0, balance: 0 });
  };

  const formatCurrency = (value) => {
    if (typeof value !== 'number') return "₹0";
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  };

  // Filters
  const filteredVendors = vendorData.filter(v => {
    const matchSearch = v.vendorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        v.phone.includes(searchTerm);
    const matchStatus = filters.status ? v.status === filters.status : true;
    return matchSearch && matchStatus;
  });

  const filteredCustomers = customerData.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        c.phone.includes(searchTerm) ||
                        c.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  // Handlers
  const handleVendorClick = (vendor) => {
    setCurrentVendor(vendor);
    setShowVendorModal(true);
  };

  const handleCustomerClick = (customer, fromVendorModal = false) => {
    setCurrentCustomer(customer);
    setViewingCustomerFromVendor(fromVendorModal);
    if (fromVendorModal) {
      setShowVendorModal(false);
    }
    setShowCustomerModal(true);
  };

  const handleBackToVendorModal = () => {
    setShowCustomerModal(false);
    setShowVendorModal(true);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({ status: "" });
  };

  // Form Handlers: Vendor
  const openAddVendorForm = () => {
    setNewVendorData({ vendorId: `VEN00${vendorData.length + 1}`, name: "", phone: "", address: "", status: "Active" });
    setIsEditingVendor(false);
    setShowAddVendorForm(true);
  };

  const openEditVendorForm = (e, vendor) => {
    e.stopPropagation(); // prevent modal open
    setNewVendorData({ ...vendor });
    setIsEditingVendor(true);
    setShowAddVendorForm(true);
  };

  const handleSaveVendor = () => {
    if (isEditingVendor) {
      setVendorData(prev => prev.map(v => v.id === newVendorData.id ? newVendorData : v));
    } else {
      setVendorData(prev => [...prev, { ...newVendorData, id: Date.now() }]);
    }
    setShowAddVendorForm(false);
  };

  const handleDeleteVendor = (e, vendorId) => {
    e.stopPropagation();
    if(window.confirm("Are you sure you want to delete this vendor?")) {
      setVendorData(prev => prev.filter(v => v.id !== vendorId));
    }
  };

  // Form Handlers: Customer
  const openAddCustomerForm = () => {
    setNewCustomerData({ name: "", phone: "", address: "", vendorId: "" });
    setIsEditingCustomer(false);
    setShowAddCustomerForm(true);
  };

  const openEditCustomerForm = (e, customer) => {
    e.stopPropagation();
    setNewCustomerData({ ...customer });
    setIsEditingCustomer(true);
    setShowAddCustomerForm(true);
  };

  const handleSaveCustomer = () => {
    if (isEditingCustomer) {
      setCustomerData(prev => prev.map(c => c.id === newCustomerData.id ? newCustomerData : c));
    } else {
      const baseNewCustomer = {
        ...newCustomerData, 
        id: Date.now(),
        // Initialize arrays empty since it's an add form
        ecRecords: [], nagalRecords: [], agreementRecords: [], deedRecords: []
      };
      setCustomerData(prev => [...prev, baseNewCustomer]);
    }
    setShowAddCustomerForm(false);
  };

  const handleDeleteCustomer = (e, customerId) => {
    e.stopPropagation();
    if(window.confirm("Are you sure you want to delete this customer?")) {
      setCustomerData(prev => prev.filter(c => c.id !== customerId));
    }
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
        border: "none", padding: "6px 12px", borderRadius: "12px",
        fontWeight: "600", fontSize: "0.8rem", display: "inline-flex",
        alignItems: "center", gap: "6px", color: "#fff", boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <FontAwesomeIcon icon={config.icon} size="sm" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="layout-page">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .layout-page {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 50%, #fefefe 100%);
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
          
          .main-content {
            margin-left: 280px; 
            padding: 40px; 
            min-height: 100vh;
          }
          @media (max-width: 991px) { .main-content { margin-left: 0; padding: 20px; } }

          .page-header { margin-bottom: 24px; }
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
          }

          /* Modern Extruded Tabs */
          .custom-tabs {
            display: inline-flex; gap: 8px; margin-bottom: 30px;
            background: rgba(255, 255, 255, 0.7);
            padding: 8px; border-radius: 20px;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03), inset 0 2px 4px rgba(255,255,255,0.8);
          }
          .custom-tab-btn {
            background: transparent; border: none; padding: 12px 28px;
            border-radius: 14px; font-weight: 600; color: #64748b;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;
          }
          .custom-tab-btn.active {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); color: #020617;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
            transform: translateY(-1px);
          }
          .custom-tab-btn:not(.active):hover { background: rgba(255,255,255,0.5); color: #334155; }

          /* Controls Bar */
          .controls-bar {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(24px); border-radius: 20px;
            padding: 24px; margin-bottom: 32px;
            box-shadow: 0 10px 40px rgba(31,38,135,0.04), inset 0 1px 0 rgba(255,255,255,1);
            border: 1px solid rgba(255,255,255,0.7);
          }

          .modern-input, .modern-select {
            border-radius: 14px; border: 2px solid #e2e8f0;
            background: #f8fafc;
            padding: 14px 18px; font-size: 0.95rem; width: 100%;
            transition: all 0.3s ease; color: #1e293b; font-weight: 500;
          }
          .modern-input:focus, .modern-select:focus {
            border-color: #fbbf24; outline: none; background: #ffffff;
            box-shadow: 0 0 0 4px rgba(251,191,36,0.15);
          }
          .modern-input::placeholder { color: #94a3b8; }
          
          .modern-search-wrapper { position: relative; }
          .modern-search-wrapper svg {
            position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #64748b;
            font-size: 1.1rem;
          }
          .modern-search-wrapper input { padding-left: 48px; }

          .modern-btn {
            border-radius: 14px; padding: 14px 24px; width: 100%; font-size: 0.95rem; font-weight: 600;
            display: inline-flex; align-items: center; justify-content: center; gap: 8px;
            transition: all 0.3s ease;
          }
          .btn-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            border: none; color: white;
            box-shadow: 0 8px 20px rgba(217,119,6,0.25), inset 0 1px 0 rgba(255,255,255,0.3);
            text-transform: uppercase; letter-spacing: 0.5px;
          }
          .btn-gold:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(217,119,6,0.35); }
          .btn-gold:active { transform: translateY(-1px); }

          .btn-clear { background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; }
          .btn-clear:hover { background: #e2e8f0; color: #1e293b; border-color: #cbd5e1; }

          /* Interactive Full Width Grid Cards */
          .data-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 24px; border: 1px solid rgba(255,255,255,1);
            padding: 24px; cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            height: 100%; display: flex; flex-direction: column;
            position: relative; overflow: hidden;
          }
          .data-card::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
            background: linear-gradient(90deg, #fbbf24 0%, #d97706 100%);
            opacity: 0; transition: opacity 0.3s ease;
          }
          .data-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); background: #ffffff; }
          .data-card:hover::before { opacity: 1; }

          .data-card .actions { 
            position: absolute; top: 20px; right: 20px; display: flex; gap: 8px; opacity: 0; transition: 0.3s;
          }
          .data-card:hover .actions { opacity: 1; }
          
          .circle-btn {
            width: 36px; height: 36px; border-radius: 50%; border: none;
            display: inline-flex; align-items: center; justify-content: center;
            background: #f8fafc; color: #64748b; font-size: 0.9rem;
            transition: all 0.2s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          }
          .circle-btn.edit:hover { background: #eff6ff; color: #3b82f6; }
          .circle-btn.del:hover { background: #fef2f2; color: #ef4444; }

          .card-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; padding-right: 40px; }
          .card-subtitle { font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
          .card-subtitle svg { color: #cbd5e1; }
          
          .card-stats {
            background: #f8fafc; border-radius: 16px; padding: 16px; 
            margin-top: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
            border: 1px solid #f1f5f9;
          }
          .stat-block .label { font-size: 0.75rem; text-transform: uppercase; color: #94a3b8; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 6px; }
          .stat-block .val { font-size: 1.25rem; font-weight: 700; color: #0f172a; }
          .stat-block .val.success { color: #10b981; }
          .stat-block .val.warning { color: #f59e0b; }

          /* Mini Cards for Vendor Details */
          .mini-cards-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;
          }
          .mini-card {
            background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px;
            cursor: pointer; transition: all 0.3s ease; display: block; text-decoration: none;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .mini-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-color: #cbd5e1; }
          .mini-card-title { font-weight: 700; color: #1e293b; font-size: 1.1rem; margin-bottom: 8px; }
          .mini-card-stat { display: flex; justify-content: space-between; font-size: 0.9rem; margin-top: 12px; font-weight: 600; }

          /* Specific Modals styling */
          .custom-modal-content {
            background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(20px);
            border-radius: 28px; border: none; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3); overflow: hidden;
          }
          .custom-modal-header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            border: none; padding: 24px 32px; color: white; display: flex; align-items: center;
          }
          .custom-modal-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.6rem; letter-spacing: -0.5px; }
          .btn-close-white { filter: invert(1) grayscale(100%) brightness(200%); opacity: 0.8; }
          
          .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 32px; }
          .info-item { background: #f8fafc; padding: 20px; border-radius: 20px; border: 1px solid #f1f5f9; }
          .info-item .lbl { font-size: 0.8rem; color: #64748b; font-weight: 700; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; }
          .info-item .v { font-size: 1.15rem; font-weight: 700; color: #0f172a; }

          .section-title { font-family: 'Playfair Display', serif; font-weight: 700; color: #0f172a; margin: 40px 0 20px; display: flex; align-items: center; gap: 12px; font-size: 1.4rem; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
          .section-title svg { color: #fbbf24; background: #fffbeb; padding: 10px; border-radius: 12px; }
          
          /* Detailed Document Entries Billing */
          .billing-item {
            display: flex; flex-direction: column; background: #ffffff; border: 1px solid #e2e8f0;
            border-radius: 20px; padding: 24px; margin-bottom: 16px; transition: all 0.2s ease;
          }
          .billing-item:hover { box-shadow: 0 4px 15px rgba(0,0,0,0.03); border-color: #cbd5e1; }
          .billing-item-header { display: flex; justify-content: space-between; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px dashed #e2e8f0; }
          .billing-item-body { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 20px; align-items: center; }
          .b-detail { font-size: 1.05rem; color: #334155; font-weight: 500;}
          .b-date { color: #64748b; font-size: 0.9rem; font-weight: 600; display:flex; align-items: center; gap: 8px;}
          .payment-tag { padding: 12px 16px; border-radius: 16px; text-align: center; font-weight: 700;}
          .payment-tag.cost { background: #f8fafc; color: #0f172a; }
          .payment-tag.paid { background: #ecfdf5; color: #059669; }

          /* Summary Aggregation Block */
          .grand-summary {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 24px;
            padding: 32px; margin-top: 40px; color: white; display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 24px; box-shadow: 0 20px 40px -10px rgba(15,23,42,0.4);
          }
          .summary-col { display: flex; flex-direction: column; gap: 8px; }
          .summary-col .lbl { color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;}
          .summary-col .val { font-size: 2.5rem; font-family: 'Playfair Display', serif; font-weight: 700; color: #ffffff;}
          .summary-col .val.highlight { color: #fbbf24; }

          /* Form Labels */
          .form-label { font-weight: 600; color: #475569; margin-bottom: 8px; font-size: 0.9rem; }
        `}</style>

        <div className="page-header d-flex justify-content-between align-items-center">
          <div>
            <h2 className="page-title">Records Dashboard</h2>
          </div>
        </div>

        {/* Extruded Tabs */}
        <div className="custom-tabs">
          <button className={`custom-tab-btn ${localTab === 'vendor' ? 'active' : ''}`} onClick={() => setLocalTab('vendor')}>
            <FontAwesomeIcon icon={faBuilding} className="me-2" />
            Top Vendors
          </button>
          <button className={`custom-tab-btn ${localTab === 'customer' ? 'active' : ''}`} onClick={() => setLocalTab('customer')}>
            <FontAwesomeIcon icon={faUsers} className="me-2" />
            Normal Customers
          </button>
        </div>

        {/* Action Controls Bar */}
        <div className="controls-bar">
          <Row className="g-4 align-items-center">
            <Col lg={4} md={6}>
              <div className="modern-search-wrapper">
                <FontAwesomeIcon icon={faSearch} />
                <input 
                  type="text" 
                  className="modern-input" 
                  placeholder={`Search ${localTab === 'vendor' ? 'Vendors' : 'Customers'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </Col>
            {localTab === 'vendor' && (
              <Col lg={2} md={6}>
                <select className="modern-select" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                  <option value="">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </Col>
            )}
            <Col lg={2} md={6}>
              <button className="modern-btn btn-clear" onClick={clearFilters}>
                <FontAwesomeIcon icon={faTimes} className="me-2" /> Clear
              </button>
            </Col>
            <Col lg={localTab === 'vendor' ? 4 : 6} md={6} className="text-md-end">
              {localTab === 'vendor' ? (
                <button className="modern-btn btn-gold w-auto d-inline-flex px-5" onClick={openAddVendorForm}>
                  <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Vendor
                </button>
              ) : (
                <button className="modern-btn btn-gold w-auto d-inline-flex px-5" onClick={openAddCustomerForm}>
                  <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Customer
                </button>
              )}
            </Col>
          </Row>
        </div>

        {/* Render dynamic Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pb-5">
          {localTab === 'vendor' && (
            <Row className="g-4">
              <AnimatePresence>
                {filteredVendors.length > 0 ? filteredVendors.map(vendor => {
                  const totals = getVendorPaymentTotals(vendor.vendorId);
                  return (
                    <Col xs={12} md={6} xl={3} key={vendor.id}>
                      <motion.div variants={itemVariants} layout className="h-100">
                        <div className="data-card" onClick={() => handleVendorClick(vendor)}>
                          <div className="actions">
                            <button className="circle-btn edit" onClick={(e) => openEditVendorForm(e, vendor)}><FontAwesomeIcon icon={faEdit}/></button>
                            <button className="circle-btn del" onClick={(e) => handleDeleteVendor(e, vendor.id)}><FontAwesomeIcon icon={faTrash}/></button>
                          </div>
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h3 className="card-title text-truncate" title={vendor.name}>{vendor.name}</h3>
                          </div>
                          {getStatusBadge(vendor.status)}
                          <div className="card-subtitle mt-3">
                            <FontAwesomeIcon icon={faIdCard} /> ID: {vendor.vendorId}
                          </div>
                          <div className="card-subtitle">
                            <FontAwesomeIcon icon={faPhone} /> {vendor.phone}
                          </div>
                          
                          <div className="card-stats mt-auto pt-3">
                            <div className="stat-block">
                              <div className="label">Total Collected</div>
                              <div className="val success">{formatCurrency(totals.collected)}</div>
                            </div>
                            <div className="stat-block">
                              <div className="label">Total Balance</div>
                              <div className="val warning">{formatCurrency(totals.balance)}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Col>
                  );
                }) : (
                  <Col xs={12} className="text-center py-5 text-muted"><h5>No vendors found matching criteria</h5></Col>
                )}
              </AnimatePresence>
            </Row>
          )}

          {localTab === 'customer' && (
            <Row className="g-4">
              <AnimatePresence>
                {filteredCustomers.length > 0 ? filteredCustomers.map(customer => {
                  const summary = getCustomerPaymentSummary(customer);
                  return (
                    <Col xs={12} md={6} xl={3} key={customer.id}>
                      <motion.div variants={itemVariants} layout className="h-100">
                        <div className="data-card" onClick={() => handleCustomerClick(customer)}>
                          <div className="actions">
                            <button className="circle-btn edit" onClick={(e) => openEditCustomerForm(e, customer)}><FontAwesomeIcon icon={faEdit}/></button>
                            <button className="circle-btn del" onClick={(e) => handleDeleteCustomer(e, customer.id)}><FontAwesomeIcon icon={faTrash}/></button>
                          </div>
                          <h3 className="card-title mb-2 pr-5 text-truncate" title={customer.name}>{customer.name}</h3>
                          <div className="card-subtitle">
                            <FontAwesomeIcon icon={faIdCard} /> Ref: <Badge bg="light" text="dark">{customer.vendorId}</Badge>
                          </div>
                          <div className="card-subtitle text-truncate" style={{marginBottom: "20px"}}>
                            <FontAwesomeIcon icon={faPhone} /> {customer.phone}
                          </div>
                          
                          <div className="card-stats mt-auto">
                            <div className="stat-block">
                              <div className="label">Collected</div>
                              <div className="val success">{formatCurrency(summary.collected)}</div>
                            </div>
                            <div className="stat-block">
                              <div className="label">Balance</div>
                              <div className="val warning">{formatCurrency(summary.balance)}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Col>
                  );
                }) : (
                  <Col xs={12} className="text-center py-5 text-muted"><h5>No customers found matching criteria</h5></Col>
                )}
              </AnimatePresence>
            </Row>
          )}
        </motion.div>

        {/* Form Modals */}
        {/* Vendor Form */}
        <AnimatePresence>
          {showAddVendorForm && (
            <Modal show={showAddVendorForm} onHide={() => setShowAddVendorForm(false)} centered contentClassName="custom-modal-content" backdrop="static">
              <Modal.Header className="custom-modal-header" closeButton closeVariant="white">
                <Modal.Title className="custom-modal-title">
                  <FontAwesomeIcon icon={isEditingVendor ? faEdit : faBuilding} className="me-3" />
                  {isEditingVendor ? "Edit Vendor" : "New Vendor"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-4">
                <Row className="g-4">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Vendor ID</Form.Label>
                      <Form.Control type="text" className="modern-input" value={newVendorData.vendorId} onChange={(e) => setNewVendorData({...newVendorData, vendorId: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Vendor Name *</Form.Label>
                      <Form.Control type="text" className="modern-input" value={newVendorData.name} onChange={(e) => setNewVendorData({...newVendorData, name: e.target.value})} autoFocus />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Phone</Form.Label>
                      <Form.Control type="tel" className="modern-input" value={newVendorData.phone} onChange={(e) => setNewVendorData({...newVendorData, phone: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Address</Form.Label>
                      <Form.Control as="textarea" rows={2} className="modern-input" value={newVendorData.address} onChange={(e) => setNewVendorData({...newVendorData, address: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Status</Form.Label>
                      <Form.Select className="modern-select" value={newVendorData.status} onChange={(e) => setNewVendorData({...newVendorData, status: e.target.value})}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="border-0 p-4 pt-0">
                <Button variant="light" className="px-4 py-2" style={{borderRadius: '12px', fontWeight:600}} onClick={() => setShowAddVendorForm(false)}>Cancel</Button>
                <button className="modern-btn btn-gold w-auto" onClick={handleSaveVendor}>
                  <FontAwesomeIcon icon={faSave} className="me-2" /> Save Vendor
                </button>
              </Modal.Footer>
            </Modal>
          )}
        </AnimatePresence>

        {/* Customer Form */}
        <AnimatePresence>
          {showAddCustomerForm && (
            <Modal show={showAddCustomerForm} onHide={() => setShowAddCustomerForm(false)} centered contentClassName="custom-modal-content" backdrop="static">
              <Modal.Header className="custom-modal-header" closeButton closeVariant="white">
                <Modal.Title className="custom-modal-title">
                  <FontAwesomeIcon icon={isEditingCustomer ? faEdit : faUser} className="me-3" />
                  {isEditingCustomer ? "Edit Customer" : "New Customer"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-4">
                <Row className="g-4">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Customer Name *</Form.Label>
                      <Form.Control type="text" className="modern-input" value={newCustomerData.name} onChange={(e) => setNewCustomerData({...newCustomerData, name: e.target.value})} autoFocus />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Phone</Form.Label>
                      <Form.Control type="tel" className="modern-input" value={newCustomerData.phone} onChange={(e) => setNewCustomerData({...newCustomerData, phone: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Address</Form.Label>
                      <Form.Control as="textarea" rows={2} className="modern-input" value={newCustomerData.address} onChange={(e) => setNewCustomerData({...newCustomerData, address: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="form-label">Reference (Vendor)</Form.Label>
                      <Form.Select className="modern-select" value={newCustomerData.vendorId} onChange={(e) => setNewCustomerData({...newCustomerData, vendorId: e.target.value})}>
                        <option value="">-- Select Reference --</option>
                        {vendorData.filter(v => v.status==='Active').map(v => (
                          <option key={v.id} value={v.vendorId}>{v.name} ({v.vendorId})</option>
                        ))}
                        <option value="Others">Others</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="border-0 p-4 pt-0">
                <Button variant="light" className="px-4 py-2" style={{borderRadius: '12px', fontWeight:600}} onClick={() => setShowAddCustomerForm(false)}>Cancel</Button>
                <button className="modern-btn btn-gold w-auto" onClick={handleSaveCustomer}>
                  <FontAwesomeIcon icon={faSave} className="me-2" /> Save Customer
                </button>
              </Modal.Footer>
            </Modal>
          )}
        </AnimatePresence>

        {/* Display Modals */}
        {/* Vendor Details */}
        <AnimatePresence>
          {showVendorModal && currentVendor && (
            <Modal show={showVendorModal} onHide={() => setShowVendorModal(false)} size="xl" centered contentClassName="custom-modal-content">
              <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit">
                <Modal.Header className="custom-modal-header" closeButton closeVariant="white">
                  <Modal.Title className="custom-modal-title"><FontAwesomeIcon icon={faBuilding} className="me-3" /> Vendor: {currentVendor.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 p-md-5" style={{maxHeight:'80vh', overflowY:'auto'}}>
                  <div className="info-grid">
                    <div className="info-item"><div className="lbl">Vendor ID</div><div className="v">{currentVendor.vendorId}</div></div>
                    <div className="info-item"><div className="lbl">Phone</div><div className="v">{currentVendor.phone}</div></div>
                    <div className="info-item"><div className="lbl">Status</div><div className="v">{getStatusBadge(currentVendor.status)}</div></div>
                    <div className="info-item"><div className="lbl">Collected</div><div className="v text-success">{formatCurrency(getVendorPaymentTotals(currentVendor.vendorId).collected)}</div></div>
                    <div className="info-item"><div className="lbl">Balance</div><div className="v text-warning">{formatCurrency(getVendorPaymentTotals(currentVendor.vendorId).balance)}</div></div>
                  </div>

                  <h4 className="section-title"><FontAwesomeIcon icon={faUsers} /> Linked Customers</h4>
                  <div className="mini-cards-grid">
                    {customerData.filter(c => c.vendorId === currentVendor.vendorId).map(client => {
                      const cSummary = getCustomerPaymentSummary(client);
                      return (
                        <div className="mini-card" key={client.id} onClick={() => handleCustomerClick(client, true)}>
                          <div className="mini-card-title">{client.name}</div>
                          <div className="text-muted" style={{fontSize: '0.85rem'}}><FontAwesomeIcon icon={faPhone}/> {client.phone}</div>
                          <div className="mini-card-stat border-top pt-3 mt-3">
                            <span className="text-success">Paid: {formatCurrency(cSummary.collected)}</span>
                            <span className="text-warning">Bal: {formatCurrency(cSummary.balance)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {customerData.filter(c => c.vendorId === currentVendor.vendorId).length === 0 && (
                    <div className="text-center py-5 text-muted border rounded-4 bg-light">No customers linked to this vendor.</div>
                  )}
                </Modal.Body>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

        {/* Customer Details & Individual Document Billing */}
        <AnimatePresence>
          {showCustomerModal && currentCustomer && (
            <Modal show={showCustomerModal} onHide={() => {
              setShowCustomerModal(false);
              if (viewingCustomerFromVendor) setShowVendorModal(true);
            }} size="xl" centered contentClassName="custom-modal-content">
              <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit">
                <Modal.Header className="custom-modal-header" closeButton closeVariant="white">
                  {viewingCustomerFromVendor && (
                    <Button variant="link" className="text-white text-decoration-none me-3 p-0" onClick={handleBackToVendorModal}>
                      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </Button>
                  )}
                  <Modal.Title className="custom-modal-title"><FontAwesomeIcon icon={faUser} className="me-3" /> Customer Profile: {currentCustomer.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 p-md-5" style={{maxHeight: '80vh', overflowY: 'auto'}}>
                  <div className="info-grid">
                    <div className="info-item"><div className="lbl">Phone / Contact</div><div className="v">{currentCustomer.phone}</div></div>
                    <div className="info-item"><div className="lbl">Reference Link</div><div className="v">{currentCustomer.vendorId}</div></div>
                    <div className="info-item" style={{gridColumn: 'span 2'}}><div className="lbl">Address</div><div className="v">{currentCustomer.address}</div></div>
                  </div>

                  {/* Rendering function for documents */}
                  {(()=>{
                    const renderDocs = (records, title, icon) => {
                      if(!records || records.length === 0) return null;
                      return (
                        <>
                          <h4 className="section-title"><FontAwesomeIcon icon={icon} /> {title} Details</h4>
                          {records.map(r => (
                            <div className="billing-item" key={r.id}>
                              <div className="billing-item-header">
                                <div className="b-date"><FontAwesomeIcon icon={faClock}/> {r.date} &nbsp;|&nbsp; {r.time}</div>
                                <Badge bg={['Completed', 'Registered', 'Active'].includes(r.status) ? 'success' : 'secondary'} className="px-3 py-2 rounded-pill fs-6">{r.status}</Badge>
                              </div>
                              <div className="billing-item-body">
                                <div className="b-detail"><FontAwesomeIcon icon={faFileAlt} className="text-muted me-2"/> {r.details}</div>
                                <div className="payment-tag cost">Cost: {formatCurrency(r.cost)}</div>
                                <div className="payment-tag paid">Paid: {formatCurrency(r.paid)}</div>
                              </div>
                            </div>
                          ))}
                        </>
                      );
                    };

                    const hasRecords = currentCustomer.ecRecords?.length > 0 || currentCustomer.nagalRecords?.length > 0 || currentCustomer.agreementRecords?.length > 0 || currentCustomer.deedRecords?.length > 0;
                    
                    if(!hasRecords) {
                      return <div className="text-center py-5 text-muted border rounded-4 bg-light my-5">No document records found for this customer.</div>;
                    }

                    return (
                      <>
                        {renderDocs(currentCustomer.ecRecords, 'EC Records', faMapMarkerAlt)}
                        {renderDocs(currentCustomer.nagalRecords, 'Nagal Records', faBook)}
                        {renderDocs(currentCustomer.agreementRecords, 'Agreements', faFileAlt)}
                        {renderDocs(currentCustomer.deedRecords, 'Deed Records', faScroll)}
                      </>
                    );
                  })()}

                  {/* Grand Summary Block */}
                  {(()=>{
                     const sums = getCustomerPaymentSummary(currentCustomer);
                     return(
                       <div className="grand-summary">
                         <div className="summary-col">
                           <div className="lbl">Total Overall Cost</div>
                           <div className="val">{formatCurrency(sums.cost)}</div>
                         </div>
                         <div className="summary-col">
                           <div className="lbl">Total Paid</div>
                           <div className="val text-success">{formatCurrency(sums.collected)}</div>
                         </div>
                         <div className="summary-col" style={{borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft:'24px'}}>
                           <div className="lbl text-warning">Overall Balance</div>
                           <div className="val highlight">{formatCurrency(sums.balance)}</div>
                         </div>
                       </div>
                     )
                  })()}

                </Modal.Body>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Vendor;
