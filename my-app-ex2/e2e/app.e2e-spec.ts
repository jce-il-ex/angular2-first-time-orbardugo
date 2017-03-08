import { MyAppEx2Page } from './app.po';

describe('my-app-ex2 App', function() {
  let page: MyAppEx2Page;

  beforeEach(() => {
    page = new MyAppEx2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
