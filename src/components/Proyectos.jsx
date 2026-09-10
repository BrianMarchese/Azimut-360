import { FiMapPin } from "react-icons/fi"

const projects = [
  ['Amojonamiento', 'Las parejas, Santa Fe', './amojonamiento.png'],
  ['Loteo', 'General Lagos, Santa Fe', './loteo.jpg'],
  ['Nivelación', 'Rafaela, Santa Fe', './nivelacion.jpeg'],
  ['Parcelamiento', 'Rosario, Santa Fe', './parcelamiento.png'],
  ['Relevamiento Topográfico', 'Alvear, Santa Fe', './parcelamiento-dron.png'],

]


export const Proyectos = () => {
 return (
        <section id="proyectos" className="py-20">
            <div className="container-site">
                <div className="font-heading">
                    <p className="text-secondary uppercase tracking-[.12em] font-bold">Proyectos destacados</p>
                    <p className="text-2xl font-extrabold max-w-sm">Trabajos que hablan por nosotros</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                    {
                        projects.map(([ title, place, image ]) => (
                            <article key={ title } className="p-2 rounded-xl border border-slate-200/90 hover:border-secondary transition duration-400 hover:scale-[1.03] hover:text-secondary">
                                <img src={ image } alt={ title }  className="h-[30vh] w-full rounded-lg object-cover"/>
                                <p className="mt-3 text-sm font-extrabold">{ title }</p>
                                <p className="mt-1 flex items-center gap-1 text-sm text-slate-600"><FiMapPin/> { place }</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}