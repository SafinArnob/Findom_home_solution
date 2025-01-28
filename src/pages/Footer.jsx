

const Footer = () => {
    const themeColor = '#ff853f'; // Theme color for buttons and highlights
    const lightBackground = '#f8f9fa'; // Light background for the footer section

    return (
        <section className="container">
            <footer className="text-white py-5" style={{ backgroundColor: lightBackground }}>
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3 text-dark">
              <h5 style={{ fontWeight: 'bold' }}>FindHome</h5>
              <p>58 Love Road #2 Tejgaon</p>
              <p>Email: contact@homeid.com</p>
              <p>Phone: (+68) 1221 09876</p>
              <a href="http://www.homeid.com" className="text-dark">www.homeid.com</a>
            </div>

            {/* Popular Searches */}
            <div className="col-md-3 text-dark">
              <h5 style={{ fontWeight: 'bold' }}>Popular Searches</h5>
              <ul className="list-unstyled">
                <li>Apartment for Rent</li>
                <li>Apartment Low to Hide</li>
                <li>Offices for Buy</li>
                <li>Offices for Rent</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 text-dark">
              <h5 style={{ fontWeight: 'bold' }}>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <button className="btn btn-link p-0 text-dark hover-light">Terms of Use</button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-dark hover-light">Privacy Policy</button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-dark hover-light">Contact Support</button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-dark hover-light">Careers</button>
                </li>
                <li>
                  <button className="btn btn-link p-0 text-dark hover-light">FAQs</button>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="col-md-3 text-dark">
              <h5 style={{ fontWeight: 'bold' }}>Give Us Suggestions</h5>
              <p></p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Any Suggestions"
                  />
                  <button className="btn" style={{ backgroundColor: themeColor, color: 'white' }} type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-3 text-dark">
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

export default Footer;
