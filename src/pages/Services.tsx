import { CreditCard, FileText, UserCheck, MapPin, Building2, Calculator, Users, HandCoins, Languages, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'BSN, DigiD ve Banka Hesabı', icon: <CreditCard />, desc: 'Hollanda\'da finansal ve yasal kimliğinizin temellerini atıyoruz.' },
  { id: 2, title: 'Vize Başvurusu', icon: <FileText />, desc: 'Gerekli vize türüne (Mavi Kart, MVV vb.) göre kusursuz dosya hazırlığı.' },
  { id: 3, title: 'Oturum İşlemleri', icon: <UserCheck />, desc: 'Oturum kartı başvurusu ve takibi konusunda uzman danışmanlık.' },
  { id: 4, title: 'Adres Kaydı', icon: <MapPin />, desc: 'Belediyede adres kaydı (BRP) süreçlerinin yönetilmesi.' },
  { id: 5, title: 'Şirket Kurulumu', icon: <Building2 />, desc: 'BV, ZZP (şahıs şirketi) kurulumu ve ticari sicil kaydı.' },
  { id: 6, title: 'Vergi ve Muhasebe', icon: <Calculator />, desc: 'Vergi mükellefiyeti, yıllık beyannameler ve muhasebe desteği.' },
  { id: 7, title: 'Aile Birleşimi', icon: <Users />, desc: 'Ailenizin de sizinle birlikte Hollanda\'da yaşaması için gerekli süreçler.' },
  { id: 8, title: 'Devlet Destekleri', icon: <HandCoins />, desc: 'Çocuk parası (Kinderbijslag), kira yardımı ve diğer sosyal hak başvuruları.' },
  { id: 9, title: 'Tercüme İşlemleri', icon: <Languages />, desc: 'Resmi belgelerin yeminli tercüme ve apostil işlemlerinin takibi.' },
  { id: 10, title: 'Özel Sorular', icon: <HelpCircle />, desc: 'Diğer tüm sorularınız ve özel durumlarınız için bize ulaşın.' },
];

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h1 className="font-display text-5xl font-extrabold text-primary">Hollanda'da Yeni Bir Hayat</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Hollanda'ya yerleşim sürecinizdeki tüm ihtiyaçlarınız için kapsamlı çözüm ortağınız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-highest text-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{service.id}. {service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[2.5rem] bg-surface-container-highest text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-display text-4xl font-extrabold text-primary">Sürecinizi Hemen Başlatalım</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
              Hollanda'daki yeni yaşamınız için gerekli olan tüm adımları tek elden yönetiyoruz. Uzman ekibimizle profesyonel destek almak için formu doldurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/uygunluk-testi" className="px-10 py-5 bg-primary-container text-white font-bold rounded-xl shadow-xl hover:bg-primary transition-all active:scale-95">
                Uygunluk Testini Çöz
              </Link>
              <Link to="/basvuru" className="px-10 py-5 border-2 border-primary-container text-primary-container font-bold rounded-xl hover:bg-primary-container hover:text-white transition-all active:scale-95">
                Başvuru Formuna Git
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </motion.div>
  );
}
