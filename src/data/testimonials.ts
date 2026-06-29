export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  vehicle: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmet Y.",
    rating: 5,
    comment:
      "Araç tertemiz ve bakımlıydı. Teslim süreci çok hızlı oldu. Kesinlikle tekrar tercih edeceğim.",
    vehicle: "Fiat Egea",
  },
  {
    id: 2,
    name: "Elif K.",
    rating: 5,
    comment:
      "Havalimanından araç teslimi çok pratik oldu. Fiyatlar da gayet uygundu. Teşekkürler!",
    vehicle: "Renault Clio",
  },
  {
    id: 3,
    name: "Mehmet S.",
    rating: 5,
    comment:
      "Uzun dönem kiralama yaptık, çok memnun kaldık. Araç sorunsuz çalıştı, ekip her zaman ilgiliydi.",
    vehicle: "Toyota Corolla",
  },
  {
    id: 4,
    name: "Zeynep A.",
    rating: 5,
    comment:
      "Aile tatilimiz için SUV kiraladık. Araç çok konforlu ve güvenliydi. Çocuklara koltuğu da temin ettiler.",
    vehicle: "Dacia Duster",
  },
  {
    id: 5,
    name: "Can D.",
    rating: 5,
    comment:
      "İş seyahatim için Passat kiraladım. Premium hizmet, kusursuz araç. İş ortaklarım da çok beğendi.",
    vehicle: "Volkswagen Passat",
  },
  {
    id: 6,
    name: "Ayşe T.",
    rating: 5,
    comment:
      "Daha önce farklı firmalarla çalıştım ama bu kadar ilgili ve profesyonel bir ekiple karşılaşmadım.",
    vehicle: "Peugeot 2008",
  },
];
