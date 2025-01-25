const FooterPage = () => {
  // Custom dark blue color
  const darkBlue = '#000966'; // Theme color for the header section
  const themeColor = '#ff853f'; // Theme color for buttons and highlights
  const lightBackground = '#f8f9fa'; // Light background for the footer section

  return (
    <section style={{ backgroundColor: darkBlue }} className="mt-5">
      {/* Header Section with Custom Dark Blue Background */}
      <div className="text-white text-center py-5">
        <h1>Why choose FindHome</h1>
        <p>We will make sure your property gets in front of the right people.</p>
      </div>

      {/* Main Content Section */}
      <section className="container my-5">
        <div className="row">
          {/* First Column */}
          <div className="col-md-4 text-center text-white">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt="Fastest & Safest Rent Soluition"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '200px' }}
            />
            <h3>Wider range of properties</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Second Column */}
          <div className="col-md-4 text-center text-white">
            <img
              src="https://5.imimg.com/data5/GLADMIN/Default/2020/9/JN/ME/NC/32732628/mall-shifting-500x500.jpeg"
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
      <footer className="text-white py-5" style={{ backgroundColor: lightBackground }}>
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3 text-dark">
              <h5>FindHome</h5>
              <p>58 Love Road #2 Tejgaon</p>
              <p>Email: contact@homeid.com</p>
              <p>Phone: (+68) 1221 09876</p>
              <a href="http://www.homeid.com" className="text-dark">www.homeid.com</a>
            </div>

            {/* Popular Searches */}
            <div className="col-md-3 text-dark">
              <h5>Popular Searches</h5>
              <ul className="list-unstyled">
                <li>Apartment for Rent</li>
                <li>Apartment Low to Hide</li>
                <li>Offices for Buy</li>
                <li>Offices for Rent</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 text-dark">
              <h5>Quick Links</h5>
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
              <h5>Give Us Suggestions</h5>
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

export default FooterPage;