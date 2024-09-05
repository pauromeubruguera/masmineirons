import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface ImageProductProps {
    images: {
        data: {
            id: number
            attributes: {
                url: string
                width: number
                height: number
            }
        }[]
    }
}

export const ImagesProduct = (props: ImageProductProps) => {
    const { images } = props

    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
            >
                {images.data.map((image) => (
                    <SwiperSlide key={image.id}>
                        <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                        width={image.attributes.width}
                        height={image.attributes.height}
                         alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}