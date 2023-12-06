import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import div1 from "../../public/images/hero.png"

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <div className="bg-black text-white">
        <Navigation />
        <div className="p-4 text-center">
        <p className='text-5xl mb-5 animate-pulse text-red-200'>Welcome to Bizlink</p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-5 text-center">
            <div className="md:order-2">
              <p className='text-2xl mb-5'>Where small business dreams meet their perfect match</p>
              <p className='text-2xl '>Whether you're a passionate entrepreneur looking to sell your thriving business or a savvy investor seeking the next big opportunity, BizLink is the bridge that brings your goals to reality.</p>
            </div>
            <div className="md:order-1 w-full md:w-1/2 flex justify-center items-center">
              <Image src={div1} alt="description of image" className=" object-cover" />
            </div>
          </div>
          <div className="text-center mt-5">
            <h2 className='text-5xl animate-pulse text-red-200'>Key Benefits:</h2>
            <ul className="">
              <li className="mb-3 text-2xl"> Effortlessly list your business and connect with qualified buyers in just a few clicks.</li>
              <li className="mb-3 text-2xl">Seamlessly communicate with sellers or buyers through our secure messaging platform, facilitating transparent and efficient negotiations.</li>
              <li className="mb-3 text-2xl">Trust in the accuracy of information with our verification process, ensuring that each listing reflects the true potential of the business.</li>
            </ul>
          </div>
          <div className="text-center mt-5">
            <h2 className='text-5xl animate-pulse text-red-200'>Get Started Today:</h2>
            <p className="mb-3 text-2xl">Ready to embark on your business journey? </p>
            <p className="mb-3 text-2xl">Join BizLink now and take the first step towards a successful business transaction</p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md">List your business</button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}