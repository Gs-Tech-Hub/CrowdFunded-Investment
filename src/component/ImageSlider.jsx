import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = ({ sliderImg }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div >
            <Slider {...settings}>
                {
                    sliderImg.map(item => {
                        return <div className="h-[35rem] max-[1144px]:h-[22rem] max-[803px]:h-[15rem] max-[490px]:h-[14rem] max-[403px]:h-[11rem]" key={item.id}>
                            <img className='rounded-[1rem] h-[100%] w-[100%]' src={item.src} alt="img" />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default ImageSlider