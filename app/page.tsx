import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Vision } from "@/components/site/vision";
import { Pillars } from "@/components/site/pillars";
import { Community } from "@/components/site/community";
import { ElPescadero } from "@/components/site/el-pescadero";
import { GetInvolved } from "@/components/site/get-involved";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <Pillars />
      <Community />
      <ElPescadero />
      <GetInvolved />
      <Newsletter />
      <Footer />
    </main>
  );
}
