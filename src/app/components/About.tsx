import DashboardExample from "./ui/DashboardExample";
import GlassTag from "./ui/GlassTag";

export default function About() {
    return(
        <section
         className="
          w-full
          min-h-screen
        ">
            <div className="flex justify-center">
                <GlassTag label="Aumente sua Produtividade" />
            </div>
                <h2 className="section-title pt-5">Uma maneira mais eficiente de <br /> administrar seu tempo.</h2>
                <p className="section-description mt-5 mb-10">Nosso compromisso é te ajudar a melhorar a forma com que você vem administrando seu tempo. <br /> para que possa obter os melhores resultados.</p>
            <DashboardExample />
        </section>
    )
}