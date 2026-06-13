import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">◆ EliteStore</span>
          <p className="footer-desc">精品電商 | 質感生活</p>
        </div>
        <div className="footer-links">
          <a href="#about">關於我們</a>
          <a href="#service">客戶服務</a>
          <a href="#privacy">隱私政策</a>
        </div>
        <p className="footer-copy">&copy; 2026 EliteStore. All rights reserved.</p>
      </div>
    </footer>
  )
}
