// frontend/src/components/common/page-title-context.ts  
import { createContext, useContext, useEffect } from "react";  
  
export type PageTitleContextValue = {  
  title: string | null;  
  setTitle: (title: string | null) => void;  
};  
  
export const PageTitleContext = createContext<PageTitleContextValue | null>(  
  null,  
);  
  
export function usePageTitleValue() {  
  const ctx = useContext(PageTitleContext);  
  return ctx?.title ?? null;  
}  
  
export function usePageTitle(title: string) {  
  const ctx = useContext(PageTitleContext);  
  useEffect(() => {  
    ctx?.setTitle(title);  
    return () => ctx?.setTitle(null);  
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [title]);  
}