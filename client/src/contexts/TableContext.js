import { createContext, useContext, useEffect, useRef, useState } from "react";

let newItems;

// List of items
const item = [
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

const service = [
  "#",
  "Description",
  "G/L Account",
  "G/L Account Name",
  "Tax Code",
  "Total (LC)",
  "Distr. Rule",
  "Blanket Agreement No.",
  "Category",
  "Sub Category",
  "Customer Group",
  "Group",
  "Territory",
  "Sub Territory",
  "Discount Percentage",
  "WholeSalePercentage",
  "SchemePercentage",
  "Other Discount",
  "WS Amount",
  "Scheme Amount",
  "Total Discount",
  "MRP",
  "Tax Type",
  "Marketing Trade Budget",
  "MTB Amount",
  "3rd Schedule",
  "Non 3rd",
  "Gross Unit Price",
  "Retail Price",
  "Quantity in Cartons",
  "Discount Amount",
  "USCCode",
  "CSDCode",
  "MfgCode",
  "Gross Total",
  "CompanyRate",
  "Difference",
  "Carton",
  "FED Tax",
  "FED Rate",
];

const TableContext = createContext();

function TableProvider({ children }) {
  // Refs
  const contentTableRef = useRef(null);
  const excelButtonRef = useRef(null);
  const printButtonRef = useRef(null);
  const wordButtonRef = useRef(null);

  // Stats
  const [checkboxItems, setCheckboxItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [type, setType] = useState("item");

  // Handlers
  const handleCheckboxChange = (index) => {
    const newItems = [...checkboxItems];
    newItems[index].checked = !newItems[index].checked;
    setCheckboxItems(newItems);
  };

  // Effects
  useEffect(() => {
    if (type === "item")
      newItems = item.map((item) => ({ label: item, checked: true }));
    if (type === "service")
      newItems = service.map((service) => ({ label: service, checked: true }));
    setCheckboxItems(newItems);
  }, [type]);

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
        type,
        setType,
        contentTableRef,
        excelButtonRef,
        printButtonRef,
        wordButtonRef,
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
