import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Vision } from "@/components/site/vision";
import { Pillars } from "@/components/site/pillars";
import { DonationPhotoCards } from "@/components/site/donation-photo-cards";
import { Videos } from "@/components/site/videos";
import { GetInvolved } from "@/components/site/get-involved";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { DonateDialog } from "@/components/site/donate-dialog";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <Pillars />
      {/* <DonationPhotoCards /> */}
      <Videos />
      <GetInvolved />
      <Newsletter />
      <Footer />
      <DonateDialog />
    </main>
  );
}
