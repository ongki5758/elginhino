/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Wrench, 
  ChevronRight, 
  ChevronDown,
  Star,
  Award,
  Users,
  Settings,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Check,
  X
} from 'lucide-react';
const logoHino = "https://cdn.scalev.id/uploads/1771003213/DoBtLaw_jwSqfy8-CXPFGg/1771003214902-images.webp";
const heroImage = "https://cdn.scalev.id/uploads/1771001694/8yrmDSmKM1iwIYWyLOX75w/1771001695007-Untitled-design-(4).webp";
const hino300 = "https://cdn.scalev.id/uploads/1771003281/P2Qo500ZbZQeD9jsC_jzRw/1771003282472-truck-300-series-heading-10-1691049941.webp";
const hino500 = "https://cdn.scalev.id/uploads/1771003342/Kc_pSeCMT56Bg41P0hybIA/1771003343411-truck-500-series-heading-10-1691049975.webp";
const hino700 = "https://cdn.scalev.id/uploads/1771003611/qDOl6sCwG1eByIxJo0EtBQ/1771003612505-hino.webp";
const karoseriHino = "https://cdn.scalev.id/uploads/1771003873/QM85L4N5L3Ocr0JEscFIuQ/1771003873992-images-(1).webp";
const serahTerima1 = "https://cdn.scalev.id/uploads/1771044334/eXOQUU4HzdLrFxSfX2m-Bg/1771044335134-WhatsApp-Image-2026-02-14-at-11.27.20.webp";
const serahTerima2 = "https://cdn.scalev.id/uploads/1771044381/evtnqFMKJAo4loJ0JTamqw/1771044381898-WhatsApp-Image-2026-02-14-at-11.27.20-(1).webp";
const galeri1 = "https://cdn.scalev.id/uploads/1771003984/yBvGluPFdnY2ZEpdR4h8Kg/1771003985431-FM-280-JD-3.webp";
const galeri2 = "https://cdn.scalev.id/uploads/1771004240/yBUgrI_clgGU56sFICajTQ/1771004241504-Dealer20230315-122717-Dealer-Resmi-Hino-Ranger-FM-280-JD-Ready-Stock.webp";
const galeri3 = "https://cdn.scalev.id/uploads/1771085995/x9Kor0E_sYJcH__KZbGaPw/1771085996414-WhatsApp-Image-2026-02-14-at-17.35.39-(1).webp";
const galeri4 = "http://cdn.scalev.id/uploads/1771086021/9GUoFPJfNZzKyg3xe75h0g/1771086023220-WhatsApp-Image-2026-02-14-at-17.35.40.webp";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

