import { Directive, Input, ElementRef, OnInit } from '@angular/core'

import { ParallaxService } from '../service/parallax.service'

@Directive({
	selector: '[parallax]'
})

export class ParallaxDirective implements OnInit {

	@Input() delay;
	@Input() type;
    
	constructor(private el: ElementRef, private parallax: ParallaxService) {

	}

	ngOnInit() {
		let parallaxArgs = {
			delay: this.delay,
			type: this.type,
		}
		this.parallax.getObservable(this.el.nativeElement, parallaxArgs).subscribe();
	}

}
