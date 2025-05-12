"use client"
import React, { useState } from 'react'
import faqData from '@/data/faq.json'

export default function Faq() {
    const [openIdxs, setOpenIdxs] = useState<number[]>([])
    const toggle = (i: number) =>
        setOpenIdxs(prev =>
            prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
        )

    return (
        <section className="relative text-white py-20 px-4 overflow-hidden">
            <div className="relative z-10 mx-auto w-[802px]">
                <div className="flex flex-col gap-[18px]">
                    {faqData.map((item, i) => {
                        const open = openIdxs.includes(i)
                        return (
                            <div key={i}>
                                <button
                                    className="w-full flex items-center justify-between h-[42px] border-b border-white text-left"
                                    onClick={() => toggle(i)}
                                >
                                    <span
                                        className="flex-1 font-bold text-[16px] leading-[24px] tracking-[0.1em]"
                                        style={{ fontFamily: 'Noto Sans TC', textShadow: '0px 4px 5px rgba(0,0,0,0.25)' }}
                                    >
                                        {item.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40' : 'max-h-0'}`}>
                                    <p className="pt-4 text-base leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
