import Image from "next/image";
import LogoTicker from "@/components/LogoTicker";
import productImage from "@/public/product-picture.png";
import pyramidShape from "@/public/shapes/pyramid.png";
import tubeShape from "@/public/shapes/tube.png";

const ProductShowcase = () => {
    return (
        <>
            <LogoTicker />

            <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-20 overflow-x-clip">
                <div className="container">
                    <div className="max-w-[540px] mx-auto">
                        <div className="flex items-center justify-center">
                            <span className="tag">Boost your productivity</span>
                        </div>
                        <h2 className="title text-center text-3xl md:text-5xl">A more effective way to track progress</h2>
                        <p className="description text-center">
                            Effortlessly turn your ideas into a fully functional,
                            responsive, SaaS website in just minutes with this template.
                        </p>
                    </div>
                    <div className="relative">
                        <Image src={productImage} alt="Product Image" className="mt-10"/>
                        <Image src={pyramidShape} alt="Pyramid Shape" width={262} height={262} className="hidden md:block absolute -right-36 -top-32" />
                        <Image src={tubeShape} alt="Tube Shape" width={262} height={262} className="hidden md:block absolute -left-36 -bottom-32" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductShowcase
