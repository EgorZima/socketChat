import { SocketChatPage } from './app.po';

describe('socket-chat App', () => {
  let page: SocketChatPage;

  beforeEach(() => {
    page = new SocketChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
