/* eslint-disable react/prop-types */
export default function CardTools({ image }) {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-white p-4">
      <img className="h-24" src={image} alt="" />
    </div>
  );
}
