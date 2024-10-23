import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4">
        <Outlet />
      </main>
    </>
  );
}
