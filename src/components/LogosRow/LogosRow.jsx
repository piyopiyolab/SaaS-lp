import { constants } from '../../constants/constants'
import Logo from '../Logo/Logo'

function LogosRow() {



    return (
        <section className='my-16 border-t-2 border-b-2 py-8 border-c-darkLight flex flex-wrap gap-6'>

            {/* LOGO 1 */}
            <div className="w-[16rem] h-[4rem] overflow-hidden inline-block">
                <Logo key={constants.logosData[0].name} name={constants.logosData[0].name} position={constants.logosData[0].position} />
            </div>

            {/* LOGO 2 */}
            <div className="
                w-[4rem] h-[4rem] overflow-hidden inline-block">
                <Logo key={constants.logosData[1].name} name={constants.logosData[1].name} position={constants.logosData[1].position} />
            </div>
        </section>


        // <section>
        //     <div id="LOGO ROW" className="flex justify-center my-16 border-t-2 border-b-2 py-8 border-c-darkLight">

        //         <Logo key={constants.logosData[0].name} name={constants.logosData[0].name} position={constants.logosData[0].position} />

        //     </div>
        // </section>
    )
}
export default LogosRow