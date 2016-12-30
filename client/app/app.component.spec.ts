import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, NavigationComponent]
        });
    });

    it('should work', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
