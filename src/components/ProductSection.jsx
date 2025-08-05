export default function ProductSection({ title, description, video }) {
  return (
   <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
  <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>

  {video && (
    <div className="mx-auto mt-6 w-full max-w-screen-lg px-0 sm:px-4">
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )}
</div>

  );
}

