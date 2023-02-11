import { DotsHorizontalIcon } from "@heroicons/react/outline";

function Trending({ result }) {
  return (
    <div
      className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer
    transition duration-200 ease-out flex items-center justify-between
    w-full text-[#1d9bf0] font-light"
    >
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">{result.heading}</p>
        <h6 className="font-bold max-w-[250px] text-sm">
          {result.description}
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          Trending with{" "}
          {result.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </p>
      </div>

        {result.img ? (
        <img
          src={result.img}
          className="rounded-2xl object-cover w-16 h-16 ml-1"
        />
      ) : (
        <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )}

    </div>
  );
}

export default Trending;
