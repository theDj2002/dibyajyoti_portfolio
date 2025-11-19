import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // ✅ added router support

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet // ✅ added here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
 private lastUrl: string = '/';
   constructor(private router: Router) {}
  ngOnInit() {
    // Aos.init({
    //   duration: 800, // animation speed in ms
    //   once: true, // only animate once
    //   easing: 'ease-in-out'
    // });
  
  // ✅ Track route changes
    this.router.events.subscribe(() => {
      this.lastUrl = this.router.url;
    });
  }
  /** 
   * 🧭 Handle browser back button globally
   */
  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    const currentUrl = this.router.url;

    // Case 1: If currently on project details page, go back to home
    if (currentUrl.startsWith('/project/')) {
      this.router.navigate(['/']);
      return;
    }
  }
}
