import { WithChildren } from "@/types";
import { usePersistRedux } from "@/hooks/usePersistRedux";

export const Layout = ({ children }: WithChildren) => {
  usePersistRedux();

  return (
    <main className="h-screen w-screen overflow-hidden">
      {children}
    </main>
  );
};
