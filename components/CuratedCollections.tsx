import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CuratedCollections() {
    return (
        <section className="py-20 md:py-24" style={{ background: '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#E63946' }}>
                        Browse by Category
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3" style={{ color: '#0B1F3A' }}>
                        Curated Collections
                    </h2>
                    <p className="max-w-md mx-auto" style={{ color: '#6B7280' }}>
                        Explore prime properties based on your requirement
                    </p>
                </div>

                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* ── New Projects ── */}
                    <Link
                        href="/properties?status=recently-launched"
                        className="group relative rounded-2xl overflow-hidden block"
                        style={{ height: '320px' }}
                    >
                        {/* BG */}
                        <div
                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1E4080 50%, #0B3060 100%)' }}
                        >
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px',
                            }} />
                            {/* Building silhouette */}
                            <div className="absolute bottom-0 left-0 right-0 opacity-20" style={{ height: '60%' }}>
                                <svg viewBox="0 0 400 200" className="w-full h-full" fill="white" preserveAspectRatio="xMidYMax meet">
                                    <rect x="30" y="60" width="60" height="140" />
                                    <rect x="100" y="20" width="80" height="180" />
                                    <rect x="190" y="40" width="50" height="160" />
                                    <rect x="250" y="10" width="90" height="190" />
                                    <rect x="350" y="70" width="40" height="130" />
                                    <rect x="115" y="30" width="10" height="10" opacity="0.5" />
                                    <rect x="135" y="30" width="10" height="10" opacity="0.5" />
                                    <rect x="115" y="50" width="10" height="10" opacity="0.5" />
                                    <rect x="135" y="50" width="10" height="10" opacity="0.5" />
                                    <rect x="265" y="22" width="12" height="12" opacity="0.5" />
                                    <rect x="285" y="22" width="12" height="12" opacity="0.5" />
                                    <rect x="305" y="22" width="12" height="12" opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,31,58,0.10) 0%, rgba(11,31,58,0.80) 100%)' }} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(230,57,70,0.15)' }} />

                        {/* Badge */}
                        <div className="absolute top-5 left-5 z-10">
                            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#E63946' }}>✦ New Launch</span>
                        </div>

                        {/* Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                            <h3 className="font-serif font-bold text-3xl text-white mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                                New Projects
                            </h3>
                            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.70)' }}>
                                Fresh launches from top developers
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Explore Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {/* ── Ready to Move ── */}
                    <Link
                        href="/properties?status=ready-to-move"
                        className="group relative rounded-2xl overflow-hidden block"
                        style={{ height: '320px' }}
                    >
                        <div
                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #1a3a1a 0%, #2d6a2d 50%, #1a4a1a 100%)' }}
                        >
                            <div className="absolute inset-0 opacity-15" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)',
                                backgroundSize: '30px 30px',
                            }} />
                            {/* House silhouette */}
                            <div className="absolute bottom-0 left-0 right-0 opacity-20" style={{ height: '65%' }}>
                                <svg viewBox="0 0 400 200" className="w-full h-full" fill="white" preserveAspectRatio="xMidYMax meet">
                                    <polygon points="0,80 200,0 400,80" />
                                    <rect x="50" y="80" width="300" height="120" />
                                    <rect x="165" y="110" width="70" height="90" rx="35" />
                                    <rect x="70" y="95" width="70" height="50" rx="4" />
                                    <rect x="260" y="95" width="70" height="50" rx="4" />
                                    <rect x="103" y="95" width="3" height="50" />
                                    <rect x="70" y="119" width="70" height="3" />
                                    <rect x="293" y="95" width="3" height="50" />
                                    <rect x="260" y="119" width="70" height="3" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,40,13,0.10) 0%, rgba(13,40,13,0.80) 100%)' }} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(230,57,70,0.12)' }} />

                        <div className="absolute top-5 left-5 z-10">
                            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#059669' }}>✓ Ready</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                            <h3 className="font-serif font-bold text-3xl text-white mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                                Ready to Move
                            </h3>
                            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.70)' }}>
                                Move in immediately, no wait
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Explore Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {/* ── Under Construction ── */}
                    <Link
                        href="/properties?status=under-construction"
                        className="group relative rounded-2xl overflow-hidden block"
                        style={{ height: '320px' }}
                    >
                        <div
                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #3a2000 0%, #7a4800 50%, #4a2800 100%)' }}
                        >
                            <div className="absolute inset-0 opacity-15" style={{
                                backgroundImage: `repeating-linear-gradient(45deg, rgba(255,200,0,0.3) 0px, rgba(255,200,0,0.3) 4px, transparent 4px, transparent 20px)`,
                            }} />
                            {/* Crane silhouette */}
                            <div className="absolute bottom-0 left-0 right-0 opacity-20" style={{ height: '70%' }}>
                                <svg viewBox="0 0 400 220" className="w-full h-full" fill="white" preserveAspectRatio="xMidYMax meet">
                                    <rect x="60" y="100" width="100" height="120" />
                                    <rect x="240" y="60" width="100" height="160" />
                                    <rect x="55" y="95" width="110" height="5" />
                                    <rect x="55" y="140" width="110" height="5" />
                                    <rect x="55" y="95" width="5" height="50" />
                                    <rect x="160" y="95" width="5" height="50" />
                                    <rect x="185" y="0" width="8" height="220" />
                                    <rect x="100" y="0" width="200" height="8" />
                                    <rect x="248" y="8" width="3" height="80" />
                                    <rect x="242" y="82" width="15" height="8" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(40,20,0,0.10) 0%, rgba(40,20,0,0.80) 100%)' }} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(230,57,70,0.12)' }} />

                        <div className="absolute top-5 left-5 z-10">
                            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#D97706' }}>🏗 Under Const.</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                            <h3 className="font-serif font-bold text-3xl text-white mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                                Under Construction
                            </h3>
                            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.70)' }}>
                                Invest early, get the best price
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Explore Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    )
}