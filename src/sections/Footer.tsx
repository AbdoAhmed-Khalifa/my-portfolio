export default function Footer() {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 flex-col md:flex-row">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          className="social-icon"
          href="https://github.com/AbdoAhmed-Khalifa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/abdelrahman-ahmed-khalifa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          className="social-icon"
          href="https://www.facebook.com/profile.php?id=100004235130641"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="facebook"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
      <p className="text-white-500">
        © 2024 Abdelrahman. All rights reserved.{' '}
      </p>
    </footer>
  );
}
