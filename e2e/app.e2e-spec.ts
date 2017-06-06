import { AngularEinfuehrungPage } from './app.po';

describe('angular-einfuehrung App', () => {
  let page: AngularEinfuehrungPage;

  beforeEach(() => {
    page = new AngularEinfuehrungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
