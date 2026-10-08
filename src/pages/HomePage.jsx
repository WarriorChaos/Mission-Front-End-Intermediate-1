import { useState } from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import CourseCard from '../components/home/CourseCard/CourseCard';
import Button from '../components/common/Button/Button';
import './HomePage.css';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('semua-kelas');

  // Sample course data
  const courses = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 4,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 4.5,
      reviews: '3.5 (80)',
      price: 'Rp 300K'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 4,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi digital dengan instruktur profesional, harga yang terjangkau, dan...',
      instructor: {
        name: 'Jenna Ortega',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
      },
      instructorRole: 'Senior Accountant at Gajok',
      rating: 3.5,
      reviews: '3.5 (86)',
      price: 'Rp 300K'
    }
  ];

  const categories = [
    { id: 'semua-kelas', label: 'Semua Kelas' },
    { id: 'pemasaran', label: 'Pemasaran' },
    { id: 'desain', label: 'Desain' },
    { id: 'pengembangan-diri', label: 'Pengembangan Diri' },
    { id: 'bisnis', label: 'Bisnis' }
  ];

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
          <p className="hero-description">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam sesi interaktif yang akan meningkatkan pemahaman Anda.
          </p>
          <Button variant="primary">
            Temukan Video Course untuk Dipelaajari!
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" id="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="section-subtitle">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="course-grid">
            {courses.map(course => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Mau Belajar Lebih Banyak?</h2>
            <p className="newsletter-description">
              Daftarkan email Anda untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik kami.id
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="newsletter-input"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
