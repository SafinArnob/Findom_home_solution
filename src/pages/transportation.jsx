import { useState } from "react";
import "../styles/transportation.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { FaTruck, FaClock, FaMobileAlt, FaUser, FaArrowDown, FaSearch } from "react-icons/fa";

const trucks = [
  {
    id: 1,
    name: "১ টন কাভার্ড ভ্যান",
    image: "src/assets/images/truck1.png",
    price: 450,
    area: "মোহাম্মদপুর",
    type: "ভ্যান",
    details: {
      weightLimit: "৮০০ কেজি পর্যন্ত",
      size: "১৮৮ × ১০০ × ১৮৮ সেমি",
      usage: "একাধিক পণ্য ডেলিভারি, বড় মালপত্র এবং ইলেকট্রনিক্স পরিবহন",
    },
  },
  {
    id: 2,
    name: "১ টন পিক আপ ট্রাক (৫ ঘন্টা)",
    image: "src/assets/images/truck1.png",
    price: 500,
    area: "রামপুরা",
    type: "পিক আপ",
    details: {
      weightLimit: "১০০০ কেজি পর্যন্ত",
      size: "২০০ × ১০০ × ২০০ সেমি",
      usage: "গৃহস্থালি সরঞ্জাম, ইভেন্ট সামগ্রী পরিবহন",
    },
  },
  {
    id: 3,
    name: "১ টন কাভার্ড ভ্যান (৫ ঘন্টা)",
    image: "src/assets/images/truck1.png",
    price: 550,
    area: "মধুবাগ",
    type: "ভ্যান",
    details: {
      weightLimit: "৯০০ কেজি পর্যন্ত",
      size: "১৯০ × ১১০ × ১৯০ সেমি",
      usage: "ব্যবসায়িক মালপত্র, ই-কমার্স ডেলিভারি",
    },
  },
  {
    id: 4,
    name: "২ টন কাভার্ড ভ্যান",
    image: "src/assets/images/truck1.png",
    price: 600,
    area: "উত্তরা",
    type: "ভ্যান",
    details: {
      weightLimit: "১৫০০ কেজি পর্যন্ত",
      size: "২২০ × ১২০ × ২২০ সেমি",
      usage: "বড় মালপত্র এবং ভারী সরঞ্জাম পরিবহন",
    },
  },
  {
    id: 5,
    name: "২ টন পিক আপ ট্রাক",
    image: "src/assets/images/truck1.png",
    price: 700,
    area: "ধানমন্ডি",
    type: "পিক আপ",
    details: {
      weightLimit: "২০০০ কেজি পর্যন্ত",
      size: "২৫০ × ১৩০ × ২৫০ সেমি",
      usage: "ইভেন্ট সামগ্রী এবং ভারী সরঞ্জাম পরিবহন",
    },
  },
  {
    id: 6,
    name: "৩ টন কাভার্ড ভ্যান",
    image: "src/assets/images/truck1.png",
    price: 800,
    area: "আজিমপুর",
    type: "ভ্যান",
    details: {
      weightLimit: "২৫০০ কেজি পর্যন্ত",
      size: "২৮০ × ১৫০ × ২৮০ সেমি",
      usage: "বড় ব্যবসায়িক মালপত্র এবং ভারী সরঞ্জাম পরিবহন",
    },
  },
];

