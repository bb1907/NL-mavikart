import { GraduationCap, FileText, Building2, ShieldCheck, CheckCircle2, Info, Banknote, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Requirements() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-32"
    >
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-surface-container-high rounded-full text-primary-container font-sans text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Hollanda IND Uyumlu Kriterler</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
              AB Mavi Kart Gereksinimleri ve Uygunluk
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Hollanda'da yüksek nitelikli bir profesyonel olarak çalışmak için gerekli olan kriterleri keşfedin. AB Mavi Kart, diğer vize türlerine göre daha esnek ve avantajlı bir yol sunar.
            </p>
          </div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-8 border-white/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Office in Amsterdam" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Salary Criteria */}
          <div className="md:col-span-7 glass-card p-12 rounded-3xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 border-outline-variant/30">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-secondary-fixed flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Banknote className="text-secondary w-8 h-8" />
              </div>
              <h2 className="font-display text-3xl font-bold text-primary">1. Maaş Kriteri</h2>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Mavi Kart başvurusu için temel şartlardan biri belirlenmiş olan asgari brüt maaş eşiğidir. Bu tutar yıllık olarak güncellenir.
              </p>
            </div>
            <div className="bg-primary-container p-10 rounded-2xl mt-12 relative overflow-hidden group/salary">
              <div className="relative z-10">
                <div className="text-on-primary font-sans text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Aylık Brüt Maaş</div>
                <div className="text-white font-display text-6xl font-extrabold tracking-tight">5.331 €</div>
                <div className="text-white/60 text-base mt-4 italic font-medium">Tatil yardımı (holiday allowance) hariç tutardır.</div>
              </div>
              <Banknote className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12 group-hover/salary:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Education */}
          <div className="md:col-span-5 bg-white border border-outline-variant/40 p-12 rounded-3xl shadow-sm space-y-8">
            <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center rounded-2xl">
              <GraduationCap className="text-primary-container w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">2. Eğitim veya BT Deneyimi</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-primary-container w-6 h-6 shrink-0 mt-1" />
                <span className="text-on-surface-variant text-lg leading-relaxed font-medium">En az 3 yıllık yüksek öğretim programından mezuniyet (Lisans diploması).</span>
              </li>
              <li className="pt-8 border-t border-outline-variant/30">
                <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest block mb-4">BT Profesyonelleri İçin İstisna</span>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Lisans diploması olmayan BT uzmanları için son 7 yıl içinde en az 3-5 yıllık ilgili iş deneyimi yeterli kabul edilebilir.
                </p>
              </li>
            </ul>
          </div>

          {/* Contract Details */}
          <div className="md:col-span-6 glass-card p-12 rounded-3xl border-outline-variant/30 space-y-8">
            <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center rounded-2xl">
              <FileText className="text-primary-container w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">3. İş Sözleşmesi Detayları</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Başvuru sırasında geçerli bir iş sözleşmesi veya bağlayıcı bir iş teklifi sunulmalıdır.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
                <span className="text-xs font-bold text-primary-container uppercase tracking-widest block mb-1">Süre</span>
                <span className="text-2xl font-bold text-on-surface">En az 6 Ay</span>
              </div>
              <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
                <span className="text-xs font-bold text-primary-container uppercase tracking-widest block mb-1">Kapsam</span>
                <span className="text-2xl font-bold text-on-surface">Tam Zamanlı</span>
              </div>
            </div>
          </div>

          {/* Sponsor Highlights */}
          <div className="md:col-span-6 bg-primary-container p-12 rounded-3xl text-white relative overflow-hidden group/sponsor">
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-2xl border border-white/20">
                <Building2 className="text-white w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold">Küçük Şirketler ve Non-Recognized Sponsorlar</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Hollanda'daki Mavi Kart'ın en büyük avantajı, işverenin IND tarafından "Recognized Sponsor" (Tanınmış Sponsor) olma zorunluluğunun olmamasıdır.
              </p>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <Info className="text-on-tertiary-container w-6 h-6 shrink-0 mt-1" />
                <p className="text-sm font-medium leading-relaxed">
                  Bu sayede küçük ölçekli girişimler (Start-up) ve KOBİ'ler de yüksek nitelikli personeli AB Mavi Kart aracılığıyla istihdam edebilir.
                </p>
              </div>
            </div>
            <Handshake className="absolute -right-16 -bottom-16 w-80 h-80 text-white/5 rotate-[-15deg] group-hover/sponsor:rotate-0 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-surface-container-high rounded-[2.5rem] p-16 text-center border border-outline-variant/20 space-y-8 shadow-sm">
          <h3 className="font-display text-4xl font-bold text-primary">Uygunluğunuzu Ücretsiz Sorgulayın</h3>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Kriterlerin sizin için uygun olup olmadığını profesyonel danışmanlarımızla birlikte değerlendirin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link to="/uygunluk-testi" className="bg-primary-container text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-primary transition-all shadow-xl active:scale-95">
              Hemen Başvur
            </Link>
            <Link to="/iletisim" className="bg-transparent border-2 border-primary-container text-primary-container px-12 py-5 rounded-xl font-bold text-lg hover:bg-primary-container/5 transition-all active:scale-95">
              Danışmanlık Al
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
