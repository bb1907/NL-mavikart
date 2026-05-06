import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

const serviceOptions = [
  'BSN, DigiD ve Banka Hesabı',
  'Vize Başvurusu',
  'Oturum İşlemleri',
  'Adres Kaydı',
  'Şirket Kurulumu',
  'Vergi ve Muhasebe',
  'Aile Birleşimi',
  'Devlet Destekleri',
  'Tercüme İşlemleri',
  'Diğer sorularım var'
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="font-display text-5xl font-extrabold text-primary leading-tight">
                Hollanda'daki Yeni Hayatınıza <br />
                <span className="text-secondary-container">Birlikte Başlayalım</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Sorularınızı yanıtlamak ve sürecinizi başlatmak için buradayız. Formu doldurun, uzman danışmanlarımız size en kısa sürede ulaşsın.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-posta</h4>
                  <p className="text-on-surface-variant">info@nl-mavikart.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon / WhatsApp</h4>
                  <p className="text-on-surface-variant">+31 6 XX XX XX XX</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ofis</h4>
                  <p className="text-on-surface-variant">Den Haag, Hollanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-outline-variant/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-full -mr-16 -mt-16 blur-2xl font-bold"></div>
            
            {formStatus === 'sent' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="font-display text-3xl font-bold text-primary">Mesajınız Alındı!</h2>
                <p className="text-on-surface-variant text-lg">
                  Danışmanlarımız 24 saat içinde sizinle iletişime geçecektir.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-primary font-bold underline underline-offset-8"
                >
                  Yeni bir form gönder
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Ad Soyad</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-surface py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all"
                      placeholder="Ertan Yılmaz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">E-posta</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-surface py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all"
                      placeholder="info@ornek.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Hizmet Seçimi</label>
                  <select 
                    required
                    className="w-full bg-surface py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all"
                  >
                    <option value="">Lütfen seçiniz...</option>
                    {serviceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider ml-1">Mesajınız</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-surface py-4 px-6 rounded-xl border border-outline-variant/20 focus:ring-2 focus:ring-primary-container outline-none transition-all"
                    placeholder="Nasıl yardımcı olabiliriz?"
                  ></textarea>
                </div>

                <button 
                  disabled={formStatus === 'sending'}
                  className={`w-full py-5 rounded-xl font-display font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 ${
                    formStatus === 'sending' ? 'bg-outline/20 text-on-surface-variant' : 'bg-primary-container text-white hover:bg-primary'
                  }`}
                >
                  {formStatus === 'sending' ? 'Gönderiliyor...' : (
                    <>
                      Başvuruyu Tamamla <MessageSquare className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
