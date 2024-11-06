import { technologies } from '../constants';

const Tech = () => {
  return (
    <section className="c-space my-20" id="technologies">
      <p className="head-text">Technologies I Use</p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map(technology => (
          <div className=" tech-logo-tech" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-18 h-18"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
