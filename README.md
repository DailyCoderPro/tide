<p align="center">
  <img src="https://private-user-images.githubusercontent.com/189329691/440136742-add8bc28-ba63-45c6-b3d2-14c666d14e87.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDYyOTgxNjAsIm5iZiI6MTc0NjI5Nzg2MCwicGF0aCI6Ii8xODkzMjk2OTEvNDQwMTM2NzQyLWFkZDhiYzI4LWJhNjMtNDVjNi1iM2QyLTE0YzY2NmQxNGU4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwM1QxODQ0MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMWM5NDQxNzZhMGVhMzQwZGFjMmMyNjE2ODVjMGY1ZTMyNzRhZWVjZjVhZDI4NDkzZmY2NWI3NDQ2ODI1OTE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4XOPxlXpJBjCT9GGZUhJzx7TsC5iu--ovZmUMOEpI7k" width="150" alt="Tide Icon">
  <h1 align="center">Tide 🌊</h1>
</p>

**A Unified Manager for Tasks, Secrets, Users, Docs, and Notifications**  
*Organize. Secure. Collaborate.*

[![GitHub Stars](https://img.shields.io/github/stars/Avvinashjha/tide?style=for-the-badge&logo=github)](https://github.com/Avvinashjha/tide/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/Avvinashjha/tide?style=for-the-badge&logo=git)](https://github.com/Avvinashjha/tide/issues)
[![License](https://img.shields.io/github/license/Avvinashjha/tide?style=for-the-badge)](https://github.com/Avvinashjha/tide/blob/main/LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.10%2B-blue?style=for-the-badge&logo=python)](https://python.org)

![Tide Preview](https://github.com/Avvinashjha/tide/blob/main/assets/tide-demo.gif)

---

## Why Tide? 🚩
Tide consolidates **tasks**, **users**, **secrets**, **docs**, and **notifications** into a single platform. Designed for teams that value security and simplicity, with:
- 🔒 AES-256 encrypted secrets
- 📅 Deadline-driven task prioritization
- 👥 Role-based access control
- 📜 Markdown-powered documentation
- 🔔 Real-time Slack/Email alerts

---

## Features ✨
| **Category**       | **Tools**                                                                 |
|---------------------|---------------------------------------------------------------------------|
| **Tasks**           | Labels, deadlines, assignees, Kanban boards                              |
| **Security**        | Encrypted secrets vault, 2FA, audit logs                                  |
| **Collaboration**   | User roles (Admin/Editor/Viewer), comments, @mentions                    |
| **Docs**            | Versioned wikis, Markdown support, PDF export                            |
| **Integrations**    | Slack, Email, GitHub Issues, REST API                                    |

---

## Quick Start 🚀
```bash
# Clone & Install
git clone https://github.com/Avvinashjha/tide.git
cd tide
pip install -r requirements.txt

# Configure Environment
cp .env.example .env  # Update secrets and DB credentials

# Run
uvicorn app.main:app --reload
```
