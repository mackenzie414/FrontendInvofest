import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// TYPE
interface Speaker {
  id: number;
  name: string;
  role: string;
}

export default function SeminarIndex() {

  // STATE
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  // FETCH SPEAKER
  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/speakers`
      );
      const data = await response.json();
      setSpeakers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE SPEAKER
  const deleteSpeaker = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus pembicara?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/speakers/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Gagal menghapus pembicara");

      alert("Pembicara berhasil dihapus!");
      fetchSpeakers();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus pembicara");
    }
  };

  return (
    <div className="p-8 bg-[#F3F4F6] min-h-full">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#7B1D3F]">
            Pembicara
          </h2>
          <p className="text-gray-500">
            Kelola narasumber acara
          </p>
        </div>

        <Link
          to="/dashboard/seminar/speaker"
          className="bg-[#7B1D3F] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#5a152e] transition-all shadow-lg text-center"
        >
          + Add New Pembicara
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#7B1D3F] text-white">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Nama</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {speakers.length > 0 ? (
              speakers.map((speaker) => (
                <tr key={speaker.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500">{speaker.id}</td>
                  <td className="px-6 py-4 font-medium">{speaker.name}</td>
                  <td className="px-6 py-4 text-gray-600">{speaker.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/dashboard/seminar/speaker/edit/${speaker.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteSpeaker(speaker.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-12 text-gray-400 italic">
                  Belum ada data pembicara tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}