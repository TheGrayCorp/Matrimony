import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProfileCard from "../explore/profileCard/ProfileCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const ProfileCarousel = ({ profiles }) => {
  const minimumSlidesForLoop = 4;
  const enableLoop = profiles.length >= minimumSlidesForLoop;

  return (
    <div className="relative px-6 md:px-24 lg:px-40">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={enableLoop}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.docId}>
            <ProfileCard profile={profile} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-2 md:left-12 lg:left-28 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
        <ChevronLeft className="text-gray-400" />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-2 md:right-12 lg:right-28 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default ProfileCarousel;
