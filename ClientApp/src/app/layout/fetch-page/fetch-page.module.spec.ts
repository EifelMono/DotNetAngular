import { FetchPageModule } from './fetch-page.module';

describe('FetchPageModule', () => {
    let fetchPageModule: FetchPageModule;

    beforeEach(() => {
        fetchPageModule = new FetchPageModule();
    });

    it('should create an instance', () => {
        expect(fetchPageModule).toBeTruthy();
    });
});
