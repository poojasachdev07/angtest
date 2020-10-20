import { ElementRef, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Component, EventEmitter,Input } from '@angular/core';
import {Joke} from '../joke.module';
@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})

export class StudentCountComponent {
  selectedRadioButtonValue: string = 'All';
  @ViewChild('name')name:ElementRef;
  @ViewChild('vc',{read:ViewContainerRef}) _ver: ViewContainerRef;
  @ViewChild('tpl', {read: TemplateRef}) tpl: TemplateRef<any>;
  ngAfterViewInit() {
  this._ver.createEmbeddedView(this.tpl);
  }



  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  public message=0;
  public count =0;
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;
  @Input()
  test:number;
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
      new EventEmitter<string>();
  // This method raises the custom event. We will bind this
  // method to the change event of all the 3 radio buttons
  onRadioButtonSelectionChange() {
    alert (this.selectedRadioButtonValue);
      this.countRadioButtonSelectionChanged
          .emit(this.selectedRadioButtonValue);
  }
  onadd(name: HTMLInputElement)
  {
alert(name.value);
  }

  onadd1()
  {
alert(this.name.nativeElement.value);
  }

incbyone()
{
  this.count=this.count+1;
  this.message=this.count;
}
decbyone()
{
  this.count=this.count-1;
  this.message=this.count;
}

}
