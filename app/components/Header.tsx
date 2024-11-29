// components/Header.tsx
"use client";

import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";

const Header = () => {
  const { signOut } = useAuth();

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-and-name">
          <img src="/starlight_logo.png" alt="Logo" className="logo" />
          <h1 className="shop-name">Starlight Nails</h1>
        </div>
        <div className="auth-links">
          <SignedOut>
            <a href="/login" className="auth-link">
              Sign In
            </a>
            <span className="mx-2">|</span>
            <a href="/register" className="auth-link">
              Register
            </a>
          </SignedOut>
          <SignedIn>
            <button onClick={() => signOut()} className="auth-link">
              Sign Out
            </button>
          </SignedIn>
        </div>
      </div>
      <nav className="menu">
        <a href="/" className="header-link">Home</a>
        <a href="/services" className="header-link">Services</a>
        <a href="/gallery" className="header-link">Gallery</a>
        <a href="/contact-us" className="header-link">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
