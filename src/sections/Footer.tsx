import SocialButton from '../components/SocialButton';

export default function Footer() {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 flex-col md:flex-row">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-5">
        <SocialButton title="GitHub">
          <a
            href="https://github.com/AbdoAhmed-Khalifa"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-4/6 h-4/6"
            />
          </a>
        </SocialButton>
        <SocialButton title="Linkedin">
          <a
            href="https://www.linkedin.com/in/abdelrahman-ahmed-khalifa"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-4/6 h-4/6"
            />
          </a>
        </SocialButton>
        <SocialButton title="Facebook">
          <a
            href="https://www.facebook.com/profile.php?id=100004235130641"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <img
              src="/assets/facebook.svg"
              alt="facebook"
              className="w-4/6 h-4/6 rounded-full"
            />
          </a>
        </SocialButton>
      </div>
      <p className="text-white-500">
        © 2024 Abdelrahman. All rights reserved.{' '}
      </p>
    </footer>
  );
}
