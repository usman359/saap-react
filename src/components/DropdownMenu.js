import MenuItem from "./MenuItem";

export default function DropdownMenu({ items }) {
  <div className="absolute z-10 bg-white border border-gray-300 shadow-lg">
    <ul>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </ul>
  </div>;
}
