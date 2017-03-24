import { RoomLottoPage } from './app.po';

describe('room-lotto App', () => {
  let page: RoomLottoPage;

  beforeEach(() => {
    page = new RoomLottoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
