import { BlankPagexModule } from './blank-pagex.module';

describe('BlankPagexModule', () => {
    let blankPageModule: BlankPagexModule;

    beforeEach(() => {
        blankPageModule = new BlankPagexModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
