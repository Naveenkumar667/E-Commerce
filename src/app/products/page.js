'use client';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../cart/redux/cartSlice';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Naruto Action Figure',
    price: 1499,
    description: 'Detailed Naruto Uzumaki figure with kunai and Rasengan pose',
    image: '../Images/naruto.webp'
  },
  {
    id: 2,
    name: 'One Piece Manga Vol. 1',
    price: 499,
    description: 'First volume of the legendary One Piece manga series',
    image: '../Images/Onepiece Posters.jpeg'
  },
  {
    id: 3,
    name: 'Demon Slayer Tanjiro Figure',
    price: 1799,
    description: 'Tanjiro Kamado figure with sword and dynamic stance',
    image: '../Images/demon slayer.jpg'
  },
  {
    id: 4,
    name: 'Attack on Titan Keychain Set',
    price: 399,
    description: 'Set of 4 keychains featuring Eren, Mikasa, Levi, and Armin',
    image: '../Images/AOT.jpg'
  },
  {
    id: 5,
    name: 'My Hero Academia Manga Vol. 5',
    price: 599,
    description: 'Midoriya faces new challenges in this thrilling volume',
    image: '../Images/MHA.webp'
  },
  {
    id: 6,
    name: 'Haikyuu Poster Pack',
    price: 299,
    description: 'Set of 3 glossy posters featuring Haikyuu and friends',
    image: '../Images/haikyuu.jpg'
  },
  {
    id: 7,
    name: 'Tokyo Revengers Hoodie',
    price: 999,
    description: 'Black hoodie with Tokyo Manji Gang emblem',
    image: '../Images/tokyoRevengers.jpg'
  },
  {
    id: 8,
    name: 'Dragon Ball Z Goku Figure',
    price: 1599,
    description: 'Super Saiyan Goku figure with energy aura base',
    image: '../Images/goku.webp'
  }
];

// Format price in Indian Rupees
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAlertMessage(`${product.name} added to cart!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  if (!isMounted) {
    return (
      <div>
        <h1>Our Products</h1>
        <p>Loading your favorite anime collectibles...</p>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">Loading...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#4CAF50',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}>
          {alertMessage}
        </div>
      )}

      <h1>Explore Our Anime & Manga Collection</h1>
      <p>From action-packed figures to rare manga volumes — find your next treasure!</p>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ecf0f1',
                  color: '#7f8c8d',
                  borderRadius: '4px'
                }}
              >
                {product.name}
              </div>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-price">{formatPrice(product.price)}</div>
            <button
              className={`btn ${isInCart(product.id) ? 'btn-danger' : 'btn-primary'}`}
              onClick={() => handleAddToCart(product)}
            >
              {isInCart(product.id) ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}