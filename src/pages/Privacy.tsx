import { motion } from 'motion/react';
import { ShieldAlert, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-display text-4xl font-extrabold text-primary">KVKK Aydınlatma Metni</h1>
          <p className="text-on-surface-variant">Kişisel verilerinizin korunması bizim için önemlidir.</p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-outline-variant/30 shadow-sm space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-display">Veri Sorumlusu</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              NL-MaviKart, Hollanda'ya yönelik göçmenlik ve vize danışmanlığı süreçlerinde topladığı verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu ve GDPR çerçevesinde işlemektedir.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Lock className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-display">Veri İşleme Amaçları</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Toplanan veriler sadece Hollanda Mavi Kart ve diğer oturum izinleri için uygunluk testi yapılması, yasal danışmanlık hizmetlerinin sunulması ve başvuru süreçlerinin yönetilmesi amacıyla kullanılır.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li>Kimlik ve iletişim bilgilerinin doğrulanması</li>
              <li>Eğitim ve mesleki deneyim analizlerinin yapılması</li>
              <li>IND (Hollanda Göç ve Vatandaşlık Dairesi) kriterlerine uyumun denetlenmesi</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Eye className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-display">Verilerin Paylaşımı</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Verileriniz üçüncü taraflarla reklam amacıyla paylaşılmaz. Sadece yasal zorunluluk hallerinde veya başvurunuzun bir parçası olarak ilgili resmi kurumlarla (IND, Konsolosluk vb.) paylaşılabilir.
            </p>
          </section>

          <div className="p-6 bg-surface-container-highest rounded-2xl flex items-start gap-4">
            <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-sm text-on-surface-variant italic">
              Bu metin bilgilendirme amaçlıdır. Detaylı sorularınız için info@nl-mavikart.com adresinden veri koruma sorumlumuza ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
