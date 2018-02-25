import { CounterPageModule } from './counter-page.module';

describe('CounterPageModule', () => {
    let counterPageModule: CounterPageModule;

    beforeEach(() => {
        counterPageModule = new CounterPageModule();
    });

    it('should create an instance', () => {
        expect(counterPageModule).toBeTruthy();
    });
});
