import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { companyInfo } from "@/config/company";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "KVKK Aydınlatma Metni",
  description: `${companyInfo.name} Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni. İslahiye araç kiralama hizmetimizde kişisel verilerinizin işlenmesi.`,
  path: "/kvkk",
});

export default function KVKKPage() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <Breadcrumb items={[{ label: "KVKK Aydınlatma Metni" }]} />

        <div className="mt-6 max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] md:text-4xl">
            KVKK Aydınlatma Metni
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--muted)]">
            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                1. Veri Sorumlusu
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
                uyarınca, kişisel verileriniz veri sorumlusu olarak{" "}
                {companyInfo.name} tarafından aşağıda açıklanan kapsamda
                işlenebilecektir.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                2. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p>Toplanan kişisel verileriniz;</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  Araç kiralama hizmetlerinin sunulması ve sözleşme
                  yükümlülüklerinin yerine getirilmesi
                </li>
                <li>Müşteri ilişkileri yönetimi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Hizmet kalitesinin artırılması</li>
                <li>
                  İletişim faaliyetlerinin yürütülmesi amaçlarıyla
                  işlenebilecektir.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                3. Kişisel Verilerin Aktarılması
              </h2>
              <p>
                Toplanan kişisel verileriniz, yukarıda belirtilen amaçlar
                doğrultusunda ve KVKK&apos;nın 8. ve 9. maddelerinde belirtilen
                şartlara uygun olarak, gerekli güvenlik önlemleri alınmak
                kaydıyla, iş ortaklarımıza, hizmet sağlayıcılarımıza ve yasal
                olarak yetkili kamu kurum ve kuruluşlarına aktarılabilecektir.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, web sitemiz, telefon görüşmeleri,
                e-posta yazışmaları ve fiziksel formlar aracılığıyla
                toplanmaktadır. Bu veriler, sözleşmenin kurulması ve ifası,
                hukuki yükümlülüklerin yerine getirilmesi ve meşru menfaat
                hukuki sebeplerine dayanılarak işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                5. Kişisel Veri Sahibinin Hakları
              </h2>
              <p>KVKK&apos;nın 11. maddesi uyarınca haklarınız:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>
                  Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
                </li>
                <li>
                  İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını
                  öğrenme
                </li>
                <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                <li>
                  KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde
                  silinmesini veya yok edilmesini isteme
                </li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>
                  Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde
                  zararın giderilmesini talep etme
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-heading text-lg font-bold text-[var(--text)]">
                6. İletişim
              </h2>
              <p>
                KVKK kapsamındaki taleplerinizi{" "}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-[var(--primary)] underline"
                >
                  {companyInfo.email}
                </a>{" "}
                adresine yazılı olarak iletebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
