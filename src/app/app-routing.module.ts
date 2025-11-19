import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
