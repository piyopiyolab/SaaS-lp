import { constants } from "../../constants/constants";
import { motion } from "framer-motion";

function Reassurance() {
    const listVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.5,
                ease: 'linear',
            },
        },
    };

    const itemVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'linear',
            },
        },
    };

    return (
        <section className="sm:flex sm:flex-wrap sm:justify-center sm:items-center">
            <motion.div
                variants={listVariants}
                initial="initial"
                animate="animate"
                className="sm:flex sm:flex-wrap sm:justify-center sm:items-center"
            >
                {constants.icons.map(n => (
                    <motion.article
                        key={n.name}
                        variants={itemVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center my-12 sm:basis-1/3"
                    >
                        <img
                            loading="lazy"
                            className="block mx-auto"
                            src={n.src}
                            alt={n.alt}
                        />
                        <h2 className="my-4">{n.title}</h2>
                        <p className="w-64 text-c-secondary mx-auto text-balance">
                            {n.description}
                        </p>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}

export default Reassurance;
