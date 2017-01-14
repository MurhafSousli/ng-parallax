import { Directive, Input, ElementRef, OnInit } from '@angular/core'
import { ParallaxService } from '../service/parallax.service'
import {ParallaxConfig} from "../helpers/parallax.interface";

@Directive({
	selector: '[parallax]'
})

export class ParallaxDirective implements OnInit {

	@Input() delay;
	@Input() observer;
	@Input() invert;
	@Input() ratio;
  @Input() ease;

	constructor(private el: ElementRef, private parallax: ParallaxService) {

	}

	ngOnInit() {
		let args: ParallaxConfig = {
      nativeElement: this.el.nativeElement,
      observerEvent: 'scroll',
      ratio: this.ratio,
			delay: this.delay,
      invert: this.invert,
      ease: this.ease
		};
		if(this.observer) args.observerElement = this.observer;
		this.parallax.getObservable(args).subscribe();
	}

}
