import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

import {ParallaxConfig} from '../helpers/parallax.interface'
import {WindowService} from "./window.service";

@Injectable()
export class ParallaxService {

  defaultConfig;

  constructor(window: WindowService) {
    this.defaultConfig = {
      observerElement: window.nativeWindow,
      invert: false,
      ratio: .7,
      delay: 200
    };
  }

  getObservable(config: ParallaxConfig): Observable<any> {
    config = Object.assign({}, this.defaultConfig, config);
    console.log(config);
    /** Stream values of a specific event from parent element
     * if parent is not specified, use window element */
    return Observable
      .fromEvent(config.observerElement, config.observerEvent)
      .delay(config.delay)
      .do((event) => {
        console.log(event);
      }).share();
  }


}
