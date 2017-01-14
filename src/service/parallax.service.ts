import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

import {ParallaxConfig} from '../helpers/parallax.interface'
import {WindowService} from "./window.service";

@Injectable()
export class ParallaxService {

    defaultArgs;

    constructor(window: WindowService) {
        this.defaultArgs = {
            observer: window.nativeWindow,
            invert: false,
            ratio: .7,
            delay: 200
        };
    }

    getObservable(parallax: ParallaxConfig): Observable<any> {
        /** Stream values of a specific event from parent element
         * if parent is not specified, use window element */
        return Observable
            .fromEvent(parallax.observerElement, parallax.observerEvent)
            .delay(parallax.delay)
            .do((event) => {
                console.log(event);
            }).share();
    }


}