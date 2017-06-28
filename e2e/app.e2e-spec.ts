import { CarShopPage } from './app.po';

describe('car-shop App', () => {
  let page: CarShopPage;

  beforeEach(() => {
    page = new CarShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
