import { CiDatabase } from "react-icons/ci"
import { FiMessageCircle } from "react-icons/fi"
import { LuClipboardCheck, LuScanLine } from "react-icons/lu"

export const Proceso = () => {
    return (
        <section id="proceso" className="py-20">
            <div className="container mx-auto">
                <div className="font-heading px-6">
                   <p className="text-secondary uppercase tracking-[.12em] font-bold">Cómo trabajamos</p>
                   <p className="text-2xl font-extrabold max-w-sm">Un proceso claro y eficiente</p>
                </div>
                {/* GRID CONTAINER */ }
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 px-6">
                    <article className="pt-2">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">1</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <FiMessageCircle />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold">Consulta inicial</p>
                        <p className="text-slate-600">Escuchamos tu necesidad y analizamos tu proyecto para entender los objetivos.</p>
                    </article>

                     <article className="pt-1">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">2</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <LuScanLine />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold">Relevamiento</p>
                        <p className="text-slate-600">Realizamos el trabajo de campo con equipos de alta precisión y metodología.</p>
                    </article>

                     <article className="pt-1">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">3</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <CiDatabase/>
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold">Análisis técnico</p>
                        <p className="text-slate-600">Procesamos los datos y elaboramos la documentación técnica correspondiente.</p>
                    </article>

                     <article className="pt-1">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-white ">4</span>
                            <span className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-lg text-black">
                                <LuClipboardCheck />
                            </span>
                        </div>
                        <p className="mb-2 text-sm font-extrabold">Entrega final</p>
                        <p className="text-slate-600">Entregamos planos, informes y certificaciones listos para su presentación.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}