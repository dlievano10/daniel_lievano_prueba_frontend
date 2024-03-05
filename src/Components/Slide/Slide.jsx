import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// Styles
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
import "./style.scss";

const Slide = () => {
    const cardsSlider = [
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
        {
            image: "https://via.placeholder.com/140",
            title: "Lorem Ipsum",
            description:
                "Duis eiusmod quis culpa nisi officia anim sint sit. Adipisicing ea culpa voluptate est. Ex et adipisicing reprehenderit do et esse est in occaecat. Nisi esse proident sit ex tempor voluptate velit. Eu est exercitation pariatur ullamco excepteur adipisicing quis anim. Veniam fugiat deserunt cillum deserunt est fugiat minim ea commodo. Sint incididunt nostrud magna magna anim deserunt exercitation veniam ad quis ad et do.",
        },
    ];

    return (
        <>
            <Splide
                hasTrack={false}
                options={{
                    type: "loop",
                    perPage: 4,
                    perMove: 1,
                    pagination: false,
                    autoplay: false,
                    gap: "50px",
                    breakpoints: {
                        1450: {
                            perPage: 3,
                        },
                        840: {
                            perPage: 2,
                        },
                        600: {
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideTrack>
                    {cardsSlider.map((card, i) => (
                        <SplideSlide key={i}>
                            <div className="target">
                                <img src={card.image} className='image-rounded' />
                                <h2 className='card-title'>{card.title}</h2>
                                <p className='card-description'>{card.description}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev arrow-next" type="button">
                        <span className="material-icons md-50">arrow_left</span>
                    </button>
                    <button className="splide__arrow splide__arrow--next arrow-next" type="button" aria-label="Next slide" aria-controls="splide02-track">
                        <span className="material-icons md-50">arrow_right</span>
                    </button>
                </div>
            </Splide>
        </>
    );
};

export default Slide;
