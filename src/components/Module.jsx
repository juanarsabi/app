export function Module({ title, children }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-sky-800 mb-5">{title}</h1>
      <div
        className="overflow-y-scroll"
        style={{ height: "calc(100vh - 140px)" }}
      >
        {children}
      </div>
    </>
  );
}
