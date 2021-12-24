import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { findIndex } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form-Validation';
  genders: string[]=["Male","Female"];
  countries: string[]=["India","US","Canada","Srilanka","Nepal"]
  citiesList = 
    [
      ["Delhi","Chennai","Mumbai","Kolkata"],
      ["Texas","Delaware","Chicago"],
      ["Quebec","Saskatchewan","Yukon"],
      ["Trincomalee","Batticaloa","Jaffna"],
      ["Janakpur","Hetauda","Kalaiya"]
    ]

  cities:any
  selectedCountry="";
  submitForm = new FormGroup({
    user: new FormControl(),
    gender: new FormControl(),
    country: new FormControl(),
    city: new FormControl(),
    age: new FormControl()
  })
  countryChanged()
  {
    this.cities=this.citiesList[this.countries.indexOf(this.selectedCountry)]
  }
  errName="";
  errGender="";
  errCountry="";
  errCity="";
  errAge="";
  onSubmit(){
    this.errName="";
    this.errGender="";
    this.errCountry="";
    this.errCity="";
    this.errAge="";
    console.log(this.submitForm.value)
    var letters = /^[A-Za-z]+$/;
    if(this.submitForm.value.user == null)
    {
      this.errName="* Enter valid username"
    }
    else if(this.submitForm.value.user.length < 3)
    {
      this.errName="* Name must be atleast 3 characters"
    }
    else if(this.submitForm.value.user.length > 50)
    {
      this.errName="* Name must not be greater than 50 characters"
    }
    else if(!this.submitForm.value.user.match(letters))
    {
      this.errName="* Name must contain only alphabets, no special characters and numericals"
    }
    if(this.submitForm.value.gender === false || this.submitForm.value.gender === null )
    {
      this.errGender="* required"
    }
    if(this.submitForm.value.country === '')
    {
      this.errCountry="* required"
    }
    if(this.submitForm.value.city === null)
    {
      this.errCity="* required"
    }
    if(!(this.submitForm.value.country === "India" || this.submitForm.value.country === "US" || this.submitForm.value.country === "Canada") && this.submitForm.value.age === null)
    {
      this.errAge="* required"
    }
  }
}
