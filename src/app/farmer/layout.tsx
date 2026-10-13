"use client";
import { farmer, navigation } from "@/lib/demo-data";
import Link from "next/link";


export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="farmer-layout">
      <div className="topbar">
        <Link href="/farmer" className="brand">
          <div className="brand-mark">KS</div>
          <span>KhetSanket</span>
        </Link>
        <div className="side-nav">
          {navigation.farmer.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="topbar-right">
          <span className="top-user">{farmer.name}</span>
          <div className="avatar">{farmer.initials}</div>
        </div>
      </div>
      <div className="farmer-main">{children}</div>
      <div className="bottom-nav">
        {navigation.farmer.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            <span className="nav-icon">
              {link.href === "/farmer" && "Home"}
              {link.href === "/farmer/reports" && "Reports"}
              {link.href === "/farmer/alerts" && "Alert"}
              {link.href === "/farmer/profile" && "Profile"}
            </span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
