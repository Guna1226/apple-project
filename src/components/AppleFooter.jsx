export default function AppleFooter() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 dark:bg-neutral-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-300 dark:border-gray-700">
        {/* Top Section: Legal and EMI Info */}
        <p className="mb-4">
          ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers... <span className="text-blue-600 hover:underline cursor-pointer">Read more</span>
        </p>
        <p className="mb-4">
          ‡Instant cashback is available with qualifying American Express, Axis Bank and ICICI Bank cards... <span className="text-blue-600 hover:underline cursor-pointer">Read more</span>
        </p>
        <p className="mb-4">
          *Apple Education Pricing is available to students, teachers, and staff. <span className="text-blue-600 hover:underline cursor-pointer">More info</span>
        </p>
        <p className="mb-4">
          1. Promotion savings valid on eligible Mac or iPad. <span className="text-blue-600 hover:underline cursor-pointer">Full terms</span>
        </p>
        <p className="mb-4">
          2. AirPods 4 and AirPods 4 with Active Noise Cancellation models available.
        </p>
        <p className="mb-4">
          Apple Intelligence requires iOS 18, iPadOS 18, or macOS Sequoia and is in beta. <span className="text-blue-600 hover:underline cursor-pointer">View supported devices</span>
        </p>
        <p className="mb-4">A subscription is required for Apple TV+.</p>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Shop and Learn</h3>
          <ul className="space-y-1">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Apple Wallet</h3>
          <ul className="space-y-1">
            <li>Wallet</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1">
            <li>Manage Your Apple Account</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Entertainment</h3>
          <ul className="space-y-1">
            <li>Apple One</li>
            <li>Apple TV+</li>
            <li>Apple Music</li>
            <li>Apple Arcade</li>
            <li>Apple Podcasts</li>
            <li>Apple Books</li>
            <li>App Store</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Apple Store</h3>
          <ul className="space-y-1">
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Group Reservations</li>
            <li>Apple Camp</li>
            <li>Apple Trade In</li>
            <li>Ways to Buy</li>
            <li>Recycling Programme</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 pb-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-start gap-4 border-t border-gray-300 dark:border-gray-700 pt-6">
        <div>
          <p>More ways to shop: <span className="text-blue-600 hover:underline cursor-pointer">Find an Apple Store</span> or call 000800 040 1966.</p>
        </div>
        <div className="space-x-4 flex flex-wrap text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Sales Policy</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-4 text-xs text-gray-400">
        <p>India</p>
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

