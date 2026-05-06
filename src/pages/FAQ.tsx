import { ChevronRight, Users, Plane, Sparkles, ShieldCheck, Zap, HelpCircle, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Genel Bilgiler',
  'Aile Birleşimi',
  'Avrupa Hareketliliği',
  'Vatandaşlık Süreci',
];

const faqs = [
  {
    category: 'Aile Birleşimi',
    question: 'Aile üyeleri Hollanda\'da çalışabilir mi?',
    answer: 'Evet, kesinlikle. Mavi Kart (EU Blue Card) sahiplerinin aile bireyleri, Hollanda\'ya vardıkları andan itibaren tam çalışma iznine sahip olurlar.',
    details: [
      'Eşler için herhangi bir ek izin gerekmez.',
      'Serbest meslek veya maaşlı bir işte çalışabilirler.',
      'Çocuklar Hollanda eğitim sisteminden doğrudan yararlanabilir.'
    ],
    icon: <Users className="w-5 h-5" />,
  },
  {
    category: 'Avrupa Hareketliliği',
    question: 'Diğer AB ülkelerine ne zaman geçebilirim?',
    answer: 'Hollanda\'da ilk aldığınız Mavi Kart ile 12 ay sonra başka bir Avrupa Birliği üye ülkesine taşınma ve orada çalışma hakkına sahip olursunuz. Bu süre, AB içi hareketlilik yasaları çerçevesinde Blue Card sahiplerine sunulan en büyük avantajlardan biridir.',
    icon: <Plane className="w-5 h-5" />,
  },
  {
    category: 'Vatandaşlık Süreci',
    question: 'Hollanda vatandaşlığına giden yol nasıl işler?',
    answer: 'Hollanda vatandaşlığına giden süreç genellikle 5 yıllık kesintisiz ikamet gerektirir. Mavi Kart sahipleri için bu süreç 5 yıl boyunca yasal olarak ikamet etmek ve dil sınavını (Inburgeringsexamen) geçmekle başlar.',
    icon: <Sparkles className="w-5 h-5" />,
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Genel Bilgiler');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-32"
    >
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-primary-container p-16 md:p-24 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-transparent to-primary"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-5 py-2 rounded-full bg-secondary-container text-white text-xs font-bold uppercase tracking-widest">Destek Merkezi</span>
              <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-tight">Aklınızdaki Soruları Yanıtlıyoruz</h2>
              <p className="text-xl text-white/80 max-w-xl leading-relaxed">
                Hollanda'da kariyer ve yaşam yolculuğunuzda karşılaştığınız tüm yasal ve operasyonel süreçleri şeffaf bir şekilde açıklıyoruz.
              </p>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 w-fit">
                <ShieldCheck className="text-on-tertiary-container w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">IND Uyumlu Rehber</span>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <motion.div 
                initial={{ rotate: 10, y: 20 }}
                animate={{ rotate: 5, y: 0 }}
                className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-2xl group transition-transform hover:rotate-0 duration-500"
               >
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000" 
                  alt="Interface Dashboard" 
                  className="rounded-2xl shadow-inner border border-white/10"
                />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Main */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/30 sticky top-32 space-y-10">
            <h3 className="font-display text-2xl font-bold text-primary">Kategoriler</h3>
            <nav className="space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all font-bold ${
                    activeCategory === cat 
                    ? 'bg-primary-container text-white shadow-lg translate-x-1' 
                    : 'bg-white hover:bg-surface-container text-on-surface-variant border border-outline-variant/20'
                  }`}
                >
                  <span>{cat}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === cat ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </nav>
            
            <div className="bg-secondary-fixed text-on-secondary-fixed p-8 rounded-3xl space-y-4 shadow-sm">
              <h4 className="font-display text-xl font-bold">Hâlâ sorunuz mu var?</h4>
              <p className="text-on-secondary-fixed/70 font-medium">Uzman danışmanlarımız size özel yanıtlar sunmak için burada.</p>
              <Link to="/basvuru" className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-8 hover:text-secondary-container transition-colors">
                Bizimle İletişime Geçin <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Accordions */}
        <div className="lg:col-span-8 space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              layout
              key={idx}
              className="bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-white">
                    {faq.icon}
                  </div>
                  <h4 className="font-display text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {faq.question}
                  </h4>
                </div>
                <div className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 pl-28 space-y-6">
                      <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                      {faq.details && (
                        <ul className="space-y-4">
                          {faq.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-4 text-on-surface-variant font-medium">
                              <span className="w-2 h-2 rounded-full bg-secondary-container mt-2.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-primary-container text-white p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative">
              <ShieldCheck className="w-12 h-12 mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform relative z-10" />
              <div className="relative z-10">
                <h5 className="font-display text-2xl font-bold mb-3">Kesintisiz Destek</h5>
                <p className="text-white/70 font-medium">Başvurunuzun her aşamasında IND güncellemeleriyle yanınızdayız.</p>
              </div>
              <HelpCircle className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="bg-surface-container-high p-10 rounded-[2.5rem] border border-outline-variant/30 flex flex-col justify-between group">
              <Zap className="w-12 h-12 mb-8 text-secondary-container group-hover:scale-110 transition-transform" />
              <div>
                <h5 className="font-display text-2xl font-bold text-primary mb-3">Hızlı Onay Süreci</h5>
                <p className="text-on-surface-variant font-medium">Mavi Kart başvuruları diğer vizelere göre daha yüksek öncelikli değerlendirilir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
