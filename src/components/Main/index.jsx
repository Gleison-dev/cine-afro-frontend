import { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider";
import black_panther from "../../assets/black_panther_banner.jpg";
import years_a_slave from "../../assets/years_a_slave_banner.jpg";

const images = [
  {
    alt: "Imagem do Pantera Negra",
    title: "Pantera Negra",
    genre: "Aventura",
    year: "2018",
    synopsis:
      "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.",
    trailer: "https://youtu.be/wL4a4MafSjQ?si=4XUCR2_c8tgNg55x",
    watch: "https://www.disney.com.br/filmes/pantera-negra",
    background: black_panther,
  },
  {
    alt: "Imagem de 12 Anos de Escravidão",
    title: "12 Anos de Escravidão",
    genre: "Drama",
    year: "2013",
    synopsis:
      "Em 1841, Solomon Northup é um negro livre, que vive em paz ao lado da esposa e filhos. Um dia, após aceitar um trabalho que o leva a outra cidade, ele é sequestrado e acorrentado. Vendido como se fosse um escravo, Solomon precisa superar humilhações físicas e emocionais para sobreviver. Ao longo de 12 anos, ele passa por dois senhores, Ford e Edwin Epps, que exploram seus serviços.",
    trailer: "https://youtu.be/xSL_sCHDsHc?si=R1I15Vbgz4UdiZMN",
    watch:
      "https://www.primevideo.com/-/pt/detail/12-Anos-de-Escravid%C3%A3o/0IV9YSQ90SOFMEFN48G1HSD2SK",
    background: years_a_slave,
  },
  {
    alt: "Imagem do Homem aranha no aranhaverso",
    title: "Homem-Aranha no Aranhaverso",
    genre: "Animação",
    year: "2018",
    synopsis:
      "Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.",
    trailer: "https://youtu.be/IrQ3iLUKr0I?si=hu6YDcMjdkcgEuRu",
    watch:
      "https://www.primevideo.com/dp/amzn1.dv.gti.86b4ff15-f1bc-836a-b07a-4efc9ac83d25?autoplay=0&ref_=atv_cf_strg_wb",
    background: "https://wallpapercave.com/wp/wp11026865.jpg",
  },
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative">
        <div
          className="bg h-screen opacity-25 absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentIndex].background})`, // Adicione a URL corretamente
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex h-screen ml-52 items-center relative z-10">
          <ImageSlider
            image={images[currentIndex].background}
            alt={images[currentIndex].alt}
            title={images[currentIndex].title}
            genre={images[currentIndex].genre}
            year={images[currentIndex].year}
            synopsis={images[currentIndex].synopsis}
            trailer={images[currentIndex].trailer}
            watch={images[currentIndex].watch}
          />
        </div>
      </section>
    </>
  );
}
