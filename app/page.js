import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      <Calculator />

      {/* 🔥 Premium Reference Footer */}
      <footer className="absolute bottom-6 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          Based on an average U.S. salary of <span className="text-gray-300">$60,000/year </span> 
           and ~<span className="text-gray-300">250 working days</span>.
        </p>
      </footer>

    </main>
  );
}