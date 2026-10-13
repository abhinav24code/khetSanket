"use client";
import { navigation } from "@/lib/demo-data";
import Link from "next/link";


export default function ExpertLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: 240, borderRight: "1px solid #e9ddc9", background: "white", padding: "20px 0", position: "fixed", height: "100vh", overflowY: "auto" }}>
        <div style={{ padding: "0 18px 20px" }}>
          <div style={{ fontWeight: "900", color: "#245b3d", fontSize: "18px", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "grid", placeItems: "center", width: "30px", height: "30px", borderRadius: "8px", background: "#245b3d", color: "#f2c14e", fontWeight: "900" }}>KS</div>
            KhetSanket
          </div>
          <div style={{ color: "#746d61", fontSize: "11px", marginTop: "3px", fontWeight: "700" }}>EXPERT</div>
        </div>
        <nav className="side-nav" style={{ flexDirection: "column" }}>
          {navigation.expert.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ flex: 1, marginLeft: 240 }}>{children}</div>
    </div>
  );
}
