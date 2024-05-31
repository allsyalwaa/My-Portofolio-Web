/* eslint-disable react/prop-types */
export default function Percentage({ text }) {
  return (
    <div className="mt-6 grid grid-cols-2 items-center gap-4">
      <p className="text-xl font-bold text-primary">{text}</p>
      <div className="h-5 items-center rounded-full border-[1.5px] border-primary p-1">
        <div className="mt-0 h-2 rounded-full bg-primary"> </div>
        <p className="text-sm font-semibold text-primary">90%</p>
      </div>
    </div>
  );
}
