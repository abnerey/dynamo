import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'dm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private username: string;
    private password: string;
    private liveSessionId: string;
    private rememberMe: boolean;

    /* Form Controls */
    private signInForm: FormGroup;
    private liveForm: FormGroup;
    private userControl: AbstractControl;
    private passControl: AbstractControl;
    private rememberControl: AbstractControl;
    private sessionControl: AbstractControl;

    constructor(private readonly formBuilder: FormBuilder,
                private readonly router: Router) {
        this.setUpForm();
    }

    ngOnInit() {
    }

    setUpForm() {
        this.signInForm = this.formBuilder.group({
            userControl: [{value: this.username}, Validators.compose([Validators.required])],
            passControl: [{value: this.password}, Validators.compose([Validators.required])],
            rememberControl: [{value: this.rememberMe}, Validators.compose([Validators.required])]
        });
        this.userControl = this.signInForm.controls['userControl'].value;
        this.passControl = this.signInForm.controls['passControl'].value;
        this.rememberControl = this.signInForm.controls['rememberControl'].value;

        this.liveForm = this.formBuilder.group({
            sessionControl: [{value: this.liveSessionId}, Validators.compose([Validators.required])]
        });
        this.sessionControl = this.liveForm.controls['sessionControl'].value;
    }

    /* Event Handlers */
    onSignIn() {
        console.log('signIn');
    }
}
