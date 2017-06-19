import { BookBotWebPage } from './app.po';

describe('book-bot-web App', () => {
  let page: BookBotWebPage;

  beforeEach(() => {
    page = new BookBotWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
