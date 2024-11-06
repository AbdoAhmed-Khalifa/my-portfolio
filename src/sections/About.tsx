import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';
export default function About() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  function handleCopy() {
    navigator.clipboard.writeText('abdelrahmanahmedkhalifa99@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
  return (
    <section className="c-space my-20 " id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 w-full gap-5">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Abdelrahman</p>
              <p className="grid-subtext">
                Motivated Web Developer skilled in frontend for mobile and web,
                with backend knowledge. Focused on building responsive,
                efficient, and user-centered solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with focus in React and
                Next.js ecosystem. with knowledge of Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="w-full rounded-3xl h-fit sm:h-[326px] flex items-center justify-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.5614389,
                    lng: 31.6918783,
                    text: "I'm here!",
                    color: 'white',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I can work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Egypt, with remote work available.
              </p>
              <a href="#contact">
                <Button
                  name="Let's Work Together"
                  isBeam
                  containerClass="mt-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full  sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full h-fit sm:h-[276px] md:h-[126px] object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="font-medium text-white text-gray_gradient">
                  abdelrahmanahmedkhalifa99@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
