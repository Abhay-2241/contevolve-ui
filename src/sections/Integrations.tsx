import Tag from "@/components/Tag";
import devops from "@/assets/images/cloud.webp"
import aiml from "@/assets/images/ai-ml.webp"
import security from "@/assets/images/security.webp"
import datasc from "@/assets/images/datascience.webp"
import software from "@/assets/images/sde.webp"
import personalser from "@/assets/images/ps.webp"

import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "AI-ML",
        icon: aiml,
        description: "We specialize in providing state-of-the-art AI/ML-based solutions.",
    },
    {
        name: "DevOps",
        icon: devops,
        description: "Fast-track DevOps for Continuous Delivery.",
    },
    {
        name: "IT-Security",
        icon: security,
        description: "Innovative cyber solutions for hack-free security",
    },
    {
        name: "Software Development",
        icon: software,
        description: "Your software development partner for exponential growth",
    },
    {
        name: "Data-Science",
        icon: datasc,
        description: "We develop data science solutions that drive growth.",
    },
    {
        name: "Personal services",
        icon: personalser,
        description: "Software testing fueled with innovation",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div className="">
                        <Tag>Services</Tag>
                        <h2 className="text-6xl font-medium mt-6 ">
                            Services we{" "}
                            <span className="text-lime-400">Provide</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                        Contevolve is a global IT services provider, delivering business driven solutions that help Organisations thrive in today’s competitive market.
                        </p>
                    </div>
                    <div className="">
                        <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4  mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
