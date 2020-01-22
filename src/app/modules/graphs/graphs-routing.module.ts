import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialNetworkGraphComponent } from './social-network-graph/social-network-graph.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
