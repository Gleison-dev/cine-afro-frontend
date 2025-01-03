import AboutCard from "../../components/AboutCard";
import Header from "../../components/Header/index";
import dark_wallpapper from "../../assets/dark_wallpaper.jpg"; // Certifique-se de que você tenha um arquivo CSS para estilos adicionais

export default function About() {
  return (
    <>
      <Header />
      <div className="relative">
        {" "}
        {/* Contêiner pai com position relative */}
        <div
          className="absolute inset-0 h-full"
          style={{
            backgroundImage: `url(${dark_wallpapper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Ajuste a opacidade conforme necessário
            zIndex: -1, // Background atrás de outros elementos
          }}
        ></div>
        <section className="flex justify-start py-20 ml-52 relative z-10">
          <AboutCard
            title="Sobre"
            text="Bem-vindo ao CineAfro, um portal dedicado a celebrar a riqueza, diversidade e potência das narrativas negras no cinema. Nosso objetivo é ser um espaço de descoberta, reflexão e valorização das histórias que amplificam vozes negras ao redor do mundo."
          />
        </section>
        <section className="flex justify-end mr-52 relative z-10">
          <AboutCard
            title="Visão"
            text="Acreditamos que o cinema é uma ferramenta poderosa para construir pontes, desconstruir estereótipos e celebrar a diversidade. Nosso compromisso é dar visibilidade a narrativas que inspiram, emocionam e provocam mudanças.
Junte-se a nós nessa jornada de descoberta e transformação!"
          />
        </section>
        <section className="flex justify-start ml-52 relative z-10">
          <AboutCard
            title="Serviços"
            text="Catálogo de Filmes: Uma curadoria de obras que destacam protagonistas negros, cineastas e histórias enraizadas em diversas culturas da diáspora africana.
        Comunidade e Educação: Espaço para debates, sugestões e eventos que promovem a conscientização e o diálogo sobre questões raciais e culturais."
          />
        </section>
        <section className="flex justify-end py-20 mr-52 relative z-10">
          <AboutCard
            title="Agradecimentos"
            text="O CineAfro só é possível graças a uma rede de pessoas apaixonadas pela representatividade e pela força do cinema como agente de transformação. Agradecemos profundamente a todos os cineastas, roteiristas, produtores, atores e atrizes que dedicam suas vidas a contar histórias que emocionam, educam e inspiram."
          />
        </section>
      </div>
    </>
  );
}
