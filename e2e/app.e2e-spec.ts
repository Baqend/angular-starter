import { Angular4StarterPage } from './app.po';

describe('angular4-starter App', () => {
  let page: Angular4StarterPage;

  beforeEach(() => {
    page = new Angular4StarterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getFooterText()
      .then(msg => expect(msg).toContain('Angular + Baqend by'))
      .then(done, done.fail);
  });
});
