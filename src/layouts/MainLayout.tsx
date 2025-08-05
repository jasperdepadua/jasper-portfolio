import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { useRef, useState } from 'react';
import CVIcon from '../assets/icons/cv.svg?react';
import Portrait from '../assets/images/portrait.png';
import { Button } from '../components/Button';
import { cn } from '../utils/classname';

const carouselBaseStyle = cn('m-0 h-screen bg-true-black px-14');
const textBaseStyle = cn('text-white font-orbitron text-4xl leading-normal font-bold');

const MainLayout = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    carouselRef.current?.next();
  };

  const prev = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    carouselRef.current?.prev();
  };

  return (
    <div className="relative h-screen">
      <div
        className={cn(
          `hover:bg-vivid-violet absolute left-0 z-10 inline-flex h-full w-10 cursor-pointer items-center justify-center rounded-r-md font-bold text-white shadow-none transition-all duration-300 ease-in-out hover:w-14 hover:text-black hover:shadow-[0_0_12px_3px_rgba(29,233,182,0.4)]`,
          {
            hidden: currentSlide === 0,
          }
        )}
        onClick={prev}
      >
        <p className="text-5xl">&lt;</p>
      </div>
      <div
        className={cn(
          `hover:bg-vivid-violet absolute right-0 z-10 inline-flex h-full w-10 cursor-pointer items-center justify-center rounded-l-md font-bold text-white shadow-none transition-all duration-300 ease-in-out hover:w-14 hover:text-black hover:shadow-[0_0_12px_3px_rgba(29,233,182,0.4)]`,
          {
            hidden: currentSlide === 3,
          }
        )}
        onClick={next}
      >
        <p className="text-5xl">&gt;</p>
      </div>

      <Carousel
        dots={false}
        infinite={false}
        adaptiveHeight
        autoplay={false}
        ref={carouselRef}
        afterChange={current => setCurrentSlide(current)}
      >
        <div>
          <div className={carouselBaseStyle}>
            <div className={`inline-flex h-full w-full flex-row items-center justify-center gap-4`}>
              <img className="w-[31.25rem]" src={Portrait} alt="portrait" />
              <div className="inline-flex w-[31.25rem] flex-col gap-3">
                <p className={textBaseStyle}>Hello, I'm</p>
                <p className={cn(textBaseStyle, 'text-vivid-violet')}>Jasper John de Padua</p>
                <p className={`text-lg`}>
                  I'm a <span className="text-vivid-violet font-bold">Front End Developer</span>{' '}
                  with a focus on building responsive, intuitive interfaces using{' '}
                  <span className="text-vivid-violet font-bold">ReactJS</span>. Outside of coding,
                  I'm an avid <span className="text-vivid-violet font-bold">gamer</span>—it's where
                  I recharge and sometimes draw inspiration for design and interactivity. Whether
                  it's on the screen or in the browser, I'm always looking for better ways to engage
                  users.
                </p>
                <div>
                  <Button variant={'outlined'}>
                    <CVIcon height={40} className="text-future-teal" />
                    download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={carouselBaseStyle}>
            <div>content 2</div>
          </div>
        </div>
        <div>
          <div className={carouselBaseStyle}>
            <div>content 3</div>
          </div>
        </div>
        <div>
          <div className={carouselBaseStyle}>
            <div>content 4</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainLayout;
