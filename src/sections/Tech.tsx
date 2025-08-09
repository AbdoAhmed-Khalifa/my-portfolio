import { technologies } from '../constants';
import SocialButton from '../components/SocialButton';

const Tech = () => {
  return (
    <section className="c-space my-20" id="technologies">
      <p className="head-text">Technologies I Use</p>
      <div className="flex flex-row flex-wrap justify-center sm:gap-10 gap-7 mt-12">
        {technologies.map(technology => (
          <SocialButton key={technology.name} title={technology.name}>
            <div className="tech-logo-tech" aria-label={technology.name}>
              <img loading="lazy" src={technology.icon} alt={technology.name} />
            </div>
          </SocialButton>
        ))}
      </div>
    </section>
  );
};

export default Tech;
