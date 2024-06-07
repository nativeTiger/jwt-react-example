interface CardProps {
  imageUrl: string;
  name: string;
  email: string;
}

export function Card({ email, imageUrl, name }: CardProps) {
  return (
    <figure className="shadow-base rounded-md flex flex-col justify-center sm:flex-row items-center p-4 space-x-2 bg-white">
      <img
        src={imageUrl}
        alt="user-image"
        className="size-16 object-contain rounded-full"
      />
      <figcaption className="text-center sm:text-left">
        <h4 className="text-gray-500 font-semibold capitalize text-lg">
          {name}
        </h4>
        <p className="text-gray-400 font-medium break-all">{email}</p>
      </figcaption>
    </figure>
  );
}

export function LoadingCard() {
  return (
    <div className=" shadow-base rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 size-16"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-400 rounded"></div>
          <div className="h-2 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function LoadingCardGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from(Array(4)).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
