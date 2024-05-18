import Button from "../Button/Button"
import contactImg from "/images/GIF.svg"
import { motion } from "framer-motion"
function Contact() {
    return (
        <section className="text-center lg:text-left flex flex-wrap justify-center lg:justify-between items-center">
            <article className="text-balance max-w-[23rem] lg:basis-1/2">
                <h3 className="text-2xl">Questions ?<span className="block">Let's talk</span></h3>
                <p className="text-c-secondary my-10 ">Contact us through our 24/7 live chat. We’re always happy to help!</p>
                <Button text='Get started' className={"c-btn c-btn-primary"} />
            </article>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <img loading="lazy" className=" mt-8 lg:mt-0 lg:basis-1/2" src={contactImg} alt="Contact" />
            </motion.div>
        </section>
    )
}
export default Contact