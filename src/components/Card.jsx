export function Card({ children }) {
  return (
    <div className="rounded-xl border p-4 shadow hover:shadow-md transition">
      {children}
    </div>
  );
}