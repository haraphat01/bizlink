import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="bg-black text-white">
        <Navigation />
        <div className="p-4">
          <p>Welcome to BizLink, where small business dreams meet their perfect match. Whether you're a passionate entrepreneur looking to sell your thriving business or a savvy investor seeking the next big opportunity, BizLink is the bridge that brings your goals to reality.</p>
          <div className="my-4">
            <h2>Key Benefits:</h2>
            <ul>
              <li>
                Simplify the Selling Process: Effortlessly list your business and connect with qualified buyers in just a few clicks.
              </li>
              <li>Direct Communication: Seamlessly communicate with sellers or buyers through our secure messaging platform, facilitating transparent and efficient negotiations.</li>
              <li>Verified Listings: Trust in the accuracy of information with our verification process, ensuring that each listing reflects the true potential of the business.</li>
            </ul>
          </div>

          <div className="my-4">
            <h2>Get Started Today:</h2>
            <p>Ready to embark on your business journey? Join BizLink now and take the first step towards a successful business transaction.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">List your business</button>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}