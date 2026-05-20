
import { BikeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center text-lg font-bold">
                            <BikeIcon className="h-6 w-6 inline-block mr-2 text-orange-500" />
                            <span className="text-white">Omni<span className="text-orange-500">EATS</span></span>
                        </Link>

                        <p className="mt-2 text-sm text-gray-400 max-w-sm leading-relaxed">
                            Delivery made easy, fast, and reliable. Your favorite meals delivered to your doorstep with just a few clicks.
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 rounded">
                                Facebook
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 rounded">
                                Twitter
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 rounded">
                                Instagram
                            </Link>
                        </div>
                    </div>

                    <nav aria-label="Company" className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-gray-200">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Resources" className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-gray-200">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Developers</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">API</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Partners</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Legal" className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-gray-200">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Security</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">© {new Date().getFullYear()} OmniEATS. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-gray-400">Built with care</p>
                            <span className="h-0.5 w-0.5 bg-white/20 rounded-full" aria-hidden="true" />
                            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer