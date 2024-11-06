export default function Button({
  name,
  isBeam = false,
  containerClass,
}: {
  name: string;
  isBeam: boolean;
  containerClass: string;
}) {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex w-3 h-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
}
