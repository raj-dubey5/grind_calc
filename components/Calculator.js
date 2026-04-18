"use client";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const dailyRate = 240;

  const numericAmount = parseFloat(amount);

  const days =
    amount && !isNaN(numericAmount)
      ? (numericAmount / dailyRate).toFixed(1)
      : null;

  useEffect(() => {
    document.querySelector("input")?.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Logo */}
      <div className="absolute top-6 left-6 text-lg md:text-xl font-bold tracking-tight">
        <span className="text-white">GRIND</span>
        <span className="text-gray-400">CALC</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-8">
        
        {/* Headline */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Convert money into time
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed">
          Enter any amount to see how many days you need to work to afford it,
          based on an average salary.
        </p>

        {/* Input */}
        <div className="
          flex items-center gap-3
          px-6 py-4
          w-[280px] md:w-[360px]
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          focus-within:border-white/20
          transition-all duration-300
        ">
          
          <span className="text-gray-400 text-2xl md:text-3xl font-semibold">
            $
          </span>

          <input
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={amount}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setAmount(value);
            }}
            className="
              w-full
              bg-transparent
              text-4xl md:text-5xl
              font-semibold text-white
              focus:outline-none
              placeholder:text-gray-500
            "
          />
        </div>

        {/* Result */}
        {days && (
          <div className="flex flex-col items-center space-y-2">
            
            <p className="text-5xl md:text-6xl font-semibold">
              {days} days
            </p>

            <p className="text-sm text-gray-500">
              ≈ {Math.round(days)} full work days
            </p>

            <p className="text-xs text-gray-600 italic">
              That’s your time.
            </p>

          </div>
        )}
      </div>
    </div>
  );
}