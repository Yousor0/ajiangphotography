export default function MasonaryGrid({ link }) {
  const imageList = Object.values(link).map((image, index) => (
    <div className="mb-2 break-inside-avoid ">
      <img
        key={index}
        src={image.default}
        alt={`Image ${index + 1}`}
        className="w-full block"
      />
    </div>
  ));

  return (
    <div className="px-5 sm:px-20 pt-5 ">
      <div className="gap-2 space-y-4 columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 ">
        {imageList}
      </div>
    </div>
  );
}
