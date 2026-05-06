import { Landmark, Mail, PhoneIncoming, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-3">
              <Landmark className="text-white w-8 h-8" />
              <span className="font-display text-2xl font-bold text-white">NL-MaviKart</span>
            </div>
            <p className="text-on-primary/70 leading-relaxed">
              Hollanda'da Yeni Bir Hayat: Vize, Oturum, BSN, Şirket Kurulumu ve Entegrasyon süreçlerinde uzman danışmanlık. 
              2026 regülasyonları ve IND yönergeleri ile tam uyumlu süreç yönetimi.
            </p>
            <div className="flex gap-4">
              <Globe className="cursor-pointer hover:text-secondary-fixed transition-colors w-6 h-6" />
              <Mail className="cursor-pointer hover:text-secondary-fixed transition-colors w-6 h-6" />
              <PhoneIncoming className="cursor-pointer hover:text-secondary-fixed transition-colors w-6 h-6" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h5 className="font-display text-sm font-bold uppercase tracking-widest text-on-primary">Hizmetler</h5>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">Vize Süreçleri</a>
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">Gerekli Belgeler</a>
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">Maaş Hesaplama</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h5 className="font-display text-sm font-bold uppercase tracking-widest text-on-primary">Kurumsal</h5>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">İletişim</a>
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">Gizlilik Politikası</a>
                <a href="#" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">Kullanım Şartları</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-primary/60 text-center md:text-left">
            © 2024 NL-MaviKart | Hollanda Göçmenlik ve Vatandaşlık Dairesi (IND) ile Uyumlu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
