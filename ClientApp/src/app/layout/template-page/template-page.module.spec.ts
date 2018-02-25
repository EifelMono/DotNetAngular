import { TemplatePageModule } from './template-page.module';

describe('TemplatePageModule', () => {
    let templatePageModule: TemplatePageModule;

    beforeEach(() => {
        templatePageModule = new TemplatePageModule();
    });

    it('should create an instance', () => {
        expect(templatePageModule).toBeTruthy();
    });
});
