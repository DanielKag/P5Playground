import { P5PlaygroundPage } from './app.po';

describe('p5-playground App', function() {
  let page: P5PlaygroundPage;

  beforeEach(() => {
    page = new P5PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
