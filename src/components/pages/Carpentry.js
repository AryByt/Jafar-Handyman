import React from 'react';

export default function Carpentry() {
  return (
    <div className="bg-white">
      <div className="pr-2 pt-2">
        <h1 className="bg-red-800 text-white text-lg animate-bounce font-black hover:underline font-mono">
          CARPENTRY SERVICES
          <p className="text-base animate-pulse">Build, Construct, Install & More</p>
        </h1>
        <p className="text-black leading-loose text-center font-black font-mono">
          With an average of 10 years' experience, our home improvement professionals are skilled
          carpenters and furniture builders. We install and build fireplace mantels, cabinets,
          bookcases, wooden countertops and more.
        </p>
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding Installation & Repair
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Installing crown molding properly is important for adding both value and style to your
            home. From colonial to modern and more, our insured handymen professionally handle this
            detail-oriented, transformative carpentry job.
          </p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding Installation & Repair
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Installing crown molding properly is important for adding both value and style to your
            home. From colonial to modern and more, our insured handymen professionally handle this
            detail-oriented, transformative carpentry job.
          </p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Custom Shelving & Bookcases
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            We assemble store-bought shelving units and also build shelves and bookcases from
            scratch to meet specifications that IKEA™, Wayfair or Home Depot can’t meet, whether it
            means uncommon dimensions, spacing between shelves, special doors or special type of
            wood or design elements.
          </p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Custom Cabinets & Mantels
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Our home improvement professionals are experienced at building custom cabinets and
            mantels for any room, to the dimensions and in the style that you need. If you need more
            storage space, talk to your local Mr. Handyman about installing a custom set of
            attractive cabinets built especially for your home.
          </p>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src="" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src="" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src="" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
