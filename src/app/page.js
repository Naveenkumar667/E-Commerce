'use client';
import Link from 'next/link';
import '../app/globals.css'; // Make sure this path matches your actual file structure

export default function HomePage() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 className="display-4">Welcome to MangaVerse</h1>
        <p className="lead">Your gateway to the world of manga & anime collectibles</p>
        <Link href="/products" className="btn btn-primary" style={{ maxWidth: '200px', margin: '1rem auto', display: 'block' }}>
          Shop Now
        </Link>
      </section>

      
      {/* Featured Categories */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Featured Categories</h2>
        <ul className="list-group">
          <li className="list-group-item">📘 Shonen Manga – Naruto, One Piece, My Hero Academia</li>
          <li className="list-group-item">💖 Shojo Manga – Fruits Basket, Sailor Moon</li>
          <li className="list-group-item">🧍 Anime Figures – Attack on Titan, Demon Slayer</li>
          <li className="list-group-item">🎁 Collector’s Corner – Rare finds & signed editions</li>
        </ul>
      </section>

      {/* Call to Action */}
      <Link
  href="/signin"
  className="btn btn-dark"
  style={{ maxWidth: '200px', margin: '1rem auto', display: 'block' }}
>
  Sign In
</Link>
    </main>
  );
}