export interface Module {
  id: string;
  title: string;
  thumbnail: string;
  category: 'Mental Health' | 'NAPZA' | 'Seksualitas' | 'HIV/AIDS';
  description: string;
  readTime: string;
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'Mengenal Kesehatan Mental Remaja',
    thumbnail: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop&q=60',
    category: 'Mental Health',
    description: 'Kenali tanda-tanda kesehatan mental yang baik dan kapan harus mencari bantuan.',
    readTime: '5 menit'
  },
  {
    id: '2',
    title: 'Bahaya NAPZA bagi Masa Depan',
    thumbnail: 'https://images.unsplash.com/photo-1527153857401-79c22ee972db?w=800&auto=format&fit=crop&q=60',
    category: 'NAPZA',
    description: 'Pelajari dampak jangka panjang penggunaan narkoba dan cara menolaknya.',
    readTime: '7 menit'
  },
  {
    id: '3',
    title: 'Stop Bullying: Be a Buddy, Not a Bully',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60',
    category: 'Mental Health',
    description: 'Bagaimana menciptakan lingkungan sekolah yang aman dan suportif.',
    readTime: '4 menit'
  },
  {
    id: '4',
    title: 'Reproduksi Sehat, Remaja Hebat',
    thumbnail: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&auto=format&fit=crop&q=60',
    category: 'Seksualitas',
    description: 'Pentingnya menjaga kesehatan reproduksi sejak dini.',
    readTime: '6 menit'
  }
];
