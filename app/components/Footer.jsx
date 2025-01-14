"use client";
import "./components.css"
import { useRouter } from "next/navigation";
export default (params) => {
    const companyName = "Company Name";
    const router=useRouter()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We are a modern company dedicated to delivering exceptional experiences.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a onClick={() => router.push("/")} className="footer-link">Home</a></li>
            <li><a onClick={() => router.push("/solutions")} className="footer-link">Solutions</a></li>
            <li><a onClick={() => router.push("/about")} className="footer-link">About</a></li>
            <li><a onClick={() => router.push("/contact")} className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" className="footer-social-icon">FB</a>
            <a href="https://twitter.com"  target="_blank"className="footer-social-icon">TW</a>
            <a href="https://linkedin.com" target="_blank" className="footer-social-icon">IN</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
