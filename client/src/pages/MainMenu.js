import React, { useEffect, useRef, useState } from "react";
import DragAndRelateTable from "../components/DragAndRelateTable";
import ModulesTable from "../components/ModulesTable";
import MyMenu from "../components/MyMenu";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";

export default function MainMenu() {
  // States
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);
  const [modules, setModules] = useState(true);
  const [dragAndRelate, setDragAndRelate] = useState(false);
  const [myMenu, setMyMenu] = useState(false);
  const [data, setData] = useState(null);

  // Effects
  useEffect(() => {
    async function sapLogin() {
      try {
        const loginResponse = await fetch(
          "http://localhost:3001/b1s/v1/Login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              CompanyDB: "AKA_Institution_Live",
              Password: "Jupi@123",
              UserName: "manager",
            }),
          }
        );

        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          const sessionId = loginData.SessionId;

          // Fetch Orders using the session ID
          const ordersResponse = await fetch(
            "http://localhost:3001/b1s/v1/Orders",
            {
              headers: {
                "Content-Type": "application/json",
                Cookie: `B1SESSION=${sessionId}`,
              },
            }
          );

          if (ordersResponse.ok) {
            const ordersData = await ordersResponse.json();
            setData(ordersData);
          } else {
            console.error("Failed to fetch orders");
          }
        } else {
          console.error("Failed to log in");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    sapLogin();
  }, []);

  // Refs
  const mainMenuRef = useRef();

  // Handlers
  const handleClick = (val) => {
    if (val === "modules") {
      setModules(true);
      setDragAndRelate(false);
      setMyMenu(false);
    }
    if (val === "dragAndRelate") {
      setDragAndRelate(true);
      setModules(false);
      setMyMenu(false);
    }
    if (val === "myMenu") {
      setMyMenu(true);
      setModules(false);
      setDragAndRelate(false);
    }
  };

  return (
    <>
      {/* First Nav */}
      <Nav1 />

      {/* Second Nav */}
      <Nav2 />

      {isMainMenuOpen && (
        <div ref={mainMenuRef} className="relative text-sm">
          {/* Center container */}
          <div className="absolute left-0 top-0 w-2/5 px-4 border border-gray-300 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-2 bg-gray-300 border-b-4 border-yellow-500 px-2">
              <span>Main Menu</span>
              <span
                onClick={() => setIsMainMenuOpen(false)}
                className="bg-white h-4 w-4 flex items-center justify-center cursor-pointer"
              >
                X
              </span>
            </header>

            <header className="grid grid-cols-4 cursor-pointer mb-4">
              <span
                className={`border-black text-center ${
                  modules ? "bg-gray-100 border-t" : "bg-gray-300 border"
                }`}
                onClick={() => handleClick("modules")}
              >
                Modules
              </span>
              <span
                className={`border-black text-center ${
                  dragAndRelate ? "bg-gray-100 border-t" : "bg-gray-300 border"
                }`}
                onClick={() => handleClick("dragAndRelate")}
              >
                Drag & Relate
              </span>
              <span
                className={`border-black text-center ${
                  myMenu ? "bg-gray-100 border-t" : "bg-gray-300 border"
                }`}
                onClick={() => handleClick("myMenu")}
              >
                My Menu
              </span>
            </header>
            {/* Main content container */}
            {/* Table */}
            {modules && <ModulesTable />}
            {dragAndRelate && <DragAndRelateTable />}
            {myMenu && <MyMenu />}
          </div>
        </div>
      )}

      {/* Display fetched data */}
      <div>
        <h2>Fetched Data:</h2>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data fetched</p>
        )}
      </div>
    </>
  );
}
