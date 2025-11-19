import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),provideRouter(routes),importProvidersFrom(CommonModule, FormsModule)],
}).catch((err) => console.error(err));
// 🌗 Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle') as HTMLElement | null;
const themeIcon = document.getElementById('theme-icon') as SVGSVGElement | null;

function setSunIcon() {
  if (!themeIcon) return;
  themeIcon.innerHTML = `
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  `;
}

function setMoonIcon() {
  if (!themeIcon) return;
  themeIcon.innerHTML = `
    <path d="M21 12.79A9 9 0 1 1 11.21 3
             7 7 0 0 0 21 12.79z"></path>
  `;
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark-mode', isDark);
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if (isDark) setSunIcon();
  else setMoonIcon();
}


// 🌘 On Load — Apply Saved Theme
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

// 🌞 Toggle Theme
themeToggle?.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  applyTheme(isDark);
});
