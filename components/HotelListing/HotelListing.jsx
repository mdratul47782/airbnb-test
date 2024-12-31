import Link from "next/link";
import React from "react";
import { getAllHotels } from "@/data/queries";
import Image from "next/image";
async function HotelListing() {
  const allHotels = await getAllHotels();
  return (
    <>
      {/* Hotel Listing Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allHotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/Details/${hotel.hotelId}`}
              className="block group"
            >
              <div>
                <div className="relative">
                  <Image
                    src={hotel.images[0]}
                    alt={hotel.name}
                    width={800} // Adjust as per your requirement
                    height={400} // Adjust as per your requirement
                    className="rounded-xl group-hover:scale-105 transition-transform"
                    style={{ objectFit: "cover" }}
                    priority // Optional: To prioritize loading of important images
                  />
                  <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
                    <i className="ph-bed inline-block mr-1"></i>
                    {hotel.available_rooms} Rooms Left
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{hotel.name}</h3>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-zinc-600">4.9</span>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm mt-1">{hotel.location}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold">
                        ${hotel.price_per_night}
                      </span>
                      <span className="text-zinc-500 text-sm"> per night</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="block py-2 px-3 ml-0 leading-tight text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <span className="sr-only">Previous</span>
                <i className="fas fa-chevron-left"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <span className="sr-only">Next</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HotelListing;