const FAQItem: React.FC<{ faq: { q: string, a: string }, index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white border-red-100 shadow-premium' : 'bg-slate-50/50 border-slate-100'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
      >
        <span className={`text-sm sm:text-base font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-red-600' : 'text-slate-900'}`}>{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-red-600 text-white' : 'bg-white text-slate-400 shadow-sm border border-slate-100'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
          <div className="w-full h-px bg-slate-100 mb-6"></div>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">{faq.a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LegalModal: React.FC<{ isOpen: boolean, onClose: () => void, type: 'privacy' | 'terms' }> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Kebijakan Privasi",
      sections: [
        {
          h: "Pengumpulan Informasi",
          p: "Kami mengumpulkan informasi yang Anda berikan secara sukarela saat menghubungi kami melalui WhatsApp atau formulir kontak, termasuk nama dan nomor telepon untuk keperluan konsultasi unit Hino."
        },
        {
          h: "Penggunaan Data",
          p: "Data Anda digunakan semata-mata untuk memberikan informasi produk, simulasi kredit, dan layanan purna jual. Kami tidak akan menjual atau membagikan data Anda kepada pihak ketiga tanpa izin."
        },
        {
          h: "Keamanan",
          p: "Kami berkomitmen untuk memastikan informasi Anda aman. Kami telah menerapkan prosedur fisik dan elektronik yang sesuai untuk mengamankan informasi yang kami kumpulkan secara online."
        }
      ]
    },
    terms: {
      title: "Syarat & Ketentuan",
      sections: [
        {
          h: "Status Dealer",
          p: "Layanan ini dikelola oleh Elgin MD sebagai Senior Sales Consultant resmi Dealer Hino Jawa Timur. Semua transaksi dilakukan melalui mekanisme resmi dealer."
        },
        {
          h: "Harga & Promo",
          p: "Harga yang tercantum atau diinformasikan adalah estimasi On The Road (OTR) dan dapat berubah sewaktu-waktu mengikuti kebijakan harga pusat dan regulasi pajak pemerintah."
        },
        {
          h: "Ketersediaan Unit",
          p: "Ketersediaan unit (Ready Stock) bersifat dinamis. Pemesanan dianggap sah setelah adanya tanda jadi (Booking Fee) yang masuk ke rekening resmi perusahaan."
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter">{activeContent.title}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
          <div className="space-y-10">
            {activeContent.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-xs font-black text-red-600 uppercase tracking-widest mb-4">{section.h}</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">{section.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
              Terakhir diperbarui: 09 April 2026. <br />
              Hino Official Jawa Timur - Elgin MD.
            </p>
          </div>
        </div>
        <div className="p-6 bg-white border-t border-slate-100">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
          >
            Tutup Halaman
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [legalModal, setLegalModal] = React.useState<{ isOpen: boolean, type: 'privacy' | 'terms' }>({ isOpen: false, type: 'privacy' });
  const trackWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window.gtag_report_conversion === 'function') {
      e.preventDefault();
      window.gtag_report_conversion(e.currentTarget.href);
    }
  };

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-900 scroll-smooth">
      {/* MAIN CONTAINER */}
      <div className="max-w-screen-xl mx-auto bg-white shadow-premium min-h-screen relative pb-28 sm:pb-0">

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg bg-red-600 p-1.5 shadow-lg shadow-red-200/50">
                  <img src={logoHino} alt="Logo Dealer Resmi Hino Jawa Timur - Simbol kualitas dan ketangguhan truk Hino Indonesia untuk solusi transportasi bisnis Anda" className="w-full h-full object-contain" width="40" height="40" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm md:text-base font-bold tracking-tight text-slate-900 leading-none uppercase">
                      Dealer Hino <span className="text-red-600">Resmi</span>
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-slate-200 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Official</span>
                    </div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[9px] md:text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5"
                  >
                    Authorized Dealer Jawa Timur
                  </motion.span>
                </div>
              </motion.div>
              
              <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                {['Unit', 'Karoseri', 'Testimoni', 'Kontak'].map((item, idx) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase().replace('testimoni', 'reviews')}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="hover:text-red-600 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                  </motion.a>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <a href="tel:085101233803" className="text-[11px] font-bold text-slate-900 border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all uppercase tracking-widest shadow-sm">
                  Hubungi Sales
                </a>
              </motion.div>
            </div>
          </div>
          {/* Mobile Nav Rail */}
          <div className="md:hidden overflow-x-auto whitespace-nowrap px-4 py-3 bg-slate-50 border-t border-slate-200/60 no-scrollbar">
            <nav className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <a href="#series" className="active:text-red-600">Daftar Unit</a>
              <a href="#karoseri">Karoseri</a>
              <a href="#reviews">Testimoni</a>
              <a href="#contact">Kontak</a>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden">
          {/* Desktop Hero */}
          <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-8">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sales Resmi Hino Indonesia</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
                  Partner Tangguh <br /> 
                  <span className="text-red-600 relative inline-block">
                    Bisnis Anda.
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1.5 bg-red-600/10 rounded-full"
                    ></motion.span>
                  </span>
                </h2>
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-12 max-w-lg">
                  Dealer Resmi Hino Jawa Timur melayani pemesanan unit Hino 300, 500, dan 700 Series untuk wilayah Jawa Timur, Kalimantan, hingga Sulawesi.
                </p>
                <div className="flex items-center gap-6">
                  <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="px-10 py-5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all text-xs uppercase tracking-widest shadow-xl shadow-red-200">
                    Konsultasi Gratis
                  </a>
                  <a href="#series" className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-xs uppercase tracking-widest">
                    Lihat Katalog
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-slate-100">
                  <img src={heroImage} alt="Elgin MD sebagai Sales Consultant Dealer Resmi Hino Jawa Timur siap melayani konsultasi unit truk baru Anda" className="w-full h-full object-cover" width="800" height="600" fetchPriority="high" referrerPolicy="no-referrer" />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-premium border border-white/50 max-w-[240px]"
                >
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-3">Expert Advisor</p>
                  <p className="text-xl font-bold text-slate-900 leading-tight">Elgin MD</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-2 leading-relaxed">10+ Tahun Pengalaman di Industri Kendaraan Niaga</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Hero (Locked 9:16) */}
          <div className="md:hidden relative aspect-[9/16] w-full overflow-hidden">
            <img src={heroImage} alt="Truk Hino tangguh sebagai partner bisnis terpercaya untuk efisiensi operasional logistik dan konstruksi" className="absolute inset-0 w-full h-full object-cover" width="400" height="711" fetchPriority="high" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                B2B Sales Expert
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-black text-white leading-[1.05] tracking-tighter mb-6 uppercase drop-shadow-2xl"
              >
                Partner Tangguh <br /> 
                <span className="text-red-600 drop-shadow-none">Bisnis Anda.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-sm leading-relaxed max-w-[280px] font-medium mb-8"
              >
                Tingkatkan efisiensi operasional bisnis Anda dengan unit Hino tangguh. Layanan profesional untuk korporasi & pengusaha.
              </motion.p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  <span>Unit Ready Stock</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  <span>Support Karoseri</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TRUST & EXPERIENCE */}
        <section id="trust" className="px-6 py-20 sm:py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 rounded-full bg-red-600/10 text-red-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6"
                >
                  Expertise & Experience
                </motion.div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-tight">
                  Pengalaman <span className="text-red-600">10+ Tahun</span> <br className="hidden sm:block" />Membangun Kepercayaan Bisnis.
                </h3>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 font-medium">
                  Sebagai mitra strategis Hino di Jawa Timur, kami telah membantu ratusan pengusaha mengoptimalkan armada mereka. Fokus kami adalah memberikan unit yang tepat dengan efisiensi maksimal.
                </p>
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
                  {[
                    { val: "500+", label: "Unit Terkirim" },
                    { val: "10+", label: "Tahun Pengalaman" },
                    { val: "99%", label: "Kepuasan Layanan" },
                    { val: "24/7", label: "Dukungan Teknis" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
                      <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-premium border border-slate-100">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-8 uppercase tracking-tight">Keunggulan Layanan Kami</h4>
                <ul className="space-y-6 sm:space-y-8">
                  {[
                    { title: "Analisa Kebutuhan", desc: "Mapping spesifikasi unit sesuai rute dan muatan.", icon: <Award className="w-5 h-5" /> },
                    { title: "Pembiayaan Fleksibel", desc: "Jaringan leasing luas dengan proses approval cepat.", icon: <CreditCard className="w-5 h-5" /> },
                    { title: "Jaminan After Sales", desc: "Dukungan perawatan berkala dan suku cadang resmi.", icon: <ShieldCheck className="w-5 h-5" /> }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 sm:gap-5">
                      <div className="w-10 h-10 bg-slate-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-tight">{item.title}</p>
                        <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SERIES */}
        <section id="series" className="px-6 py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Product Lineup
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter mb-4 uppercase text-center">Dealer Truk Hino</h3>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-medium text-center">Pilih kategori unit yang sesuai dengan skala operasional bisnis Anda.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {[
                { 
                  name: "Hino 300 Series", 
                  sub: "Dutro (Light Duty)", 
                  img: hino300,
                  desc: "Solusi distribusi perkotaan yang lincah dan hemat bahan bakar.",
                  tags: ["Bak", "Box", "Towing"]
                },
                { 
                  name: "Hino 500 Series", 
                  sub: "Ranger (Medium Duty)", 
                  img: hino500,
                  desc: "Tangguh untuk proyek konstruksi, dump truck, dan angkutan logistik.",
                  tags: ["Dump", "Tangki", "Mixer"]
                },
                { 
                  name: "Hino 700 Series", 
                  sub: "Profia (Heavy Duty)", 
                  img: hino700,
                  desc: "Heavy duty tractor head untuk angkutan berat jarak jauh.",
                  tags: ["Trailer", "Hauling", "Mining"]
                }
              ].map((unit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden bg-slate-50">
                    <img src={unit.img} alt={`Truk ${unit.name} ${unit.sub} - Solusi kendaraan niaga tangguh untuk bisnis Anda di Jawa Timur`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" width="400" height="225" loading="lazy" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[9px] sm:text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2">{unit.sub}</p>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{unit.name}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">{unit.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {unit.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 text-[8px] sm:text-[9px] font-bold rounded-full uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="inline-flex items-center text-[10px] font-black text-slate-900 uppercase tracking-widest hover:text-red-600 transition-colors group/btn">
                      Cek Harga & Promo <ChevronRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: LEASING PARTNERS */}
        <section className="px-6 py-12 bg-white border-y border-slate-100">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Partner Pembiayaan Terpercaya</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500">
            {/* Placeholder logos representing common Indonesian leasing companies */}
            <div className="h-8 lg:h-10 flex items-center font-black text-slate-400 text-xl italic">BAF</div>
            <div className="h-8 lg:h-10 flex items-center font-black text-slate-400 text-xl italic">ADIRA</div>
            <div className="h-8 lg:h-10 flex items-center font-black text-slate-400 text-xl italic">MTF</div>
            <div className="h-8 lg:h-10 flex items-center font-black text-slate-400 text-xl italic">MUF</div>
            <div className="h-8 lg:h-10 flex items-center font-black text-slate-400 text-xl italic">BCAM</div>
          </div>
        </section>

        {/* SECTION: SOLUTIONS */}
        <section id="solutions" className="px-6 py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex lg:gap-24 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8 uppercase">Solusi Transportasi Bisnis</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">Kami memahami setiap sektor bisnis memiliki tantangan logistik yang berbeda. Hino hadir dengan spesifikasi yang dapat disesuaikan untuk efisiensi operasional Anda.</p>
                
                <div className="grid gap-6">
                  {[
                    { title: "Logistik & Distribusi", desc: "Efisiensi bahan bakar maksimal untuk rute harian kota.", color: "bg-red-600" },
                    { title: "Konstruksi & Mining", desc: "Durabilitas tinggi untuk medan berat dan beban ekstrem.", color: "bg-slate-900" },
                    { title: "Hauling & Cargo", desc: "Tenaga besar untuk angkutan berat jarak jauh.", color: "bg-red-600" }
                  ].map((sol, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-apple">
                      <div className={`w-1.5 h-auto ${sol.color} rounded-full`}></div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm uppercase tracking-tight">{sol.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{sol.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 mt-16 lg:mt-0">
                <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-square">
                  <img src="https://cdn.scalev.id/uploads/1771003873/QM85L4N5L3Ocr0JEscFIuQ/1771003873992-images-(1).webp" alt="Solusi transportasi bisnis Hino dengan berbagai pilihan karoseri untuk logistik, konstruksi, and hauling" className="w-full h-full object-cover" width="600" height="600" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SERVICES */}
        <section id="services" className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase">Layanan Dealer Resmi</h3>
              <p className="text-slate-500 text-sm">Pendampingan profesional dari pemesanan hingga unit siap beroperasi.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Dukungan Karoseri", desc: "Mapping unit sesuai muatan dan rute operasional.", icon: <MessageSquare className="w-6 h-6 text-red-600" /> },
                { title: "Penawaran Transparan", desc: "Rincian harga dan karoseri yang jujur dan rapi.", icon: <Mail className="w-6 h-6 text-red-600" /> },
                { title: "Support Pembiayaan", desc: "Pendampingan data leasing hingga proses approval.", icon: <CreditCard className="w-6 h-6 text-red-600" /> },
                { title: "Layanan Purna Jual", desc: "Dukungan service berkala dan suku cadang resmi.", icon: <Settings className="w-6 h-6 text-red-600" /> }
              ].map((svc, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-red-100 transition-all duration-500 text-center md:text-left flex flex-col items-center md:items-start"
                >
                  <div className="mb-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-apple">{svc.icon}</div>
                  <h4 className="font-bold text-slate-900 text-base md:text-sm uppercase tracking-tight mb-4">{svc.title}</h4>
                  <p className="text-sm md:text-xs text-slate-500 leading-relaxed">{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: KAROSERI */}
        <section id="karoseri" className="px-6 py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex lg:gap-32 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="grid grid-cols-3 gap-4">
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={karoseriHino} 
                    alt="Dukungan karoseri terpadu untuk unit Hino dengan kualitas pengerjaan standar dealer resmi" 
                    className="rounded-2xl shadow-apple aspect-[3/4] object-cover" 
                    width="300" height="400" loading="lazy"
                  />
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    src={galeri1} 
                    alt="Proses pembuatan karoseri truk Hino yang presisi untuk memastikan durabilitas di medan berat" 
                    className="rounded-2xl shadow-apple aspect-[3/4] object-cover mt-8" 
                    width="300" height="400" loading="lazy"
                  />
                  <motion.img 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    src={galeri2} 
                    alt="Unit Hino dengan karoseri khusus yang siap mendukung operasional bisnis di seluruh wilayah Jawa Timur" 
                    className="rounded-2xl shadow-apple aspect-[3/4] object-cover mt-16" 
                    width="300" height="400" loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 mb-20 lg:mb-0">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8 uppercase">Dukungan Karoseri Terpadu</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">Kami bekerja sama dengan karoseri terbaik untuk memastikan kualitas bak, box, dump, hingga mixer Anda sesuai dengan standar tinggi Hino.</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {["Bak Besi", "Box Pendingin", "Wingbox", "Tangki", "Dump Truck", "Mixer"].map(item => (
                    <span key={item} className="px-6 py-3 bg-white text-slate-900 text-[11px] font-bold rounded-full border border-slate-200 uppercase tracking-widest shadow-sm hover:border-red-600 transition-colors cursor-default">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: EXTRA INFO */}
        <section className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Garansi Resmi", sub: "3 Tahun / 100rb KM", icon: <ShieldCheck className="w-9 h-9 text-red-600" />, desc: "Perlindungan maksimal untuk investasi bisnis Anda." },
                { label: "Suku Cadang", sub: "100% Genuine Parts", icon: <Wrench className="w-9 h-9 text-red-600" />, desc: "Ketersediaan komponen asli di seluruh jaringan dealer." },
                { label: "Layanan 24/7", sub: "Customer Care Center", icon: <Clock className="w-9 h-9 text-red-600" />, desc: "Bantuan teknis darurat kapanpun Anda butuhkan." },
                { label: "Free Service", sub: "Program Perawatan", icon: <Truck className="w-9 h-9 text-red-600" />, desc: "Gratis biaya jasa servis berkala sesuai ketentuan." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative p-10 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-red-600/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500">{item.icon}</div>
                    <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest mb-3">{item.label}</h4>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-[0.2em] mb-6">{item.sub}</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: PROCESS */}
        <section id="process" className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase">Alur Pembelian</h3>
              <p className="text-slate-500 text-sm">Proses terstruktur untuk memastikan unit Anda siap tepat waktu.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Konsultasi", desc: "Analisa kebutuhan muatan dan rute operasional." },
                { step: "02", title: "Penawaran", desc: "Rincian unit, karoseri, dan simulasi kredit." },
                { step: "03", title: "Administrasi", desc: "Pemesanan unit dan pengurusan dokumen legal." },
                { step: "04", title: "Serah Terima", desc: "Unit siap bekerja untuk kemajuan bisnis Anda." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <span className="text-5xl font-bold text-slate-50 absolute -top-6 -left-2 select-none group-hover:text-red-50 transition-colors">{item.step}</span>
                  <h4 className="font-bold text-base text-slate-900 mb-4 uppercase tracking-tight relative z-10">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FINANCING */}
        <section id="financing" className="px-6 py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex lg:gap-24 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8 uppercase">Pembiayaan Fleksibel</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">Kami bekerja sama dengan mitra leasing terpercaya untuk memberikan simulasi kredit yang paling sesuai dengan cashflow bisnis Anda.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "DP Ringan", desc: "Mulai dari 15% sesuai profil usaha." },
                    { title: "Tenor Panjang", desc: "Pilihan cicilan hingga 48 bulan." },
                    { title: "Proses Cepat", desc: "Data dibantu sampai approval leasing." },
                    { title: "Bunga Kompetitif", desc: "Rate terbaik dari partner perbankan kami." }
                  ].map((fin, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-white rounded-2xl border border-slate-100 shadow-apple flex flex-col items-center sm:items-start text-center sm:text-left"
                    >
                      <p className="font-bold text-slate-900 text-sm md:text-xs uppercase tracking-tight mb-3">{fin.title}</p>
                      <p className="text-xs md:text-[10px] text-slate-500 leading-relaxed">{fin.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 mt-16 lg:mt-0">
                <div className="bg-slate-900 p-12 rounded-3xl text-white relative overflow-hidden shadow-premium">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold tracking-tight mb-4 uppercase">Butuh Simulasi Kredit?</h4>
                    <p className="text-slate-400 text-sm mb-10 leading-relaxed">Dapatkan rincian angsuran dan total pembayaran yang paling efisien untuk unit pilihan Anda.</p>
                    <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all uppercase tracking-widest text-[10px]">
                      Minta Simulasi &rarr;
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PROOF */}
        <section id="proof" className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase">Dokumentasi Pengiriman</h3>
              <p className="text-slate-500 text-sm">Bukti komitmen kami dalam melayani setiap unit dengan standar dealer resmi.</p>
            </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: serahTerima1, label: "Dokumentasi serah terima unit truk Hino baru kepada konsumen setia Dealer Hino Jawa Timur" },
                  { src: serahTerima2, label: "Pengecekan akhir unit Hino sebelum dikirimkan untuk memastikan standar kualitas dealer resmi terpenuhi" },
                  { src: galeri3, label: "Stok unit truk Hino ready stock di dealer resmi Hino Kletek Sidoarjo siap untuk dipesan" },
                  { src: galeri4, label: "Proses pengiriman unit truk Hino ke lokasi konsumen dengan pendampingan profesional dari sales consultant" }
                ].map((img, i) => (
                <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden shadow-apple border border-slate-50">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" width="300" height="300" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="absolute bottom-6 left-6 text-white text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: REVIEWS */}
        <section id="reviews" className="py-24 sm:py-32 bg-slate-50/50 overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-20">
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Social Proof
              </motion.div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase">Kepercayaan Mitra Bisnis</h3>
              <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-medium">Lebih dari 500+ unit telah kami kirimkan ke berbagai sektor industri di seluruh Indonesia.</p>
              <div className="flex justify-center items-center gap-3 mt-8 sm:mt-10">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900">4.9/5 <span className="text-slate-400 font-medium ml-1">(245+ Reviews)</span></span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-80 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-80 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

            <div className="space-y-8 sm:space-y-12">
              {[
                [
                  { name: "Hendra Wijaya", company: "PT. Logistik Jaya", text: "Pelayanan sangat profesional. Unit Hino 500 kami sampai tepat waktu." },
                  { name: "Maya Sartika", company: "CV. Bangun Sejahtera", text: "Proses kredit dibantu sampai tuntas. Sangat transparan soal harga." },
                  { name: "Agus Prasetyo", company: "Distributor Sembako", text: "Sudah langganan selama 5 tahun. Selalu memberikan solusi unit terbaik." },
                  { name: "Budi Santoso", company: "PT. Trans Cargo", text: "Respon sales sangat cepat dan membantu mapping karoseri yang tepat." },
                  { name: "Siti Aminah", company: "Toko Kelontong Makmur", text: "Hino 300 sangat irit untuk kiriman dalam kota. Puas dengan layanannya." }
                ],
                [
                  { name: "Rizky Pratama", company: "Kontraktor Jalan", text: "Dump truck Hino memang tangguh di medan berat. Support servisnya oke." },
                  { name: "Dewi Lestari", company: "Ekspedisi Cepat", text: "Wingbox kami rapi pengerjaannya. Sales sangat detail menjelaskan spek." },
                  { name: "Fajar Nugraha", company: "PT. Tambang Maju", text: "Unit 700 series sangat bertenaga. Dealer ini paling mengerti kebutuhan tambang." },
                  { name: "Indra Kusuma", company: "Logistik Nasional", text: "Harga kompetitif dan bonus servisnya sangat membantu operasional." },
                  { name: "Lina Marlina", company: "Distribusi Minuman", text: "Pengiriman unit tepat waktu sesuai janji. Sales jujur dan amanah." }
                ],
                [
                  { name: "Eko Wahyudi", company: "CV. Jasa Angkut", text: "Terima kasih Elgin MD atas bantuannya. Unit Hino 300 kami sudah jalan." },
                  { name: "Yanti Sofia", company: "PT. Pangan Lestari", text: "Box pendinginnya dingin maksimal. Standar karoserinya sangat tinggi." },
                  { name: "Dedi Kurniawan", company: "Supplier Material", text: "Selalu puas beli di sini. Administrasi cepat dan tidak berbelit-belit." },
                  { name: "Rina Melati", company: "Ekspedisi Lintas Pulau", text: "Support pengiriman ke Sulawesi sangat lancar. Dealer terpercaya." },
                  { name: "Taufik Hidayat", company: "PT. Cargo Express", text: "Hino 500 memang rajanya jalanan. Dealer ini rajanya pelayanan." }
                ]
              ].map((row, rowIndex) => (
                <div key={rowIndex} className={`flex gap-6 sm:gap-10 overflow-hidden ${rowIndex === 2 ? 'hidden sm:flex' : ''}`}>
                  <motion.div 
                    animate={{ x: rowIndex % 2 === 0 ? [0, -1200] : [-1200, 0] }}
                    transition={{ 
                      duration: 40 + (rowIndex * 10), 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: rowIndex * 2
                    }}
                    className="flex gap-6 sm:gap-10 whitespace-nowrap"
                  >
                    {[...row, ...row, ...row].map((rev, i) => (
                      <div key={i} className="w-[280px] sm:w-[400px] flex-shrink-0 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500">
                        <div className="flex gap-1 mb-4 sm:mb-6">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 whitespace-normal italic font-medium">"{rev.text}"</p>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-400 font-bold text-sm sm:text-base border border-slate-100">
                            {rev.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-tight">{rev.name}</p>
                              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white stroke-[4]" />
                              </div>
                            </div>
                            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">{rev.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section id="faq" className="px-6 py-32 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Pusat Bantuan
              </motion.div>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 uppercase">Pertanyaan Umum</h3>
              <p className="text-slate-500 text-lg font-medium">Informasi cepat mengenai pemesanan dan layanan Hino.</p>
            </div>

            <div className="space-y-6">
              {[
                { q: "Berapa lama proses pengiriman unit?", a: "Untuk unit ready stock, proses pengiriman biasanya memakan waktu 3-7 hari kerja setelah administrasi selesai. Jika memerlukan karoseri khusus, waktu akan menyesuaikan dengan estimasi pengerjaan karoseri (rata-rata 14-30 hari)." },
                { q: "Apakah melayani pembelian di luar Jawa Timur?", a: "Ya, kami melayani pemesanan unit untuk wilayah Jawa Timur, Kalimantan, hingga Sulawesi dengan standar pelayanan dealer resmi." },
                { q: "Apa saja syarat pengajuan kredit?", a: "Syarat umum meliputi KTP Suami Istri, KK, NPWP, Rekening Koran 3 bulan terakhir, dan bukti kepemilikan usaha/legalitas perusahaan. Tim kami akan mendampingi proses pengumpulan data." },
                { q: "Berapa minimal DP untuk pembelian unit Hino?", a: "Minimal DP mulai dari 15% - 20% tergantung pada profil usaha dan kebijakan mitra leasing yang dipilih." },
                { q: "Apakah ada layanan home service?", a: "Hino memiliki layanan HMS (Hino Mobile Service) yang dapat mendatangi lokasi operasional Anda untuk perawatan berkala atau perbaikan ringan." },
                { q: "Bagaimana dengan garansi unit Hino?", a: "Setiap unit Hino mendapatkan garansi resmi selama 3 tahun atau 100.000 KM (mana yang tercapai lebih dulu), mencakup mesin dan komponen utama sesuai ketentuan buku servis." },
                { q: "Apakah bisa tukar tambah (Trade-In)?", a: "Ya, kami dapat membantu proses trade-in kendaraan lama Anda dengan unit Hino baru melalui jaringan partner appraisal terpercaya kami." },
                { q: "Di mana lokasi dealer resmi Hino Jawa Timur?", a: "Kami memiliki jaringan dealer di berbagai titik strategis di Jawa Timur. Silakan hubungi kami untuk diarahkan ke cabang terdekat dengan lokasi Anda." }
              ].map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CONTACT */}
        <section id="contact" className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100">
              <div className="lg:flex">
                <div className="lg:w-1/2 p-12 lg:p-20">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8 uppercase">Dealer Hino Jawa Timur</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12">Siap meningkatkan efisiensi armada Anda? Hubungi kami untuk penawaran harga terbaik dan simulasi kredit yang transparan.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-apple text-red-600 flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Telepon Langsung</p>
                        <p className="text-lg font-bold text-slate-900">0851-0123-3803</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-apple text-green-600 flex-shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Chat</p>
                        <p className="text-lg font-bold text-slate-900">0896-7824-1610</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-apple text-slate-600 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Alamat Kantor</p>
                        <p className="text-sm font-bold text-slate-900 leading-relaxed">
                          Jl. Raya Kletek No.8-10, Losari, Kletek, <br />
                          Kec. Taman, Sidoarjo, Jawa Timur 61257
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-slate-900 p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                  {/* Map Background or Overlay */}
                  <div className="absolute inset-0 opacity-20 grayscale hover:opacity-40 transition-opacity duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.346848247656!2d112.6841!3d-7.3516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e37e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sJl.%20Raya%20Kletek%20No.8-10%2C%20Losari%2C%20Kletek%2C%20Kec.%20Taman%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061257!5e0!3m2!1sen!2sid!4v1712648000000!5m2!1sen!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <img src={heroImage} alt="Elgin MD sebagai Senior Sales Consultant Hino Jawa Timur yang berpengalaman melayani kebutuhan armada bisnis" className="w-20 h-20 rounded-2xl object-cover border-2 border-white/10" width="80" height="80" loading="lazy" referrerPolicy="no-referrer" />
                      <div>
                        <p className="text-xl font-bold tracking-tight">Elgin MD</p>
                        <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">Senior Sales Consultant</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-12 italic">"Dedikasi saya adalah memberikan solusi unit yang paling menguntungkan bagi bisnis Anda. Mari berdiskusi untuk masa depan armada Anda."</p>
                    <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="w-full py-5 bg-red-600 text-white font-bold rounded-2xl text-center hover:bg-red-700 transition-all uppercase tracking-widest text-xs shadow-apple block">
                      Hubungi Saya Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 overflow-hidden rounded-lg bg-red-600 p-1.5 text-white">
                    <img src={logoHino} alt="Logo Hino Official Jawa Timur - Partner terpercaya untuk penyediaan unit truk Hino baru dan layanan purna jual" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Hino <span className="text-red-600">Official</span></span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  Dealer Hino Resmi Jawa Timur. <br />
                  Jl. Raya Kletek No.8-10, Sidoarjo. <br />
                  Dealer Truk Hino Jatim terpercaya untuk kebutuhan logistik, konstruksi, dan transportasi berat di Indonesia Timur.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-8">Navigasi</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <li><a href="#series" className="hover:text-red-600 transition-colors">Daftar Unit</a></li>
                  <li><a href="#karoseri" className="hover:text-red-600 transition-colors">Karoseri</a></li>
                  <li><a href="#reviews" className="hover:text-red-600 transition-colors">Testimoni</a></li>
                  <li><a href="#contact" className="hover:text-red-600 transition-colors">Kontak</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-8">Legal</h4>
                <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <li><button onClick={() => setLegalModal({ isOpen: true, type: 'terms' })} className="hover:text-red-600 transition-colors cursor-pointer">Syarat & Ketentuan</button></li>
                  <li><button onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })} className="hover:text-red-600 transition-colors cursor-pointer">Kebijakan Privasi</button></li>
                </ul>
              </div>
            </div>
            <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2026 Hino Official Dealer Jawa Timur. All Rights Reserved.</p>
              <div className="flex gap-6">
                <Instagram className="w-4 h-4 text-slate-400 hover:text-red-600 transition-colors cursor-pointer" />
                <Facebook className="w-4 h-4 text-slate-400 hover:text-red-600 transition-colors cursor-pointer" />
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-red-600 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>

        {/* STICKY CTA (Mobile) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex gap-3 shadow-2xl">
          <a href="tel:085101233803" className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl text-[10px] uppercase tracking-widest shadow-lg">
            <Phone className="w-3.5 h-3.5" /> Telepon
          </a>
          <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="flex-[1.5] flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold rounded-2xl text-[10px] uppercase tracking-widest shadow-lg">
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>

        {/* STICKY CTA (Desktop) */}
        <div className="hidden md:flex fixed bottom-8 right-8 z-[60] flex-col gap-3">
          <a href="tel:085101233803" className="group flex items-center gap-3 bg-white hover:bg-slate-900 hover:text-white p-2 pr-6 rounded-full shadow-premium border border-slate-100 transition-all duration-300">
            <div className="w-10 h-10 bg-slate-900 group-hover:bg-white group-hover:text-slate-900 text-white rounded-full flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Telepon</span>
          </a>
          <a href="https://wa.me/6289678241610" onClick={trackWhatsApp} className="group flex items-center gap-3 bg-white hover:bg-[#25D366] hover:text-white p-2 pr-6 rounded-full shadow-premium border border-slate-100 transition-all duration-300">
            <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
          </a>
        </div>

        <AnimatePresence>
          {legalModal.isOpen && (
            <LegalModal 
              isOpen={legalModal.isOpen} 
              type={legalModal.type} 
              onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
