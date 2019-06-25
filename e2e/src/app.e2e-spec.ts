import {AvalonPage} from './app.po';

describe('Avalon App', function () {
    let page: AvalonPage;

    beforeEach(() => {
        page = new AvalonPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Avalon!');
    });

});
