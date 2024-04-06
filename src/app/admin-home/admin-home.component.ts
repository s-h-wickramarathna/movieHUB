import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isActive
  }

  isActive(route: string): boolean {
      return this.router.url.startsWith(route);
  }
}
