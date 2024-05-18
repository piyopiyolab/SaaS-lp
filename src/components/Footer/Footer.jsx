import Newsletter from "../Newsletter/Newsletter"


function Footer() {
    return (
        <footer className="border-t-2 border-c-darkLight">

            <p
                className="font-semibold text-lg mt-8 text-center">Wallet</p>
            <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between ">

                <ul className="flex flex-col items-center lg:justify-evenly lg:flex-row gap-2 max-w-[49%] mx-auto lg:mx-0">
                    <li>Wallet &#xA9; 2024</li>
                    <li><a href="">Privacy Policy  </a></li>
                    <li><a href="">Cookie Policy  </a></li>
                    <li><a href="">Term of use  </a></li></ul>
                <Newsletter />
            </div>




        </footer>
    )
}
export default Footer