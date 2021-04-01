import React, {FC, useEffect, useState} from 'react'
import styles from './Photos.module.css'
import firstSlide from '../../assets/slide/best-nature-image-1280x720.jpg'
import secondSlide from '../../assets/slide/mount-fuji-night-reflections-do-1280x720.jpg'
import thirdSlide from '../../assets/slide/pink-rose-5k-ix-1280x720.jpg'
import fourthSlide from '../../assets/slide/nature-photography-1280x720.jpg'
import fifthSlide from '../../assets/slide/pink-tree-branches-4k-xf-1280x720.jpg'
import sixthSlide from '../../assets/slide/triangle-view-from-crane-top-4k-c8-1280x720.jpg'
import seventhSlide from '../../assets/slide/williamsburg-bridge-new-york-0b-1280x720.jpg'
import eighthSlide from '../../assets/slide/IMG_20200926_145446.jpg'
import ninthSlide from '../../assets/slide/IMG_20201117_143538.jpg'
import tenthSlide from '../../assets/slide/IMG_20201129_195457.jpg'
import classNames from "classnames";

const slides = [
    <img key={firstSlide} src={firstSlide} alt={'first'}/>,
    <img key={secondSlide} src={secondSlide} alt={'second'}/>,
    <img key={thirdSlide} src={thirdSlide} alt={'third'}/>,
    <img key={fourthSlide} src={fourthSlide} alt={'fourth'}/>,
    <img key={fifthSlide} src={fifthSlide} alt={'fifth'}/>,
    <img key={sixthSlide} src={sixthSlide} alt={'sixth'}/>,
    <img key={seventhSlide} src={seventhSlide} alt={'seventh'}/>,
    // <img key={eighthSlide} src={eighthSlide} alt={'eighth'}/>,
    // <img key={ninthSlide} src={ninthSlide} alt={'ninth'}/>,
    // <img key={tenthSlide} src={tenthSlide} alt={'tenth'}/>,
]

const Photos: FC = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            setActiveSlide((current) =>
                current === slides.length - 1 ? 0 : current + 1
            )
        }, 3000);
        return () => clearInterval(timerId)
    }, [])

    const prevImageSlide = activeSlide ? activeSlide - 1 : slides.length - 1
    const nextImageSlide = activeSlide === slides.length -1 ? 0 : activeSlide + 1

    return (
        <div className={styles.slider}>
            <div className={classNames(styles.images, styles.imagesPrev)} key={prevImageSlide}>
                {slides[prevImageSlide]}
            </div>
            <div className={styles.images} key={activeSlide}>
                {slides[activeSlide]}
            </div>
            <div className={classNames(styles.images, styles.imagesNext)} key={nextImageSlide}>
                {slides[nextImageSlide]}
            </div>
        </div>
    )
};
export default Photos;