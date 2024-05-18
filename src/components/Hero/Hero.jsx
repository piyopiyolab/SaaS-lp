import Button from "../Button/Button";
import appImg from '/images/app-screenshot1.svg';
import { motion } from "framer-motion"

function Hero() {
    return (
        <section className="sm:flex items-center justify-between sm:gap-8">
            <div>
                <h1 className="text-3xl text-center sm:text-left">SaaS Landing Page Template</h1>
                <p className="text-c-secondary my-10 text-center sm:text-left">This is a template for a SaaS Landing Page using React and TailwindCSS</p>

                <Button
                    text='Get started'
                    className={'c-btn c-btn-primary mx-auto sm:mx-0 block'}
                />
            </div>



            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-c-darkLight rounded-xl mt-8"
            >
                <img loading="lazy" className="block mx-auto" src={appImg} alt="Application demo preview" />
            </motion.div>
        </section>
    );
}

export default Hero;
