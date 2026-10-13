import Link from "next/link";
import { alerts, farmer, reports, resolution, statusLabel, statusTone } from "@/lib/demo-data";

export default function FarmerHome() {
  return <main className="container">
    <div className="page-header"><div><div className="eyebrow">Farmer home · Demo mode</div><h1>Namaste, {farmer.name.split(" ")[0]}</h1><p>Here&apos;s what&apos;s happening around your fields today.</p></div><Link className="btn btn-primary" href="/farmer/report/new">Report a crop problem</Link></div>
    <div className="grid-2">
      <section className="welcome"><div className="eyebrow">Your next step</div><h2 style={{fontSize:24, margin:"8px 0 0"}}>Have you noticed something unusual?</h2><p>Tell us what you see. You can use your voice, a photo, or type it in.</p><Link className="btn" style={{background:"#f2c14e", color:"#342f26"}} href="/farmer/report/new">Start a report</Link></section>
      <section className="card card-pad"><div className="section-title" style={{marginTop:0}}><h2>Nearby crop warning</h2><span className="badge badge-info">1 new</span></div><strong>{alerts[0].title}</strong><p style={{color:"#746d61", fontSize:13, lineHeight:1.5}}>{alerts[0].explanation}</p><Link href="/farmer/alerts" style={{color:"#4f8a50", fontWeight:750, fontSize:13}}>View prevention steps →</Link></section>
    </div>
    <div className="section-title"><h2>My active reports <span style={{color:"#746d61", fontWeight:400, fontSize:14}}>({reports.length})</span></h2><Link href="/farmer/reports">See all reports →</Link></div>
    <section className="card card-pad">{reports.slice(0,2).map((report) => <Link href={`/farmer/reports/${report.id}`} className="report-row" key={report.id}><div className="report-symbol">{report.crop.slice(0,1)}</div><div className="report-main"><strong>{report.crop} · {report.id}</strong><span>{report.description}</span></div><span className={`badge badge-${statusTone(report.status)}`}>{statusLabel(report.status)}</span></Link>)}</section>
    <div className="section-title"><h2>Latest expert guidance</h2><Link href="/farmer/reports/KS-2396">Read full report →</Link></div>
    <section className="card card-pad"><div className="eyebrow">Published resolution · {resolution.reviewedAt}</div><h3 style={{margin:"8px 0 5px", fontSize:19}}>{resolution.title}</h3><p style={{color:"#746d61", lineHeight:1.55, margin:"0 0 14px"}}>{resolution.finding}</p><div className="warning"><div className="warning-mark">i</div><div><strong>Keep monitoring</strong><div style={{fontSize:13, color:"#746d61", marginTop:4}}>Check the underside of leaves twice a week and add a follow-up if symptoms increase.</div></div></div></section>
  </main>
}
