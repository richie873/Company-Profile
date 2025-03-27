import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {children}
    </div>
  );
}
