import { ShieldCheck, Globe, CreditCard, GraduationCap, Users, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Onaylanmış Başvuru', value: '1200+' },
  { label: 'Günlük İşlem Süresi', value: '15' },
  { label: 'Başarı Oranı', value: '98%' },
  { label: 'Uzman Desteği', value: '24/7' },
];

const features = [
  {
    icon: <Globe className="text-on-tertiary-container" />,
    title: 'Vize ve Oturum',
    desc: 'Mavi Kart, MVV ve tüm oturum izni türlerinde profesyonel dosya hazırlığı ve başvuru takibi.',
    bgColor: 'bg-on-tertiary-container/10'
  },
  {
    icon: <CreditCard className="text-secondary" />,
    title: 'Finansal Kurulum',
    desc: 'BSN numarası alımı, DigiD aktivasyonu ve Hollanda banka hesabı açılış süreçleri.',
    bgColor: 'bg-secondary-container/10',
    offset: true
  },
  {
    icon: <Building2 className="text-primary-container" />,
    title: 'İş ve Şirket',
    desc: 'Hollanda\'da şirket kurulumu (BV/ZZP), vergi mükellefiyeti ve muhasebe danışmanlığı.',
    bgColor: 'bg-primary-container/10'
  },
  {
    icon: <Users className="text-outline" />,
    title: 'Sosyal Entegrasyon',
    desc: 'Adres kaydı, çocuk parası başvuruları, aile birleşimi ve tercüme işlemleri.',
    bgColor: 'bg-outline/10',
    offset: true
  },
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover object-top opacity-40 mix-blend-multiply" 
            src="https://images.unsplash.com/photo-1543833078-22f3ca6da919?auto=format&fit=crop&q=80&w=2000"
            alt="Amsterdam Business District"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary-container/10 text-primary-container px-5 py-2 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">IND Uyumlu Mavi Kart Danışmanlığı</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-on-background tracking-tight leading-[1.1]">
              Hollanda'da <span className="text-primary-container">Yeni Bir Hayat</span> Sizi Bekliyor
            </h1>
            
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Vize başvurularından banka hesabına, adres kaydından şirket kurulumuna kadar Hollanda'daki tüm bürokratik süreçlerinizde yanınızdayız.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/uygunluk-testi" className="px-10 py-5 bg-primary-container text-white font-display font-bold text-base rounded-xl shadow-xl hover:bg-primary transition-all active:scale-95">
                Uygunluk Testini Çöz
              </Link>
              <Link to="/basvuru" className="px-10 py-5 border-2 border-primary-container text-primary-container font-display font-bold text-base rounded-xl hover:bg-primary-container/5 transition-all active:scale-95">
                Hızlı Başvuru
              </Link>
            </div>
          </motion.div>
          
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ y: feature.offset ? 40 : 0, opacity: 0 }}
                animate={{ y: feature.offset ? 40 : 0, opacity: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="glass-card p-8 rounded-2xl flex flex-col gap-5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <span className="font-display text-5xl font-extrabold text-primary-container">{stat.value}</span>
                <span className="font-sans text-sm font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary-container rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-16 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[80px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container rounded-full blur-[80px] -ml-48 -mb-48"></div>
            </div>
            
            <div className="relative z-10 flex-1 space-y-8 text-center md:text-left">
              <h2 className="font-display text-5xl font-bold mb-6">Hazır mısınız?</h2>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                Hollanda'da yaşam ve kariyer hayalinizi gerçeğe dönüştürmek için ilk adımı bugün atın. Ücretsiz uygunluk testimizi tamamlayarak şansınızı hemen öğrenin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/uygunluk-testi" className="px-10 py-5 bg-white text-primary-container font-display font-bold rounded-xl hover:bg-surface transition-all shadow-xl active:scale-95">
                  Ücretsiz Analiz Al
                </Link>
                <Link to="/basvuru" className="px-10 py-5 bg-secondary-container text-white font-display font-bold rounded-xl hover:bg-secondary transition-all shadow-xl active:scale-95">
                  Bizimle İletişime Geç
                </Link>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="w-80 h-[30rem] object-cover rounded-3xl shadow-2xl rotate-3 border-4 border-white/20 overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
                  alt="Quality of life in Netherland"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
