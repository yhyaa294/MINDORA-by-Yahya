export interface StatCard {
  label: string;
  value: string | number;
  change?: string;
  icon: 'users' | 'smile' | 'alert';
  trend: 'up' | 'down' | 'neutral';
}

export interface MoodTrend {
  day: string;
  value: number; // 1-5 scale
}

export interface CounselingRequest {
  id: string;
  studentName: string; // Pseudonym
  grade: string;
  topic: string;
  status: 'Pending' | 'Scheduled' | 'Done';
  date: string;
}

export interface UserBadge {
  id: string;
  name: string;
  icon: string; // emoji or icon name
  color: string;
}

export interface MoodLog {
  id: string;
  mood: string;
  note: string;
  date: string;
}

export const dashboardStats: StatCard[] = [
  { label: 'Siswa Check-in', value: 42, change: '+12%', icon: 'users', trend: 'up' },
  { label: 'Mood Rata-rata', value: '🙂', icon: 'smile', trend: 'neutral' },
  { label: 'Butuh Perhatian', value: 3, change: 'Urgent', icon: 'alert', trend: 'down' },
];

export const moodTrends: MoodTrend[] = [
  { day: 'Sen', value: 3.5 },
  { day: 'Sel', value: 4.0 },
  { day: 'Rab', value: 3.2 },
  { day: 'Kam', value: 2.8 }, // Drop
  { day: 'Jum', value: 3.8 },
  { day: 'Sab', value: 4.2 },
  { day: 'Min', value: 4.5 },
];

export const counselingRequests: CounselingRequest[] = [
  { id: '1', studentName: 'Bunga Melati', grade: 'XI IPA 2', topic: 'Masalah Keluarga', status: 'Pending', date: '10 menit lalu' },
  { id: '2', studentName: 'Arjuna', grade: 'X IPS 1', topic: 'Akademik/Sekolah', status: 'Pending', date: '1 jam lalu' },
  { id: '3', studentName: 'Langit Sore', grade: 'XII Bahasa', topic: 'Hubungan Teman', status: 'Scheduled', date: 'Kemarin' },
  { id: '4', studentName: 'Mentari', grade: 'XI IPA 1', topic: 'Kecemasan', status: 'Done', date: '2 hari lalu' },
];

export const userProfile = {
  name: 'Yahya (Kamu)',
  grade: 'XI RPL 1',
  bio: 'Suka coding dan futsal. Trying to be positive! ✨',
  badges: [
    { id: '1', name: 'GenRe Warrior', icon: '🎗️', color: 'bg-yellow-100 text-yellow-700' },
    { id: '2', name: 'Rajin Check-in', icon: '📅', color: 'bg-blue-100 text-blue-700' },
    { id: '3', name: 'Teman Baik', icon: '🤝', color: 'bg-green-100 text-green-700' },
  ] as UserBadge[],
  history: [
    { id: '1', mood: '🤩', note: 'Menang lomba futsal!', date: 'Hari ini, 14:00' },
    { id: '2', mood: '😐', note: 'Ulangan harian susah...', date: 'Kemarin, 09:00' },
    { id: '3', mood: '😔', note: 'Berantem sama adek.', date: '26 Nov, 20:00' },
  ] as MoodLog[]
};
