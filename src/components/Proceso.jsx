import { CiDatabase } from "react-icons/ci"
import { FiMessageCircle } from "react-icons/fi"
import { LuClipboardCheck, LuScanLine } from "react-icons/lu"

export const Proceso = () => {
    return (
        <section id="proceso" className="py-20">
            <div className="container-site">
                <div className="font-heading">
                   <p className="text-secondary uppercase tracking-[.12em] font-bold">Cómo trabajamos</p>
                   <p className="text-2xl font-extrabold max-w-sm">Un proceso claro y eficiente</p>
                </div>
                {/* GRID CONTAINER */ }
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="pt-2 font-body">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">1</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <FiMessageCircle />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold font-heading">Consulta inicial</p>
                        <p className="text-slate-600">Escuchamos tu necesidad y analizamos tu proyecto para entender los objetivos.</p>
                    </article>

                     <article className="pt-2 font-body">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">2</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <LuScanLine />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold font-heading">Relevamiento</p>
                        <p className="text-slate-600">Realizamos el trabajo de campo con equipos de alta precisión y metodología.</p>
                    </article>

                     <article className="pt-2 font-body">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">3</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <CiDatabase/>
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold font-heading">Análisis técnico</p>
                        <p className="text-slate-600">Procesamos los datos y elaboramos la documentación técnica correspondiente.</p>
                    </article>

                     <article className="pt-2 font-body">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">4</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <LuClipboardCheck />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold font-heading">Entrega final</p>
                        <p className="text-slate-600">Entregamos planos, informes y certificaciones listos para su presentación.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}