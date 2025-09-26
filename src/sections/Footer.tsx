import SocialButton from '../components/SocialButton';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export default function Footer() {
  return (
    <motion.footer 
      className="c-space pt-12 pb-6 border-t border-black-300/50 bg-gradient-to-t from-black-300/20 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center flex-wrap gap-8 flex-col md:flex-row">
        <motion.div 
          className="flex gap-4 text-white-500 text-sm"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </motion.div>
        
        <motion.div 
          className="flex gap-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SocialButton title="GitHub">
            <motion.a
              href="https://github.com/AbdoAhmed-Khalifa"
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-5 h-5"
              />
            </motion.a>
          </SocialButton>
          
          <SocialButton title="LinkedIn">
            <motion.a
              href="https://www.linkedin.com/in/abdelrahman-ahmed-khalifa"
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="/assets/linkedin.svg"
                alt="linkedin"
                className="w-5 h-5"
              />
            </motion.a>
          </SocialButton>
          
          <SocialButton title="Facebook">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100004235130641"
              rel="noopener noreferrer"
              target="_blank"
              className="social-icon"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="/assets/facebook.svg"
                alt="facebook"
                className="w-5 h-5"
              />
            </motion.a>
          </SocialButton>
        </motion.div>
        
        <motion.p 
          className="text-white-500 text-sm"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          © 2024 Abdelrahman. All rights reserved.
        </motion.p>
      </div>
      
      {/* Back to top button */}
      <motion.div 
        className="flex justify-center mt-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-white-500 hover:text-white transition-colors group"
          whileHover={{ y: -2 }}
        >
          <span className="text-sm">Back to top</span>
          <motion.svg
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}

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
      <p className="text-white-500">© 2024 Abdelrahman. All rights reserved.</p>
    </footer>
  );
}
