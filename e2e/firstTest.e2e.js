/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should have main view visible', async () => {
    const mainView = element(by.id('mainView'));
    const scrollView = element(by.id('mainScrollView'));
    await expect(mainView).toExist();
    // await scrollView.scrollTo('bottom');
    // await waitFor(element(by.id('learnMoreSection')))
    //   .toBeVisible()
    //   .whileElement(by.id('mainScrollView'))
    //   .scroll(50, 'down');
    await expect(mainView).toHaveLabel('Vue principale');
    await expect(element(by.text('Learn More'))).toExist();
  });

  it.skip('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
