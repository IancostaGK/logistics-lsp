import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sticky top-0 z-50 scrollbar-none"
         style="background-color: var(--bg-surface); border-bottom: 1px solid var(--border); backdrop-filter: blur(8px);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-stretch h-14 overflow-x-auto scrollbar-none">

          <!-- Brand -->
          <div class="flex items-center gap-3 mr-8 shrink-0">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                 style="background: linear-gradient(135deg, #4F46E5, #7C3AED); box-shadow: 0 0 14px rgba(99,102,241,0.35); font-family: 'JetBrains Mono', monospace;">
              L
            </div>
            <div class="flex flex-col leading-none">
              <span class="text-white font-bold text-sm" style="font-family: 'Syne', sans-serif; letter-spacing: -0.01em;">
                Logistics <span style="color: #818CF8;">LSP</span>
              </span>
              <span class="text-[9px] tracking-widest uppercase" style="color: #3D4F6E; font-family: 'JetBrains Mono', monospace;">
                SOLID Principles
              </span>
            </div>
          </div>

          <!-- Nav Links -->
          <div class="flex items-stretch gap-0">

            <a routerLink="/about" routerLinkActive #la="routerLinkActive"
               class="flex items-center px-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap hover:text-slate-200"
               [class.text-indigo-400]="la.isActive"
               [class.border-indigo-500]="la.isActive"
               [class.text-slate-500]="!la.isActive"
               [class.border-transparent]="!la.isActive">
              About
            </a>

            <a routerLink="/bad" routerLinkActive #lb="routerLinkActive"
               class="flex items-center gap-2 px-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap hover:text-slate-200"
               [class.text-red-400]="lb.isActive"
               [class.border-red-500]="lb.isActive"
               [class.text-slate-500]="!lb.isActive"
               [class.border-transparent]="!lb.isActive">
              <span class="w-1.5 h-1.5 rounded-full inline-block transition-all"
                    [style.background]="lb.isActive ? '#EF4444' : '#3D4F6E'"></span>
              Bad
            </a>

            <a routerLink="/good" routerLinkActive #lg="routerLinkActive"
               class="flex items-center gap-2 px-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap hover:text-slate-200"
               [class.text-emerald-400]="lg.isActive"
               [class.border-emerald-500]="lg.isActive"
               [class.text-slate-500]="!lg.isActive"
               [class.border-transparent]="!lg.isActive">
              <span class="w-1.5 h-1.5 rounded-full inline-block transition-all"
                    [style.background]="lg.isActive ? '#10B981' : '#3D4F6E'"></span>
              Good
            </a>

            <a routerLink="/overengineered" routerLinkActive #lo="routerLinkActive"
               class="flex items-center gap-2 px-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap hover:text-slate-200"
               [class.text-amber-400]="lo.isActive"
               [class.border-amber-500]="lo.isActive"
               [class.text-slate-500]="!lo.isActive"
               [class.border-transparent]="!lo.isActive">
              <span class="w-1.5 h-1.5 rounded-full inline-block transition-all"
                    [style.background]="lo.isActive ? '#F59E0B' : '#3D4F6E'"></span>
              Overengineered
            </a>

            <a routerLink="/conclusion" routerLinkActive #lc="routerLinkActive"
               class="flex items-center gap-2 px-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap hover:text-slate-200"
               [class.text-teal-400]="lc.isActive"
               [class.border-teal-500]="lc.isActive"
               [class.text-slate-500]="!lc.isActive"
               [class.border-transparent]="!lc.isActive">
              <span class="w-1.5 h-1.5 rounded-full inline-block transition-all"
                    [style.background]="lc.isActive ? '#14B8A6' : '#3D4F6E'"></span>
              Conclusion
            </a>

          </div>

          <!-- Right Label -->
          <div class="ml-auto pl-6 flex items-center shrink-0">
            <span class="hidden lg:block text-[9px] tracking-widest uppercase" style="color: #2D3F55; font-family: 'JetBrains Mono', monospace;">
              Liskov Substitution
            </span>
          </div>

        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
