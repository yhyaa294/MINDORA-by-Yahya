"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Edit3, Bell, Moon, Lock, ChevronRight, X, Camera, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', bio: '', school: '' });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Avatars Mockup
  const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"
  ];
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  useEffect(() => {
    const loadUser = async () => {
        try {
            const storedUser = localStorage.getItem('sehati_user');
            if (storedUser) {
                const parsed = JSON.parse(storedUser);
                setUser(parsed);
                setEditForm({
                    name: parsed.name || '',
                    bio: parsed.bio || 'Belajar mencintai diri sendiri.',
                    school: parsed.class || 'Kelas XI'
                });
                // Try to fetch latest from Supabase if email exists
                if (parsed.email) {
                    const { data } = await supabase
                        .from('students')
                        .select('*')
                        .eq('email', parsed.email)
                        .single();
                    
                    if (data) {
                        setUser(data);
                        setEditForm({
                            name: data.name,
                            bio: data.bio || 'Belajar mencintai diri sendiri.',
                            school: data.class || 'Kelas XI'
                        });
                    }
                }
            } else {
                setUser({ name: 'Teman Mindora', role: 'student', class: 'User Baru' });
            }
        } catch (error) {
            console.error("Profile Error Parsing JSON:", error);
        }
    };
    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sehati_user');
    router.push('/login');
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      
      const updatedUser = { ...user, name: editForm.name, bio: editForm.bio, class: editForm.school };
      
      // 1. Update Local Storage (Immediate Feedback)
      localStorage.setItem('sehati_user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      // 2. Update Supabase (if real user)
      if (user.email) {
          const { error } = await supabase
            .from('students')
            .update({ 
                name: editForm.name, 
                bio: editForm.bio, 
                class: editForm.school 
            })
            .eq('email', user.email);
            
          if (error) console.error("Supabase Update Error:", error);
      }

      setLoading(false);
      setIsEditModalOpen(false);
      
      // Show Success Toast
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] pb-28 font-sans">
      
      {/* Success Notification */}
      {showSuccess && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] bg-emerald-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-in slide-in-from-top-5 fade-in">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold">Profil Berhasil Diperbarui!</span>
          </div>
      )}

      {/* Profile Header (Banner Style) */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white pt-12 pb-24 px-6 rounded-b-[2.5rem] shadow-xl shadow-emerald-900/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="relative group cursor-pointer" onClick={() => setIsEditModalOpen(true)}>
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center text-white text-4xl font-serif font-bold shadow-2xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    {/* Mock Avatar Image */}
                    <img src={selectedAvatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-[#FFFBEB] text-emerald-800 rounded-full shadow-lg hover:bg-white transition-colors border-2 border-emerald-900/10">
                    <Camera className="w-3.5 h-3.5" />
                </div>
            </div>
            
            <div>
                <h1 className="text-2xl font-bold font-serif tracking-wide">{user?.name || 'Teman Mindora'}</h1>
                <p className="text-emerald-200/80 text-sm mt-1 font-light max-w-xs mx-auto line-clamp-1">
                    {user?.bio || 'Belajar mencintai diri sendiri.'}
                </p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-5 -mt-14 relative z-20 space-y-6">
        
        {/* Stats Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-emerald-900/5 p-6 flex justify-between items-center">
            <div className="text-center flex-1 border-r border-slate-100 last:border-0">
                <p className="text-xl font-bold text-emerald-950">12</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Sesi</p>
            </div>
            <div className="text-center flex-1 border-r border-slate-100 last:border-0">
                <p className="text-xl font-bold text-emerald-950">5</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Lencana</p>
            </div>
            <div className="text-center flex-1">
                <p className="text-xl font-bold text-emerald-950">850</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Poin</p>
            </div>
        </div>

        {/* Menu List */}
        <div className="space-y-2">
            <h3 className="text-xs font-bold text-emerald-900/40 uppercase tracking-wider px-2">Pengaturan Akun</h3>
            
            <div className="bg-white rounded-3xl border border-emerald-900/5 shadow-sm overflow-hidden">
                
                {/* Edit Profil */}
                <button onClick={() => setIsEditModalOpen(true)} className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/50 transition-colors border-b border-slate-50 group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Edit3 className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-700 group-hover:text-emerald-800">Edit Profil</p>
                            <p className="text-[10px] text-slate-400">Nama, Bio, Info Sekolah</p>
                        </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </button>

                {/* Keamanan */}
                <button className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/50 transition-colors border-b border-slate-50 group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-700 group-hover:text-emerald-800">Keamanan</p>
                            <p className="text-[10px] text-slate-400">Ubah Password & PIN</p>
                        </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </button>

                {/* Notifikasi */}
                <div className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/50 transition-colors border-b border-slate-50 group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Bell className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-700 group-hover:text-emerald-800">Notifikasi</p>
                            <p className="text-[10px] text-slate-400">Pengingat Harian</p>
                        </div>
                    </div>
                    {/* Toggle Switch Mockup */}
                    <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>

                {/* Tema */}
                <div className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/50 transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Moon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-700 group-hover:text-emerald-800">Tema Aplikasi</p>
                            <p className="text-[10px] text-slate-400">Mode Gelap (Coming Soon)</p>
                        </div>
                    </div>
                    <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-not-allowed opacity-50">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>

            </div>
        </div>

        {/* Logout Button */}
        <button 
            onClick={handleLogout}
            className="w-full bg-white border border-rose-100 text-rose-600 py-4 rounded-2xl font-bold text-sm shadow-sm hover:bg-rose-50 hover:border-rose-200 transition-all flex items-center justify-center gap-2 active:scale-95"
        >
            <LogOut className="w-4 h-4" />
            Keluar Aplikasi
        </button>

        <p className="text-center text-[10px] text-slate-400 pb-4">
            MINDORA v1.0.2 (Beta) • Made with ❤️
        </p>

      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in">
              <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-10 max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-slate-800">Edit Profil</h3>
                      <button onClick={() => setIsEditModalOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                          <X className="w-4 h-4 text-slate-500" />
                      </button>
                  </div>

                  {/* Avatar Selection Mockup */}
                  <div className="mb-6">
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pilih Avatar</label>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                          {avatars.map((av, idx) => (
                              <button 
                                key={idx} 
                                onClick={() => setSelectedAvatar(av)}
                                className={`w-14 h-14 rounded-full border-2 overflow-hidden shrink-0 ${selectedAvatar === av ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200'}`}
                              >
                                  <img src={av} alt="avatar" className="w-full h-full" />
                              </button>
                          ))}
                      </div>
                  </div>
                  
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Nama Lengkap</label>
                          <input 
                            type="text" 
                            value={editForm.name}
                            onChange={e => setEditForm({...editForm, name: e.target.value})}
                            className="w-full p-3 bg-white border border-emerald-100 rounded-xl text-sm font-medium text-emerald-950 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            placeholder="Nama Panggilan / Samaran"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Bio Singkat</label>
                          <input 
                            type="text" 
                            value={editForm.bio}
                            onChange={e => setEditForm({...editForm, bio: e.target.value})}
                            className="w-full p-3 bg-white border border-emerald-100 rounded-xl text-sm font-medium text-emerald-950 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            placeholder="Motto hidup atau status saat ini"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Sekolah / Instansi</label>
                          <input 
                            type="text" 
                            value={editForm.school}
                            onChange={e => setEditForm({...editForm, school: e.target.value})}
                            className="w-full p-3 bg-white border border-emerald-100 rounded-xl text-sm font-medium text-emerald-950 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            placeholder="Asal Sekolah (Opsional)"
                          />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-emerald-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all mt-4 shadow-lg shadow-emerald-900/20 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                          {loading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Menyimpan...
                              </>
                          ) : (
                              'Simpan Perubahan'
                          )}
                      </button>
                  </form>
              </div>
          </div>
      )}

    </div>
  );
}
