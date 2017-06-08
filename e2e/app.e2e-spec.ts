import { Angular4StarterPage } from './app.po';

describe('angular4-starter App', () => {
  let page: Angular4StarterPage;

  beforeEach(() => {
    page = new Angular4StarterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
