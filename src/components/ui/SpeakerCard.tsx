interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center group">
      {/* FOTO */}
      <div className="relative z-10 mb-[-40px]">
        <img
          src={imageUrl}
          alt={name}
          className="h-40 w-40 rounded-full border-8 border-red-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>

      {/* CARD */}
      <div className="border-4 border-red-900 w-full pt-14 pb-6 px-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center">
        <h3 className="text-base text-red-900 font-semibold">{name}</h3>
        <p className="text-sm text-slate-600 mt-1">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;