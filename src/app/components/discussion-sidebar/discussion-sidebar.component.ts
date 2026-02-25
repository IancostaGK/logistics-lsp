import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-sidebar',
  standalone: true,
  templateUrl: './discussion-sidebar.component.html',
})
export class DiscussionSidebarComponent implements OnInit {
  @Input() questions: string[] = [];
  @Input() routeKey: string = '';

  checked: boolean[] = [];

  ngOnInit(): void {
    const stored = localStorage.getItem(`discussion-${this.routeKey}`);
    if (stored) {
      const parsed: boolean[] = JSON.parse(stored);
      this.checked = this.questions.map((_, i) => parsed[i] ?? false);
    } else {
      this.checked = this.questions.map(() => false);
    }
  }

  toggle(index: number): void {
    this.checked[index] = !this.checked[index];
    localStorage.setItem(`discussion-${this.routeKey}`, JSON.stringify(this.checked));
  }

  reset(): void {
    this.checked = this.questions.map(() => false);
    localStorage.removeItem(`discussion-${this.routeKey}`);
  }
}
