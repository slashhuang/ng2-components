
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
    selector: 'countdown-timer',
    template: '<p>{{message}}</p>'
})
class CountdownTimerComponent implements OnInit, OnDestroy {
    intervalId = 0;
    message = '';
    seconds = 11;
    clearTimer() { clearInterval(this.intervalId); }
    ngOnInit()    {
        debugger;
        this.start();
    }
    ngOnDestroy() { this.clearTimer(); }
    start() {
        debugger;
        this.countDown();
    }
    stop()  {
        debugger;
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }
    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}

import { AfterViewInit, ViewChild } from '@angular/core';
@Component({
    selector: 'countdown-parent-vc',
    directives:[CountdownTimerComponent],
    template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <countdown-timer></countdown-timer>
  `
})
export class TestDemo implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;
    seconds() { return 0; }
    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }
    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}
