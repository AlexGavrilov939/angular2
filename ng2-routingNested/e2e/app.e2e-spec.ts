import { Ng2RoutingNestedPage } from './app.po';

describe('ng2-routing-nested App', () => {
  let page: Ng2RoutingNestedPage;

  beforeEach(() => {
    page = new Ng2RoutingNestedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
