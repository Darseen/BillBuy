import Image from "next/image";
import heroImage from "@/public/images/products/tech/heroImage.jpg";
import CountdownTimer from "./CountdownTimer";

export default function FeaturedProduct() {
  return (
    <div className="hero rounded-lg shadow-xl bg-white dark:bg-neutral mb-4">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={heroImage}
          alt="featured product"
          className="max-w-xs sm:max-w-md rounded-lg shadow-2xl"
        />
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="flex items-center justify-center sm:justify-start flex-wrap">
            <h1 className="text-3xl sm:text-4xl font-bold whitespace-nowrap mr-4">
              Limited Time Offer!
            </h1>
            <CountdownTimer />
          </div>
          <div className="mt-3 bg-black/90 rounded-xl px-4 py-2">
            <span className="text-gray-500 line-through mr-2">$1199</span>
            <span className="text-green-600 text-xl font-bold">$999</span>
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
