import { createContext, useState } from 'react';

type Section = string | null;

interface SidebarContextValue {
  section: Section;
  setSection: (newSection: Section) => void;
}
export const SidebarContext = createContext<SidebarContextValue>({
  section: null, // Initial section value can be null
  setSection: () => {}, // Placeholder function for initial state
});

function Context({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<Section>(null);

  return (
    <SidebarContext.Provider value={{ section, setSection }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default Context;
