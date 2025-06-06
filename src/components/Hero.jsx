const HeroSection = () => {
  return (
    <main className="hero container" style={styles.main}>
      <div className="hero-content" style={styles.content}>
        <h1 style={styles.heading}>YOUR FEET DESERVE THE BEST!</h1>
        <p style={styles.subtext}>
          Discover comfort, style, and performance with our premium footwear
          collection. Crafted for those who never settle.
        </p>
        <div className="hero-btn" style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>Shop Now</button>
          <button className="secondary-btn" style={styles.secondaryBtn}>Explore Categories</button>
        </div>
        <div className="shopping" style={styles.shoppingInfo}>
          <p style={styles.availabilityText}>Check below for availability</p>
          <div className="brand-icons" style={styles.brandIcons}>
            <img
              src="/images/shop.png"
              alt="shop-logo"
              style={styles.brandLogo}
            />
          </div>
        </div>
      </div>
      <div className="hero-image" style={styles.imageWrapper}>
        <img
          src="/images/shoe_image.png"
          alt="shoe"
          style={styles.heroImage}
        />
      </div>
    </main>
  );
};

const styles = {
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 20px',
    backgroundColor: '#fff',
    fontFamily: 'Poppins, sans-serif',
  },
  content: {
    flex: 1,
    maxWidth: '600px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  primaryBtn: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  secondaryBtn: {
    backgroundColor: '#fff',
    color: '#ff4d4f',
    border: '2px solid #ff4d4f',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  shoppingInfo: {
    marginTop: '30px',
  },
  availabilityText: {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '10px',
  },
  brandIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  brandLogo: {
    width: '40px',
    height: '40px',
  },
  imageWrapper: {
    flex: 1,
    textAlign: 'center',
  },
  heroImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
};

export default HeroSection;
