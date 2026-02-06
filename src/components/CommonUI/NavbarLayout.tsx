
"use client"
import { FC, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';


type TabType = {
  label: string;
  icon: string;
  iconSelected: string;
  value: number;
  component: FC; 
}


type NavbarLayoutProps = {
  tabs: TabType[];  // Tabs now accept generic components
};

// const tabs = [
// //   {
// //     label: "Live Stream",
// //     icon: "/images/page-specific/home/products/icon-product-nav-01.svg",
// //     iconSelected: "/images/page-specific/home/products/icon-product-nav-11.svg",
// //     value: 1,
// //   },
// //   {
// //     label: "VOD",
// //     icon: "/images/page-specific/home/products/icon-product-nav-zt.png",
// //     iconSelected: "/images/page-specific/home/products/icon-product-nav-12.png",
// //     value: 2,
// //   },
//   {
//     label: "Personal",
//     icon: "/images/page-specific/home/products/icon-product-nav-03.svg",
//     iconSelected: "/images/page-specific/home/products/icon-product-nav-13.svg",
//     value: 3,
//   },
//   {
//     label: "Professional",
//     icon: "/images/page-specific/home/products/icon-product-nav-04.svg",
//     iconSelected: "/images/page-specific/home/products/icon-product-nav-14.svg",
//     value: 4,
//   }
// ];

export default function NavbarLayout({ tabs }: NavbarLayoutProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isHovered, setIsHovered] = useState<typeof tabs[0] | null>(null);
  const prevTab = useRef(tabs[0]);
  const [animationClass, setAnimationClass] = useState('');
  const tabRefs = useRef<Array<HTMLLIElement | null>>([]);

  const handleTabClick = (item: typeof tabs[0]) => {
    // Determine animation direction
    const direction = item.value > selectedTab.value ? 'forward' : 'backward';
    setAnimationClass(`content-exit-${direction}`);
    
    // After a short delay, change tab and animate in
    setTimeout(() => {
      prevTab.current = selectedTab;
      setSelectedTab(item);
      setAnimationClass(`content-enter-${direction}`);
      
      // Remove animation class after animation completes
      setTimeout(() => setAnimationClass(''), 500);
    }, 50);
  };

    const handleMouseEnter = (tab: typeof tabs[0]) => {
    setIsHovered(tab);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

// const ActiveComponent = selectedTab?.component;
  // Update the underline position
  useLayoutEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.value === selectedTab.value);
    const activeTabElement = tabRefs.current[activeIndex];
    
    if (activeTabElement) {
      const underline = document.getElementById('underline');
      if (underline) {
        const tabRect = activeTabElement.getBoundingClientRect();
        const container = activeTabElement.closest('ul');
        const containerRect = container?.getBoundingClientRect();
        
        if (containerRect) {
          const left = tabRect.left - containerRect.left;
          const width = tabRect.width;
          
          underline.style.left = `${left}px`;
          underline.style.width = `${width}px`;
        }
      }
    }
  }, [selectedTab, tabs]);

  return (
    <section className="w-full overflow-hidden">
      <nav className="w-full max-w-[1120px] mx-0 md:mx-auto mb-30px lg:mb-50px overflow-x-hidden z-50">
        <div className="relative">

          <ul className="flex justify-center items-center px-0.5 gap-5 md:w-auto overflow-x-auto md:overflow-visible no-scrollbar whitespace-nowrap">
            {tabs.map((item, idx) => (
              <li
                key={item.label + idx}
                ref={el => { tabRefs.current[idx] = el; }}
                className={`flex-shrink-0 hover:text-primary ${item === selectedTab ? 'text-primary' : 'text-grayish'}`}
              >
                <button
                  type="button"
                  className="relative flex gap-2.5 w-fit px-2.5 cursor-pointer typo-product-stack"
                  onClick={() => handleTabClick(item)}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {!item.icon && <Image
                    src={(item === selectedTab || item === isHovered) ? item.iconSelected : item.icon}
                    // alt={item.label}
                    alt=''
                    width={30}
                    height={30}
                  />}
                  <span className='text-base md:text-lg lg:text-xl h-10 '>{item.label}</span>
                </button>
              </li>
            ))}
            <div
              id="underline"
              className="absolute bottom-0 h-[3px] bg-primary shadow-[0px_0px_8px_0px_#FDFFFD99] rounded-[3px] transition-all duration-300"
            />
          </ul>
        </div>
      </nav>

      {/* Added padding to create space for animation */}
      <main className="relative w-full h-auto max-container overflow-hidden py-5 px-5 -my-5 -mx-5">
        <div className={`content-container ${animationClass}`}>
          <selectedTab.component />
        </div>
      </main>
     
      <style jsx global>{`
        .content-container {
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          position: relative;
        }
        
        .content-exit-forward {
          transform: translate(-20px, -20px);
          opacity: 0;
        }
        
        .content-enter-forward {
          animation: enterForward 0.5s ease-in-out forwards;
        }
        
        .content-exit-backward {
          transform: translate(20px, 20px);
          opacity: 0;
        }
        
        .content-enter-backward {
          animation: enterBackward 0.5s ease-in-out forwards;
        }
        
        @keyframes enterForward {
          0% {
            transform: translate(30px, 30px);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
        
        @keyframes enterBackward {
          0% {
            transform: translate(-30px, -30px);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}