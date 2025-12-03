import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 relative">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area - Added massive padding bottom to prevent overlap */}
      <main className="flex-1 md:ml-64 pb-32 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation - Rendered at root level for z-index stacking context */}
      <BottomNav />
    </div>
  );
}
