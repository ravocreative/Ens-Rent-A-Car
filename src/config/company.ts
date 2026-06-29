const primaryPhone = {
  raw: "+905372578556",
  display: "0537 257 85 56",
};

const secondaryPhone = {
  raw: "+905436178125",
  display: "0543 617 81 25",
};

const whatsapp = {
  raw: "905372578556",
  display: "0537 257 85 56",
};

const address = {
  street: "Atalay Erdoğan Caddesi No:5",
  neighborhood: "Pınarbaşı",
  district: "İslahiye",
  city: "Gaziantep",
  postalCode: "27800",
  country: "Türkiye",
  fullAddress:
    "Pınarbaşı, Atalay Erdoğan Cd. No:5, 27800 İslahiye/Gaziantep",
};

const workingHours = {
  weekdays: "08:00 – 22:00",
  saturday: "08:00 – 22:00",
  sunday: "08:00 – 22:00",
  summary: "Her gün 08:00 – 22:00",
};

const map = {
  searchQuery:
    "Pınarbaşı Atalay Erdoğan Caddesi No 5 İslahiye Gaziantep",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=P%C4%B1narba%C5%9F%C4%B1%2C+Atalay+Erdo%C4%9Fan+Cd.+No%3A5%2C+27800+%C4%B0slahiye%2FGaziantep",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=P%C4%B1narba%C5%9F%C4%B1%2C+Atalay+Erdo%C4%9Fan+Cd.+No%3A5%2C+27800+%C4%B0slahiye%2FGaziantep",
  embedUrl:
    "https://www.google.com/maps?q=P%C4%B1narba%C5%9F%C4%B1%2C%20Atalay%20Erdo%C4%9Fan%20Cd.%20No%3A5%2C%2027800%20%C4%B0slahiye%2FGaziantep&output=embed",
};

export const companyInfo = {
  name: "İslahiye Rent a Car",
  shortName: "İslahiye Rent a Car",
  legalName: "İslahiye Rent a Car",
  authorizedPerson: "Recep Taş",

  primaryPhone,
  secondaryPhone,
  whatsapp,
  email: "info@islahiyerentacar.com",
  address,
  workingHours,
  map,

  socialMedia: {
    instagram: "",
    facebook: "",
  },

  // Backward-compatible flat fields (used by legacy components)
  phone: primaryPhone.raw,
  displayPhone: primaryPhone.display,
  city: address.city,
  social: {
    instagram: "",
    facebook: "",
    whatsappUrl: `https://wa.me/${whatsapp.raw}`,
  },

  stats: {
    experience: "Yerel",
    vehicles: "13+",
    customers: "Mutlu",
    support: "Hızlı",
  },

  aboutText:
    "İslahiye’de günlük, haftalık ve uzun dönem araç kiralama hizmeti sunuyoruz. Bakımlı araç filomuz ve müşteri odaklı yaklaşımımızla yolculuğunuzu güvenle planlayın.",
  aboutLong:
    "İslahiye ve çevresinde araç kiralama ihtiyaçlarınız için bireysel ve kurumsal müşterilerimize hizmet veriyoruz. Düzenli bakımdan geçirilmiş araç filomuz, şeffaf fiyatlandırma politikamız ve Recep Taş ile doğrudan iletişim imkanı sunan yapımızla İslahiye’de güvenilir bir tercih olmayı hedefliyoruz. Günlük, haftalık ve uzun dönem kiralama seçeneklerimizle ekonomik, otomatik, manuel, aile ve ticari araç ihtiyaçlarınıza çözüm üretiyoruz.",
};

// Helper: backward-compatible flat address string accessor
// companyInfo.address.fullAddress will keep working, but for legacy code that
// expected `companyInfo.address` to be a string, prefer .fullAddress now.

export function getPhoneUrl(secondary = false): string {
  return `tel:${secondary ? secondaryPhone.raw : primaryPhone.raw}`;
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${whatsapp.raw}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export const whatsappMessages = {
  general:
    "Merhaba Recep Bey, araç kiralama hizmetiniz hakkında bilgi almak istiyorum.",
  vehicle: (vehicleName: string) =>
    `Merhaba Recep Bey, ${vehicleName} aracı hakkında müsaitlik ve güncel fiyat bilgisi almak istiyorum.`,
  vehicleWithDetails: (
    vehicleName: string,
    pickupLocation?: string,
    pickupDate?: string,
    returnDate?: string
  ) => {
    let msg = `Merhaba Recep Bey, ${vehicleName} aracı hakkında bilgi almak istiyorum.`;
    if (pickupLocation || pickupDate || returnDate) {
      msg += "\n\n";
      if (pickupLocation) msg += `Alış lokasyonu: ${pickupLocation}\n`;
      if (pickupDate) msg += `Alış tarihi: ${pickupDate}\n`;
      if (returnDate) msg += `Dönüş tarihi: ${returnDate}\n`;
      msg += "\nGüncel fiyat ve müsaitlik bilgisi paylaşabilir misiniz?";
    }
    return msg;
  },
};
