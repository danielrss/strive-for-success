import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo-component.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, DemoComponent]
        });
    });

    it('should work', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
