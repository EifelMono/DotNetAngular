import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPagexComponent } from './blank-pagex.component';

describe('BlankPagexComponent', () => {
    let component: BlankPagexComponent;
    let fixture: ComponentFixture<BlankPagexComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BlankPagexComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPagexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
