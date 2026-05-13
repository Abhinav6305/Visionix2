import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <section id="products">
                <ProductsSection/>
            </section>
            <section id="services">
                <ServicesSection/>
            </section>
            <section id="team">
                <TeamSection/>
            </section>
            <section id="contact">
                <ContactSection/>
            </section>
        </>
    )
}
