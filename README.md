# Hollanda'da Yeni Bir Hayat - Cloudflare Pages Dağıtım Rehberi

Bu proje **Vite + React** kullanılarak geliştirilmiştir. Cloudflare Pages üzerinde yayınlamak için aşağıdaki adımları izleyin:

## 1. Cloudflare Pages Ayarları
Projenizi Cloudflare Pages'e bağladığınızda eğer sistem otomatik tanımıyorsa şu ayarları manuel girin:

- **Framework Preset:** `None`
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Root Directory:** `/`

## 2. Ortam Değişkenleri (Environment Variables)
Eğer yapay zeka özelliklerini kullanıyorsanız, Cloudflare dashboard'unda şu değişkeni tanımlayın:
- `GEMINI_API_KEY`: Sizin Gemini API anahtarınız.

## 3. Yönlendirmeler (Redirects)
Sitedeki sayfaların (örn: /hizmetler) yenileme yapıldığında 404 vermemesi için `public/_redirects` dosyası projeye dahil edilmiştir. Cloudflare bunu otomatik olarak algılayacaktır.
