import Footer from "@/components/Footer";
import HeroInfo from "@/components/HeroInfo";
import DataImage from "@/data";
import Image from "next/image";
import Link from "next/link";
import  * as motion from "motion/react-client"

export default function Home() {

  const contactsection = [
    {
      icon: "ri-youtube-fill"
    },
    {
      icon: "ri-instagram-fill"
    },
    {
      icon: "ri-reddit-fill"
    },
    {
       icon: "ri-twitter-fill"
    }

   
  ]
  const services = [
    {
      icon: "ri-money-dollar-circle-fill",
      color: "text-blue-600",
      title: "Harga Terbaik",
      desc: "Kami menawarkan harga kompetitif tanpa mengurangi kualitas desain dan performa website Anda.",
    },
    {
      icon: "ri-service-fill",
      color: "text-pink-500",
      title: "Layanan Profesional",
      desc: "Tim kami siap membantu Anda mulai dari perencanaan hingga website siap digunakan dengan optimal.",
    },
    {
      icon: "ri-star-s-fill",
      color: "text-yellow-500",
      title: "Kualitas Terjamin",
      desc: "Setiap proyek kami kerjakan dengan standar tinggi untuk hasil yang memuaskan dan profesional.",
    },
  ];

  const projects = [
    { img: DataImage.Proyek1, title: "Proyek Pertama" },
    { img: DataImage.Proyek2, title: "Proyek Kedua" },
    { img: DataImage.Proyek3, title: "Proyek Ketiga" },
    { img: DataImage.Proyek4, title: "Proyek Keempat" },
    { img: DataImage.Proyek5, title: "Proyek Kelima" },
  ];

  const SectionHeading = (title, subtitle) => (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold mb-4 text-slate-800">{title}</h2>
      <div className="flex justify-center">
        <div className="w-32 h-[4px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full" />
      </div>
      <p className="mt-4 text-gray-600 mx-auto max-w-2xl">{subtitle}</p>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center" id="hero">
        <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        
        className="text-4xl/tight md:text-5xl/tight">
          Tingkatkan Penjualan Anda <br /> dengan Website Profesional
        </motion.div>
      </section>

      {/* Hero Image + Info */}
      <div className="max-w-5xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{delay: 1 }}>

       
        <Image
          src={DataImage.Hero}
          alt="hero"
          width={1200}
          height={800}
          className="mx-auto rounded-xl shadow-lg"
          priority
        />
         </motion.div>
        <HeroInfo />
      </div>

      {/* Layanan Section */}
      <section className="mt-32 px-5" id="layanan">
        {SectionHeading(
          "Layanan Kami",
          "Kami menyediakan layanan profesional untuk membantu bisnis Anda tampil lebih menarik dan menjangkau lebih banyak pelanggan."
        )}

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 text-center">
          {services.map((s, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <i className={`${s.icon} ri-3x ${s.color} mb-4 inline-block`} />
              <h3 className="font-semibold text-2xl mb-2">{s.title}</h3>
              <p className="text-base text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="mt-32 px-5" id="portofolio">
        {SectionHeading(
          "Portofolio",
          "Beberapa hasil karya terbaik yang telah kami selesaikan untuk klien kami."
        )}

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 text-center">
          {projects.map((p, i) => (
            <motion.div
               initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              key={i}
              className="shadow-xl p-4 rounded-2xl hover:shadow-2xl transition duration-300"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={1200}
                height={800}
                className="mx-auto rounded-xl shadow-lg"
              />
              <h1 className="mt-6 mb-3 text-2xl font-semibold">{p.title}</h1>
              <p className="text-base/loose text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="mt-6 mb-3 text-center">
                <Link
                  href="/proyek"
                  className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Lihat Detail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* section kontac */}
       <section className="mt-32 px-5" id="contact">
        <div className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0
        gap-4">
          <h2 className="text-3xl font-bold">
            Next Js
          </h2>

          <div className="flex gap-10">
             <Link href={" "}>Beranda</Link>
            <Link href={" "}>Layanan</Link>
             <Link href={" "}>Portofolio</Link>
          </div>

          <div className="flex gap-4">
            {contactsection.map((c, i) => (
              <Link key={i} href={""}>
                <i className={`${c.icon} ri-2x`}></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
