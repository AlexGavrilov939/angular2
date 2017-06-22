import { Angular2InventoryPage } from './app.po';

describe('angular2-inventory App', () => {
  let page: Angular2InventoryPage;

  beforeEach(() => {
    page = new Angular2InventoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
