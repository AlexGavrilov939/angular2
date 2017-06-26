import { Ng2MusicSearchAppPage } from './app.po';

describe('ng2-music-search-app App', () => {
  let page: Ng2MusicSearchAppPage;

  beforeEach(() => {
    page = new Ng2MusicSearchAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
