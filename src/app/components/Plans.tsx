"use client";
import { pricingTiers } from "../constants/index";
import { CheckIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import GlassTag from "./ui/GlassTag";

const Pricing = () => {
  return (
	<section className="py-24">
    <div className="container">
      <div className="flex items-center justify-center pb-3">
        <GlassTag label="Confira Nossos Planos" />
      </div>
       <h2 className="section-title pt-5">Encontre o que for melhor <br /> para a sua necessidade</h2>
       <p className="section-description mt-5">Temos planos para atender a todos e todas as necessidades</p>
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
          <div className={twMerge("card", inverse === true && 'border-[#4F7DFF] bg-[#4F7DFF] text-white')}>
            <div className="flex justify-between">
              <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
              {popular === true && (
                <GlassTag label="Popular" />
            )}
            </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">R$ {monthlyPrice}</span>
              <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && 'text-white/60')}>/mês</span>
            </div>
            <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200')}>{buttonText}</button>
            <ul className="flex flex-col gap-5 mt-8">
              {features.map((feature) => (
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className={twMerge("w-6 h-6", inverse === true && 'text-green-700')} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Pricing