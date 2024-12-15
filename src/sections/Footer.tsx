
import Image from "next/image";

const footerLinks = [
    { href: "https://contevolve.com/contact/", label: "Contact" },
    { href: "https://contevolve.com/privacy-policy/", label: "Privacy Policy" },
    
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div className="flex justify-center">
                        <Image src={"https://contevolve.com/wp-content/uploads/2023/03/logo-2.svg"}
                                    alt="layers logo"
                                    width={250}
                                    height={250}
                                    className="h-9 md:h-auto w-auto" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
