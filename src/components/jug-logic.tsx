export default function JugLogic({
  maxCapacity,
  value,
  state,
}: {
  value: number;
  state: string;
  maxCapacity: number;
}) {
  function getPositionByValue(value: number) {
    if (!value) return "0%";
    if (value > maxCapacity) return "100%";
    return (value * 100) / maxCapacity + "%";
  }
  if (!maxCapacity) return;
  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          position: "relative",
          width: "inherit",
          height: "inherit",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#60a5fa",
            width: "100%",
            top: 0,
            left: 0,
            height: "100%",
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
          }}
        >
          <div
            style={{
              backgroundColor: "#dbeafe",
              position: "absolute",
              bottom: getPositionByValue(value),
              left: 0,
              width: 200,
              height: 200,
            }}
          ></div>
        </div>
      </div>
      <small style={{ fontSize: 12 }}>
        <strong>
          <span style={{ color: "lightgray" }}>{value}</span> /{" "}
        </strong>
        <span>{maxCapacity}</span>
      </small>
      <br />
      <small style={{ color: "white", whiteSpace: "nowrap" }}>{state}</small>
    </>
  );
}
