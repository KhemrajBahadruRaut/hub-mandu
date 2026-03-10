export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      label: "Fresh ingredients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Top Rated",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Great Value",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <text x="4" y="18" fontSize="16" fontFamily="Arial" fontWeight="bold">₹</text>
        </svg>
      ),
    },
    {
      id: 4,
      label: "100K+ Customers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.197-3.773M9 20H4v-2a4 4 0 015.197-3.773M15 11a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 11-6 0 3 3 0 016 0zm-18 0a3 3 0 116 0 3 3 0 01-6 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FDF6F0] py-14 px-6 md:px-16">
      {/* Heading */}
      <h2
        className="text-center text-[32px] md:text-[38px] font-normal text-[#1a1a1a] mb-12"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Why Choose{" "}
        <span className="text-[#D84315] font-semibold">Mandu Hub</span>?
      </h2>

      {/* Icons Row */}
      <div className="flex flex-wrap items-start justify-center gap-10 md:gap-20">
        {features.map((f) => (
          <div key={f.id} className="flex flex-col items-center gap-4">
            {/* Circle Icon */}
            <div className="w-[80px] h-[80px] rounded-full bg-[#D84315] flex items-center justify-center shadow-md">
              {f.icon}
            </div>
            {/* Label */}
            <p className="text-[15px] text-[#1a1a1a] font-medium text-center">
              {f.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}