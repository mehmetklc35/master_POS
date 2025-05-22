# MasterPOS - Frontend DevCase (Işıksoft)

Bu proje, Işıksoft tarafından verilen [Figma tasarımı](https://www.figma.com/design/XBshWUH0Phi1eAnIdbkfVc/I%C5%9F%C4%B1ksoft-Frontend-Dev-Case-v1?node-id=5-1000&t=TAfgMmv0Cjip1GBC-1) referans alınarak hazırlanmıştır.  
Amaç, component tabanlı yapı ile canlı veriler kullanılarak profesyonel bir ürün yönetim arayüzü oluşturmaktır.

# Kullanılan Teknolojiler

- Next.js 14+ (App Router)**
- React 18**
- TypeScript**
- Tailwind CSS**
- Lucide React (ikon kütüphanesi)
- Responsive destek (mobil, tablet ve masaüstü)

# API Bilgisi

Uygulama, ürün listesini aşağıdaki endpoint'ten çekmektedir:

```
https://devcase.isiksoftyazilim.com/api/products?page=1`

# Projeyi Çalıştırmak

1. Bu repoyu klonlayın:
```bash
git clone https://github.com/mehmetklc35/master_POS.git
cd master-pos
```

2. Gerekli bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıdan erişin:
[http://localhost:3000](http://localhost:3000)


# Proje Yapısı

src/
│
├── app/                # App Router sayfaları (layout.tsx, page.tsx)
├── components/         # Reusable bileşenler
│   ├── layout/         # Header, Sidebar
│   ├── dashboard/      # DashboardStats
│   ├── product/        # ProductTable
│   └── common/         # Pagination, TableHeader, ThemeToggle
│
├── constants/          # Sabit metinler, menü listesi
├── services/           # API çağrıları (productService.ts)
├── styles/             # Global CSS 
└── types/              # Tip tanımlamaları (Product vs.)


# Geliştirme Notları

- Proje, **Figma’ya piksel birebir uyumlu** şekilde tasarlandı.
- API’de `status` alanı olmadığı için her ürün verisine `fake status` (active, pending, completed, canceled)eklendi.
- Dashboard kısmında `status` sayısına göre widget'lar dinamik hesaplanmaktadır.
- Responsive yapıda `Sidebar` daraltılabilir, `Header` mobilde hamburger menüye dönüşür.
- TailwindCSS ile her breakpoint (`sm`, `md`, `lg`) göz önünde bulunduruldu.

# Geliştirme Süreci

- Figma tasarımı detaylı analiz edildi
- Tüm sayfa component-based yapıda oluşturuldu
- Mobil ve tablet görünümler manuel test edildi
- Kodlar DRY prensibine göre modülerleştirildi

# Geliştirici

** Mehmet KILIÇ

📧 mehmetkilic35@outlook.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mehmet-k%C4%B1l%C4%B1%C3%A7-5101292ab/)  
🔗 [GitHub](https://github.com/mehmetklc35)


Teslim Tarihi: 22 May 2025

