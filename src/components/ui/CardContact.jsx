/* eslint-disable react/prop-types */
export default function CardContact({ icon, text }) {
  return (
    <div className="mx-auto grid gap-3 text-primary">
      <div className="mx-auto">{icon}</div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}
