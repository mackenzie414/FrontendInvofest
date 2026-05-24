import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// TYPE EVENT
interface EventType {
  id: number;
  name: string;
  location: string;
  dateEvent: string;
  description: string;
  category: {
    id: number;
    name: string;
  };
  speaker: {
    id: number;
    name: string;
  };
}

export default function EventIndex() {

  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus event ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus event");

      alert("Event berhasil dihapus!");
      fetchEvents();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus event");
    }
  };

  return (
    <div className="p-8 bg-[#F3F4F6] min-h-full">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#7B1D3F]">Event</h2>
          <p className="text-gray-500">Daftar semua kegiatan festival</p>
        </div>
        <Link
          to="/dashboard/event/new"
          className="bg-[#7B1D3F] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#5a152e] transition-all shadow-lg text-center"
        >
          + Add New Event
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#7B1D3F] text-white">
            <tr>
              <th className="px-6 py-4 text-left">Nama Event</th>
              <th className="px-6 py-4 text-left">Lokasi</th>
              <th className="px-6 py-4 text-left">Kategori</th>
              <th className="px-6 py-4 text-left">Pembicara</th>
              <th className="px-6 py-4 text-left">Tanggal</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {events.length > 0 ? (
              events.map((event) => (
                <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">{event.name}</td>
                  <td className="px-6 py-4 text-gray-600">{event.location}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#7B1D3F]/10 text-[#7B1D3F] px-3 py-1 rounded-full text-sm font-medium">
                      {event.category.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{event.speaker.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(event.dateEvent).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/dashboard/event/edit/${event.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteEvent(event.id)}
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
                <td colSpan={6} className="text-center py-12 text-gray-400 italic">
                  Belum ada data event tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}