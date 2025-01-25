
import { useNavigate } from "react-router-dom"; // React Router for navigation


function Rent() {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <section className="container">
      {/* Header Section */}
      <section className="row">
        <div className="text-center mt-5">
          <h1 className="display-4">
            Looking to Rent a new property <span className="d-block">or Sell an existing one?</span>
          </h1>
          <p className="lead">Lorem dolor sit amet, disse suscipit sagittis leo sitea.</p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mt-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {[
            { icon: "bi-building", label: "Apartment", route: "/apartment" },
            { icon: "bi-house", label: "House", route: "/house" },
            { icon: "bi-briefcase", label: "Office", route: "/office" },
            { icon: "bi-tree", label: "Villa", route: "/villa" },
            { icon: "bi-building-up", label: "Luxury Homes", route: "/luxury-homes" },
          ].map((card, index) => (
            <div key={index} className="col">
              <div
                className="card border-0 shadow-sm hover-card text-center"
                onClick={() => navigate(card.route)}
                role="button"
              >
                <div className="card-body">
                  <div className="icon-container">
                    <i className={`bi ${card.icon}`} style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title mt-2">{card.label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Rent;
