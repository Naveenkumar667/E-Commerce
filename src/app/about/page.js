export default function About() {
  return (
    <div className="main-content">
      <h1>About MangaVerse</h1>
      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Welcome to MangaVerse — your go-to destination for manga volumes, anime figures, and collectibles.
          We’re here to bring your favorite series to life with authentic merchandise and a passion for fandom.
        </p>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>Our Journey</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Started by anime fans for anime fans, MangaVerse began with a dream to make rare and popular collectibles
          easily accessible across India. From Tokyo treasures to local favorites, we curate with care.
        </p>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>What We Offer</h2>
        <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
          <li>✅ Original Manga Volumes</li>
          <li>✅ High-Quality Anime Figures</li>
          <li>✅ Limited Edition & Signed Collectibles</li>
          <li>✅ Fast Shipping Across India</li>
          <li>✅ Secure Payments & Easy Returns</li>
          <li>✅ Fan-Focused Support Team</li>
        </ul>

        <h2 style={{ margin: '2rem 0 1rem 0', color: '#2c3e50' }}>Payment & Delivery</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We accept UPI, cards, net banking, and cash on delivery. Orders ship within 3–7 days, with express options
          for major cities.
        </p>
      </div>
    </div>
  );
}