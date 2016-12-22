import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
    });

    it('should work', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
