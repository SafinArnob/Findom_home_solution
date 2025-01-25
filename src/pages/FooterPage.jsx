const FooterPage = () => {
  // Custom dark blue color
  const darkBlue = '#003366'; // You can adjust this hex code to your preferred shade of dark blue

  return (
    <section style={{ backgroundColor: darkBlue }} className="mt-5">
      {/* Header Section with Custom Dark Blue Background */}
      <div className="text-white text-center py-5">
        <h1>Why choose HomeID</h1>
        <p>We will make sure your property gets in front of the right people.</p>
      </div>

      {/* Main Content Section */}
      <section className="container my-5">
        <div className="row">
          {/* First Column */}
          <div className="col-md-4 text-center text-white">
            <img
              src="https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=2048x2048&w=is&k=20&c=yBBy7nC3wQsiLBYgxxHb-sM3rfUr_0uHQfWpvjLOZVI="
              alt="Wider range of properties"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '200px' }}
            />
            <h3>Wider range of properties</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Second Column */}
          <div className="col-md-4 text-center text-white">
            <img
              src="https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=2048x2048&w=is&k=20&c=yBBy7nC3wQsiLBYgxxHb-sM3rfUr_0uHQfWpvjLOZVI="
              alt="Wider range of properties"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '200px' }}
            />
            <h3>Trusted by thousands</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Third Column */}
          <div className="col-md-4 text-center text-white">
            <img
              src="https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=2048x2048&w=is&k=20&c=yBBy7nC3wQsiLBYgxxHb-sM3rfUr_0uHQfWpvjLOZVI="
              alt="Wider range of properties"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '200px' }}
            />
            <h3>Dedicated property service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3">
              <h5>homeID</h5>
              <p>58 Howard Street #2 San Francisco</p>
              <p>Email: contact@homeid.com</p>
              <p>Phone: (+68) 1221 09876</p>
              <a href="http://www.homeid.com" className="text-white">www.homeid.com</a>
            </div>

            {/* Popular Searches */}
            <div className="col-md-3">
              <h5>Popular Searches</h5>
              <ul className="list-unstyled">
                <li>Apartment for Rent</li>
                <li>Apartment Low to Hide</li>
                <li>Offices for Buy</li>
                <li>Offices for Rent</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <button className="btn btn-link text-white p-0 hover-light">Terms of Use</button>
                </li>
                <li>
                  <button className="btn btn-link text-white p-0 hover-light">Privacy Policy</button>
                </li>
                <li>
                  <button className="btn btn-link text-white p-0 hover-light">Contact Support</button>
                </li>
                <li>
                  <button className="btn btn-link text-white p-0 hover-light">Careers</button>
                </li>
                <li>
                  <button className="btn btn-link text-white p-0 hover-light">FAQs</button>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="col-md-3">
              <h5>Sign Up for Our Newsletter</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    aria-label="Your email"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-facebook me-2"></i>
                <i className="fab fa-skype me-2"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterPage;
