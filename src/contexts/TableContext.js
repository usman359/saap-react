import { createContext, useContext, useEffect, useState } from "react";

// List of items
const initialItems = [
  "#",
  "Type",
  "Item No.",
  "BP Catalog No.",
  "Item Description",
  "Bar Code",
  "Mfr No.",
  "Serial No.",
  "Factor 1",
  "Factor 2",
  "Factor 3",
  "Factor 4",
  "Quantity",
  "Delivered Qty",
  "Inventory UoM",
  "No. of Packages",
  "Unit Price",
  "Discount %",
  "Rate",
  "Price After Discount",
  "Tax Code",
  "Gross Price after Disc.",
  "Total (LC)",
  "Whse",
  "Del. Date",
  "Sales Employee",
  "Column. %",
  "G/L Account",
  "Project",
  "Open Qty",
  "In Stock",
  "Committed",
  "Ordered",
  "Gross Profit Base Price",
  "Gross Profit Total Base Price",
  "BOM Type",
  "Row Status",
  "Target Type",
  "Target Key",
  "Base Type",
  "Base Ref.",
  "Base Key",
];

const TableContext = createContext();

function TableProvider({ children }) {
  // Stats
  const [checkboxItems, setCheckboxItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleCheckboxChange = (index) => {
    const newItems = [...checkboxItems];
    newItems[index].checked = !newItems[index].checked;
    setCheckboxItems(newItems);
  };

  // Effects
  useEffect(() => {
    const items = initialItems.map((item) => ({ label: item, checked: true }));
    setCheckboxItems(items);
  }, []);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) setCheckboxItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    if (checkboxItems.length > 0) {
      localStorage.setItem("items", JSON.stringify(checkboxItems));
    }
  }, [checkboxItems]);

  return (
    <TableContext.Provider
      value={{
        checkboxItems,
        setCheckboxItems,
        handleCheckboxChange,
        isFormOpen,
        setIsFormOpen,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

function useTable() {
  const context = useContext(TableContext);
  if (context === undefined)
    throw new Error("Context used outside of context provider");
  return context;
}

export { TableProvider, useTable };
