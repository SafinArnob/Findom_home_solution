import { useNavigate } from "react-router-dom"; // React Router for navigation

function Rent() {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <section className="container">
      {/* Header Section */}
      <section className="row">
        <div className="text-center mt-5">
          <h1 className="display-4" style={{ color: 'rgb(8, 8, 112)' }}> {/* Deep navy color */}
            Looking to Rent a new property <span className="d-block">or All Rent Services ?</span>
          </h1>
          <p className="lead">FindHome is the best solution for you</p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mt-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {[
            { icon: "bi-person", label: "Bachelor", route: "/apartment" }, // Icon for Bachelor
            { icon: "bi-people", label: "Family", route: "/house" }, // Icon for Family
            { icon: "bi-house-door", label: "Sublet", route: "/office" }, // Icon for Sublet
            { icon: "bi-truck", label: "Transportation", route: "/villa" }, // Icon for Transportation (Truck)
            { icon: "bi-tools", label: "Services", route: "/luxury-homes" }, // Icon for Services
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