import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPageComponent } from './fetch-page.component';

describe('FetchPageComponent', () => {
    let component: FetchPageComponent;
    let fixture: ComponentFixture<FetchPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [FetchPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FetchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
