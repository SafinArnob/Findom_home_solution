

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
      <footer className="bg-dark text-white text-center py-4">
        <p>Suspendisse suscorem ipsum dolor sit ametcipaum</p>
        <p>suscorein ipsumg elit.</p>
      </footer>
    </section>
  );
};

export default FooterPage;