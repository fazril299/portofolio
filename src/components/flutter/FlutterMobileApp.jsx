import { useState, useRef } from "react";
import FlutterAppBar from "./FlutterAppBar";
import FlutterNavigationBar from "./FlutterNavigationBar";
import FlutterDrawer from "./FlutterDrawer";
import FlutterFAB from "./FlutterFAB";
import FlutterBottomSheet from "./FlutterBottomSheet";

export default function FlutterMobileApp({ children }) {
  const [activeTab, setActiveTab] = useState("hero");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const sectionTitles = {
    hero: "Home",
    about: "About",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (!scrollContainerRef.current) return;
    const targetEl = scrollContainerRef.current.querySelector('#' + tabId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const sections = ["hero", "about", "projects", "services", "contact"];
    const scrollPos = container.scrollTop + 180;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = container.querySelector('#' + sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveTab(sections[i]);
        break;
      }
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#F6F5EF] flex flex-col z-50 overflow-hidden select-none">
      {/* Flutter Top AppBar */}
      <FlutterAppBar
        activeSection={sectionTitles[activeTab] || "Home"}
        onMenuClick={() => setIsDrawerOpen(true)}
      />

      {/* Scrollable Flutter Body */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative flex-1 w-full overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Portfolio Body */}
        <div className="w-full pb-8">
          {children}
        </div>
      </div>

      {/* Flutter Floating Action Button ("Let's Talk") */}
      <FlutterFAB onClick={() => setIsBottomSheetOpen(true)} />

      {/* Flutter Bottom Navigation Bar */}
      <div className="relative z-40 flex-shrink-0">
        <FlutterNavigationBar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
        {/* iOS / Modern Android Home Indicator Bar */}
        <div className="w-full bg-white/95 pb-2 pt-1 flex items-center justify-center">
          <div className="w-32 h-[4px] bg-neutral-900/60 rounded-full" />
        </div>
      </div>

      {/* Flutter Bottom Sheet */}
      <FlutterBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      />

      {/* Flutter Navigation Drawer */}
      <FlutterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectTab={handleSelectTab}
      />

    </div>
  );
}
