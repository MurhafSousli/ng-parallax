import { NgModule } from '@angular/core'
import { ParallaxDirective } from './directive/parallax.directive'
import { ParallaxService } from './service/parallax.service'
import { WindowService} from './service/window.service'

import "rxjs/add/operator/map"
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/catch"
import "rxjs/add/operator/do"
import "rxjs/add/operator/share"
import "rxjs/add/operator/delay"
import "rxjs/add/observable/fromEvent"
import "rxjs/add/observable/of"

@NgModule({
	declarations: [ParallaxDirective],
	providers: [WindowService, ParallaxService],
	exports: [ParallaxDirective]
})
export class ParallaxModule { }
