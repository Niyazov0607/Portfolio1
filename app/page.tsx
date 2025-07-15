import About from "@/modules/About/About";
import { Contact } from "@/modules/Contact/Contact";
import Hero from "@/modules/Hero/Hero";
import { Work } from "@/modules/Work/Work";

const page = () => {
    return (
        <div>
            <Hero />
            <About />
            <Work />
            <Contact />
        </div>
    );
};

export default page;
