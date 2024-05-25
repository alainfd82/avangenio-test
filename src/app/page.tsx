import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { stats } from "./consts";

export default function Home() {
  return (
    <main className='flex flex-col space-y-16 my-12'>
      {/* CTA Section */}
      <section className='bg-white flex justify-center'>
        <div className='px-6 sm:px-6 lg:px-8 max-w-xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl sm:leading-[3.5rem]'>
              Meet Oppo <sup>&#8471;</sup>
              <br />
              Ignite A Fresh Wave Of Innovative Tech
            </h2>
            <p className='mx-auto mt-6 sm:text-lg max-w-64 sm:max-w-full leading-5 text-sm  text-gray-600'>
              Our Distintion Lies In The Final Product&apos;s Polishing
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className='bg-white flex justify-center'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto text-center'>
            <div className='flex flex-col sm:flex-row sm:space-x-2 space-x-0 space-y-2 sm:space-y-0 items-center h-full w-full'>
              {["meet.webp", "worker.webp"].map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className='relative group block overflow-hidden rounded-lg'>
                  <Image
                    width={3600}
                    height={2400}
                    src={`/images/${image}`}
                    alt=''
                    className='object-cover pointer-events-none group-hover:opacity-85'
                  />
                  {imageIndex === 0 && (
                    <>
                      <button
                        type='button'
                        className='absolute top-4 left-4 focus:outline-none backdrop-blur-sm bg-white/25 rounded-full p-2'>
                        <Square3Stack3DIcon className='h-4 w-4 text-black' />
                      </button>
                      <button
                        type='button'
                        className='flex space-x-2 text-xs absolute text-white font-semibold bottom-4 right-4 backdrop-blur-sm bg-white/25 px-4 py-1 rounded-full'>
                        <img
                          className='h-4 w-4'
                          src='https://tailwindui.com/img/logos/mark.svg?color=white'
                          alt=''
                        />
                        <span>Tropical Environment Cause</span>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-white flex justify-center h-fit'>
        <div className='px-6 lg:px-8 w-full'>
          <div className='m-auto '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-black'>
              <span className='flex text-5xl text-black h-auto text-left w-full'>
                Our Technology
              </span>
              <div className='flex flex-col space-y-6'>
                <p className='text-base text-gray-600'>
                  From Our Leading-Edge Offerings In Enterprise Hybrid Cloud
                  Infraestructure To Cutting-Edge Advancements In Ai Technology
                </p>
                <div className='flex flex-col space-y-2 text-blue-500 font-semibold text-right md:text-left'>
                  <a href='#'>View All Products</a>
                  <a href='#'>Meet Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='bg-white flex justify-center h-fit'>
        <div className='w-full'>
          <div className='m-auto'>
            <dl className='grid grid-cols-2 gap-x-16 gap-y-16 text-center md:grid-cols-4 w-auto'>
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className='place-items-center flex max-w-md flex-col space-y-2 justify-between'>
                  <dt className='text-sm leading-6 text-gray-600'>
                    {stat.name}
                  </dt>
                  <dd className='order-first tracking-tight text-gray-900 text-5xl'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
