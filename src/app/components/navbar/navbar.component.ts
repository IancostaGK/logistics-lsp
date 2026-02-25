import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-0 flex items-center gap-1">
        <span class="text-base font-bold text-indigo-400 mr-3 py-4 shrink-0">🚚 Logistics LSP</span>

        <a
          routerLink="/about"
          routerLinkActive
          #linkAbout="routerLinkActive"
          class="py-4 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
          [class.text-indigo-400]="linkAbout.isActive"
          [class.border-indigo-400]="linkAbout.isActive"
          [class.text-slate-400]="!linkAbout.isActive"
          [class.border-transparent]="!linkAbout.isActive"
        >
          📖 About
        </a>

        <a
          routerLink="/bad"
          routerLinkActive
          #linkBad="routerLinkActive"
          class="py-4 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
          [class.text-red-400]="linkBad.isActive"
          [class.border-red-400]="linkBad.isActive"
          [class.text-slate-400]="!linkBad.isActive"
          [class.border-transparent]="!linkBad.isActive"
        >
          ❌ Bad
        </a>

        <a
          routerLink="/good"
          routerLinkActive
          #linkGood="routerLinkActive"
          class="py-4 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
          [class.text-green-400]="linkGood.isActive"
          [class.border-green-400]="linkGood.isActive"
          [class.text-slate-400]="!linkGood.isActive"
          [class.border-transparent]="!linkGood.isActive"
        >
          ✅ Good
        </a>

        <a
          routerLink="/overengineered"
          routerLinkActive
          #linkOver="routerLinkActive"
          class="py-4 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
          [class.text-amber-400]="linkOver.isActive"
          [class.border-amber-400]="linkOver.isActive"
          [class.text-slate-400]="!linkOver.isActive"
          [class.border-transparent]="!linkOver.isActive"
        >
          ⚠️ Overengineered
        </a>

        <a
          routerLink="/conclusion"
          routerLinkActive
          #linkConclusion="routerLinkActive"
          class="py-4 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
          [class.text-teal-400]="linkConclusion.isActive"
          [class.border-teal-400]="linkConclusion.isActive"
          [class.text-slate-400]="!linkConclusion.isActive"
          [class.border-transparent]="!linkConclusion.isActive"
        >
          🏁 Conclusion
        </a>

        <span class="ml-auto text-xs text-slate-600 hidden xl:block shrink-0">Liskov Substitution Principle</span>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
