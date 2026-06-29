import { Clock, Calendar, CalendarRange, Building2, Plane, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const services: Service[] = [
  {
    id: "gunluk",
    title: "Günlük Araç Kiralama",
    description:
      "Kısa süreli ihtiyaçlarınız için günlük araç kiralama hizmeti. Geniş araç filomuzdan size uygun aracı seçin.",
    icon: Clock,
    href: "/gunluk-arac-kiralama",
  },
  {
    id: "haftalik",
    title: "Haftalık Araç Kiralama",
    description:
      "Haftalık kiralama seçenekleriyle daha avantajlı fiyatlardan yararlanın. İş veya tatil seyahatleriniz için ideal.",
    icon: Calendar,
    href: "/hizmetlerimiz",
  },
  {
    id: "aylik",
    title: "Aylık Araç Kiralama",
    description:
      "Aylık kiralama paketlerimizle uzun süreli ihtiyaçlarınızı karşılayın. Özel fiyat avantajlarından faydalanın.",
    icon: CalendarRange,
    href: "/hizmetlerimiz",
  },
  {
    id: "uzun-donem",
    title: "Uzun Dönem Araç Kiralama",
    description:
      "3 ay ve üzeri kiralama dönemleri için özel fiyatlar ve esnek koşullar sunuyoruz.",
    icon: Building2,
    href: "/uzun-donem-arac-kiralama",
  },
  {
    id: "havalimani",
    title: "Havalimanı Teslimat",
    description:
      "Havalimanında araç teslim ve iade hizmeti. Uçağınızdan iner inmez aracınız hazır.",
    icon: Plane,
    href: "/hizmetlerimiz",
  },
  {
    id: "kurumsal",
    title: "Kurumsal Araç Kiralama",
    description:
      "Şirketlere özel filo kiralama çözümleri. Kurumsal anlaşmalar ve toplu kiralama avantajları.",
    icon: Briefcase,
    href: "/hizmetlerimiz",
  },
];
