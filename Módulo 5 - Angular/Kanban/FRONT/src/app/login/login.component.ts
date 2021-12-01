import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = undefined;
  returnUrl!: string;

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // Redirect to main page if already logged in
    if (this.authService.currentUserToken) {
      this.router.navigateByUrl('/kanban-board');
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    this.error = undefined;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const form = this.loginForm.value;
    this.authService.login(form.username, form.password)
      .subscribe(
        () => {
          this.router.navigateByUrl('/kanban-board');
        },
        /*error: error => {
          console.log("ERROR");
          this.error = error;
          this.loading = false;
        }
      }*/
      );
  }
}
