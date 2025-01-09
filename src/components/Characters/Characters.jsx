import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import character1 from "../../assets/images/character1.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Show 3 slides on desktop
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Show 2 slides on tablet
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Show 1 slide on mobile
    slidesToSlide: 1,
  },
};

const disneyCharacters = [
  { name: "Tinker Bell", movie: "Peter Pan", image: character1 },
  { name: "Rosetta", movie: "Tinker Bell", image: character1 },
  { name: "Judy Hopps", movie: "Zootopia", image: character1 },
  { name: "Moana", movie: "Moana", image: character1 },
  {
    name: "Vanellope",
    movie: "Wreck-It Ralph",
    image: character1,
  },
  { name: "Elsa", movie: "Frozen", image: character1 },
  { name: "Simba", movie: "The Lion King", image: character1 },
  { name: "Buzz Lightyear", movie: "Toy Story", image: character1 },
  { name: "Ariel", movie: "The Little Mermaid", image: character1 },
  { name: "Mulan", movie: "Mulan", image: character1 },
];

function CharactersCard() {
  return (
    <div className="w-full pt-[4vh] md:pt-[15vh] h-screen px-12">
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
        >
          {disneyCharacters.map((character, index) => (
            <div key={index} className="p-8 pt-20">
              <div className="rounded-xl p-4 shadow-lg flex flex-col items-start justify-between bg-gradient-to-bl from-[#c84759] to-[#ac0120]">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full object-contain -mt-[8rem]"
                />
                <div className="text-left mt-4 mb-3">
                  <h3 className="text-white font-bold text-[25px]">
                    {character.name}
                  </h3>
                  <p className="text-white text-[12px]">
                    Movie: {character.movie}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CharactersCard;
