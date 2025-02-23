const AboutUs = () => {
  // Custom dark blue color
  const darkBlue = '#000966'; // Theme color for the header section

  const columnStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

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
            {[{
              img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
              title: "Wide Range of Properties",
              text: "Explore a vast selection of homes, apartments, and commercial spaces tailored to your needs."
            }, {
              img: "https://5.imimg.com/data5/GLADMIN/Default/2020/9/JN/ME/NC/32732628/mall-shifting-500x500.jpeg",
              title: "Exceptional After-Sales Support",
              text: "Our dedicated team provides top-notch support even after you’ve found your dream property."
            }, {
              img: "https://media.istockphoto.com/id/1186072426/vector/core-values-set-icon.jpg?s=612x612&w=0&k=20&c=sYBQh-CBOxHksRZMvvQEyxqFQ4WWTdVzypGUtBbDWeI=",
              title: "Trusted by Thousands",
              text: "Join thousands of satisfied customers who have found their perfect home with FindHome."
            }].map((item, index) => (
              <div key={index} className="col-md-4 text-center text-white mb-4">
                <div
                  style={columnStyle}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', color: darkBlue }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section> 
      </section>     
    </>
  );
};

export default AboutUs;
