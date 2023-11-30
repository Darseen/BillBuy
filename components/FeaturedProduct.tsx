import Image from "next/image";
import heroImage from "@/assets/images/products/tech/heroImage.jpg";
import CountdownTimer from "./CountdownTimer";

export default function FeaturedProduct() {
  return (
    <div className="hero mb-4 rounded-lg bg-white shadow-xl dark:bg-neutral">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={heroImage}
          alt="featured product"
          className="max-w-xs rounded-lg shadow-2xl sm:max-w-md"
        />
        <div className="flex flex-col items-center justify-center sm:items-start">
          <div className="flex flex-wrap items-center justify-center sm:justify-start">
            <h1 className="mr-4 whitespace-nowrap text-3xl font-bold sm:text-4xl">
              Limited Time Offer!
            </h1>
            <CountdownTimer />
          </div>
          <div className="mt-3 rounded-xl bg-black/90 px-4 py-2">
            <span className="mr-2 text-gray-500 line-through">$1199</span>
            <span className="text-xl font-bold text-green-600">$999</span>
          </div>
          <p className="py-6">
            {` Save $199 on the Samsung Chromebook 4 Plus. It's a great laptop for
            students and anyone else who wants a basic laptop. It features a
            15.6-inch (1920 x 1080) display, Intel Celeron N4000 dual-core CPU,
            4GB of RAM, and 64GB of microSD-expandable storage.`}
          </p>
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
}
