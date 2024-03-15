import { Component } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

constructor(private routes: Router){

}

login(){
  this.routes.navigate(['/home']);
}
}
