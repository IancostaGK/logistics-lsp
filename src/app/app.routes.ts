import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BadDashboardComponent } from './components/bad-dashboard/bad-dashboard.component';
import { GoodDashboardComponent } from './components/good-dashboard/good-dashboard.component';
import { OverengineeredDashboardComponent } from './components/overengineered-dashboard/overengineered-dashboard.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'bad', component: BadDashboardComponent },
  { path: 'good', component: GoodDashboardComponent },
  { path: 'overengineered', component: OverengineeredDashboardComponent },
  { path: 'conclusion', component: ConclusionComponent },
];
