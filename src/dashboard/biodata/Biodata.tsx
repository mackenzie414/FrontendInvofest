import { Mail, MapPin, BookOpen, Hash, GraduationCap, Code2 } from "lucide-react";

export default function Biodata() {
  return (
    <div className="p-8 bg-[#F3F4F6] min-h-full flex justify-center">
      <div className="w-full max-w-4xl">

        {/* HEADER CARD */}
        <div className="bg-gradient-to-r from-[#7B1D3F] to-[#9F2951] text-white p-10 rounded-[2.5rem] shadow-lg mb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* FOTO */}
            <div className="relative">
              <img
                src="/profil.jpeg"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-xl"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold">
                Fauzy Adytyamaki Madhera
              </h1>
              <p className="text-white/80 text-lg mt-2">
                Mahasiswa D4 Teknik Informatika
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium">
                  Fullstack Developer
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium">
                  React Developer
                </span>
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium">
                  Prisma & Express
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* BIODATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <Hash size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">NIM</h3>
              <p className="text-xl font-bold text-[#7B1D3F]">24090139</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <GraduationCap size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Program Studi</h3>
              <p className="text-xl font-bold text-[#7B1D3F]">D4 Teknik Informatika</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <BookOpen size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Fakultas</h3>
              <p className="text-xl font-bold text-[#7B1D3F]">Sekolah Vokasi</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <Mail size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Email</h3>
              <p className="text-xl font-bold text-[#7B1D3F] break-all">fauzyaditya414@gmail.com</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <MapPin size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Asal Daerah</h3>
              <p className="text-xl font-bold text-[#7B1D3F]">Tegal, Jawa Tengah</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-[#7B1D3F]/10 p-3 rounded-2xl">
              <Code2 size={20} className="text-[#7B1D3F]" />
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Project</h3>
              <p className="text-xl font-bold text-[#7B1D3F]">Website Invofest</p>
            </div>
          </div>

        </div>

        {/* ABOUT */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#7B1D3F] mb-5">
            Tentang Saya
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Saya adalah mahasiswa D4 Teknik Informatika di Universitas Harkat Negeri.
            Website ini dibuat sebagai tugas UTS Pemrograman Web
            Fullstack menggunakan React, Express, Prisma, dan Zustand
            untuk mengelola data event, kategori, dan pembicara.
          </p>
        </div>

      </div>
    </div>
  );
}