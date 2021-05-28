import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './photos.module.scss';
import firstSlide from '../../assets/slide/williamsburg-bridge-new-york-0b-1280x720.jpg';
import secondSlide from '../../assets/slide/triangle-view-from-crane-top-4k-c8-1280x720.jpg';
import thirdSlide from '../../assets/slide/pink-tree-branches-4k-xf-1280x720.jpg';
import fourthSlide from '../../assets/slide/nature-photography-1280x720.jpg';
import fifthSlide from '../../assets/slide/pink-rose-5k-ix-1280x720.jpg';
import sixthSlide from '../../assets/slide/mount-fuji-night-reflections-do-1280x720.jpg';

const slides = [
  <img key={firstSlide} src={firstSlide} alt="first" />,
  <img key={secondSlide} src={secondSlide} alt="second" />,
  <img key={thirdSlide} src={thirdSlide} alt="third" />,
  <img key={fourthSlide} src={fourthSlide} alt="fourth" />,
  <img key={fifthSlide} src={fifthSlide} alt="fifth" />,
  <img key={sixthSlide} src={sixthSlide} alt="sixth" />,
];

export const Photos: FC = () => {
  // eslint-disable-next-line prefer-const
  let [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveSlide((active) => (active === slides.length - 1 ? 0 : active + 1));
    }, 5000);
    return () => clearInterval(timerId);
  }, []);

  const prevSlide = activeSlide ? activeSlide - 1 : slides.length - 1;
  const nextSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.sliderWrapper}>
        <div
          className={classNames(styles.slides, styles.slidesPrev)}
          key={prevSlide}
        >
          {slides[prevSlide]}
        </div>
        <div className={styles.slides} key={activeSlide}>
          {slides[activeSlide]}
        </div>
        <div
          className={classNames(styles.slides, styles.slidesNext)}
          key={nextSlide}
        >
          {slides[nextSlide]}
        </div>
        <button
          className={styles.btnPrev}
          onClick={() => setActiveSlide(() => prevSlide)}
        >
          <i className={styles.btnArrowLeft} />
        </button>
        <button
          className={styles.btnNext}
          onClick={() => setActiveSlide(() => nextSlide)}
        >
          <i className={styles.btnArrowRight} />
        </button>
        <div className={styles.dotWrapper}>
          {slides.slice().map((_pos, i) => (
            <div
              className={
                i === activeSlide
                  ? classNames(styles.dot, styles.activeDot)
                  : styles.dot
              }
              key={i.toString()}
              onClick={() => setActiveSlide((activeSlide = i))}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
