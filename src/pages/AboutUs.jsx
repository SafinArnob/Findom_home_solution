import Footer from './Footer';

const AboutUs = () => {
  // Custom dark blue color
  const darkBlue = '#000966'; // Theme color for the header section

  return (
    <>
      <section style={{ backgroundColor: darkBlue }} className="mt-5">
        {/* Header Section with Custom Dark Blue Background */}
        <div className="text-white text-center py-5">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Why Choose FindHome</h1>
          <p style={{ fontSize: '1.2rem', color: '#ddd' }}>
            Discover the best properties with FindHome. We ensure safe, reliable, and hassle-free renting and buying experiences.
          </p>
        </div>

        {/* Main Content Section */}
        <section className="container my-5">
          <div className="row">
            {/* First Column */}
            <div className="col-md-4 text-center text-white mb-4">
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  margin: '10px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Add background-color transition
                }}
                className="hover-effect" // Added class for hover effect
              >
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                  alt="Wider range of Houses"
                  className="img-fluid rounded mb-3"
                  style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>Wide Range of Properties</h3>
                <p style={{ fontSize: '1rem', color: darkBlue }}>
                  Explore a vast selection of homes, apartments, and commercial spaces tailored to your needs.
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-md-4 text-center text-white mb-4">
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  margin: '10px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Add background-color transition
                }}
                className="hover-effect" // Added class for hover effect
              >
                <img
                  src="https://5.imimg.com/data5/GLADMIN/Default/2020/9/JN/ME/NC/32732628/mall-shifting-500x500.jpeg"
                  alt="Best After Services"
                  className="img-fluid rounded mb-3"
                  style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>Exceptional After-Sales Support</h3>
                <p style={{ fontSize: '1rem', color: darkBlue }}>
                  Our dedicated team provides top-notch support even after you’ve found your dream property.
                </p>
              </div>
            </div>

            {/* Third Column */}
            <div className="col-md-4 text-center text-white mb-4">
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  margin: '10px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Add background-color transition
                }}
                className="hover-effect" // Added class for hover effect
              >
                <img
                  src="https://media.istockphoto.com/id/1186072426/vector/core-values-set-icon.jpg?s=612x612&w=0&k=20&c=sYBQh-CBOxHksRZMvvQEyxqFQ4WWTdVzypGUtBbDWeI="
                  alt="Trusted by Thousands"
                  className="img-fluid rounded mb-3"
                  style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>Trusted by Thousands</h3>
                <p style={{ fontSize: '1rem', color: darkBlue }}>
                  Join thousands of satisfied customers who have found their perfect home with FindHome.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default AboutUs;