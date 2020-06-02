import { AprendiendoAngularPage } from './app.po';

describe('aprendiendo-angular App', function() {
  let page: AprendiendoAngularPage;

  beforeEach(() => {
    page = new AprendiendoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
