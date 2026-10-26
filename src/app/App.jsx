import { createTimeline, stagger, splitText } from 'animejs'
import { useEffect } from 'react';
import laptopImg from '../assets/img/Illustration.svg'
import '../assets/css/Style.css'


export default function App() {
    useEffect(() => {
        const target = document.getElementById('heroText');

        if (!target) return;

        const splitter = splitText(target, {
            words: { wrap: 'clip' },
            chars: true,
        });

        const tl = createTimeline({
            loop: true,
            defaults: { ease: 'inOut(3)', duration: 800 }
        })
            .add(splitter.words, {
                y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
            }, stagger(200))
            .add(splitter.chars, {
                y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
            }, stagger(10, { from: 'random' }));
        // 3. Cleanup untuk React StrictMode agar tidak macet saat refresh/re-mount
        return () => {
            tl.revert();
            splitter.revert();
        };
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="hero grid section mb-15 bg-[#ebeff3] w-full">
                <div className="hero container-content flex flex-col md:flex-row items-center self-center justify-between py-10 mx-6 md:mx-36">
                    <div className="hero-data grid self-center gap-4">
                        <h1 id='heroText' className="headerText text-[40px] font-semibold leading-tight text-gray-600 w-[500px] min-[320px]:w-[300px] md:w-[500px]">
                            Tutorial Penanganan Masalah <span className="text-[#42a6f8]">Komputer & Jaringan</span>
                        </h1>
                        <h2 className="text-black pb-2 text-lg max-w-md">
                            Solusi terarah untuk mendiagnosis serta memperbaiki gangguan pada perangkat dan jaringan Anda.
                        </h2>
                        <div className="button">
                            <a href="#kategori" className="btn btnMulai inline-block bg-[#42a6f8] drop-shadow-[3px_5px_0_black] hover:bg-[#3d7191] transition-all px-8 py-2.5 text-xl font-medium text-white shadow-sm hover:shadow-md hover:scale-110">
                                Mulai Belajar
                            </a>
                        </div>
                    </div>
                    <div className="header-image mt-8 md:mt-0">
                        <img src={laptopImg} alt="Laptop" className="w-80 min-[320px]:hidden md:block w-96" />
                    </div>
                </div>
            </section>

            {/* Kategori Section */}
            <section id="kategori" className="kategori section mb-24">
                <div className="kategori container-content mx-6 md:mx-36">
                    <div className="mb-10">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#42a6f8] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full inline-block mb-3">
                            Katalog Troubleshooting
                        </span>
                        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-2">
                            Kategori Masalah
                        </h2>
                        <p className="text-gray-500 text-base max-w-2xl">
                            Pilih kategori kendala yang sedang Anda hadapi untuk melihat panduan perbaikannya secara sistematis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <article className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#42a6f8] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#42a6f8] group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                    <i className="ri-windows-fill"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#42a6f8] transition-colors">
                                    Operating System
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Solusi kendala Blue Screen (BSOD), bootloop, gagal update, dan sistem operasi yang lambat.
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-semibold text-[#42a6f8] gap-1 group-hover:gap-2 transition-all">
                                <span>Lihat Solusi</span>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </article>

                        <article className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#42a6f8] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#42a6f8] group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                    <i className="ri-cpu-line"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#42a6f8] transition-colors">
                                    Hardware Komputer
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Diagnosis RAM error, CPU overheat, display mati/blank, dan kerusakan power supply.
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-semibold text-[#42a6f8] gap-1 group-hover:gap-2 transition-all">
                                <span>Lihat Solusi</span>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </article>

                        <article className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#42a6f8] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#42a6f8] group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                    <i className="ri-wifi-line"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#42a6f8] transition-colors">
                                    Jaringan & WiFi
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Koneksi no internet access, kabel LAN unidentified, IP conflict, dan konfigurasi router.
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-semibold text-[#42a6f8] gap-1 group-hover:gap-2 transition-all">
                                <span>Lihat Solusi</span>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </article>

                        <article className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#42a6f8] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#42a6f8] group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                    <i className="ri-hard-drive-2-line"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#42a6f8] transition-colors">
                                    Storage & Driver
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Harddisk / SSD bad sector, partisi tidak terdeteksi, serta corrupt atau missing driver.
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-semibold text-[#42a6f8] gap-1 group-hover:gap-2 transition-all">
                                <span>Lihat Solusi</span>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Tutorial Section */}
            <section className="tutorial section mb-10">
                <div className="container-content mx-6 md:mx-36">
                    <div className="mb-10">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#42a6f8] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full inline-block mb-3">
                            Tutorial Troubleshooting
                        </span>
                        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-2">
                            Pemecahan Masalah
                        </h2>
                        <p className="text-gray-500 text-base max-w-2xl">
                            Pilih kategori kendala yang sedang Anda hadapi untuk melihat panduan perbaikannya secara sistematis.
                        </p>
                    </div>
                    <div className="card-group flex grid-rows-4 gap-3">
                        <article className='card-list p-3 relative bg-white border-gray-300 rounded-2xl shadow-xl w-[300px]'>
                            <div className="card-data grid gap-1">
                                <span className="nama_kategori text-sm font-semibold text-[#42a6f8] bg-[#E8F5E9] inline-block w-40 rounded-full text-center px-2 py-1">Nama Kategori</span>
                                <h2 className="nama_masalah text-2xl font-semibold">Tidak bisa booting Windows</h2>
                            </div>
                        </article>
                        <article className='card-list p-3 relative bg-white border-gray-300 rounded-2xl shadow-xl w-[300px]'>
                            <div className="card-data grid gap-1">
                                <span className="nama_kategori text-sm font-semibold text-[#42a6f8] bg-[#E8F5E9] inline-block w-40 rounded-full text-center px-2 py-1">Nama Kategori</span>
                                <h2 className="nama_masalah text-2xl font-semibold">Tidak bisa booting Windows</h2>
                            </div>
                        </article>
                        <article className='card-list p-3 relative bg-white border-gray-300 rounded-2xl shadow-xl w-[300px]'>
                            <div className="card-data grid gap-1">
                                <span className="nama_kategori text-sm font-semibold text-[#42a6f8] bg-[#E8F5E9] inline-block w-40 rounded-full text-center px-2 py-1">Nama Kategori</span>
                                <h2 className="nama_masalah text-2xl font-semibold">Tidak bisa booting Windows</h2>
                            </div>
                        </article>
                            <article className='card-list p-3 relative bg-white border-gray-300 rounded-2xl shadow-xl w-[300px]'>
                                <div className="card-data grid gap-1">
                                    <span className="nama_kategori text-sm font-semibold text-[#42a6f8] bg-[#E8F5E9] inline-block w-40 rounded-full text-center px-2 py-1">Nama Kategori</span>
                                    <h2 className="nama_masalah text-2xl font-semibold">Tidak bisa booting Windows</h2>
                                </div>
                            </article>
                    </div>
                </div>
            </section>
        </div>

    )
}
