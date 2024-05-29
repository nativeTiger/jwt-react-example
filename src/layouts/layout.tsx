import { Outlet } from "react-router-dom";
import { Header } from "@/layouts/header/header";
import "@/layouts/layout.css";

export function Layout() {
  return (
      <div className="px-3">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
  );
}
