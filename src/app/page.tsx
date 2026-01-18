"use client";
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const videos = document.querySelectorAll<HTMLVideoElement>(".cake-video");

    videos.forEach(video => {

      // MOBILE: autoplay always
      if (isMobile && video.classList.contains("mobile-video")) {
        video.muted = true;
        video.playsInline = true;

        video.addEventListener("loadedmetadata", () => {
          video.play().catch(() => { });
        });

        return; // ⛔ stop here (NO hover logic on mobile)
      }

      // DESKTOP: hover play
      if (!isMobile && video.classList.contains("desktop-video")) {
        video.pause();

        video.addEventListener("mouseenter", () => {
          video.play();
        });

        video.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "919876543210"; // replace with bakery owner's number
    const message = "Hi, I visited your website and would like to order a cake 🎂";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="complete">
      <div className="website">
        <div className="hero">
          <div className="vid">
            <div className="desktop-vid">
              <video src="/videos/0001-0200.mp4" width={"300px"} autoPlay muted loop playsInline></video>
            </div>
            <div className="mobile-vid">
              <video src="/videos/Mobile_bg.mp4" width={"300px"} autoPlay muted loop playsInline></video>
            </div>
          </div>
          <div className="hero-content">
            <div className="name"><p>~Abc Bakers</p></div>
            <a href="#section2">
              <button >See Our Creation</button>
            </a>
            <h1>Handcrafted Cakes, Baked to Perfection</h1>

            <p className="hero-para">Custom cakes, pastries, and desserts designed to make your moments unforgettable.</p>
          </div>
        </div>
        <div className="second" id="section2">
          <div className="section2-head">
            <h1>Our Creation</h1>
          </div>

          <div className="models">

            <div className="card wedding">
              <video
                src="/videos/wedding_cake0001-0150.mkv"
                className="cake-video desktop-video"
                muted
                loop
                playsInline
              />
              <video
                src="/videos/wedding_cake0001-0150.mkv"
                className="cake-video mobile-video"
                autoPlay
                muted
                loop
                playsInline
              />

              <h1>Wedding Cake</h1>
              <p className="wedding-para">
                Elegant designs crafted for your special day. <br />
                Custom tiers, fine details, and timeless flavors.
              </p>
            </div>

            <div className="card birthday">
              <video
                src="/videos/birthdayCake_model0001-0150.mkv"
                className="cake-video desktop-video"
                muted
                loop
                playsInline
              />
              <video
                src="/videos/birthdayCake_model0001-0150.mkv"
                className="cake-video mobile-video"
                autoPlay
                muted
                loop
                playsInline
              />
              <h1>Birthday Cake</h1>
              <p>
                Fun, flavorful cakes made to celebrate every moment. <br />
                Designed to match your theme and taste.
              </p>
            </div>

            <div className="card pastry">
              <video
                src="/videos/Pastry_model0001-0150.mkv"
                className="cake-video desktop-video"

                muted
                loop
                playsInline
              />
              <video
                src="/videos/Pastry_model0001-0150.mkv"
                className="cake-video mobile-video"
                autoPlay
                muted
                loop
                playsInline
              />
              <h1>Pastry</h1>
              <p>
                Freshly baked pastries with rich textures and bold flavors. <br />
                Perfect for quick treats and sweet cravings.
              </p>
            </div>

          </div>
        </div>
        <div className="third" id="why-us">
          <div className="section1">
            <div className="head">
              <h1>Why Choose Us</h1>
            </div>
            <div className="speaciality-cards">
              <div className="cards">
                <h1>Freshly Baked Daily</h1>
                <p>Every cake is baked fresh using quality ingredients
                  to ensure rich taste, softness, and freshness in
                  every bite.</p>
              </div>
              <div className="cards">
                <h1>Custom Cake Designs</h1>
                <p>From birthdays to weddings, we create custom cake
                  designs tailored to your theme, style, and occasion.</p>
              </div>
              <div className="cards">
                <h1>Premium Ingredients</h1>
                <p>We use carefully selected ingredients to deliver
                  better flavor, quality, and a delightful experience
                  every time.</p>
              </div>
              <div className="cards">
                <h1>Made with Care</h1>
                <p>Every order is handled with attention and care,
                  ensuring perfect presentation and timely preparation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth" id="contact">
          <div className="contact">
            <h1>Get In Touch</h1>
            <div className="contact-info">
              <p><span style={{ fontWeight: '600', fontSize: '40px' }}>Phone Number -</span> XXXXXXXXXX</p>
              <p><span style={{ fontWeight: '600', fontSize: '40px' }}>Email -</span> owner's_gmailid.in</p>
              <p><span style={{ fontWeight: '600', fontSize: '40px' }}>Opening Hours -</span> from X to X</p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Chat & Order on WhatsApp
              </button>
            </div>
          </div>
          <div className="location">
            <h1>Location</h1>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13773.732353724516!2d78.04500688923213!3d30.338639262911986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d10e67303b%3A0xe95a330a1c28b69b!2sOpee&#39;s%20Bakers!5e0!3m2!1sen!2sin!4v1768750990336!5m2!1sen!2sin"style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <p className="address">
                📍 Abc Bakers <br />
                <span style={{ marginLeft: '40px' }}>Main Road, Near City Mall</span> <br />
                <span style={{ marginLeft: '40px' }}>Your City – 123456</span>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
              <h2>Abc Bakers</h2>
              <p>
                Handcrafted cakes, pastries, and desserts
                made fresh for every occasion.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#top">Home</a>
              <a href="#section2">Our Creation</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>📞 +91 XXXXXXXXXX</p>
              <p>📧 owner@gmail.com</p>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="footer-whatsapp"
              >
                💬 Order on WhatsApp
              </a>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Abc Bakers. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}
