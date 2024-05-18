import appBanner from "/images/app-screenshot2.svg"
import { motion } from "framer-motion"


function Banner() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img loading="lazy" className='bg-c-accent-2 rounded-xl' src={appBanner} alt="Application preview screenshot" />
            </motion.div>
        </section >
    )
}
export default Banner