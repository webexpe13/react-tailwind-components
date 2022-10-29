/// <reference types="react" />
import 'swiper/css';
import 'swiper/css/bundle';
declare const Slider: ({ images, className, loop }: {
    images: string[];
    className?: string | undefined;
    loop?: boolean | undefined;
}) => JSX.Element;
export default Slider;
