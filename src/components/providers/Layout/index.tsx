import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

export enum Layout {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

interface Breakpoint {
  layout: Layout;
  query: string;
  matches: boolean;
}

const breakpoints: Breakpoint[] = [
  { layout: Layout.MOBILE, query: '(max-width: 767px)', matches: false },
  { layout: Layout.TABLET, query: '(max-width: 1260px)', matches: false },
  { layout: Layout.DESKTOP, query: '(max-width: 1366px)', matches: false },
];

function getActiveLayout() {
  const matchedBreakpoints = breakpoints.map((bp) => ({
    ...bp,
    matches: window.matchMedia(bp.query).matches,
  }));
  const activeLayout = matchedBreakpoints.find((bp) => bp.matches);

  return activeLayout?.layout || Layout.DESKTOP;
}

const LayoutContext = createContext<Layout>(undefined);

const LayoutProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [layout, setLayout] = useState<Layout>(getActiveLayout);

  const handleQueryMatch = useCallback(() => {
    const nextLayout = getActiveLayout();
    if (nextLayout !== layout) {
      setLayout(nextLayout)
    }
  }, [layout]);

  useEffect(() => {
    breakpoints.forEach((bp) => (
      window
        .matchMedia(bp.query)
        .addEventListener('change', handleQueryMatch)
    ));
  }, [handleQueryMatch]);

  return (
    <LayoutContext.Provider value={layout}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useAppLayout = () => useContext(LayoutContext);

export default LayoutProvider;
