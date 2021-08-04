import React from 'react';
import painting from '../../assets/images/paintingafter.png';
import paintingbefore from '../../assets/images/paintingbefore.png';
export default function Painting() {
  return (
    <div className="bg-white">
      <div className="pr-2 pt-2">
        <h1 className="bg-red-800 text-white text-lg animate-bounce font-black hover:underline font-mono">
          PAINTING SERVICES
          <p className="text-base animate-pulse">Paint, Stain, Spray & More</p>
        </h1>
        <p className="text-black leading-loose text-center font-black font-mono">
          A fresh coat of paint can breathe life into any room, exterior or piece of furniture.
          Whether you have an indoor or outdoor paint job, our experienced team of home improvement
          professionals can help. We know what makes a great paint job. And it's our mission to
          deliver the level of detail and professionalism that you expect and deserve.
        </p>
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding & Trim Painting
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Crown molding adds an elegant touch to any room. Whether you’re repainting the entire
            room or just updating the trim, you’ll find that painting the crown molding can be a
            challenge. Your local Mr. Handyman is equipped with the tools and the skills needed to
            refresh your crown molding. You can depend on our worry-free guarantee!
          </p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Deck Staining, Painting & Finishing
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Our professional home repair contractors can stain decks and walkways to protect them
            from the wear and tear of the weather. Staining and painting is just one of the
            deck-related projects your local Mr. Handyman can handle. Check out our deck & patio
            services for more information.kkkkkkkkk
          </p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Door Painting</h1>
          <p className="text-black leading-loose text-center font-mono">
            Removing your doors and painting each one by hand takes a lot of time. Your local Mr.
            Handyman has the tools and skills to apply a quality paint job at a fraction of the
            time. Whether you want just your front door painted or all of your doors, no job is
            either too big or too small. Need help installing or repairing a door? We can help with
            that, too.
          </p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Door Painting</h1>
          <p className="text-black leading-loose text-center font-mono">
            Removing your doors and painting each one by hand takes a lot of time. Your local Mr.
            Handyman has the tools and skills to apply a quality paint job at a fraction of the
            time. Whether you want just your front door painted or all of your doors, no job is
            either too big or too small. Need help installing or repairing a door? We can help with
            that, too.
          </p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Furniture Painting & Staining
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Whether you want to add a splash of color to your kitchen chairs or need help staining a
            second-hand table, your local Mr. Handyman can help. Our experienced home improvement
            specialists have all of the skills and experience required to sand, strip, stain and
            paint your latest furniture project.
          </p>
        </div>
        <div className="pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Furniture Painting & Staining
          </h1>
          <p className="text-black leading-loose text-center font-mono">
            Whether you want to add a splash of color to your kitchen chairs or need help staining a
            second-hand table, your local Mr. Handyman can help. Our experienced home improvement
            specialists have all of the skills and experience required to sand, strip, stain and
            paint your latest furniture project.
          </p>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={painting} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={paintingbefore} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={paintingbefore} />
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
