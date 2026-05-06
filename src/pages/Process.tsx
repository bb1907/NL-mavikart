import { Briefcase, GraduationCap, FileText, Plane, Contact2, CheckCircle2, History, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: '01',
    title: 'İş Teklifi Alımı',
    desc: 'Mavi Kart için ilk adım, Hollanda merkezli bir işverenden geçerli bir iş teklifi veya sözleşmesi almaktır. Maaşın belirlenen yıllık alt limitin üzerinde olması gerekmektedir.',
    icon: <Briefcase />,
    isCritical: true,
  },
  {
    id: '02',
    title: 'Nuffic Diploma Denkliği',
    desc: 'Eğer gerekliyse, yükseköğrenim diplomanızın Hollanda standartlarına uygunluğu Nuffic tarafından doğrulanmalıdır. Bu süreç eğitiminize ve uzmanlık alanınıza göre değişkenlik gösterebilir.',
    icon: <GraduationCap />,
    quote: '"Akademik geçmişinizin Hollanda iş gücü piyasasındaki karşılığını belgeler."',
  },
  {
    id: '03',
    title: 'IND Başvurusu',
    desc: 'İşvereniniz, Göçmenlik ve Vatandaşlık Dairesi\'ne (IND) başvurunuzu iletir. Tanınmış sponsor (Recognized Sponsor) olan firmalarda süreç çok daha hızlı ilerlemektedir.',
    icon: <FileText />,
    badges: ['Resmi Evrak', 'Dijital Takip']
  },
  {
    id: '04',
    title: 'Vize Alımı (MVV)',
    desc: 'Başvurunuz onaylandıktan sonra, kendi ülkenizdeki Hollanda Konsolosluğu\'ndan geçici oturum vizenizi (MVV) teslim alırsınız.',
    icon: <Plane />,
  },
  {
    id: '05',
    title: 'Oturum Kartı',
    desc: 'Hollanda\'ya varışınızdan kısa bir süre sonra IND ofisinden resmi AB Mavi Kartınızı teslim alarak yeni hayatınıza resmen başlayabilirsiniz.',
    icon: <Contact2 />,
    isFinal: true,
  },
];

export default function Process() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="relative bg-primary-container py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541410940733-315197824147?auto=format&fit=crop&q=80&w=2000" 
            alt="Dutch Landscape" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="bg-secondary text-white px-5 py-1 rounded-full text-sm font-bold uppercase tracking-widest inline-block">Hollanda AB Mavi Kart</span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white">Adım Adım Başvuru Süreci</h1>
          <p className="text-xl text-on-primary-container max-w-2xl mx-auto leading-relaxed">
            Hollanda'da kariyerinize başlamak için izlemeniz gereken resmi prosedürleri, şeffaf ve modernize edilmiş bir rehberle keşfedin.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card p-10 rounded-3xl shadow-sm border-outline-variant/20 sticky top-32">
              <h3 className="font-display text-2xl font-bold text-primary-container mb-8">Tahmini İşlem Süreleri</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-high/50 border border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Tanınmış Sponsor</p>
                    <p className="text-on-surface-variant">2 - 4 Hafta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-high/50 border border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-outline/10 flex items-center justify-center text-outline">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Normal Şirket</p>
                    <p className="text-on-surface-variant">90 Güne Kadar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t border-outline-variant/30 space-y-6">
                <p className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider">İhtiyacınız Olanlar</p>
                <ul className="space-y-4">
                  {['Geçerli Pasaport', 'İş Sözleşmesi', 'Diploma Örnekleri'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-on-surface font-medium">
                      <CheckCircle2 className="w-4 h-4 text-on-tertiary-container" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="lg:col-span-8 space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative bg-white p-10 rounded-3xl border border-outline-variant/40 shadow-sm hover:shadow-xl transition-all duration-300 ${step.isFinal ? 'ring-2 ring-secondary-container' : ''}`}
              >
                <span className="absolute -top-6 -right-4 font-display text-9xl font-black text-primary-container opacity-[0.03] select-none pointer-events-none">
                  {step.id}
                </span>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${step.isFinal ? 'bg-secondary-container text-white' : 'bg-surface-container-highest text-primary group-hover:bg-secondary group-hover:text-white'}`}>
                    {step.icon}
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <h4 className="font-display text-2xl font-bold text-primary">{step.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {step.desc}
                    </p>
                    
                    {step.isCritical && (
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wider bg-secondary/5 px-4 py-1.5 rounded-full">
                        Kritik Aşama
                      </span>
                    )}
                    
                    {step.quote && (
                      <div className="bg-surface-container-low p-6 rounded-2xl border-l-[6px] border-on-tertiary-container italic text-on-surface-variant">
                        {step.quote}
                      </div>
                    )}
                    
                    {step.badges && (
                      <div className="flex gap-3">
                        {step.badges.map(b => (
                          <span key={b} className="px-4 py-1.5 rounded-full bg-primary-container/10 text-primary-container text-xs font-bold uppercase tracking-wider">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {step.isFinal && (
                      <span className="inline-block px-5 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-sm font-bold shadow-sm">
                        Son Durak
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[2.5rem] p-20 text-center border-2 border-primary-container/10 space-y-8 shadow-2xl">
            <h2 className="font-display text-5xl font-bold text-primary">Süreci Bugün Başlatın</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Hollanda'daki kariyer yolculuğunuzda size rehberlik etmek için buradayız. Ücretsiz ön değerlendirme ile uygunluğunuzu kontrol edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/uygunluk-testi" className="bg-secondary-container text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-xl active:scale-95">
                Başvuru Formunu Doldur
              </Link>
              <Link to="/iletisim" className="border-2 border-primary-container text-primary-container px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-container hover:text-white transition-all active:scale-95">
                Danışmanla Görüş
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
