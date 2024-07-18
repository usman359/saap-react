export default function DropdownMenuWithSubmenu({
  label,
  submenu,
  onMouseOver,
  onMouseOut,
}) {
  <div className="relative">
    <div
      className="flex justify-between items-center hover:bg-yellow-200"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <li className="px-4">{label}</li>
      <img className="px-4 h-2" src="/icons/next.png" alt="Next" />
    </div>
    {submenu}
  </div>;
}
