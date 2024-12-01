import { Link } from "react-router-dom";

export default function CardGenre({ image, alt, genre, page }) {
  return (
    <>
      <section className="border w-60 rounded-md border-dark_orange text-white p-4 hover:cursor-pointer">
        <Link to={page}>
          <div className="shadow-xl">
            <img className="w-60 h-72" src={image} alt={alt} />
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-lg">{genre}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#FFFFFF"
              viewBox="0 0 256 256"
            >
              <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path>
            </svg>
          </div>
        </Link>
      </section>
    </>
  );
}
