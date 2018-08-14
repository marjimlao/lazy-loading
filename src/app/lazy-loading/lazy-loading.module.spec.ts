import { LazyLoadingModule } from './lazy-loading.module';

describe('LazyLoadingModule', () => {
  let lazyLoadingModule: LazyLoadingModule;

  beforeEach(() => {
    lazyLoadingModule = new LazyLoadingModule();
  });

  it('should create an instance', () => {
    expect(lazyLoadingModule).toBeTruthy();
  });
});
