import AdminSidebar from '@/components/admin/AdminSidebar';
import BottomNav from '@/components/BottomNav';

export default function CounselorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Specialized Admin Sidebar (Dark Theme) */}
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation (Reused or Specialized if needed) */}
      <BottomNav />
    </div>
  );
}
