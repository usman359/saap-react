export default function MenuItem({ label, shortcut, onClick, disabled }) {
  <li
    className={`hover:bg-yellow-200 px-4 ${
      disabled ? "opacity-40 pointer-events-none" : ""
    }`}
    onClick={onClick}
  >
    <div className="flex justify-between">
      <span>{label}</span>
      {shortcut && <span>{shortcut}</span>}
    </div>
  </li>;
}
