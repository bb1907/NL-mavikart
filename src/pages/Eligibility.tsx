import { motion } from 'motion/react';
import { ShieldCheck, GraduationCap, Briefcase, Globe, FileCheck, Send, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, title: 'Kişisel Bilgiler', icon: <Globe className="w-5 h-5" /> },
  { id: 2, title: 'Eğitim Durumu', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 3, title: 'Deneyim ve Dil', icon: <Briefcase className="w-5 h-5" /> },
  { id: 4, title: 'Sonuç', icon: <FileCheck className="w-5 h-5" /> },
];

export default function Eligibility() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'completed'>('idle');

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('completed');
      setCurrentStep(4);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-surface-container-low"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary">Mavi Kart Uygunluk Testi</h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            Hollanda'da çalışma ve ikamet izni alabilme durumunuzu 2 dakikada analiz edelim.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0"></div>
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= step.id 
                    ? 'bg-primary-container text-white shadow-lg scale-110' 
                    : 'bg-white text-outline border border-outline-variant/50'
                }`}
              >
                {step.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === step.id ? 'text-primary' : 'text-outline-variant'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 relative overflow-hidden">
          {formStatus === 'completed' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-8"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-primary">Analiziniz Başladı!</h2>
                <p className="text-lg text-on-surface-variant max-w-md mx-auto">
                  Bilgileriniz uzman danışmanlarımıza iletildi. Hollanda IND kriterlerine göre uygunluk sonucunuz 24 saat içerisinde e-posta adresinize gönderilecektir.
                </p>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="px-8 py-4 bg-primary-container text-white rounded-xl font-bold hover:bg-primary transition-all shadow-lg active:scale-95">
                  Anasayfaya Dön
                </Link>
                <Link to="/iletisim" className="px-8 py-4 border-2 border-primary-container text-primary-container rounded-xl font-bold hover:bg-primary-container/5 transition-all active:scale-95">
                  Bize Ulaşın
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Personal */}
              {currentStep === 1 && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Adınız ve Soyadınız</label>
                      <input required type="text" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="Ad Soyad" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Telefon Numaranız</label>
                      <input required type="tel" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="+90 5XX XXX XX XX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">E-posta Adresiniz</label>
                    <input required type="email" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="email@ornek.com" />
                  </div>
                  <div className="flex justify-end pt-8">
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-primary-container text-white px-10 py-5 rounded-xl font-bold hover:bg-primary transition-all shadow-xl active:scale-95">
                      Eğitim Bilgilerine Geç <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Education */}
              {currentStep === 2 && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Mezun Olduğunuz Üniversite</label>
                    <input required type="text" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="Üniversite Adı" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Bölüm / Uzmanlık</label>
                      <input required type="text" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="Örn: Bilgisayar Mühendisliği" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Mezuniyet Yılı</label>
                      <input required type="number" min="1950" max="2030" className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="2020" />
                    </div>
                  </div>
                  <div className="flex justify-between pt-8">
                    <button type="button" onClick={prevStep} className="flex items-center gap-2 text-primary font-bold px-6">
                      <ChevronLeft className="w-5 h-5" /> Geri
                    </button>
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-primary-container text-white px-10 py-5 rounded-xl font-bold hover:bg-primary transition-all shadow-xl active:scale-95">
                      Deneyim Bilgilerine Geç <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Experience */}
              {currentStep === 3 && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Mesleki Deneyim (Yıl)</label>
                      <select required className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all">
                        <option value="">Seçiniz...</option>
                        <option value="0-2">0-2 Yıl</option>
                        <option value="2-5">2-5 Yıl</option>
                        <option value="5-10">5-10 Yıl</option>
                        <option value="10+">10+ Yıl</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Yabancı Dil Seviyesi (İng/Alm/Hol)</label>
                      <select required className="w-full bg-surface-container py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all">
                        <option value="">Seçiniz...</option>
                        <option value="a1-a2">A1 - A2 (Temel)</option>
                        <option value="b1-b2">B1 - B2 (Orta)</option>
                        <option value="c1-c2">C1 - C2 (İleri)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="jobOffer" className="w-5 h-5 rounded border-outline-variant/50 cursor-pointer" />
                      <label htmlFor="jobOffer" className="text-on-surface font-medium cursor-pointer">Hollanda'dan alınmış bir iş teklifim var.</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input required type="checkbox" id="kvkk" className="w-5 h-5 rounded border-outline-variant/50 cursor-pointer" />
                      <label htmlFor="kvkk" className="text-sm text-on-surface-variant cursor-pointer">
                        Kullanım koşullarını ve <Link to="/gizlilik" className="text-primary underline">KVKK Aydınlatma Metni</Link>'ni okudum, kabul ediyorum.
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between pt-8">
                    <button type="button" onClick={prevStep} className="flex items-center gap-2 text-primary font-bold px-6">
                      <ChevronLeft className="w-5 h-5" /> Geri
                    </button>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="inline-flex items-center gap-2 bg-secondary-container text-white px-10 py-5 rounded-xl font-bold hover:bg-secondary transition-all shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'İnceleniyor...' : (
                        <>Analizi Başlat <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-12 flex items-center justify-center gap-2 text-on-surface-variant/60">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">IND Uyumlu Veri Analiz Sistemi</span>
        </div>
      </div>
    </motion.div>
  );
}
