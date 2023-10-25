import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>info</div>
      <div className="hidden lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img src={image} className="rounded-box w-80 object-cover" />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
