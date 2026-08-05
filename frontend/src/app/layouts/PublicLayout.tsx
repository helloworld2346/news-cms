// frontend/src/app/layouts/PublicLayout.
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import { PageTitleProvider } from "@/components/common/PageTitleProvider";

export default function PublicLayout() {
  return (
    <PageTitleProvider>
      <div className="flex min-h-screen flex-col overflow-x-clip bg-surface">
        <Header />
        <Breadcrumb />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </PageTitleProvider>
  );
}