function Transportation() {
  const [expandedTrucks, setExpandedTrucks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrucks, setFilteredTrucks] = useState(trucks);
  const [filters, setFilters] = useState({
    price: "",
    area: "",
    type: "",
  });

  const toggleDescription = (truckId) => {
    setExpandedTrucks((prev) =>
      prev.includes(truckId) ? prev.filter((id) => id !== truckId) : [truckId]
    );
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    applyFilters(query);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    applyFilters(searchQuery, { ...filters, [name]: value });
  };

  const applyFilters = (query, filterState = filters) => {
    const filtered = trucks.filter((truck) => {
      const matchesQuery =
        truck.name.toLowerCase().includes(query) ||
        truck.details.usage.toLowerCase().includes(query);
      const matchesPrice =
        !filterState.price || truck.price <= parseInt(filterState.price);
      const matchesArea =
        !filterState.area || truck.area === filterState.area;
      const matchesType =
        !filterState.type || truck.type === filterState.type;
      return matchesQuery && matchesPrice && matchesArea && matchesType;
    });
    setFilteredTrucks(filtered);
  };

  return (
    <>
      <Navbar />
      <section className="background-image-transportation position-relative">
        <div className="overlay"></div>
      </section>

      <section className="section-2">
        <div className="image-container">
          <img
            src="src/assets/images/rider.png"
            alt="Lalamove Advertisement"
            className="section-2-image"
          />
        </div>
        <div className="content">
          <h2>আপনার স্থানীয় ডেলিভারি পার্টনার</h2>
          <ul>
            <li className="list-item">
              <FaTruck className="icon large-icon" />
              <strong>আপনি যখন প্রস্তুত হবেন:</strong> একজন ডেলিভারি ড্রাইভারের সাথে যোগাযোগ করুন এবং তারা আপনার পছন্দের পিক-আপ স্পটে পৌঁছে যাবে।
            </li>
            <li className="list-item">
              <FaUser className="icon user large-icon" />
              <strong>পেশাদার ড্রাইভার:</strong> প্রশিক্ষিত ড্রাইভারদের মাধ্যমে আনন্দের সাথে ডেলিভারি করুন।
            </li>
            <li className="list-item">
              <FaClock className="icon large-icon" />
              <strong>সময় বাঁচাতে:</strong> আপনার কষ্টক শ্রম আমাদেরকে করতে দিন। আমরা শহরের যেকোনো প্রান্তে আপনার পণ্য পৌঁছে দেব।
            </li>
            <li className="list-item">
              <FaMobileAlt className="icon large-icon" />
              <strong>একটি অ্যাপে সবকিছু:</strong> একটি ডেলিভারির সমস্ত কিছু ট্র্যাক করুন, আপডেট পান এবং আপনার প্রয়োজন অনুযায়ী ড্রাইভার বেছে নিন।
            </li>
          </ul>
        </div>
      </section>

      <div className="truck-container">
        <div className="search-filter-container">
          <div className="search-filter">
            <div className="filter-bar">
              <select
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
              >
                <option value="">সর্বোচ্চ মূল্য</option>
                <option value="500">৳ ৫০০</option>
                <option value="700">৳ ৭০০</option>
                <option value="1000">৳ ১০০০</option>
              </select>
              <select
                name="area"
                value={filters.area}
                onChange={handleFilterChange}
              >
                <option value="">এলাকা</option>
                <option value="মোহাম্মদপুর">মোহাম্মদপুর</option>
                <option value="রামপুরা">রামপুরা</option>
                <option value="মধুবাগ">মধুবাগ</option>
                <option value="উত্তরা">উত্তরা</option>
                <option value="ধানমন্ডি">ধানমন্ডি</option>
                <option value="আজিমপুর">আজিমপুর</option>
              </select>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
              >
                <option value="">ট্রাকের ধরন</option>
                <option value="ভ্যান">ভ্যান</option>
                <option value="পিক আপ">পিক আপ</option>
              </select>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="ট্রাক অনুসন্ধান করুন..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="truck-list">
          {filteredTrucks.map((truck) => (
            <div key={truck.id} className="truck-item">
              <img src={truck.image} alt={truck.name} className="truck-image" />
              <h3>{truck.name}</h3>
              <p className="truck-price">৳ {truck.price}</p>
              <button
                className="call-button"
                onClick={(e) => e.stopPropagation()}
              >
                Call Now
              </button>
              <div
                className="description-toggle"
                onClick={() => toggleDescription(truck.id)}
              >
                <FaArrowDown
                  className={`down-arrow ${expandedTrucks.includes(truck.id) ? "rotate" : ""
                    }`}
                />
              </div>
              {expandedTrucks.includes(truck.id) && (
                <div className="description-box">
                  <p>
                    <strong>ভাড়া:</strong>{" "}
                    <span className="truck-price">৳ {truck.price}</span>
                  </p>
                  <p>
                    <strong>ওজন সীমা:</strong> {truck.details.weightLimit}
                  </p>
                  <p>
                    <strong>আকার সীমা:</strong> {truck.details.size}
                  </p>
                  <p>
                    <strong>যার জন্য উপযুক্ত:</strong> {truck.details.usage}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="static-image-container">
        <img
          src="src/assets/images/transportation.png" 
          alt="Static Image"
          className="static-image"
        />
      </div>
      <Footer />
    </>
  );
}

export default Transportation;