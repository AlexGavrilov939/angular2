import { Ng2HttpPage } from './app.po';

describe('ng2-http App', () => {
  let page: Ng2HttpPage;

  beforeEach(() => {
    page = new Ng2HttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
