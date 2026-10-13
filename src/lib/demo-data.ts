export type ReportStatus = "pending_review" | "under_review" | "action_taken" | "follow_up_required" | "resolved" | "escalated"
export type Certainty = "Confirmed" | "Suspected" | "Undetermined"

export interface CropReport { id: string; crop: string; description: string; symptoms: string[]; severity: "Mild" | "Moderate" | "Severe"; location: string; district: string; reportedAt: string; status: ReportStatus; image?: string; nextAction?: string; isDemo: true }
export interface ResolutionReport { title: string; finding: string; certainty: Certainty; evidence: string; actions: string; prevention: string; monitoring: string; expert: string; reviewedAt: string; published: boolean }
export interface PreventiveAlert { id: string; title: string; crop: string; locality: string; date: string; kind: "Potential Local Risk" | "Expert-Verified Advisory"; explanation: string; prevention: string[]; isDemo: true }
export interface Hotspot { id: string; village: string; district: string; reports: number; crops: string[]; symptoms: string[]; activity: string; status: string; isDemo: true }

export const farmer = { name: "Ramesh Patil", initials: "RP", village: "Khed", district: "Pune", language: "मराठी / Marathi", crops: ["Tomato", "Soybean", "Wheat"] }
export const reports: CropReport[] = [
  { id: "KS-2408", crop: "Tomato", description: "Yellow spots spreading on lower leaves", symptoms: ["Yellow spots", "Curling leaves"], severity: "Moderate", location: "Khed", district: "Pune", reportedAt: "Today, 9:24 AM", status: "under_review", nextAction: "Expert is reviewing your report", isDemo: true },
  { id: "KS-2396", crop: "Soybean", description: "Leaves have small brown patches after rain", symptoms: ["Brown patches", "Leaf drop"], severity: "Mild", location: "Khed", district: "Pune", reportedAt: "18 Aug 2026", status: "action_taken", nextAction: "Read the expert resolution", isDemo: true },
  { id: "KS-2371", crop: "Wheat", description: "Plants look weak in one corner of the field", symptoms: ["Weak growth", "Pale leaves"], severity: "Severe", location: "Khed", district: "Pune", reportedAt: "12 Aug 2026", status: "follow_up_required", nextAction: "Please add a follow-up photo", isDemo: true },
]
export const resolution: ResolutionReport = { title: "Soybean leaf patch review", finding: "The pattern is consistent with moisture-related leaf stress. The evidence does not confirm a specific disease.", certainty: "Undetermined", evidence: "Farmer photograph, recent rainfall note and two similar reports from the Khed demonstration area.", actions: "Improve airflow between rows and remove severely affected leaves. Avoid spraying until an expert confirms the cause.", prevention: "Check the underside of leaves twice a week, avoid overhead watering and keep rows clear of standing water.", monitoring: "Watch for rapid spread, dark lesions or stem damage. Share a new photo if symptoms increase.", expert: "Dr. Anjali Deshmukh", reviewedAt: "19 Aug 2026", published: true }
export const alerts: PreventiveAlert[] = [{ id: "AL-018", title: "Watch for leaf stress after rainfall", crop: "Soybean", locality: "Khed, Pune", date: "19 Aug 2026", kind: "Expert-Verified Advisory", explanation: "Several recent reports describe similar leaf patches in the demonstration area. This is a local risk signal, not a disease diagnosis.", prevention: ["Inspect lower leaves twice this week", "Avoid standing water around plants", "Share a photo if patches spread"], isDemo: true }]
export const hotspots: Hotspot[] = [{ id: "HS-04", village: "Khed", district: "Pune", reports: 3, crops: ["Soybean", "Tomato"], symptoms: ["Leaf patches", "Yellowing"], activity: "3 similar reports in the last 7 days", status: "Needs expert review", isDemo: true }]
export const expertQueue = reports.map((report) => ({ ...report, owner: report.status === "escalated" ? "Unassigned" : "Dr. Anjali Deshmukh" }))

export function statusLabel(status: ReportStatus) { return ({ pending_review: "Pending review", under_review: "Under review", action_taken: "Action taken", follow_up_required: "Follow-up needed", resolved: "Resolved", escalated: "Escalated" })[status] }
export function statusTone(status: ReportStatus) { return status === "resolved" ? "success" : status === "escalated" || status === "follow_up_required" ? "urgent" : status === "action_taken" ? "info" : "neutral" }
export function getReport(id: string) { return reports.find((report) => report.id === id) ?? reports[0] }
export function getHotspot(id: string) { return hotspots.find((hotspot) => hotspot.id === id) ?? hotspots[0] }

export const navigation = { farmer: [{ href: "/farmer", label: "Home" }, { href: "/farmer/reports", label: "My reports" }, { href: "/farmer/alerts", label: "Alerts" }, { href: "/farmer/profile", label: "Profile" }], expert: [{ href: "/expert/dashboard", label: "Dashboard" }, { href: "/expert/cases/KS-2408", label: "Case queue" }, { href: "/expert/hotspots/HS-04", label: "Hotspots" }, { href: "/expert/escalations", label: "Escalations" }] }

export function formatStatus(status: string) { return status.replaceAll("_", " ") }

export function addDemoReport(input: Partial<CropReport>) { const id = `KS-${Math.floor(2410 + Math.random() * 80)}`; const report: CropReport = { id, crop: input.crop ?? "Tomato", description: input.description ?? "New crop problem reported", symptoms: input.symptoms ?? ["Needs review"], severity: input.severity ?? "Moderate", location: "Khed", district: "Pune", reportedAt: "Just now", status: "pending_review", nextAction: "Your report is ready for expert review", isDemo: true }; reports.unshift(report); return report }
