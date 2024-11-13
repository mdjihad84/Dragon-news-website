
const componentName = () => {
    return (
        <div className="mt-6 bg-[#F3F3F3] p-[10px] overflow-hidden mb-8">
          <div className="flex items-center space-x-2 relative">
            <button className="w-[110px] h-[48px] text-white rounded-sm bg-[#D72050]">latest</button>
            <div className="relative w-full overflow-hidden">
              <p className="text-lg text-[#403F3F] font-semibold whitespace-nowrap animate-marquee">
                Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as... 
              </p>
            </div>
          </div>
        </div>
    );
};

export default componentName;