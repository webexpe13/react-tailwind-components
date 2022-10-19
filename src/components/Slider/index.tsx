import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import classes from './slider.module.scss';
import { removePublicFromPath } from '../../utils/utils';

const Slider = ({ images, className, loop = true }: { images: string[], className?: string, loop?: boolean }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={loop}
            className={className}
            draggable={true}
        >
            {
                images.map((each, i) => (
                    <SwiperSlide className={classes.slide} key={i}>
                        <img src={removePublicFromPath(each)} width="100%" className={'block cursor-grab'} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;