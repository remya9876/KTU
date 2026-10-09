# KTU Student Portal – UI/UX Redesign & Improvement
**APJ Abdul Kalam Technological University (KTU) e-Governance Student Services Portal**

---

## 📌 Project Overview
This project is an **improvement and UX overhaul of the official KTU Student Portal (`app.ktu.edu.in`)**, engineered to preserve the university's signature blue identity while systematically resolving all 10 major usability, clutter, and navigation shortcomings of the original system.

> **Key Rule Followed:** Improvement, not replacement. The structure, branding, authentic KTU terminology (Schemes, Slots, CGPA/SGPA, Activity Points, Series Tests), and features remain recognizable, elevated to modern web standards.

---

## 🎨 Color Palette (Preserved & Refined KTU Identity)
- **Deep Blue**: `#174A7E` (Primary University Branding)
- **Primary Blue**: `#2878C8` (Interactive Accents & Highlights)
- **Light Blue**: `#EAF3FC` (Subtle backgrounds, selected items)
- **Page Background**: `#F5F8FC` (High contrast, eye-comfort background)
- **Main Text**: `#243247` (WCAG AAA readability)
- **Secondary Text**: `#64748B` (Clear hierarchy)
- **Accents**: Emerald Green (Pass/Active), Amber (Alerts/Scholarships), Crimson (Deadlines/Urgent)

---

## 🛠️ The 10 Identified Problems & Implemented Solutions

| # | Problem in Original Portal | Implemented Solution in Redesign |
|---|----------------------------|----------------------------------|
| **1** | **Unclear navigation menu** | Implemented standardized hierarchy (`HOME`, `ACADEMICS`, `EXAMINATIONS`, `RESULTS`, `STUDENT SERVICES`, `NOTICES & UPDATES`, `PROFILE & SETTINGS`) with expandable sub-menus, active badges, and breadcrumb trails. |
| **2** | **Cluttered homepage** | Organized dashboard cards: Student Identity Badge (`TVE21CS042`), Academic Vitals (CGPA `8.64`, Attendance `88.5%`, Credits `138/162`, Activity Points `78/100`), registered course list with slot details, and immediate quick actions. |
| **3** | **Poor mobile responsiveness** | Responsive CSS Grid/Flexbox architecture with slide-in mobile navigation drawer, stacked cards on small screens, and responsive table containers. |
| **4** | **Important alerts not noticeable** | High-visibility top announcement banner, color-coded category pills (`Exams`, `Results`, `Scholarships`, `Circulars`), unread indicators, and dedicated Notices page with search. |
| **5** | **Examination info difficult to locate** | Dedicated Examinations hub featuring Academic Year / Exam Type selectors, Timetable cards, an **official printable Hall Ticket / Admit Card preview**, and Improvement registration form. |
| **6** | **Scholarship updates hard to find** | Dedicated Scholarships directory (CSSS, Kerala E-Grantz 3.0, KTU Merit, Pragati) with verified eligibility, deadline countdowns, application tracking, and direct application links. |
| **7** | **Excessive empty space** | Balanced 12-column grid layout with purposeful widgets, attendance progress bars, and informative university guidelines. |
| **8** | **Small text affecting readability** | Upgraded to Inter typography with legible 14px–16px body copy, consistent line heights, and WCAG AAA compliant contrast ratios. |
| **9** | **Outdated visual styling** | Modern, sleek card design system with subtle elevation, refined borders, and authentic KTU crest while preserving the official university feel. |
| **10** | **Fragmented student services** | Centralized Student Services hub integrating Fee details (statements & printable receipts), SWAYAM/NPTEL MOOC credit transfers, and confidential faculty/portal surveys. |

---

## 💻 Tech Stack
- **Frontend Framework**: React 18+ (Vite)
- **Language**: JavaScript (ES6+ / JSX)
- **Styling**: Tailwind CSS v3 & Vanilla CSS
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Architecture**: Modular Reusable Components (`Header`, `Sidebar`, `Breadcrumbs`, `ComparisonModal`, `Footer`)

---

## 🚀 How to Run Locally

1. Open PowerShell / Command Prompt in the project folder:
   ```bash
   cd "C:\Users\remya\OneDrive\Desktop\Remya\ktu"
   ```

2. Start the development server:
   ```cmd
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## 📱 Mobile & Responsive Testing
- **Desktop**: Full persistent sidebar with expandable trees and rich 12-column dashboard.
- **Mobile (< 1024px)**: Top bar with hamburger toggle opening an off-canvas drawer; tables with horizontal scrolling indicators and stacked cards.
- **Print Mode**: Press `Ctrl + P` on the Hall Ticket or Results Grade Sheet to preview clean, official university document layouts with headers and borders ready for printing.
